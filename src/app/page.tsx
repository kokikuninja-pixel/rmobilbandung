'use client';
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
import { OrderForm } from '@/components/order-form';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <section id="pesan" className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Pesan Sekarang
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Lengkapi formulir di bawah ini, dan tim kami akan segera menghubungi Anda melalui WhatsApp.
              </p>
            </div>
            <Card className="max-w-4xl mx-auto p-6 md:p-10 shadow-lg bg-card">
              <OrderForm />
            </Card>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
