import { buildWhatsAppUrl, getWhatsAppNumber } from '@/brands';

/** Kode sumber yang mengawali setiap pesan WhatsApp dari iklan mobil. */
export const ADS_SOURCE_TAG = '[ADS-MOBIL]';

/** Pesan otomatis: "[ADS-MOBIL] Halo RMB, saya mau sewa <unit> untuk tanggal ... sampai ..." */
export function buildCarInquiryMessage(unit?: string): string {
  return `${ADS_SOURCE_TAG} Halo RMB, saya mau sewa ${unit ?? '[unit]'} untuk tanggal ... sampai ...`;
}

/** Nomor mobil: +62 811-2191-9121 (brand config, bisa dioverride NEXT_PUBLIC_WHATSAPP_NUMBER_MOBIL). */
export function getCarWhatsAppLink(unit?: string): string {
  return buildWhatsAppUrl(getWhatsAppNumber(), buildCarInquiryMessage(unit));
}
