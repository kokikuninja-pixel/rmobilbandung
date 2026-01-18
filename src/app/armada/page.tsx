import { motorInventory } from '@/lib/data';
import { MotorCard } from '@/components/motor-card';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Armada Lengkap | RMJP Rental',
  description: 'Lihat semua pilihan motor matic yang tersedia untuk disewa di RMJP Rental Jakarta Pusat.',
};

export default function ArmadaPage() {
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-theme(height.14))]">
        <section id="armada" className="py-16 md:py-24">
        <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Halaman Utama
                </Link>
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Pilihan Armada Matic Kami</h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Kami hanya menyediakan motor matic untuk kemudahan dan kenyamanan Anda menjelajahi kota. Temukan yang paling cocok untuk Anda.
            </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
