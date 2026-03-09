
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Dago";
const pagePath = "/sewa-motor-dago";
const title = `Sewa Motor Dago & Rental Motor Harian di Dago Bandung | RMB`;
const pageDescription = `Cari sewa motor di Dago, Bandung? RMB Rental menyediakan layanan antar jemput unit ke hotel, kafe, atau lokasi Anda di Dago. Pesan sekarang untuk tarif terbaik!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMotorDagoPage() {
  return (
    <SeoPageLayout
      title={`Sewa & Rental Motor di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Menjelajahi kawasan Dago yang ikonik di Bandung kini lebih mudah dengan layanan sewa motor dari RMB. Baik Anda ingin nongkrong di kafe-kafe hits di Dago Atas, berbelanja di factory outlet sepanjang Jalan Ir. H. Juanda, atau mengunjungi Dago Dreampark, kami siap mengantarkan motor matic pilihan Anda langsung ke lokasi.
      </p>
      <p>
        Kami menawarkan proses booking yang cepat via WhatsApp, unit motor yang terawat, dan harga yang kompetitif. Lupakan macet dan nikmati kebebasan berkendara di salah satu area paling populer di Bandung.
      </p>
      <h3>Kenapa Memilih RMB untuk Sewa Motor di Dago?</h3>
      <ul>
        <li><strong>Antar-Jemput Fleksibel:</strong> Kami bisa antar motor ke hotel, penginapan, atau titik pertemuan di area Dago.</li>
        <li><strong>Armada Terawat:</strong> Semua motor kami dalam kondisi prima untuk menjamin keamanan dan kenyamanan Anda.</li>
        <li><strong>Harga Transparan:</strong> Tidak ada biaya tersembunyi. Harga sewa motor di Dago mulai dari 60rb-an per hari.</li>
        <li><strong>Layanan Pelanggan Responsif:</strong> Tim kami siap membantu Anda dari proses pemesanan hingga pengembalian unit.</li>
      </ul>
    </SeoPageLayout>
  );
}
