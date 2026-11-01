'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackConversion, trackEvent } from '@/lib/track';
import { getAdsId } from '@/brands';
import { getCarWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** Unit yang ditanyakan, mis. "Toyota Avanza". Kosong = pertanyaan umum. */
  unit?: string;
  /** Letak tombol, dikirim sebagai parameter event (mis. "hero", "floating"). */
  location: string;
  children: ReactNode;
}

/**
 * Link WhatsApp yang mencatat tiap klik sebagai event "klik_whatsapp"
 * (dataLayer/GTM + GA4). Jadikan event ini konversi "Klik WhatsApp" di Google Ads / GA4.
 */
export function WhatsAppLink({ unit, location, children, onClick, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      {...rest}
      href={getCarWhatsAppLink(unit)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        onClick?.(e);
        // Konversi langsung ke Google Ads bila label diset (AW-ID/LABEL dari Goals → Conversions).
        const label = process.env.NEXT_PUBLIC_ADS_WA_CONVERSION_LABEL;
        if (label) trackConversion(`${getAdsId()}/${label}`);
        trackEvent('klik_whatsapp', {
          conversion_name: 'Klik WhatsApp',
          button_location: location,
          car_type: unit ?? 'umum',
          page_path: window.location.pathname,
        });
      }}
    >
      {children}
    </a>
  );
}
