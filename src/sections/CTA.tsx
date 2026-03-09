'use client';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Star, Users } from 'lucide-react'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div
          className={`relative bg-brand-black rounded-[3rem] overflow-hidden transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #ffba12 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-brand-yellow/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            {/* Content */}
            <div className="space-y-8">
              <h2
                className={`font-display font-bold text-4xl lg:text-5xl text-white leading-tight transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Siap untuk{' '}
                <span className="text-brand-yellow">Meluncur?</span>
              </h2>

              <p
                className={`text-lg text-white/70 leading-relaxed max-w-lg transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Pesan skuter Anda dalam hitungan menit dan mulai jelajahi hari ini. Kebebasan hanya dengan sekali klik. Bergabunglah dengan ribuan pengendara bahagia!
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Button
                  size="lg"
                  className="bg-brand-yellow text-brand-black hover:bg-white transition-all duration-300 font-semibold px-8 py-6 text-base group animate-pulse-glow"
                  onClick={() => {
                    const target = document.querySelector('#fleet')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Sewa Sekarang
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-brand-black transition-all duration-300 font-semibold px-8 py-6 text-base"
                  onClick={() => {
                    window.open('https://wa.me/6282190105740', '_blank');
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Hubungi Kami
                </Button>
              </div>

              {/* Trust Badges */}
              <div
                className={`flex flex-wrap gap-6 pt-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-brand-yellow/30 border-2 border-brand-black flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-brand-yellow" />
                      </div>
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">
                    Dipercaya oleh 10.000+ pengendara
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                  <span className="text-white/70 text-sm">
                    Peringkat 4.9/5 (2000+ Ulasan)
                  </span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative hidden lg:block transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-brand-yellow/20 rounded-full blur-3xl" />

                {/* Image */}
                <img
                  src="/images/yamaha-aerox.png"
                  alt="Pengendara skuter Yamaha Aerox"
                  className="relative z-10 w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-brand-yellow rounded-2xl p-4 shadow-glow z-20 animate-float">
                  <p className="font-display font-bold text-2xl text-brand-black">
                    24/7
                  </p>
                  <p className="text-sm text-brand-black/70">Dukungan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
