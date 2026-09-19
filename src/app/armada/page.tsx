import { carInventory } from '@/lib/cars';
import { CarCard } from '@/components/car-card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Daftar Armada Mobil | RMB Rental Mobil Bandung',
  description: 'Lihat semua pilihan mobil yang tersedia untuk disewa lepas kunci (tanpa supir) di RMB Rental. Pilihan mulai dari Avanza, Calya, Sigra, hingga Fortuner.',
  alternates: {
    canonical: '/armada',
  },
};

export default function ArmadaPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-[calc(100vh-theme(height.24))]">
        <section id="armada" className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold">Pilihan Armada Mobil Kami</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami menyediakan berbagai mobil terbaik untuk kenyamanan Anda menjelajahi kota. Temukan yang paling cocok untuk Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {carInventory.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="text-center mt-20">
              <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Link href="/#pesan">Sewa Mobil Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}