/**
 * Client-side tracking helpers.
 *
 * Every function is a no-op when the tag is not configured, so callers can
 * fire events unconditionally without guards.
 */

type GtagArgs = [command: string, ...rest: unknown[]];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

function gtag(...args: GtagArgs): void {
  const g = window.gtag;
  if (typeof g === 'function') {
    g(...args);
    return;
  }
  // gtag.js hanya memproses objek `arguments`, bukan array biasa.
  window.dataLayer = window.dataLayer || [];
  (function (..._: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  })(...args);
}

/** Fires a Google Ads / GA4 conversion event. */
export function trackConversion(
  label: string,
  value?: number,
  currency?: string,
): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  if (value !== undefined && currency) {
    gtag('event', 'conversion', { send_to: label, value, currency });
  } else {
    gtag('event', 'conversion', { send_to: label });
  }
}

/** Generic event for GA4 / GTM (e.g. button clicks, form steps). */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  gtag('event', name, params);
}
