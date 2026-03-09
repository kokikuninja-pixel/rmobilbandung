'use client';
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Apa saja syarat untuk menyewa motor?',
    answer:
      "Syarat utamanya adalah E-KTP, SIM C aktif, dan beberapa dokumen pendukung seperti ID kerja atau tiket perjalanan. Detail lengkap bisa dilihat pada bagian 'Cara Kerja' di atas.",
  },
  {
    question: 'Bagaimana jika ada salah satu persyaratan yang kurang?',
    answer:
      'Anda masih bisa menyewa jika alasannya cukup kuat atau bisa diganti dengan syarat lain. Jangan ragu untuk bertanya, Anda bisa berkonsultasi lewat WhatsApp kepada admin kami.',
  },
  {
    question: 'Bagaimana jika motor rusak di jalan?',
    answer:
      'Kami menyediakan bantuan darurat pada jam operasional kami, yaitu dari pukul 05:00 pagi hingga 21:30 malam. Keselamatan dan kenyamanan Anda adalah prioritas utama kami.',
  },
  {
    question: 'Bagaimana jika saya ingin membatalkan pesanan?',
    answer:
      'Jika Anda melakukan pembatalan setelah melakukan pembayaran Down Payment (DP), maka DP tersebut akan dianggap hangus.',
  },
  {
    question: 'Apakah motor bisa diantar ke lokasi saya?',
    answer:
      'Tentu saja! Kami bisa melakukan pengiriman ke lokasi Anda. Akan ada biaya tambahan yang besarnya tergantung pada jarak pengantaran.',
  },
  {
    question: 'Bagaimana kebijakan bahan bakarnya?',
    answer:
      'Setiap motor kami sediakan dengan bahan bakar sekitar 1 liter untuk pemakaian awal. Jika Anda ingin tangki terisi penuh saat serah terima, akan ada biaya tambahan.',
  },
  {
    question: 'Bisakah saya menyewa untuk jangka waktu panjang?',
    answer:
      'Ya! Paket mingguan dan bulanan kami menawarkan harga terbaik untuk penyewaan jangka panjang. Hubungi kami untuk mendapatkan penawaran khusus.',
  },
  {
    question: 'Fasilitas apa saja yang saya dapatkan?',
    answer:
      'Ya, setiap penyewaan sudah termasuk 2 helm SNI dan 2 jas hujan. Phone holder juga tersedia pada sebagian besar unit motor kami.',
  },
]

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span
              className={`inline-block bg-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Tanya Jawab
            </span>
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Pertanyaan yang Sering{' '}
              <span className="text-primary">Diajukan</span>
            </h2>
            <p
              className={`text-lg text-muted-foreground mb-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Punya pertanyaan? Kami punya jawabannya. Jika Anda tidak dapat menemukan apa yang Anda cari, jangan ragu untuk menghubungi kami.
            </p>

            {/* Contact Card */}
            <div
              className={`bg-card rounded-2xl p-6 shadow-card transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">
                    Masih ada pertanyaan?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Hubungi kami melalui{' '}
                    <a
                      href="https://wa.me/6282190105740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${400 + index * 80}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-display font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
