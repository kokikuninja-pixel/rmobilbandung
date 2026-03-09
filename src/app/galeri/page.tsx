import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Galeri & Momen Pelanggan | RMB Rental Motor Bandung',
  description: 'Lihat momen keseruan pelanggan dan potret di balik layar tim RMB Rental. Jadilah bagian dari cerita perjalanan kami di Bandung.',
  alternates: {
    canonical: '/galeri',
  },
};

export default function GalleryPage() {
  const galleryItems = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-[calc(100vh-theme(height.24))]">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Galeri RMB</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lihat momen-momen seru para pelanggan setia kami saat menjelajahi Bandung dan potret di balik layar tim RMB.
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryItems.map((item) => (
                  <div key={item.id} className="break-inside-avoid">
                      <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                          <div className="relative aspect-[3/4]">
                              {(item.type === 'video') ? (
                                <video
                                  src={item.imageUrl}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="object-cover w-full h-full"
                                />
                              ) : (
                                <Image
                                    src={item.imageUrl}
                                    alt={item.description}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    data-ai-hint={item.imageHint}
                                />
                              )}
                          </div>
                      </Card>
                  </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
