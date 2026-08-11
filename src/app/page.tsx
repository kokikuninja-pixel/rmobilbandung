import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import About from '@/sections/About';
import CTA from '@/sections/CTA';
import FAQ from '@/sections/FAQ';
import Fleet from '@/sections/Fleet';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import Process from '@/sections/Process';
import Testimonials from '@/sections/Testimonials';
import { FloatingActionButton } from '@/components/floating-action-button';
import { PromoPopup } from '@/components/promo-popup';
import { OrderForm } from '@/components/order-form';
import { Card } from '@/components/ui/card';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { JsonLd } from '@/components/json-ld';
import { buildFaqPageJsonLd } from '@/lib/seo';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <JsonLd data={buildFaqPageJsonLd()} />
      <Header />
      <main>
        <Hero />
        <div className="bg-muted">
          <About />
        </div>
        <Fleet />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <section id="pesan" className="py-12 md:py-24 bg-muted/50 scroll-mt-20">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Pesan Sekarang
              </h2>
              <p className="mt-3 md:mt-4 text-base md:text-lg text-muted-foreground px-1">
                Lengkapi formulir di bawah ini, dan tim kami akan segera menghubungi Anda melalui WhatsApp.
              </p>
            </div>
            <Card className="max-w-4xl mx-auto p-4 sm:p-6 md:p-10 shadow-lg bg-card mb-20 md:mb-0">
              <Suspense fallback={<Skeleton className="h-[800px] w-full" />}>
                <OrderForm />
              </Suspense>
            </Card>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <FloatingActionButton />
      <PromoPopup />
    </div>
  );
}
