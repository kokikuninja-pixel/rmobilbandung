import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Bandara Husein Sastranegara";
const pagePath = "/sewa-mobil-bandara-husein";
const title = `Sewa Mobil di Bandara Husein Sastranegara Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Bandara Husein Sastranegara Bandung dari RMB Rental. Harga tanya admin, lokasi pengambilan mudah dijangkau dari bandara, unit terawat dan siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilBandaraHuseinPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Bandara Husein Sastranegara adalah pintu masuk udara utama ke Bandung. Lokasi pengambilan unit kami mudah dijangkau dari bandara, sehingga Anda bisa langsung melanjutkan perjalanan tanpa menunggu lama.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Bandara Husein:</h3>
      <ul>
        <li><strong>Dekat Bandara:</strong> Lokasi pengambilan unit mudah dijangkau dari Bandara Husein Sastranegara.</li>
        <li><strong>Konfirmasi Cepat:</strong> Konfirmasi unit via WhatsApp cepat setelah pembayaran DP.</li>
        <li><strong>Pilihan Mobil Lengkap:</strong> City car untuk perjalanan ringan hingga MPV besar untuk rombongan.</li>
        <li><strong>Dukungan 24/7:</strong> Kami siap melayani Anda kapan pun tiba di Bandung.</li>
      </ul>
    </SeoPageLayout>
  );
}