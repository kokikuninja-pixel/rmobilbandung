import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Lembang";
const pagePath = "/sewa-mobil-lembang";
const title = `Sewa Mobil di Lembang Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Lembang Bandung dengan mudah dari RMB Rental. Harga tanya admin, unit siap diambil lalu jelajahi Lembang sesuka hati. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilLembangPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Merencanakan wisata ke Lembang? Nikmati perjalanan dengan menyewa mobil dari RMB. Dengan mobil pribadi, Anda bisa lebih leluasa mengunjungi destinasi populer seperti Farmhouse, Floating Market, atau The Great Asia Africa tanpa perlu khawatir transportasi umum.
      </p>
      <p>
        Mobil SUV dan MPV tangguh kami siap menaklukkan jalanan menuju Lembang yang menantang. Unit siap diambil di lokasi kami, tanpa repot.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Lembang:</h3>
      <ul>
        <li><strong>Armada Tangguh:</strong> Tersedia mobil dengan tenaga besar untuk menaklukkan tanjakan Lembang.</li>
        <li><strong>Self-Drive:</strong> Ambil unit di lokasi kami, lalu jelajahi Lembang dengan bebas.</li>
        <li><strong>Harga Terbaik:</strong> Tarif sewa harian kompetitif untuk perjalanan wisata Lembang.</li>
        <li><strong>Lepas Kunci Tanpa Supir:</strong> Semua unit disewakan self-drive, cocok untuk mengeksplorasi jalur wisata Lembang dengan bebas.</li>
      </ul>
    </SeoPageLayout>
  );
}