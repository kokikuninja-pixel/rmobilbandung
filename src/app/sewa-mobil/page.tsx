import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CarLanding } from '@/components/car-landing';
import { generateSeoMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const pageSlug = '/sewa-mobil';
const title = 'Sewa Mobil Bandung | Rental Mobil Terbaik RMB';
const description =
  'Sewa mobil di Bandung mulai 300rb/hari. Tersedia Avanza, Calya, Sigra & Fortuner. Semua unit lepas kunci tanpa supir, antar jemput tersedia. Pesan sekarang!';

export const metadata: Metadata = generateSeoMetadata(
  'Sewa Mobil Bandung',
  title,
  description,
  pageSlug
);

export default function SewaMobilPage() {
  return (
    <>
      <Header />
      <main>
        <CarLanding />
      </main>
      <Footer />
    </>
  );
}