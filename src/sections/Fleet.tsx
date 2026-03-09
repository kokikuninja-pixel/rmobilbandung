'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Gauge, Check, Power } from 'lucide-react'

const scooters = [
  {
    id: 'yamaha-aerox',
    name: 'Yamaha Aerox 155',
    price: 160000,
    image: '/images/yamaha-aerox.png',
    tag: 'Sporty & Kencang',
    tagColor: 'bg-red-500 text-white',
    specs: { cc: '155', torque: '13.9 Nm' },
    features: ['Mesin VVA paling bertenaga', 'Ban tapak lebar & stabil', 'Desain Maxi sporty'],
  },
  {
    id: 'honda-vario-125',
    name: 'Honda Vario 125 LED',
    price: 110000,
    image: '/images/Honda-vario-125.png',
    tag: 'Paling Populer',
    tagColor: 'bg-brand-yellow',
    specs: { cc: '125', torque: '10.8 Nm' },
    features: ['Sangat stabil untuk boncengan', 'Bagasi luas muat banyak', 'Lampu LED terang'],
  },
  {
    id: 'honda-beat-new',
    name: 'Honda Beat (New)',
    price: 80000,
    image: '/images/Honda-beat-new.png',
    tag: 'Paling Irit',
    tagColor: 'bg-green-500 text-white',
    specs: { cc: '110', torque: '9.3 Nm' },
    features: ['Konsumsi BBM sangat irit', 'Rangka eSAF super ringan', 'Lincah untuk selap-selip'],
  },
  {
    id: 'honda-scoopy-new',
    name: 'Honda Scoopy (New)',
    price: 120000,
    image: '/images/Honda-scoopy-new.png',
    tag: 'Gaya Retro',
    tagColor: 'bg-blue-500 text-white',
    specs: { cc: '110', torque: '9.3 Nm' },
    features: ['Desain stylish & modern', 'Fitur Smart Key', 'Tersedia slot charger HP'],
  },
  {
    id: 'honda-spacy',
    name: 'Honda Spacy',
    price: 60000,
    image: '/images/Honda-spacy.png',
    tag: 'Bagasi Terluas',
    tagColor: 'bg-purple-500 text-white',
    specs: { cc: '110', torque: '8.9 Nm' },
    features: ['Bagasi Helm-In 18 liter', 'Jok lebar & sangat nyaman', 'Harga paling ekonomis'],
  },
  {
    id: 'yamaha-gear',
    name: 'Yamaha Gear',
    price: 80000,
    image: '/images/yamaha-gear.png',
    tag: 'Multifungsi',
    tagColor: 'bg-orange-500 text-white',
    specs: { cc: '125', torque: '9.5 Nm' },
    features: ['Dilengkapi Double Hook', 'Pijakan kaki untuk anak', 'Desain tangguh & modern'],
  },
]

export default function Fleet() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
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
      id="fleet"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Armada Kami
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Pilih <span className="text-brand-yellow">Kendaraan</span> Anda
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Dari komuter kota hingga penjelajah akhir pekan, temukan skuter yang sempurna untuk perjalanan Anda.
          </p>
        </div>

        {/* Scooter Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scooters.map((scooter, index) => (
            <div
              key={scooter.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
                transform:
                  hoveredCard === scooter.id
                    ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateY(-8px)'
                    : isVisible
                    ? 'translateY(0)'
                    : 'translateY(48px)',
              }}
              onMouseEnter={() => setHoveredCard(scooter.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Tag */}
              <div
                className={`absolute top-4 left-4 ${scooter.tagColor} px-3 py-1 rounded-full text-xs font-semibold z-10`}
              >
                {scooter.tag}
              </div>

              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={scooter.image}
                  alt={scooter.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-brand-black mb-2">
                  {scooter.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center justify-around gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-gray-400" />
                    {scooter.specs.cc}cc
                  </span>
                  <span className="flex items-center gap-2">
                    <Power className="w-4 h-4 text-gray-400" />
                    {scooter.specs.torque}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {scooter.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-brand-yellow" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Mulai</p>
                    <p className="font-display font-bold text-2xl text-brand-black">
                      Rp {scooter.price.toLocaleString('id-ID')}
                      <span className="text-sm font-normal text-gray-500">
                        /hari
                      </span>
                    </p>
                  </div>
                  <Button
                    className="bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-all duration-300"
                    onClick={() => {
                      const target = document.querySelector('#pricing')
                      if (target) target.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Sewa Sekarang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300 font-semibold px-8 group"
            onClick={() => {
              const target = document.querySelector('#pricing')
              if (target) target.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Lihat Semua Paket Harga
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
