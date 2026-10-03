'use server';

import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  ADMIN_SESSION_COOKIE,
  createSessionToken,
  sessionCookieOptions,
  verifyCredentials,
} from '@/lib/admin-session';
import {
  TAG_SETTINGS_COOKIE,
  sanitizeTagSettings,
  tagSettingsCookieOptions,
  type TagSettings,
} from '@/lib/tag-settings';

export type ActionState = {
  error?: string;
  success?: string;
};

/** Naive in-memory throttle to slow brute-force attempts. */
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 10 * 60 * 1000;

function checkThrottle(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX_ATTEMPTS;
}

function clearThrottle(key: string) {
  attempts.delete(key);
}

export async function loginAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const headerList = await headers();
  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headerList.get('x-real-ip') ||
    'unknown';

  if (!checkThrottle(ip)) {
    return {
      error: 'Terlalu banyak percobaan login. Coba lagi dalam 10 menit.',
    };
  }

  const username = String(formData.get('username') ?? '');
  const password = String(formData.get('password') ?? '');
  const nextPath = String(formData.get('next') ?? '/admin/dashboard');

  if (!verifyCredentials(username, password)) {
    return { error: 'Username atau password salah.' };
  }

  clearThrottle(ip);

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, await createSessionToken(username), sessionCookieOptions);

  // Only allow same-site relative redirects.
  const safeNext = nextPath.startsWith('/admin') ? nextPath : '/admin/dashboard';
  redirect(safeNext);
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect('/admin/login');
}

export async function saveTagSettingsAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  // Defensive: middleware already guards this, but never trust that alone.
  if (!token) return { error: 'Sesi tidak valid. Silakan login kembali.' };

  const settings = sanitizeTagSettings({
    gtmId: String(formData.get('gtmId') ?? ''),
    ga4Id: String(formData.get('ga4Id') ?? ''),
    adsId: String(formData.get('adsId') ?? ''),
    conversionLabel: String(formData.get('conversionLabel') ?? ''),
  });

  const submitted = {
    gtmId: String(formData.get('gtmId') ?? '').trim(),
    ga4Id: String(formData.get('ga4Id') ?? '').trim(),
    adsId: String(formData.get('adsId') ?? '').trim(),
    conversionLabel: String(formData.get('conversionLabel') ?? '').trim(),
  };

  const invalid: string[] = [];
  if (submitted.gtmId && !settings.gtmId) invalid.push('GTM ID harus format GTM-XXXXXXX');
  if (submitted.ga4Id && !settings.ga4Id) invalid.push('GA4 ID harus format G-XXXXXXXXXX');
  if (submitted.adsId && !settings.adsId) invalid.push('Ads ID harus format AW-123456789');
  if (submitted.conversionLabel && !settings.conversionLabel)
    invalid.push('Conversion label format tidak valid');

  if (invalid.length) return { error: invalid.join('. ') };

  cookieStore.set(TAG_SETTINGS_COOKIE, JSON.stringify(settings), tagSettingsCookieOptions);

  return { success: 'Pengaturan tag tersimpan di browser ini.' };
}

export async function resetTagSettingsAction(): Promise<ActionState> {
  const cookieStore = await cookies();
  cookieStore.delete(TAG_SETTINGS_COOKIE);
  return { success: 'Pengaturan browser direset, kembali ke nilai env/default.' };
}

export async function getSavedTagSettings(): Promise<TagSettings> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(TAG_SETTINGS_COOKIE)?.value;
  if (!raw) {
    return { gtmId: '', ga4Id: '', adsId: '', conversionLabel: '' };
  }
  try {
    return sanitizeTagSettings(JSON.parse(raw));
  } catch {
    return { gtmId: '', ga4Id: '', adsId: '', conversionLabel: '' };
  }
}
