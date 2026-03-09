'use client';
import { useEffect, useRef, useState } from 'react'
import { Search, FileText, ShieldCheck, Bike } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Pilih Skuter Anda',
    description:
      'Jelajahi armada kami dan pilih kendaraan yang sempurna untuk kebutuhan Anda. Filter berdasarkan harga, fitur, dan gaya.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Siapkan Dokumen via WA',
    description:
      'Fotokan & kirim: E-KTP, SIM C, ID Pegawai/KTM, Tiket Perjalanan, Bukti Inap, dan Link Sosmed Anda. (NIK & No. SIM boleh ditutup)',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Serah Terima & Jaminan',
    description:
      'Motor bisa diantar atau diambil. Saat terima unit, serahkan 1 identitas asli (KTP/SIM A/STNK) sebagai jaminan sewa.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Nikmati Perjalanan',
    description:
      'Ambil kunci dan jelajahi Bandung dengan bebas! Dukungan darurat 24/7 kami siap membantu jika ada kendala.',
    icon: Bike,
  },
]

export default function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000) // Increased interval time

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Cara Kerja
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Sewa dalam <span className="text-primary">4 Langkah Mudah</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Memulai pemesanan sangatlah mudah. Ikuti langkah-langkah ini dan Anda akan segera berada di jalan.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -z-10">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{
                      width: activeStep > index ? '100%' : '0%',
                    }}
                  />
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col ${
                  activeStep === index
                    ? 'ring-2 ring-primary scale-[1.02]'
                    : ''
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-lg shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-primary scale-110'
                      : 'bg-primary/20'
                  }`}
                >
                  <step.icon
                    className={`w-8 h-8 transition-colors duration-500 ${
                      activeStep === index
                        ? 'text-primary-foreground'
                        : 'text-primary'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? 'bg-primary w-8'
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
