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
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Harga
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Harga Sederhana, <span className="text-brand-yellow">Transparan</span>{' '}
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Tanpa biaya tersembunyi, tanpa kejutan. Hanya nilai terbaik untuk petualangan Anda di Bandung.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              } ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black px-4 py-1 rounded-full text-sm font-semibold shadow-glow z-10">
                  {plan.badge}
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-3xl p-8 transition-all duration-500 flex flex-col ${
                  plan.featured
                    ? 'shadow-card-hover ring-2 ring-brand-yellow'
                    : 'shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.featured
                      ? 'bg-brand-yellow'
                      : 'bg-brand-yellow/20'
                  }`}
                >
                  <plan.icon
                    className={`w-7 h-7 ${
                      plan.featured ? 'text-brand-black' : 'text-brand-yellow'
                    }`}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="font-display font-bold text-2xl text-brand-black mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-gray-500 text-sm">Mulai dari</span>
                  <div className="flex items-baseline">
                    <span className="font-display font-bold text-5xl text-brand-black">
                      Rp{plan.price.toLocaleString('id-ID')}
                    </span>
                    <span className="text-gray-500">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <div className="flex-grow">
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            plan.featured
                              ? 'bg-brand-yellow'
                              : 'bg-brand-yellow/20'
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.featured
                                ? 'text-brand-black'
                                : 'text-brand-yellow'
                            }`}
                          />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  className={`w-full py-6 font-semibold transition-all duration-300 mt-auto ${
                    plan.featured
                      ? 'bg-brand-yellow text-brand-black hover:bg-brand-black hover:text-white'
                      : 'bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black'
                  }`}
                  onClick={() => {
                    const target = document.querySelector('#contact');
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div
          className={`flex flex-wrap justify-center gap-8 mt-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm">Tanpa biaya tersembunyi</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm">Garansi Tukar/Servis</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm">Pembayaran aman</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Check className="w-5 h-5 text-brand-yellow" />
            <span className="text-sm">Dukungan 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
