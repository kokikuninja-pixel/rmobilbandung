'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  
  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] w-full overflow-hidden bg-background flex items-center pt-24 pb-12"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-900/[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
      
      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Terpercaya Sejak 2018
              </span>
            </div>

            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tighter leading-tight">
              Sewa Motor Matic <br className="hidden lg:block"/> di <span className="text-primary">Bandung</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Jelajahi Bandung dengan bebas dan nyaman. Unit matic terawat, harga terjangkau, dan layanan antar-jemput cepat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                <Link href="/#pesan">
                  Pesan Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/armada">
                  Lihat Pilihan Motor
                </Link>
              </Button>
            </div>
            
          </div>

          <div className="relative min-h-[300px] md:min-h-[500px]">
            <Image
                src="/images/hero-rmb-img.png"
                alt="Seseorang mengendarai skuter Yamaha Aerox dengan latar kota Bandung"
                fill
                priority
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint="scooter city"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
