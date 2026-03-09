import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Travel Blogger',
    avatar: 'https://picsum.photos/seed/avatar1/48/48',
    content:
      'RMB membuat perjalanan saya di Bandung tak terlupakan. Skuternya dalam kondisi sempurna, dan layanan pengirimannya menghemat banyak waktu saya! Sangat merekomendasikan kepada siapa pun yang berkunjung.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Digital Nomad',
    avatar: 'https://picsum.photos/seed/avatar2/48/48',
    content:
      "Saya menyewa dari RMB setiap bulan. Skuter yang andal, harga yang wajar, dan timnya selalu membantu. Ini telah menjadi bagian penting dari gaya hidup nomaden saya.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Turis',
    avatar: 'https://picsum.photos/seed/avatar3/48/48',
    content:
      'Pertama kali mengendarai skuter dan RMB membuatnya sangat mudah. Mereka bahkan memberi saya pelajaran singkat. Merasa aman sepanjang perjalanan! Pasti akan menggunakan lagi.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Park',
    role: 'Business Traveler',
    avatar: 'https://picsum.photos/seed/avatar4/48/48',
    content:
      'Butuh cara cepat untuk berkeliling kota untuk rapat. Paket mingguan RMB sangat cocok untuk kebutuhan saya. Pelayanan profesional setiap saat.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Adventure Seeker',
    avatar: 'https://picsum.photos/seed/avatar5/48/48',
    content:
      'Menyewa NMAX untuk perjalanan akhir pekan. Perjalanan mulus, hemat bahan bakar, dan tidak ada masalah sama sekali. Pasti akan menyewa lagi untuk petualangan saya berikutnya!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
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

  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isVisible])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-3xl" />

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
            Testimoni
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Apa Kata <span className="text-brand-yellow">Pengendara Kami</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-card-hover">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center shadow-glow animate-float">
              <Quote className="w-6 h-6 text-brand-black" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl lg:text-2xl text-brand-black leading-relaxed mb-8 font-medium">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-yellow"
                />
                <div>
                  <p className="font-display font-bold text-lg text-brand-black">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-brand-yellow w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border-2 border-brand-black hover:bg-brand-black hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-2 border-brand-black hover:bg-brand-black hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="text-center">
            <p className="font-display font-bold text-4xl text-brand-black">
              4.9
            </p>
            <p className="text-gray-600 text-sm">Peringkat Rata-rata</p>
          </div>
          <div className="text-center">
            <p className="font-display font-bold text-4xl text-brand-black">
              2,000+
            </p>
            <p className="text-gray-600 text-sm">Ulasan</p>
          </div>
          <div className="text-center">
            <p className="font-display font-bold text-4xl text-brand-black">
              98%
            </p>
            <p className="text-gray-600 text-sm">Akan Merekomendasikan</p>
          </div>
        </div>
      </div>
    </section>
  )
}
