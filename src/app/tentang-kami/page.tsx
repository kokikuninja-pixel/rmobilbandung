
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import About from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';

export const metadata: Metadata = {
  title: 'Tentang RMB | Partner Rental Motor Terpercaya di Bandung',
  description: 'Kenali lebih dekat RMB Rental Bandung. Dengan pengalaman 5+ tahun, kami berkomitmen memberikan layanan sewa motor matic terbaik, aman, dan tanpa ribet.',
  alternates: {
    canonical: '/tentang-kami',
  },
};

export default function TentangKamiPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <div className="pt-16 md:pt-24">
            <About />
        </div>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
