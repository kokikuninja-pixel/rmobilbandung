import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Dago";
const pagePath = "/sewa-mobil-dago";
const title = `Sewa Mobil di Dago Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Dago Bandung dengan mudah dari RMB Rental. Tersedia berbagai pilihan mobil terawat untuk menjelajahi Dago dan sekitarnya. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilDagoPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Dago merupakan salah satu kawasan favorit di Bandung yang terkenal dengan restoran, kafe, dan tempat wisata yang beragam. Dengan menyewa mobil dari RMB, Anda bisa menjelajahi seluruh sudut Dago dengan nyaman tanpa khawatir kemacetan atau kehabisan transportasi.
      </p>
      <p>
        Kami menyediakan berbagai pilihan mobil MPV keluarga, SUV tangguh, hingga MPV premium yang siap menemani perjalanan Anda di sekitar Dago dan sekitarnya.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Dago:</h3>
      <ul>
        <li><strong>Praktis & Nyaman:</strong> Mobil terawat dan siap pakai untuk perjalanan di area Dago.</li>
        <li><strong>Layanan Antar-Jemput:</strong> Mobil bisa diantar langsung ke penginapan atau lokasi Anda di Dago.</li>
        <li><strong>Harga Bersahabat:</strong> Tarif kompetitif mulai dari Rp300.000/hari tanpa biaya tersembunyi.</li>
        <li><strong>Lepas Kunci:</strong> Semua unit disewakan tanpa supir (self-drive), bebas mengemudi sendiri sesuai kebutuhan Anda.</li>
      </ul>
    </SeoPageLayout>
  );
}