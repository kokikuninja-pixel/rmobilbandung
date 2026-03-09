import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Bike,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from 'lucide-react'
import { Logo } from '@/components/icons/logo'

const quickLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Armada Kami', href: '#fleet' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Kontak', href: '#contact' },
]

const supportLinks = [
  { name: 'Tanya Jawab', href: '#faq' },
  { name: 'Ketentuan Layanan', href: '#' },
  { name: 'Kebijakan Privasi', href: '#' },
  { name: 'Kebijakan Pembatalan', href: '#' },
  { name: 'Info Asuransi', href: '#' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const footerRef = useRef<HTMLElement>(null)

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

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert(`Terima kasih telah berlangganan dengan: ${email}`)
      setEmail('')
    }
  }

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-brand-black pt-20 pb-8 overflow-hidden"
    >
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-yellow to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Logo />
              <span className="font-display font-bold text-xl text-white">
                RMB
              </span>
            </a>

            <p className="text-white/60 mb-6 leading-relaxed">
              Partner terpercaya Anda untuk sewa skuter. Jelajahi dengan bebas, berkendara dengan aman. Membuat eksplorasi kota dapat diakses oleh semua orang.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <p className="text-white font-medium text-sm">
                Berlangganan buletin kami
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-brand-yellow"
                />
                <Button
                  type="submit"
                  className="bg-brand-yellow text-brand-black hover:bg-white transition-all duration-300 px-4"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="font-display font-bold text-white mb-6">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-brand-yellow transition-all duration-300 hover:pl-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-display font-bold text-white mb-6">
              Dukungan
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-brand-yellow transition-all duration-300 hover:pl-2 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-display font-bold text-white mb-6">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Jl. Samiaji No.11A, Arjuna,
                  <br />
                  Kec. Cicendo, Kota Bandung, Jawa Barat 40172
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <a
                  href="tel:+6282190105740"
                  className="text-white/60 hover:text-brand-yellow transition-colors"
                >
                  +62 821-9010-5740
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                 <a
                      href="https://wa.me/6282190105740"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-brand-yellow transition-colors"
                    >
                      Hubungi via WhatsApp
                  </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                <span className="text-white/60">Buka 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {/* Copyright */}
          <p className="text-white/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} RMB Rental Motor Bandung. Hak cipta dilindungi undang-undang.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-yellow hover:text-brand-black transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
