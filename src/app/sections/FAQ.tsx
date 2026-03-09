'use client';
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What do I need to rent a scooter?',
    answer:
      "You'll need a valid driver's license (international for foreigners), passport or ID, and a security deposit. Minimum age is 18 years old. We make the process quick and hassle-free.",
  },
  {
    question: 'Is insurance included?',
    answer:
      'Basic insurance is included with all rentals. Full coverage options are available for an additional fee. We recommend the full coverage for peace of mind during your travels.',
  },
  {
    question: 'What if the scooter breaks down?',
    answer:
      "We provide 24/7 roadside assistance. If we can't fix it on the spot, we'll replace the scooter at no extra cost. Your safety and convenience are our top priorities.",
  },
  {
    question: 'Can I cancel my reservation?',
    answer:
      'Yes, cancellations made 24 hours before pickup receive a full refund. Same-day cancellations incur a small fee. We understand plans can change!',
  },
  {
    question: 'Do you offer delivery?',
    answer:
      'Absolutely! We deliver to hotels, airports, and addresses within the city. Delivery fees vary by distance. Contact us for specific delivery options and pricing.',
  },
  {
    question: "What's the fuel policy?",
    answer:
      'Scooters are provided with a full tank. Return with a full tank, or we\'ll refuel at market rates plus a small service fee. It\'s that simple!',
  },
  {
    question: 'Can I rent for multiple weeks?',
    answer:
      'Yes! Our monthly plan offers the best rates for long-term rentals. Contact us for custom quotes if you need the scooter for an extended period.',
  },
  {
    question: 'Are helmets provided?',
    answer:
      'Yes, we provide one helmet per rider. Additional helmets and accessories like phone mounts and rain covers are available for rent.',
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
              FAQ
            </span>
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Frequently Asked{' '}
              <span className="text-brand-yellow">Questions</span>
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Got questions? We've got answers. If you can't find what you're
              looking for, feel free to contact us.
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
                    Still have questions?
                  </p>
                  <p className="text-sm text-gray-600">
                    Contact us at{' '}
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
