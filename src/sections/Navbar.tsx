import { useState, useEffect } from 'react'
import { Menu, X, Bike } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavbarProps {
  scrollY: number
}

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Armada', href: '#fleet' },
  { name: 'Harga', href: '#pricing' },
  { name: 'Kontak', href: '#contact' },
]

export default function Navbar({ scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const isScrolled = scrollY > 50

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={`flex items-center gap-2 transition-all duration-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center">
              <Bike className="w-6 h-6 text-brand-black" />
            </div>
            <span className="font-display font-bold text-xl text-brand-black">
              MaticRent
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-medium text-sm text-brand-black hover:text-brand-yellow transition-all duration-300 group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                }`}
                style={{ transitionDelay: `${100 + index * 80}ms` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`hidden md:block transition-all duration-500 ${
              isVisible
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Button
              className="bg-transparent border-2 border-brand-black text-brand-black hover:bg-brand-yellow hover:border-brand-yellow hover:text-white transition-all duration-300 font-semibold px-6"
              onClick={() => {
                const target = document.querySelector('#fleet')
                if (target) target.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Pesan Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-cream transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-brand-black" />
            ) : (
              <Menu className="w-6 h-6 text-brand-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-lg transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-brand-black hover:text-brand-yellow font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button
            className="w-full bg-brand-yellow text-brand-black hover:bg-brand-black hover:text-white transition-all duration-300 font-semibold mt-4"
            onClick={() => {
              const target = document.querySelector('#fleet')
              if (target) target.scrollIntoView({ behavior: 'smooth' })
              setIsMenuOpen(false)
            }}
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </nav>
  )
}
