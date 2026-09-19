import { carInventory } from '@/lib/cars';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Users, Cog, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface CarDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return carInventory.map(car => ({
    id: car.id,
  }));
}

export async function generateMetadata({ params }: CarDetailPageProps): Promise<Metadata> {
    const car = carInventory.find(c => c.id === params.id);
  
    if (!car) {
      return {
        title: 'Mobil Tidak Ditemukan',
      };
    }
  
    return {
      title: `Sewa ${car.name} di Bandung | RMB Rental Mobil`,
      description: `Sewa mobil ${car.name} di Bandung. Cek spesifikasi, harga, dan fasilitas lengkap. Pesan sekarang, unit siap pakai.`,
      alternates: {
        canonical: `/armada/${car.id}`,
      },
      openGraph: {
        images: [
          {
            url: car.imageUrl,
            width: 1024,
            height: 1024,
            alt: `Sewa mobil ${car.name}`,
          },
        ],
      },
    };
  }

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = carInventory.find(c => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-[calc(100vh-theme(height.24))]">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
          
          <div className="mb-12">
              <Link href="/armada" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali ke Semua Armada
              </Link>
               <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">{car.name}</h1>
               <p className="text-lg text-muted-foreground">{car.segment} Class</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - Info */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                  {/* Specs */}
                  <div>
                      <h3 className="text-2xl font-bold mb-6">Informasi Unit</h3>
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-card text-center flex flex-col items-center justify-center">
                              <Users className="h-8 w-8 text-primary mb-3" />
                              <p className="text-xl font-bold">{car.seats}</p>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Kursi</p>
                          </div>
                          <div className="p-4 rounded-lg bg-card text-center flex flex-col items-center justify-center">
                              <Cog className="h-8 w-8 text-primary mb-3" />
                              <p className="text-xl font-bold">{car.transmission}</p>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">Transmisi</p>
                          </div>
                      </div>
                  </div>

                  {/* Keunggulan */}
                  <div>
                      <h3 className="text-2xl font-bold mb-6">Keunggulan Unit</h3>
                      <p className="text-muted-foreground leading-relaxed">{car.feature}</p>
                  </div>
                   
                  <div className="mt-auto">
                      <div className="mb-6 text-center lg:text-left">
                          <p className="text-muted-foreground">Mulai dari</p>
                          <p className="text-4xl font-extrabold text-primary">
                              Rp {car.price.toLocaleString('id-ID')}
                              <span className="text-xl font-medium text-muted-foreground">/hari</span>
                          </p>
                      </div>
                      <Button asChild size="lg" className="w-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                          <Link href={`/?motor=${encodeURIComponent(car.name)}#pesan`}>Sewa Mobil Ini</Link>
                      </Button>
                  </div>
              </div>

              {/* Right Column - Image */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                  <div className="relative min-h-[400px] lg:min-h-[460px] w-full">
                      <Image 
                          src={car.imageUrl}
                          alt={car.name}
                          fill
                          className="object-cover rounded-2xl"
                          priority
                      />
                  </div>
                  {car.sceneImage && (
                      <div className="relative min-h-[220px] lg:min-h-[280px] w-full">
                          <Image 
                              src={car.sceneImage}
                              alt={`${car.name} siap melaju`}
                              fill
                              className="object-cover rounded-2xl"
                          />
                      </div>
                  )}
              </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}