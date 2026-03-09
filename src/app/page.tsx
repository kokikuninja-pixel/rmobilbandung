'use client';
import { useEffect, useRef, useState } from 'react'
import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Fleet from '@/sections/Fleet'
import Process from '@/sections/Process'
import Pricing from '@/sections/Pricing'
import Testimonials from '@/sections/Testimonials'
import FAQ from '@/sections/FAQ'
import CTA from '@/sections/CTA'
import Footer from '@/sections/Footer'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={mainRef} className="min-h-screen bg-brand-cream overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
