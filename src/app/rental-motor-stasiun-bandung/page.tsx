
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Stasiun Bandung";
const pagePath = "/rental-motor-stasiun-bandung";
const title = `Rental Motor Stasiun Bandung & Sewa Dekat Stasiun Hall | RMB`;
const pageDescription = `Tiba di Stasiun Bandung? Rental motor langsung dari RMB. Layanan antar jemput praktis di Pintu Utara & Selatan. Hindari calo, pesan online sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function RentalMotorStasiunBandungPage() {
  return (
    <SeoPageLayout
      title={`Rental Motor Praktis di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Tiba di Stasiun Bandung dan butuh transportasi yang cepat dan praktis? RMB menyediakan layanan antar-jemput motor langsung di area stasiun. Tidak perlu repot tawar-menawar dengan ojek atau taksi, motor sewaan Anda sudah siap menanti untuk langsung menjelajahi Bandung.
      </p>
      <p>
        Kami melayani penjemputan baik di Pintu Utara (Jl. Kebon Kawung) maupun Pintu Selatan (Jl. Stasiun Timur). Cukup informasikan jadwal kedatangan kereta Anda, dan tim kami akan siap di lokasi.
      </p>
      <h3>Keunggulan Rental Motor di Stasiun Bandung bersama RMB:</h3>
      <ul>
        <li><strong>Hemat Waktu:</strong> Langsung berangkat dari stasiun tanpa menunggu transportasi lain.</li>
        <li><strong>Aman & Terpercaya:</strong> Hindari calo dan dapatkan unit motor yang terjamin kualitasnya.</li>
        <li><strong>Antar-Jemput di Pintu Stasiun:</strong> Kami fleksibel melayani di Pintu Utara maupun Pintu Selatan.</li>
        <li><strong>Harga Pasti:</strong> Pesan online dan dapatkan harga sewa yang transparan tanpa biaya tambahan tersembunyi.</li>
      </ul>
    </SeoPageLayout>
  );
}
