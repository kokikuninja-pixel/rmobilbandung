import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Clock, Headphones } from 'lucide-react'

const stats = [
  { icon: Award, value: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { icon: Users, value: 50, suffix: '+', label: 'Skuter Premium' },
  { icon: Clock, value: 10, suffix: 'K+', label: 'Pelanggan Puas' },
  { icon: Headphones, value: 24, suffix: '/7', label: 'Dukungan' },
]

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const duration = 2000

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [value, isVisible])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-yellow/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-yellow/15 rounded-full blur-2xl" />

            {/* Main Image */}
            <div className="relative z-10 group">
              <img
                src="https://picsum.photos/seed/about1/800/600"
                alt="Skuter premium"
                className="w-full h-auto rounded-3xl shadow-card group-hover:shadow-card-hover transition-shadow duration-500"
              />

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-yellow rounded-2xl p-6 shadow-glow">
                <p className="font-display font-bold text-4xl text-brand-black">
                  5+
                </p>
                <p className="text-sm text-brand-black/70 font-medium">
                  Tahun
                  <br />
                  Keunggulan
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="inline-block bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full text-sm font-semibold">
                Tentang Kami
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-brand-black leading-tight transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Kenapa Pilih{' '}
              <span className="text-brand-yellow">MaticRent?</span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Kami bukan hanya layanan sewa – kami adalah partner Anda dalam menjelajahi kota. Dengan lebih dari 5 tahun pengalaman, 50+ skuter premium, dan 10.000+ pelanggan puas, kami telah menyempurnakan seni penyewaan skuter tanpa repot.
            </p>

            {/* Stats Grid */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-white/50 hover:bg-brand-yellow/10 transition-colors duration-300 group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-brand-yellow mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-display font-bold text-2xl text-brand-black">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </p>
                  <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                size="lg"
                className="bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 font-semibold px-8 group"
                onClick={() => {
                  const target = document.querySelector('#fleet')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Jelajahi Armada Kami
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
