'use client';
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, Users, Clock, Headphones } from 'lucide-react'
import Link from 'next/link';

const stats = [
  { icon: Award, value: 5, suffix: '+', label: 'Tahun Pengalaman' },
  { icon: Users, value: 8, suffix: '+', label: 'Pilihan Mobil' },
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
      id="tentang-kami"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-muted overflow-hidden"
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
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-2xl" />

            {/* Main Image */}
            <div className="relative z-10 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-card group-hover:shadow-card-hover transition-shadow duration-500">
                <Image
                  src="/images/hero2.webp"
                  alt="Armada mobil premium RMB"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 shadow-glow">
                <p className="font-display font-bold text-4xl text-primary-foreground">
                  5+
                </p>
                <p className="text-sm text-primary-foreground/70 font-medium">
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
              <span className="inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                Tentang Kami
              </span>
            </div>

            {/* Headline */}
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Kenapa Memilih{' '}
              <span className="text-primary">RMB?</span>
            </h2>

            {/* Description */}
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Kami bukan sekadar jasa rental – kami adalah partner Anda dalam menjelajahi kota. Dengan pengalaman lebih dari 5 tahun, 8+ pilihan mobil premium, dan 10.000+ pelanggan puas, kami telah menyempurnakan seni sewa mobil tanpa ribet.
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
                  className="text-center p-4 rounded-2xl bg-card/50 hover:bg-primary/10 transition-colors duration-300 group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-display font-bold text-2xl text-foreground">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
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
              <Button asChild
                size="lg"
                className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold px-8 group"
              >
                <Link href="/armada">
                  Jelajahi Armada Kami
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
