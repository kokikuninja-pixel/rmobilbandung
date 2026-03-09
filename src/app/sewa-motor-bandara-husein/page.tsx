
import SeoPageLayout from '@/components/seo-page-layout';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const locationName = "Bandara Husein Sastranegara";
const pagePath = "/sewa-motor-bandara-husein";
const title = `Sewa Motor Bandara Husein Sastranegara Bandung | RMB`;
const pageDescription = `Mendarat di Bandara Husein Sastranegara? Sewa motor dari RMB dan mulai perjalanan Anda tanpa repot. Layanan antar jemput unit langsung di bandara.`;

export const metadata: Metadata = generateSeoMetadata(locationName, title, pageDescription, pagePath);

export default function SewaMotorBandaraPage() {
  return (
    <SeoPageLayout
      title={`Sewa Motor di ${locationName}`}
      locationName={"Bandara Husein"}
      description={pageDescription}
    >
      <p>
        Mendarat di Bandara Husein Sastranegara, Bandung? Jangan buang waktu Anda! Pesan motor sewaan dari RMB dan kami akan siapkan unitnya saat Anda tiba. Layanan sewa motor di bandara membuat perjalanan Anda lebih efisien sejak menit pertama.
      </p>
      <p>
        Hindari antrean taksi dan nikmati kebebasan untuk langsung menuju hotel atau destinasi pertama Anda. Tim kami akan berkoordinasi untuk serah terima unit yang cepat dan mudah di area kedatangan bandara.
      </p>
      <h3>Sewa Motor di Bandara Husein dengan RMB:</h3>
      <ul>
        <li><strong>Efisien:</strong> Langsung ambil motor setelah mendarat, tidak perlu menunggu transportasi lain.</li>
        <li><strong>Praktis:</strong> Bawa barang bawaan Anda dengan lebih mudah dibandingkan transportasi umum.</li>
        <li><strong>Fleksibel:</strong> Mulai petualangan Anda di Bandung sesuai jadwal Anda sendiri.</li>
        <li><strong>Koordinasi Mudah:</strong> Tim kami akan menghubungi Anda untuk mengatur titik pertemuan yang paling nyaman di bandara.</li>
      </ul>
    </SeoPageLayout>
  );
}
