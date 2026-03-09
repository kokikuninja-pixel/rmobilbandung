
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Lembang";
const pagePath = "/rental-motor-lembang";
const title = `Rental & Sewa Motor di Lembang Bandung | RMB`;
const pageDescription = `Jelajahi Lembang tanpa macet dengan rental motor dari RMB Bandung. Layanan antar jemput ke penginapan atau villa Anda. Pesan unit sekarang juga!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function RentalMotorLembangPage() {
  return (
    <SeoPageLayout
      title={`Rental & Sewa Motor di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Merencanakan liburan ke Lembang? Hindari macet dan nikmati udara sejuk dengan menyewa motor dari RMB. Kami menyediakan solusi transportasi yang praktis dan efisien untuk Anda yang ingin menjelajahi berbagai destinasi wisata populer seperti Farmhouse, Floating Market, atau The Great Asia Africa.
      </p>
      <p>
        Dengan layanan antar-jemput kami, Anda tidak perlu repot. Kami bisa mengantarkan motor sewaan langsung ke villa, hotel, atau penginapan Anda di Lembang, sehingga Anda bisa langsung memulai petualangan Anda.
      </p>
      <h3>Keunggulan Rental Motor RMB di Lembang:</h3>
      <ul>
        <li><strong>Praktis & Efisien:</strong> Hindari kemacetan khas Lembang, terutama saat akhir pekan.</li>
        <li><strong>Layanan Antar-Jemput:</strong> Kami antarkan motor ke lokasi Anda di Lembang untuk kemudahan maksimal.</li>
        <li><strong>Motor Tangguh:</strong> Armada kami siap untuk menaklukkan tanjakan dan jalanan Lembang yang menantang.</li>
        <li><strong>Harga Terbaik:</strong> Nikmati tarif sewa yang kompetitif dengan fasilitas lengkap (helm, jas hujan).</li>
      </ul>
    </SeoPageLayout>
  );
}
