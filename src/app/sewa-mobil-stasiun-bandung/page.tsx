import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Stasiun Bandung";
const pagePath = "/sewa-mobil-stasiun-bandung";
const title = `Sewa Mobil di Stasiun Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di dekat Stasiun Bandung dari RMB Rental. Antar jemput langsung ke stasiun, unit terawat siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilStasiunBandungPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Tiba di Stasiun Bandung dan butuh transportasi langsung? RMB melayani pengantaran mobil sewaan langsung ke stasiun atau lokasi terdekat. Dengan layanan antar jemput kami, Anda tidak perlu repot mencari transportasi umum setelah tiba di Bandung.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Stasiun Bandung:</h3>
      <ul>
        <li><strong>Antar Langsung ke Stasiun:</strong> Mobil diantar ke lokasi Anda sesaat setelah tiba di Bandung.</li>
        <li><strong>Proses Cepat:</strong> Konfirmasi pesanan cepat, unit langsung siap setelah pembayaran DP.</li>
        <li><strong>MPV & SUV:</strong> Pilihan mobil untuk perjalanan bisnis atau wisata dari stasiun.</li>
        <li><strong>Harga Terjangkau:</strong> Mulai dari Rp275.000/hari, cocok untuk perjalanan singkat atau panjang.</li>
      </ul>
    </SeoPageLayout>
  );
}