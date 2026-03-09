'use client';
import SeoPageLayout, { generateSeoMetadata } from '@/components/seo-page-layout';
import type { Metadata } from 'next';

const locationName = "Braga";
const pagePath = "/sewa-motor-braga";
const title = `Sewa Motor Braga & Rental Dekat Jalan Braga Bandung | RMB`;
const pageDescription = `Nikmati suasana historis Jalan Braga dengan sewa motor dari RMB. Layanan rental praktis dan cepat di pusat kota Bandung. Pesan dan jelajahi sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMotorBragaPage() {
  return (
    <SeoPageLayout
      title={`Sewa Motor Praktis di Area ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Rasakan nuansa historis Jalan Braga dengan cara terbaik: menggunakan motor. RMB Rental Motor Bandung menyediakan layanan sewa motor yang praktis di area Braga dan sekitarnya. Ini adalah cara sempurna untuk menjelajahi setiap sudut jalan ikonik ini tanpa pusing memikirkan parkir.
      </p>
      <p>
        Kunjungi Kopi Toko Djawa, jelajahi gedung-gedung tua dengan arsitektur Art Deco, atau nikmati kehidupan malam di pusat kota Bandung dengan fleksibilitas penuh. Kami siap mendukung mobilitas Anda.
      </p>
      <h3>Sewa Motor di Braga dengan RMB:</h3>
      <ul>
        <li><strong>Akses Mudah:</strong> Posisi strategis kami memudahkan layanan di area Braga dan pusat kota.</li>
        <li><strong>Fleksibilitas Tinggi:</strong> Parkir dan bergerak di jalanan Braga yang terkadang padat menjadi lebih mudah.</li>
        <li><strong>Proses Cepat:</strong> Booking mudah melalui WhatsApp, motor siap Anda gunakan untuk berkeliling.</li>
        <li><strong>Jelajahi Sekitar:</strong> Dari Braga, Anda bisa dengan mudah menjangkau Alun-Alun Bandung, Jalan Asia Afrika, dan area kuliner lainnya.</li>
      </ul>
    </SeoPageLayout>
  );
}
