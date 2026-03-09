'use client';
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Gedung Sate";
const pagePath = "/rental-motor-gedung-sate";
const title = `Rental Motor Dekat Gedung Sate Bandung | RMB`;
const pageDescription = `Rental motor dekat Gedung Sate, Bandung. RMB menyediakan layanan praktis untuk Anda yang ingin mengunjungi ikon kota Bandung dan sekitarnya.`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function RentalMotorGedungSatePage() {
  return (
    <SeoPageLayout
      title={`Rental Motor Dekat ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Butuh rental motor dekat Gedung Sate? RMB adalah solusinya. Kami siap melayani Anda yang ingin menjelajahi ikon kota Bandung ini dan area sekitarnya seperti Lapangan Gasibu, Museum Geologi, atau Monumen Perjuangan Rakyat Jawa Barat.
      </p>
      <p>
        Dengan menyewa motor, Anda bisa mengambil foto-foto terbaik dari berbagai sudut tanpa pusing mencari parkir mobil yang seringkali penuh. Nikmati kemudahan dan fleksibilitas berkendara di jantung kota Bandung.
      </p>
      <h3>Manfaat Rental Motor di Area Gedung Sate:</h3>
      <ul>
        <li><strong>Foto-foto Terbaik:</strong> Berhenti dengan mudah di spot-spot foto terbaik di sekitar Gedung Sate.</li>
        <li><strong>Jelajahi Area Sekitar:</strong> Akses cepat ke Museum Geologi, Museum Pos, dan area pemerintahan lainnya.</li>
        <li><strong>Hindari Kemacetan:</strong> Bergerak lincah di sekitar Jalan Diponegoro dan jalan-jalan utama lainnya.</li>
        <li><strong>Layanan Praktis:</strong> Kami bisa mengatur titik temu yang nyaman bagi Anda di dekat area Gedung Sate.</li>
      </ul>
    </SeoPageLayout>
  );
}
