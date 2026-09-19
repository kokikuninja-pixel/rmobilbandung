import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CarLanding } from '@/components/car-landing';
import { FloatingActionButton } from '@/components/floating-action-button';
import { PromoPopup } from '@/components/promo-popup';
import { JsonLd } from '@/components/json-ld';
import { buildFaqPageJsonLd, buildLocalBusinessJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata(
  'Sewa Mobil Bandung',
  'Sewa Mobil Bandung | Rental Mobil Terbaik RMB',
  'Sewa mobil di Bandung dengan harga tanya admin. Tersedia Avanza, Calya, Sigra & Fortuner. Semua unit lepas kunci tanpa supir. Pesan sekarang!',
  '/'
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={buildLocalBusinessJsonLd()} />
      <JsonLd data={buildFaqPageJsonLd()} />
      <Header />
      <main>
        <CarLanding />
      </main>
      <Footer />
      <FloatingActionButton />
      <PromoPopup />
    </div>
  );
}