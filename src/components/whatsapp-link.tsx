'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '@/lib/track';
import { getCarWhatsAppLink } from '@/lib/whatsapp';

interface WhatsAppLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
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
export function WhatsAppLink({ unit, location, children, ...rest }: WhatsAppLinkProps) {
  return (
    <a
      {...rest}
      href={getCarWhatsAppLink(unit)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent('klik_whatsapp', {
          conversion_name: 'Klik WhatsApp',
          button_location: location,
          car_type: unit ?? 'umum',
          page_path: window.location.pathname,
        })
      }
    >
      {children}
    </a>
  );
}
