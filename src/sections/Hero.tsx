'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Play } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full overflow-hidden bg-background pt-4 md:pt-8 lg:min-h-screen lg:pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 text-foreground md:opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-primary/30 rounded-full animate-float-delayed hidden lg:block" />
      <div className="absolute top-48 right-20 w-8 h-8 bg-primary/25 rounded-full animate-float hidden lg:block" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center lg:min-h-[calc(100vh-10rem)]">
          {/* Content */}
          <div className="space-y-5 sm:space-y-8 z-10 order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex max-w-full items-center gap-2 bg-card/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-soft transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="flex items-center gap-1 shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  4.9/5
                </span>
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground truncate">
                dari 2,000+ pengendara
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1
                className={`font-display font-bold text-[2.35rem] leading-[1.1] sm:text-6xl lg:text-7xl text-foreground transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Sewa Skuter
              </h1>
              <h1
                className={`font-display font-bold text-[2.35rem] leading-[1.15] sm:text-6xl lg:text-7xl text-foreground transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Matic{' '}
                <span className="text-primary relative inline-block">
                  Mudah
                  <svg
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full text-primary"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: 200,
                        strokeDashoffset: isVisible ? 0 : 200,
                        transition: 'stroke-dashoffset 1s ease',
                        transitionDelay: '800ms',
                      }}
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Jelajahi kota dengan bebas. Skuter premium, harga terjangkau, diantar ke pintu Anda.
            </p>

            {/* Mobile price chip */}
            <div
              className={`flex sm:hidden items-center gap-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <div className="rounded-2xl bg-primary px-4 py-2.5 shadow-soft">
                <p className="font-display font-bold text-primary-foreground text-lg leading-none">
                  Mulai 60rb
                </p>
                <p className="text-xs text-primary-foreground/80 mt-0.5">per hari</p>
              </div>
              <p className="text-xs text-muted-foreground leading-snug">
                Unit siap pakai + antar jemput
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-semibold h-12 sm:h-auto sm:px-8 sm:py-6 text-base group sm:animate-pulse-glow"
                onClick={() => handleScrollTo('#pesan')}
              >
                Sewa Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-semibold h-12 sm:h-auto sm:px-8 sm:py-6 text-base group"
              >
                <Link href="/armada">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Lihat Armada
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-8 pt-2 sm:pt-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                  50+
                </p>
                <p className="text-[11px] sm:text-sm text-muted-foreground leading-tight">Skuter Premium</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                  10K+
                </p>
                <p className="text-[11px] sm:text-sm text-muted-foreground leading-tight">Pelanggan Puas</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                  5+
                </p>
                <p className="text-[11px] sm:text-sm text-muted-foreground leading-tight">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 order-1 lg:order-2 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 lg:translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-primary/20 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-card-hover">
                <Image
                  src="/images/hero1.webp"
                  alt="Seseorang mengendarai skuter di jalanan kota Bandung"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-card rounded-2xl p-3 sm:p-4 shadow-card animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">
                      Layanan Terbaik
                    </p>
                    <p className="text-sm text-muted-foreground">Teratas 2024</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-primary rounded-2xl p-3 sm:p-4 shadow-glow animate-float-delayed hidden sm:block">
                <p className="font-display font-bold text-primary-foreground text-lg sm:text-xl">
                  Mulai 60rb
                </p>
                <p className="text-sm text-primary-foreground/70">per hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave — shorter on mobile */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-16 md:h-auto text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
