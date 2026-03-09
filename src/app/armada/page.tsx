import { motorInventory } from '@/lib/data';
import { MotorCard } from '@/components/motor-card';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Daftar Armada Motor Matic | RMB Rental Bandung',
  description: 'Lihat semua pilihan motor matic yang tersedia untuk disewa di RMB Rental. Pilihan lengkap mulai dari Honda Beat, Vario, Scoopy, hingga Yamaha Aerox.',
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
              <h1 className="font-display text-4xl md:text-5xl font-bold">Pilihan Armada Matic Kami</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami hanya menyediakan motor matic untuk kemudahan dan kenyamanan Anda menjelajahi kota. Temukan yang paling cocok untuk Anda.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {motorInventory.map((motor) => (
                <MotorCard key={motor.id} motor={motor} />
              ))}
            </div>

            <div className="text-center mt-20">
              <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Link href="/#pesan">Sewa Pilihan Anda Sekarang</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
