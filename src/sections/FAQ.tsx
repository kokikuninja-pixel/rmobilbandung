import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Apa yang saya perlukan untuk menyewa skuter?',
    answer:
      "Anda memerlukan SIM yang valid (internasional untuk orang asing), paspor atau KTP, dan uang jaminan. Usia minimum adalah 18 tahun. Kami membuat prosesnya cepat dan tanpa repot.",
  },
  {
    question: 'Apakah asuransi sudah termasuk?',
    answer:
      'Asuransi dasar sudah termasuk dalam semua penyewaan. Opsi cakupan penuh tersedia dengan biaya tambahan. Kami merekomendasikan cakupan penuh untuk ketenangan pikiran selama perjalanan Anda.',
  },
  {
    question: 'Bagaimana jika skuter rusak?',
    answer:
      "Kami menyediakan bantuan darurat 24/7. Jika kami tidak dapat memperbaikinya di tempat, kami akan mengganti skuter tanpa biaya tambahan. Keselamatan dan kenyamanan Anda adalah prioritas utama kami.",
  },
  {
    question: 'Bisakah saya membatalkan reservasi saya?',
    answer:
      'Ya, pembatalan yang dilakukan 24 jam sebelum pengambilan akan mendapatkan pengembalian dana penuh. Pembatalan pada hari yang sama akan dikenakan biaya kecil. Kami mengerti bahwa rencana bisa berubah!',
  },
  {
    question: 'Apakah Anda menawarkan pengiriman?',
    answer:
      'Tentu saja! Kami mengantar ke hotel, bandara, dan alamat di dalam kota. Biaya pengiriman bervariasi berdasarkan jarak. Hubungi kami untuk opsi pengiriman dan harga spesifik.',
  },
  {
    question: "Bagaimana kebijakan bahan bakarnya?",
    answer:
      'Skuter disediakan dengan tangki penuh. Kembalikan dengan tangki penuh, atau kami akan mengisi ulang dengan harga pasar ditambah biaya layanan kecil. Sesederhana itu!',
  },
  {
    question: 'Bisakah saya menyewa selama beberapa minggu?',
    answer:
      'Ya! Paket bulanan kami menawarkan harga terbaik untuk penyewaan jangka panjang. Hubungi kami untuk penawaran khusus jika Anda membutuhkan skuter untuk periode yang lebih lama.',
  },
  {
    question: 'Apakah helm disediakan?',
    answer:
      'Ya, kami menyediakan satu helm per pengendara. Helm tambahan dan aksesori seperti dudukan telepon dan jas hujan tersedia untuk disewa.',
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
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span
              className={`inline-block bg-brand-yellow/20 text-brand-black px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              Tanya Jawab
            </span>
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Pertanyaan yang Sering{' '}
              <span className="text-brand-yellow">Diajukan</span>
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 transition-all duration-700 ${
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
              className={`bg-white rounded-2xl p-6 shadow-card transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-black">
                    Masih ada pertanyaan?
                  </p>
                  <p className="text-sm text-gray-600">
                    Hubungi kami di{' '}
                    <a
                      href="mailto:hello@maticrent.com"
                      className="text-brand-yellow hover:underline"
                    >
                      hello@maticrent.com
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
                className={`bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${400 + index * 80}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-semibold text-brand-black pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-yellow flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
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
