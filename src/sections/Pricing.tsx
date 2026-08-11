'use client';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Star, Zap, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Paket Harian',
    price: 60000,
    period: 'hari',
    description: 'Sempurna untuk perjalanan singkat dan urusan cepat di dalam kota.',
    icon: Zap,
    features: [
      '2 Helm SNI',
      'Jas Hujan',
      'Phone Holder',
      'Garansi tukar/servis jika ada kendala',
    ],
    cta: 'Sewa Harian',
    featured: false,
  },
  {
    name: 'Paket Mingguan',
    price: 300000,
    period: 'minggu',
    description: 'Harga lebih hemat untuk liburan atau kebutuhan selama seminggu penuh.',
    icon: Star,
    features: [
      '2 Helm SNI',
      'Jas Hujan',
      'Phone Holder',
      'Garansi tukar/servis jika ada kendala',
      'Harga jauh lebih hemat',
    ],
    cta: 'Sewa Mingguan',
    featured: true,
    badge: 'Paling Populer',
  },
  {
    name: 'Paket Bulanan',
    price: 950000,
    period: 'bulan',
    description: 'Solusi terbaik untuk sewa jangka panjang, seperti untuk bekerja atau kuliah.',
    icon: Crown,
    features: [
      '2 Helm SNI',
      'Jas Hujan',
      'Phone Holder',
      'Garansi tukar/servis jika ada kendala',
      'Tarif paling ekonomis',
    ],
    cta: 'Sewa Bulanan',
    featured: false,
  },
]

export default function Pricing() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative w-full py-14 sm:py-20 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <span
            className={`inline-block bg-primary/20 text-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Harga
          </span>
          <h2
            className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-3 sm:mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Harga Sederhana, <span className="text-primary">Transparan</span>
          </h2>
          <p
            className={`text-sm sm:text-lg text-muted-foreground px-1 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Tanpa biaya tersembunyi, tanpa kejutan. Hanya nilai terbaik untuk petualangan Anda di Bandung.
          </p>
        </div>

        {/* Mobile: compact horizontal cards | Desktop: 3-column grid */}
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative shrink-0 snap-center w-[min(78vw,18.5rem)] transition-all duration-700 md:w-auto md:shrink ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-0.5 text-[11px] font-semibold text-primary-foreground shadow-glow sm:px-4 sm:py-1 sm:text-sm">
                  {plan.badge}
                </div>
              )}

              <div
                className={`relative flex h-full flex-col rounded-2xl bg-card p-4 transition-all duration-500 sm:rounded-3xl sm:p-6 md:p-8 ${
                  plan.featured
                    ? 'shadow-card-hover ring-2 ring-primary'
                    : 'shadow-card hover:shadow-card-hover'
                }`}
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-6 sm:h-14 sm:w-14 sm:rounded-2xl ${
                    plan.featured ? 'bg-primary' : 'bg-primary/20'
                  }`}
                >
                  <plan.icon
                    className={`h-5 w-5 sm:h-7 sm:w-7 ${
                      plan.featured ? 'text-primary-foreground' : 'text-primary'
                    }`}
                  />
                </div>

                <h3 className="mb-1 font-display text-lg font-bold text-card-foreground sm:mb-2 sm:text-2xl">
                  {plan.name}
                </h3>
                <p className="mb-3 line-clamp-2 text-xs text-muted-foreground sm:mb-6 sm:line-clamp-none sm:text-sm">
                  {plan.description}
                </p>

                <div className="mb-4 sm:mb-8">
                  <span className="text-[11px] text-muted-foreground sm:text-sm">Mulai dari</span>
                  <div className="flex flex-wrap items-baseline gap-x-1">
                    <span className="font-display text-2xl font-bold leading-none text-card-foreground sm:text-4xl md:text-5xl">
                      Rp{plan.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-xs text-muted-foreground sm:text-base">/{plan.period}</span>
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                    Harga dapat berubah saat high season.
                  </p>
                </div>

                <div className="flex-grow">
                  <ul className="mb-4 space-y-2 sm:mb-8 sm:space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 sm:gap-3">
                        <div
                          className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5 ${
                            plan.featured ? 'bg-primary' : 'bg-primary/20'
                          }`}
                        >
                          <Check
                            className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${
                              plan.featured ? 'text-primary-foreground' : 'text-primary'
                            }`}
                          />
                        </div>
                        <span className="text-xs leading-snug text-muted-foreground sm:text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`mt-auto h-10 w-full text-sm font-semibold transition-all duration-300 sm:h-12 sm:py-6 sm:text-base ${
                    plan.featured
                      ? 'bg-primary text-primary-foreground hover:bg-foreground hover:text-background'
                      : 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => {
                    const target = document.querySelector('#pesan')
                    if (target) target.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-[11px] text-muted-foreground md:hidden">
          Geser untuk melihat paket lain →
        </p>

        <div
          className={`mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 transition-all duration-700 sm:mt-16 sm:gap-8 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {[
            'Tanpa biaya tersembunyi',
            'Garansi Tukar/Servis',
            'Pembayaran aman',
            'Dukungan 24/7',
          ].map((label) => (
            <div key={label} className="flex items-center gap-1.5 text-muted-foreground sm:gap-2">
              <Check className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              <span className="text-xs sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
