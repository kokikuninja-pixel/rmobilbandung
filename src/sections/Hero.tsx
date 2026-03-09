'use client';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Play } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-brand-cream pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #151c0d 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 left-10 w-16 h-16 bg-brand-yellow/20 rounded-full animate-float hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-brand-yellow/30 rounded-full animate-float-delayed hidden lg:block" />
      <div className="absolute top-48 right-20 w-8 h-8 bg-brand-yellow/25 rounded-full animate-float hidden lg:block" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
          {/* Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                <span className="text-sm font-semibold text-brand-black">
                  4.9/5
                </span>
              </span>
              <span className="text-sm text-gray-600">
                dari 2,000+ pengendara
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1
                className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-brand-black leading-tight transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Sewa Skuter
              </h1>
              <h1
                className={`font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-brand-black leading-tight transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Matic{' '}
                <span className="text-brand-yellow relative">
                  Mudah
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C50 2 150 2 198 10"
                      stroke="#ffba12"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className={`transition-all duration-1000 ${
                        isVisible ? 'stroke-dashoffset-0' : ''
                      }`}
                      style={{
                        strokeDasharray: 200,
                        strokeDashoffset: isVisible ? 0 : 200,
                        transitionDelay: '800ms',
                      }}
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className={`text-lg text-gray-600 max-w-lg leading-relaxed transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-4 blur-sm'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Jelajahi kota dengan bebas. Skuter premium, harga terjangkau, diantar ke pintu Anda. Rasakan nikmatnya perjalanan roda dua.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                size="lg"
                className="bg-brand-yellow text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300 font-semibold px-8 py-6 text-base group animate-pulse-glow"
                onClick={() => handleScrollTo('#fleet')}
              >
                Sewa Sekarang
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300 font-semibold px-8 py-6 text-base group"
                onClick={() => handleScrollTo('#fleet')}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lihat Armada
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap gap-8 pt-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div>
                <p className="font-display font-bold text-3xl text-brand-black">
                  50+
                </p>
                <p className="text-sm text-gray-600">Skuter Premium</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-brand-black">
                  10K+
                </p>
                <p className="text-sm text-gray-600">Pelanggan Puas</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-brand-black">
                  5+
                </p>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-brand-yellow/20 rounded-full blur-3xl" />

            {/* Main Image */}
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/hero-nethen-img.png"
                alt="Seseorang mengendarai skuter di jalanan kota Bandung"
                className="w-full h-auto rounded-3xl shadow-card-hover"
              />

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-brand-black">
                      Layanan Terbaik
                    </p>
                    <p className="text-sm text-gray-600">Teratas 2024</p>
                  </div>
                </div>
              </div>

              {/* Price Tag */}
              <div className="absolute -top-4 -right-4 bg-brand-yellow rounded-2xl p-4 shadow-glow animate-float-delayed hidden sm:block">
                <p className="font-display font-bold text-brand-black text-xl">
                  Mulai 60rb
                </p>
                <p className="text-sm text-brand-black/70">per hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#fbf6ed"
          />
        </svg>
      </div>
    </section>
  )
}
