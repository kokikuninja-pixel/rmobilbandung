import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import FAQ from '@/sections/FAQ';

export const metadata: Metadata = {
  title: 'Pertanyaan Umum (FAQ) | RMB Rental Motor Bandung',
  description: 'Temukan jawaban untuk pertanyaan yang sering diajukan mengenai sewa motor di RMB, mulai dari syarat, jaminan, hingga pembatalan.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQPage() {
  return (
    <>
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
