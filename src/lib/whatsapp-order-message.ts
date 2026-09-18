/**
 * Client-side WhatsApp order message builder.
 * Brand name is injected from the active brand config.
 */

import { getBrand } from '@/brands';

export type WhatsAppOrderMessageInput = {
  previousCustomer: 'yes' | 'no';
  name: string;
  phone: string;
  previousInvoice?: string;
  email?: string;
  ktpCity?: string;
  currentDomicile?: string;
  occupation?: string;
  workLocation?: string;
  bandungStayDuration?: string;
  socialMediaPlatform?: string;
  socialMediaUsername?: string;
  desiredMotor: string;
  rentalStartDate: string;
  rentalStartTime: string;
  rentalEndDate: string;
  rentalEndTime: string;
  unitCount: number;
  personCount: number;
  pickupMethod: 'garage' | 'delivery';
  deliveryAddress?: string;
  usagePurpose: string;
  destination: string;
  sourceOfInformation: string;
  domain?: string;
};

export function buildWhatsAppOrderMessage(input: WhatsAppOrderMessageInput): string {
  const brandName = getBrand().shortName;
  const isNewCustomer = input.previousCustomer === 'no';
  const lines: string[] = [
    `Halo Admin ${brandName}! 👋`,
    'Ada permintaan sewa baru.',
    '',
    `*Status Pelanggan*: ${isNewCustomer ? 'Pelanggan Baru' : 'Pelanggan Setia'}`,
  ];

  if (input.previousInvoice) {
    lines.push(`*No. Invoice Lama*: ${input.previousInvoice}`);
  }

  lines.push('');
  lines.push(`- Nama: *${input.name}*`);
  lines.push(`- No. WhatsApp: *${input.phone}*`);

  if (input.email) lines.push(`- Email: *${input.email}*`);
  if (input.ktpCity) lines.push(`- Kota Asal (KTP): *${input.ktpCity}*`);
  if (input.currentDomicile) lines.push(`- Domisili Sekarang: *${input.currentDomicile}*`);
  if (input.occupation) lines.push(`- Pekerjaan: *${input.occupation}*`);
  if (input.workLocation) lines.push(`- Lokasi Kerja: *${input.workLocation}*`);
  if (input.bandungStayDuration) lines.push(`- Lama di Bandung: *${input.bandungStayDuration}*`);
  if (input.socialMediaUsername) {
    const platform = input.socialMediaPlatform || 'Medsos';
    lines.push(`- Medsos (${platform}): *${input.socialMediaUsername}*`);
  }

  lines.push('');
  lines.push(`- Unit Mobil: *${input.desiredMotor}*`);
  lines.push(`- Waktu Mulai: *${input.rentalStartDate} jam ${input.rentalStartTime}*`);
  lines.push(`- Waktu Selesai: *${input.rentalEndDate} jam ${input.rentalEndTime}*`);
  lines.push(`- Jumlah Unit: *${input.unitCount} unit*`);
  lines.push(`- Jumlah Orang: *${input.personCount} orang*`);
  lines.push('');

  const pickupLabel =
    input.pickupMethod === 'delivery' ? 'Antar ke Alamat' : 'Ambil di Garasi';
  lines.push(`- Metode Pengambilan: *${pickupLabel}*`);
  if (input.deliveryAddress) {
    lines.push(`- Alamat Antar: *${input.deliveryAddress}*`);
  }

  lines.push(`- Kebutuhan: *${input.usagePurpose}*`);
  lines.push(`- Tujuan Lokasi: *${input.destination}*`);
  lines.push('');
  lines.push(`- Tahu dari: *${input.sourceOfInformation}*`);

  if (input.domain) {
    lines.push('');
    lines.push('---');
    lines.push(`_Pesan ini dikirim melalui domain: ${input.domain}_`);
  }

  lines.push('');
  lines.push(
    'Mohon segera diproses dan konfirmasi ketersediaan unitnya, min. Terima kasih!'
  );

  return lines.join('\n');
}
