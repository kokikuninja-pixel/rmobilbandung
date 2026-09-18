import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Lembang";
const pagePath = "/sewa-mobil-lembang";
const title = `Sewa Mobil di Lembang Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Lembang Bandung dengan mudah dari RMB Rental. Layanan antar jemput ke penginapan atau villa Anda. Pesan unit sekarang juga!`;

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
        Mobil SUV dan MPV tangguh kami siap menaklukkan jalanan menuju Lembang yang menantang. Dengan layanan antar-jemput, Anda tidak perlu repot ke garasi.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Lembang:</h3>
      <ul>
        <li><strong>Armada Tangguh:</strong> Tersedia mobil dengan tenaga besar untuk menaklukkan tanjakan Lembang.</li>
        <li><strong>Layanan Antar-Jemput:</strong> Kami antar mobil ke villa, hotel, atau penginapan Anda di Lembang.</li>
        <li><strong>Harga Terbaik:</strong> Tarif sewa harian kompetitif untuk perjalanan wisata Lembang.</li>
        <li><strong>Supir Berpengalaman:</strong> Pilihan paket dengan supir yang hafal jalur wisata Lembang.</li>
      </ul>
    </SeoPageLayout>
  );
}