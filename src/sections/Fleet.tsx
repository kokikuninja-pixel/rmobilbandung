import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Fuel, Gauge, Droplets, Check } from 'lucide-react'

const scooters = [
  {
    id: 1,
    name: 'Honda Vario 160',
    price: 15,
    image: 'https://picsum.photos/seed/fleet1/400/300',
    tag: 'Paling Populer',
    tagColor: 'bg-brand-yellow',
    specs: { cc: 160, efficiency: '45 km/l', tank: '11L' },
    features: ['Kunci Pintar', 'Lampu LED', 'Bagasi Luas'],
  },
  {
    id: 2,
    name: 'Yamaha NMAX 155',
    price: 18,
    image: 'https://picsum.photos/seed/fleet2/400/300',
    tag: 'Premium',
    tagColor: 'bg-brand-black text-white',
    specs: { cc: 155, efficiency: '40 km/l', tank: '7.1L' },
    features: ['Rem ABS', 'Kontrol Traksi', 'Layar Digital Penuh'],
  },
  {
    id: 3,
    name: 'Honda PCX 160',
    price: 20,
    image: 'https://picsum.photos/seed/fleet3/400/300',
    tag: 'Penawaran Terbaik',
    tagColor: 'bg-green-500 text-white',
    specs: { cc: 160, efficiency: '43 km/l', tank: '8.1L' },
    features: ['Idling Stop', 'Rem CBS', 'Charger USB'],
  },
  {
    id: 4,
    name: 'Yamaha Aerox 155',
    price: 16,
    image: 'https://picsum.photos/seed/fleet4/400/300',
    tag: 'Sporty',
    tagColor: 'bg-blue-500 text-white',
    specs: { cc: 155, efficiency: '42 km/l', tank: '5.5L' },
    features: ['Desain Sporty', 'Suspensi Mono', 'Ban Lebar'],
  },
  {
    id: 5,
    name: 'Honda Beat 110',
    price: 12,
    image: 'https://picsum.photos/seed/fleet5/400/300',
    tag: 'Ekonomis',
    tagColor: 'bg-orange-500 text-white',
    specs: { cc: 110, efficiency: '50 km/l', tank: '4.2L' },
    features: ['Ringan', 'Mudah Dikendalikan', 'Irit Bahan Bakar'],
  },
]

export default function Fleet() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-brand-black mb-2">
                  {scooter.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    {scooter.specs.cc}cc
                  </span>
                  <span className="flex items-center gap-1">
                    <Fuel className="w-4 h-4" />
                    {scooter.specs.efficiency}
                  </span>
                  <span className="flex items-center gap-1">
                    <Droplets className="w-4 h-4" />
                    {scooter.specs.tank}
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
                      ${scooter.price}
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
