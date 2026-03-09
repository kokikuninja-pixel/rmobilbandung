import { useEffect, useRef, useState } from 'react'
import { Search, Calendar, MapPin, Key } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Choose Your Scooter',
    description:
      'Browse our fleet and pick the perfect ride for your needs. Filter by price, features, and style.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Book Online',
    description:
      'Select your dates, add extras, and complete your reservation in minutes with our secure checkout.',
    icon: Calendar,
  },
  {
    number: '03',
    title: 'Pick Up or Deliver',
    description:
      'Visit our location or have the scooter delivered to your doorstep at your preferred time.',
    icon: MapPin,
  },
  {
    number: '04',
    title: 'Enjoy the Ride',
    description:
      'Hit the road and explore with freedom and flexibility. 24/7 support always available.',
    icon: Key,
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
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-brand-cream overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-3xl" />
      </div>

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
            How It Works
          </span>
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-brand-black mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Rent in <span className="text-brand-yellow">4 Easy Steps</span>
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Getting started is simple. Follow these steps and hit the road in no
            time.
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
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -z-10">
                  <div
                    className="h-full bg-brand-yellow transition-all duration-500"
                    style={{
                      width: activeStep > index ? '100%' : '0%',
                    }}
                  />
                </div>
              )}

              {/* Card */}
              <div
                className={`relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 ${
                  activeStep === index
                    ? 'ring-2 ring-brand-yellow scale-[1.02]'
                    : ''
                }`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-display font-bold text-brand-black text-lg shadow-glow">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-brand-yellow scale-110'
                      : 'bg-brand-yellow/20'
                  }`}
                >
                  <step.icon
                    className={`w-8 h-8 transition-colors duration-500 ${
                      activeStep === index
                        ? 'text-brand-black'
                        : 'text-brand-yellow'
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-brand-black mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
                  ? 'bg-brand-yellow w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
