import Script from 'next/script';
import type { TagSettings } from '@/lib/tag-settings';

/**
 * Renders Google Analytics 4 + Google Ads (gtag.js).
 * Both share the same dataLayer, which is what GTM expects.
 */
export function GoogleTags({ ga4Id, adsId }: { ga4Id?: string; adsId?: string }) {
  if (!ga4Id && !adsId) return null;

  const measurementId = ga4Id ?? '';
  const adsIdValue = adsId ?? '';

  return (
    <>
      <Script
        id="google-tags-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${measurementId ? `gtag('config', '${measurementId}');` : ''}
            ${adsIdValue ? `gtag('config', '${adsIdValue}');` : ''}
          `,
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
          measurementId || adsIdValue,
        )}`}
        strategy="afterInteractive"
      />
    </>
  );
}
