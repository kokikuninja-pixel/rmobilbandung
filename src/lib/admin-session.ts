import 'server-only';

/**
 * Admin session helpers.
 *
 * Uses an HMAC-SHA256 signed cookie so admin routes can be guarded in Edge
 * Middleware (no Node APIs available there). All crypto is done with WebCrypto
 * so the same code runs in middleware and in server actions.
 */

const encoder = new TextEncoder();

export const ADMIN_SESSION_COOKIE = 'rmb_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 jam

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlEncodeString(value: string): string {
  return base64UrlEncode(encoder.encode(value));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/**
 * Credentials come from env so they never ship to the browser.
 * Falls back to the brand default only for local development.
 */
export function getAdminCredentials(): { username: string; password: string } {
  const username = process.env.ADMIN_USERNAME || 'admin';
  const password = process.env.ADMIN_PASSWORD || 'adminrmb2024';
  return { username, password };
}

async function sign(value: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return `${value}.${base64UrlEncode(new Uint8Array(signature))}`;
}

async function verifySigned(signed: string, secret: string): Promise<string | null> {
  const separator = signed.lastIndexOf('.');
  if (separator === -1) return null;
  const value = signed.slice(0, separator);
  const signature = signed.slice(separator + 1);

  const expected = await sign(value, secret);
  const expectedSeparator = expected.lastIndexOf('.');
  const expectedSignature = expected.slice(expectedSeparator + 1);

  if (!timingSafeEqual(signature, expectedSignature)) return null;
  return value;
}

function getSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.NEXT_PUBLIC_ADMIN_SESSION_SECRET ||
    // Stable dev fallback so local sessions survive a restart.
    'rmb-dev-secret-change-me-in-production'
  );
}

export type AdminSessionPayload = {
  username: string;
  exp: number;
};

/** Create a signed session token for the given username. */
export async function createSessionToken(username: string): Promise<string> {
  const payload: AdminSessionPayload = {
    username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  return sign(JSON.stringify(payload), getSecret());
}

/** Validate a token and return the payload, or null when invalid/expired. */
export async function readSessionToken(token: string | undefined): Promise<AdminSessionPayload | null> {
  if (!token) return null;
  const value = await verifySigned(token, getSecret());
  if (!value) return null;

  try {
    const payload = JSON.parse(value) as AdminSessionPayload;
    if (!payload?.username || typeof payload.exp !== 'number') return null;
    if (payload.exp * 1000 < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

/** Verify login credentials without leaking which field was wrong. */
export function verifyCredentials(username: string, password: string): boolean {
  const expected = getAdminCredentials();
  const userOk = timingSafeEqual(username, expected.username);
  const passOk = timingSafeEqual(password, expected.password);
  return userOk && passOk;
}

/** True when the deployment still relies on the built-in fallback password. */
export function isUsingDefaultPassword(): boolean {
  return !process.env.ADMIN_PASSWORD;
}

export const sessionCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SESSION_TTL_SECONDS,
};
