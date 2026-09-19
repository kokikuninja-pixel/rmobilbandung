import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Setiabudi";
const pagePath = "/sewa-mobil-setiabudi";
const title = `Sewa Mobil di Setiabudi Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Setiabudi Bandung dari RMB Rental. Harga terjangkau mulai 300rb/hari, unit terawat dan siap pakai. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilSetiabudiPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Setiabudi merupakan kawasan utama Bandung yang dikenal sebagai pusat belanja dan kuliner. Dengan menyewa mobil dari RMB, Anda bisa dengan mudah menjelajahi seluruh area Setiabudi dan sekitarnya tanpa batasan transportasi umum.
      </p>
      <p>
        Tersedia berbagai pilihan mobil untuk kebutuhan Anda, mulai dari city car yang lincah hingga MPV besar untuk perjalanan rombongan atau keluarga.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Setiabudi:</h3>
      <ul>
        <li><strong>Akses Mudah:</strong> Mobil bisa diantar langsung ke lokasi Anda di Setiabudi.</li>
        <li><strong>Armada Lengkap:</strong> Pilihan mobil sesuai kebutuhan: irit, lega, atau premium.</li>
        <li><strong>Harga Kompetitif:</strong> Mulai dari Rp300.000/hari untuk mobil irit kota.</li>
        <li><strong>Flexible Duration:</strong> Sewa harian, mingguan, atau bulanan dengan harga khusus.</li>
      </ul>
    </SeoPageLayout>
  );
}