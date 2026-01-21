import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Galeri | RMJP Rental',
  description: 'Momen keseruan pelanggan dan tim RMJP Rental.',
};

export default function GalleryPage() {
  const images = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-theme(height.14))]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
        <div className="mb-12 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-secondary mb-4 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Halaman Utama
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-2">Galeri RMJP</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat momen-momen seru para pelanggan setia kami saat menjelajahi Jakarta dan potret di balik layar tim RMJP.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                    <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                    </Card>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
