import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Bandara Husein Sastranegara";
const pagePath = "/sewa-mobil-bandara-husein";
const title = `Sewa Mobil di Bandara Husein Sastranegara Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Bandara Husein Sastranegara Bandung dari RMB Rental. Antar jemput langsung ke bandara, unit terawat dan siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilBandaraHuseinPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Bandara Husein Sastranegara adalah pintu masuk udara utama ke Bandung. Jika Anda tiba melalui bandara ini, RMB siap mengantar mobil sewaan langsung ke lokasi penjemputan Anda. Tidak perlu repot mencari taksi atau transportasi online, mobil terawat sudah menunggu.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Bandara Husein:</h3>
      <ul>
        <li><strong>Antar Jemput Bandara:</strong> Mobil diantar langsung ke bandara sesuai jadwal penerbangan Anda.</li>
        <li><strong>Konfirmasi Cepat:</strong> Konfirmasi unit via WhatsApp cepat setelah pembayaran DP.</li>
        <li><strong>Pilihan Mobil Lengkap:</strong> City car untuk perjalanan ringan hingga MPV besar untuk rombongan.</li>
        <li><strong>Dukungan 24/7:</strong> Kami siap melayani Anda kapan pun tiba di Bandung.</li>
      </ul>
    </SeoPageLayout>
  );
}