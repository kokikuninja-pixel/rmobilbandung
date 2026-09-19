'use client';
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { getWhatsAppLink } from '@/brands'

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const whatsappUrl = getWhatsAppLink()

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
      id="kontak"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div
          className={`relative bg-foreground rounded-3xl md:rounded-[3rem] overflow-hidden transition-all duration-1000 ${
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
                backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-16">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <h2
                className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-background leading-tight transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                Siap Menjelajah{' '}
                <span className="text-primary">Bandung?</span>
              </h2>

              <p
                className={`text-base sm:text-lg text-background/70 leading-relaxed max-w-lg transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Pesan mobil Anda dalam hitungan menit dan mulailah menjelajah hari ini. Kebebasan hanya dengan sekali klik. Bergabunglah dengan ribuan pelanggan yang bahagia!
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Button asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all duration-300 font-semibold sm:px-8 sm:py-6 text-base group sm:animate-pulse-glow"
                >
                  <Link href="/#pesan">
                    Sewa Sekarang
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 border-2 border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300 font-semibold sm:px-8 sm:py-6 text-base"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </a>
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
                        className="w-8 h-8 rounded-full bg-primary/30 border-2 border-foreground flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-background/70 text-sm">
                    Dipercaya oleh 10,000+ pelanggan
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="text-background/70 text-sm">
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
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-primary/20 rounded-full blur-3xl" />
                  <Image
                    src="/images/Family_looking_out_car_window_20260919114928.jpeg"
                    alt="Keluarga menikmati perjalanan"
                    fill
                    sizes="(max-width: 1024px) 0vw, 50vw"
                    className="relative z-10 object-cover"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-primary rounded-2xl p-4 shadow-glow z-20 animate-float">
                    <p className="font-display font-bold text-2xl text-primary-foreground">
                      24/7
                    </p>
                    <p className="text-sm text-primary-foreground/70">Dukungan</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
