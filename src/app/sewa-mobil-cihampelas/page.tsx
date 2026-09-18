import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Cihampelas";
const pagePath = "/sewa-mobil-cihampelas";
const title = `Sewa Mobil di Cihampelas Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Cihampelas Bandung dari RMB Rental. Armada terawat, harga bersahabat, bisa lepas kunci atau ber-supir. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilCihampelasPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Cihampelas terkenal sebagai surganya belanja jeans dan distro di Bandung. Jika Anda berencana berbelanja atau menjelajahi kawasan ini, menyewa mobil dari RMB adalah solusi terbaik untuk membawa banyak barang belanjaan dengan mudah dan aman.
      </p>
      <p>
        Kami menyediakan mobil dengan bagasi luas yang cocok untuk perjalanan belanja atau wisata keluarga di sekitar Cihampelas dan daerah sekitarnya.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Cihampelas:</h3>
      <ul>
        <li><strong>Mobil Bagasi Luas:</strong> MPV dan SUV dengan ruang bagasi memadai untuk belanjaan Anda.</li>
        <li><strong>Antar Jemput:</strong> Mobil diantar ke lokasi Anda di sekitar Cihampelas.</li>
        <li><strong>Harga Bersahabat:</strong> Tarif sewa kompetitif dengan fasilitas lengkap.</li>
        <li><strong>Unit Terawat:</strong> Semua mobil dalam kondisi prima dan nyaman dikendarai.</li>
      </ul>
    </SeoPageLayout>
  );
}