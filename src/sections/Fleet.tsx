'use client';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Settings2, Power } from 'lucide-react'
import Link from 'next/link';
import { motorInventory } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Select a few motors to feature on the homepage
const featuredMotors = motorInventory.slice(0, 6);

export default function Fleet() {
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
      id="armada"
      ref={sectionRef}
      className="relative w-full py-14 sm:py-20 lg:py-32 bg-muted/50 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span
            className={`inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Armada Kami
          </span>
          <h2
            className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Pilih Kendaraan <span className="text-primary">Anda</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Dari motor lincah untuk perkotaan hingga yang tangguh untuk penjelajah, temukan skuter yang sempurna untuk perjalanan Anda.
          </p>
        </div>

        {/* Scooter Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {featuredMotors.map((motor, index) => (
            <div
              key={motor.id}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={motor.cardImage.imageUrl}
                  alt={motor.name}
                  fill
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-4 drop-shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={motor.cardImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                 {motor.specialLabel && (
                  <Badge
                    variant="outline"
                    className={cn("absolute top-4 left-4 z-10 font-semibold", {
                      "bg-blue-500/20 text-blue-500 border-blue-500/30": motor.specialLabel === "Bagasi Luas",
                      "bg-green-500/20 text-green-500 border-green-500/30": motor.specialLabel === "Paling Irit",
                      "bg-purple-500/20 text-purple-500 border-purple-500/30": motor.specialLabel === "Eco Friendly",
                    })}
                  >
                    {motor.specialLabel === "Bagasi Luas" && "👜 Bagasi Luas"}
                    {motor.specialLabel === "Paling Irit" && "⛽ Paling Irit"}
                    {motor.specialLabel === "Eco Friendly" && "⚡ Eco Friendly"}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {motor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 h-10">{motor.feature}</p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Settings2 className="w-4 h-4" />
                    {motor.specs.cc}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Power className="w-4 h-4" />
                    {motor.specs.torque}
                  </span>
                </div>
                
                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <div>
                    <p className="text-sm text-muted-foreground">Mulai dari</p>
                    <p className="font-display font-bold text-2xl text-foreground">
                      Rp{motor.price.toLocaleString('id-ID')}
                      <span className="text-sm font-normal text-muted-foreground">
                        /hari
                      </span>
                    </p>
                  </div>
                  <Button asChild
                    className="bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link href={`/armada/${motor.id}`}>
                      Lihat Detail
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button asChild
            size="lg"
            variant="outline"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-semibold px-8 group"
          >
            <Link href="/armada">
              Lihat Semua Armada
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
