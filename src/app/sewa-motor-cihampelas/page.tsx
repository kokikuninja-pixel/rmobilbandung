
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Cihampelas";
const pagePath = "/sewa-motor-cihampelas";
const title = `Sewa Motor Cihampelas & Rental Dekat Ciwalk Bandung | RMB`;
const pageDescription = `Sewa motor di Cihampelas untuk solusi anti macet. RMB Rental melayani antar jemput dekat Ciwalk, Teras Cihampelas, dan hotel sekitar. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMotorCihampelasPage() {
  return (
    <SeoPageLayout
      title={`Sewa Motor Anti Macet di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Terkenal dengan Teras Cihampelas (Skywalk) dan pusat perbelanjaan jeans, Cihampelas adalah area yang selalu ramai. Menyewa motor dari RMB adalah solusi cerdas untuk mobilitas anti-macet di sini. Kunjungi Cihampelas Walk (Ciwalk), berburu oleh-oleh, atau menjelajahi kuliner kaki lima dengan praktis dan efisien.
      </p>
      <p>
        Lupakan sulitnya mencari parkir mobil di akhir pekan. Dengan motor, Anda memiliki kebebasan untuk berhenti di mana saja dan menikmati setiap sudut Cihampelas.
      </p>
      <h3>Mengapa Sewa Motor di Cihampelas?</h3>
      <ul>
        <li><strong>Solusi Macet:</strong> Cihampelas adalah salah satu area paling padat di Bandung, motor adalah cara terbaik untuk melewatinya.</li>
        <li><strong>Mudah Parkir:</strong> Temukan tempat parkir dengan mudah bahkan di depan toko-toko kecil sekalipun.</li>
        <li><strong>Antar ke Hotel:</strong> Kami melayani pengantaran ke berbagai hotel dan penginapan di sepanjang Jalan Cihampelas.</li>
        <li><strong>Akses Cepat:</strong> Dari Cihampelas, Anda dapat dengan cepat menuju area Dago, Setiabudi, atau pusat kota.</li>
      </ul>
    </SeoPageLayout>
  );
}
