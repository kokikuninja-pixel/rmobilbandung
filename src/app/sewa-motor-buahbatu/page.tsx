'use client';
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Buahbatu";
const pagePath = "/sewa-motor-buahbatu";
const title = `Sewa Motor Buahbatu & Rental Dekat Tol Buahbatu | RMB`;
const pageDescription = `Sewa motor di Buahbatu, Bandung. RMB melayani antar jemput dekat Gerbang Tol Buahbatu, Telkom University, dan sekitarnya. Pesan unit Anda sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMotorBuahbatuPage() {
  return (
    <SeoPageLayout
      title={`Sewa Motor di Area ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Berada di area Buahbatu atau baru keluar dari Gerbang Tol Buahbatu? RMB bisa langsung mengantarkan motor sewaan ke lokasi Anda. Ini adalah cara paling praktis untuk memulai petualangan Anda di Bandung, terutama jika Anda datang dari arah selatan.
      </p>
      <p>
        Area ini juga dekat dengan Telkom University, menjadikannya pilihan ideal bagi mahasiswa atau orang tua yang berkunjung. Layanan kami yang cepat dan efisien memastikan Anda tidak membuang waktu di jalan.
      </p>
      <h3>Sewa Motor di Buahbatu bersama RMB:</h3>
      <ul>
        <li><strong>Antar Dekat Tol:</strong> Kami bisa atur serah terima unit di dekat Gerbang Tol Buahbatu.</li>
        <li><strong>Layanan untuk Mahasiswa:</strong> Sangat ideal untuk mahasiswa Telkom University dan sekitarnya.</li>
        <li><strong>Akses Cepat ke Kota:</strong> Dari Buahbatu, Anda bisa dengan mudah mengakses pusat kota melalui Jalan Soekarno-Hatta atau Jalan Buahbatu.</li>
        <li><strong>Hemat Waktu:</strong> Langsung mulai perjalanan Anda tanpa harus ke pusat kota terlebih dahulu.</li>
      </ul>
    </SeoPageLayout>
  );
}
