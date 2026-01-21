import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri & Momen Pelanggan | RMJP Rental Motor Jakarta',
  description: 'Lihat momen keseruan pelanggan dan potret di balik layar tim RMJP Rental. Jadilah bagian dari cerita perjalanan kami di Jakarta.',
  alternates: {
    canonical: '/galeri',
  },
};

export default function GalleryPage() {
  const galleryItems = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-theme(height.14))]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
        <div className="mb-12 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-secondary mb-4 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Halaman Utama
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Galeri RMJP</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat momen-momen seru para pelanggan setia kami saat menjelajahi Jakarta dan potret di balik layar tim RMJP.
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
    </div>
  );
}
