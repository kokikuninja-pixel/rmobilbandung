import Image from 'next/image';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Galeri & Momen Pelanggan | RMB Rental Motor Bandung',
  description:
    'Lihat momen keseruan pelanggan dan potret di balik layar tim RMB Rental. Jadilah bagian dari cerita perjalanan kami di Bandung.',
  alternates: {
    canonical: '/galeri',
  },
};

/** Local optimized assets only — avoids broken remote/missing gallery files. */
const galleryItems = [
  { src: '/images/hero1.webp', alt: 'Pengalaman sewa skuter di Bandung' },
  { src: '/images/hero2.webp', alt: 'Armada skuter premium RMB' },
  { src: '/images/hero4.webp', alt: 'Jelajah kota dengan motor matic' },
  { src: '/images/yamaha-aerox.png', alt: 'Yamaha Aerox siap sewa' },
  { src: '/images/Honda-Vario-150.png', alt: 'Honda Vario 150 siap sewa' },
  { src: '/images/Honda-beat-new.png', alt: 'Honda Beat New siap sewa' },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-[calc(100vh-theme(height.24))]">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
          <div className="mb-10 md:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">
              Galeri RMB
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuplikan armada dan suasana berkendara bersama RMB di Bandung.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {galleryItems.map((item) => (
              <div key={item.src} className="break-inside-avoid">
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="h-12 px-8 font-semibold">
              <Link href="/#pesan">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
