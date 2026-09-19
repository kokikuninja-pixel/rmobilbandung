import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Buahbatu";
const pagePath = "/sewa-mobil-buahbatu";
const title = `Sewa Mobil di Buahbatu Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Buahbatu Bandung dari RMB Rental. Harga tanya admin via WhatsApp, unit terawat dan siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilBuahbatuPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Buahbatu atau Buah Batu merupakan kawasan modern di Bandung yang dikenal dengan pusat perbelanjaan, tempat hiburan, dan akses mudah menuju berbagai destinasi wisata di selatan Bandung. Dengan menyewa mobil dari RMB, perjalanan Anda jauh lebih fleksibel dan nyaman.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Buahbatu:</h3>
      <ul>
        <li><strong>Akses Mudah:</strong> Lokasi pengambilan unit mudah dijangkau dari Buahbatu.</li>
        <li><strong>Mobil MPV Keluarga:</strong> Pilihan Avanza, Calya, dan Sigra untuk perjalanan nyaman.</li>
        <li><strong>Harga Transparan:</strong> Biaya sewa jelas tanpa biaya tersembunyi.</li>
        <li><strong>Dukungan 24/7:</strong> Bantuan darurat di jalan tersedia kapan saja.</li>
      </ul>
    </SeoPageLayout>
  );
}