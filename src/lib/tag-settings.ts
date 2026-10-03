/**
 * Runtime tag configuration.
 *
 * Resolution order (first non-empty wins):
 *   1. Env vars        — production source of truth, set in Vercel.
 *   2. Saved settings  — written by the admin panel, stored in a signed cookie.
 *   3. Brand defaults  — fallback so the site never ships without tags.
 *
 * The admin panel writes to a signed cookie because this project deploys as a
 * static Next.js app with no database. For changes to apply to *every*
 * visitor, set the env vars in Vercel (the panel shows the exact snippet).
 */

export const TAG_SETTINGS_COOKIE = 'rmb_tag_settings';
const SETTINGS_TTL_SECONDS = 60 * 60 * 24 * 365;

export type TagSettings = {
  gtmId: string;
  ga4Id: string;
  adsId: string;
  /** conversion label for WhatsApp / form submissions, e.g. "AbC-D_efGh" */
  conversionLabel: string;
};

export const emptyTagSettings: TagSettings = {
  gtmId: '',
  ga4Id: '',
  adsId: '',
  conversionLabel: '',
};

/** Trim and normalise IDs coming from a form. */
export function sanitizeTagSettings(input: Partial<TagSettings>): TagSettings {
  const clean = (value: unknown, pattern: RegExp): string => {
    if (typeof value !== 'string') return '';
    const trimmed = value.trim();
    return pattern.test(trimmed) ? trimmed : '';
  };

  return {
    gtmId: clean(input.gtmId, /^GTM-[A-Z0-9]{4,10}$/i),
    ga4Id: clean(input.ga4Id, /^G-[A-Z0-9]{4,12}$/i),
    adsId: clean(input.adsId, /^AW-\d{6,14}$/),
    conversionLabel: clean(input.conversionLabel, /^[A-Za-z0-9_-]{5,20}$/),
  };
}

/** Env vars are the production source of truth. */
export function getTagSettingsFromEnv(): Partial<TagSettings> {
  return {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() || '',
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID?.trim() || '',
    adsId: process.env.NEXT_PUBLIC_ADS_ID?.trim() || '',
    conversionLabel: process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL?.trim() || '',
  };
}

/** Final values used by the layout to render tags. */
export function resolveTagSettings(saved: Partial<TagSettings> | null | undefined): TagSettings {
  const fromEnv = getTagSettingsFromEnv();
  return {
    gtmId: fromEnv.gtmId || saved?.gtmId || '',
    ga4Id: fromEnv.ga4Id || saved?.ga4Id || '',
    adsId: fromEnv.adsId || saved?.adsId || '',
    conversionLabel: fromEnv.conversionLabel || saved?.conversionLabel || '',
  };
}

export const tagSettingsCookieOptions = {
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: SETTINGS_TTL_SECONDS,
};
