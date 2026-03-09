'use client';
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Setiabudi";
const pagePath = "/rental-motor-setiabudi";
const title = `Rental Motor Setiabudi Bandung | Sewa Harian Murah | RMB`;
const pageDescription = `Butuh rental motor di Jalan Setiabudi, Bandung? RMB melayani antar jemput unit ke hotel atau kampus Anda. Solusi anti macet untuk area Setiabudi.`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function RentalMotorSetiabudiPage() {
  return (
    <SeoPageLayout
      title={`Rental Motor Cepat di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Kawasan Setiabudi adalah gerbang menuju Lembang sekaligus pusat kuliner dan fashion. Dengan menyewa motor dari RMB, Anda bisa dengan mudah mengunjungi Rumah Mode, menikmati makanan lezat di sepanjang jalan, atau melanjutkan perjalanan ke Lembang tanpa terjebak macet.
      </p>
      <p>
        Kami melayani antar-jemput di area Setiabudi, termasuk ke Universitas Pendidikan Indonesia (UPI) dan hotel-hotel di sekitarnya. Jadikan perjalanan Anda lebih efisien dan menyenangkan.
      </p>
      <h3>Keuntungan Rental Motor di Setiabudi dengan RMB:</h3>
      <ul>
        <li><strong>Anti Macet:</strong> Jalan Setiabudi seringkali padat, motor adalah solusi terbaik untuk mobilitas.</li>
        <li><strong>Antar ke Lokasi:</strong> Kami siap mengantar unit ke hotel, kost, atau kampus Anda di area Setiabudi.</li>
        <li><strong>Akses ke Lembang:</strong> Posisi strategis untuk Anda yang ingin melanjutkan perjalanan ke destinasi wisata Lembang.</li>
        <li><strong>Tarif Mahasiswa:</strong> Harga kompetitif yang cocok untuk kantong mahasiswa dan wisatawan.</li>
      </ul>
    </SeoPageLayout>
  );
}
