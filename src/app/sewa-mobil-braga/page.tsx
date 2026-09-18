import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Braga";
const pagePath = "/sewa-mobil-braga";
const title = `Sewa Mobil di Braga Bandung | RMB Rental`;
const pageDescription = `Sewa mobil di Braga Bandung dengan mudah dari RMB Rental. Armada terawat mulai dari Rp275rb/hari. Pesan sekarang!`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMobilBragaPage() {
  return (
    <SeoPageLayout
      title={`Sewa Mobil di ${locationName}`}
      locationName={locationName}
      description={pageDescription}
    >
      <p>
        Jalan Braga merupakan salah satu destinasi paling ikonik di Bandung dengan arsitektur kuno Eropa dan berbagai restoran serta kafe unik. Menyewa mobil dari RMB memungkinkan Anda menjelajahi kawasan bersejarah ini dengan nyaman, lalu melanjutkan ke destinasi lain di Bandung.
      </p>
      <p>
        Kami melayani pengantaran mobil langsung ke hotel atau penginapan di sekitar Braga, sehingga Anda bisa langsung memulai perjalanan tanpa repot.
      </p>
      <h3>Keunggulan Sewa Mobil RMB di Braga:</h3>
      <ul>
        <li><strong>Lokasi Strategis:</strong> Mudah dijangkau dari kawasan Braga untuk pengambilan unit.</li>
        <li><strong>Mobil Irit Kota:</strong> City car dan MPV kompak untuk mobilitas di area pusat kota.</li>
        <li><strong>Harga Transparan:</strong> Biaya sewa jelas tanpa biaya tersembunyi.</li>
        <li><strong>Proses Cepat:</strong> Konfirmasi cepat via WhatsApp, unit siap dalam hitungan jam.</li>
      </ul>
    </SeoPageLayout>
  );
}