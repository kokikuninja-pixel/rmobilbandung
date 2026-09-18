import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import FAQ from '@/sections/FAQ';
import { JsonLd } from '@/components/json-ld';
import { buildFaqPageJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Pertanyaan Umum (FAQ) | RMB Rental Mobil Bandung',
  description:
    'Temukan jawaban untuk pertanyaan yang sering diajukan mengenai sewa mobil di RMB, mulai dari syarat, jaminan, hingga pembatalan.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Pertanyaan Umum (FAQ) | RMB Rental Mobil Bandung',
    description:
      'Temukan jawaban untuk pertanyaan yang sering diajukan mengenai sewa mobil di RMB, mulai dari syarat, jaminan, hingga pembatalan.',
  },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={buildFaqPageJsonLd()} />
      <Header />
      <main className="bg-background text-foreground">
        <div className="pt-16 md:pt-24">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
