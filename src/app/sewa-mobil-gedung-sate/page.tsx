import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Gedung Sate";
const pagePath = "/sewa-mobil-gedung-sate";
const title = `Sewa Mobil di Gedung Sate Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Gedung Sate Bandung dari RMB Rental. Harga tanya admin, armada terbaik dan unit siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilGedungSatePage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Gedung Sate merupakan ikon bersejarah Bandung yang terletak di kawasan strategis. Dari sini, Anda bisa dengan mudah mengakses berbagai destinasi wisata, restoran, dan kampus ternama di Bandung. Menyewa mobil dari RMB memberikan kebebasan untuk menjelajahi seluruh kota dari lokasi ini.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Gedung Sate:</h3>
      <ul>
        <li><strong>Lokasi Strategis:</strong> Mudah diakses dari kawasan Gedung Sate untuk pengambilan unit.</li>
        <li><strong>Mobil Irit Bahan Bakar:</strong> Pilihan MPV irit untuk perjalanan dalam kota.</li>
        <li><strong>Lepas Kunci Tanpa Supir:</strong> Semua unit disewakan self-drive, bebas di kendarai sendiri ke seluruh jalur Bandung.</li>
        <li><strong>Proses Mudah:</strong> Cukup chat WhatsApp, unit siap diambil di lokasi kami.</li>
      </ul>
    </SeoPageLayout>
  );
}