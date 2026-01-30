
'use client';

import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tiktok } from './icons/tiktok';

const navLinks = [
  { href: '/armada', label: 'Armada' },
  { href: '/harga', label: 'Harga' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/#tentang-kami', label: 'Tentang Kami' },
  { href: '/#lokasi', label: 'Lokasi' },
  { href: '/snk', label: 'S&K' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
        'sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm transition-all duration-300',
        hasScrolled ? 'shadow-md border-b border-border/10' : 'shadow-none border-b border-transparent'
    )}>
      <div className="container flex h-20 items-center md:h-24">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>
        </div>

        <nav className="hidden text-foreground md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild>
            <Link href="/#pesan" onClick={(e) => handleLinkClick(e, '/#pesan')}>Sewa Sekarang</Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hidden text-primary md:inline-flex hover:bg-primary/20">
            <Link href="https://www.instagram.com/nethen.rental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hidden text-primary md:inline-flex hover:bg-primary/20">
            <Link href="https://www.tiktok.com/@nethen.rental" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <Tiktok className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary md:hidden hover:bg-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={cn(
            'md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm pb-4 h-screen',
            'animate-in fade-in-20 slide-in-from-top-2'
          )}
        >
          <nav className="grid gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="https://www.instagram.com/nethen.rental/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-foreground transition-colors hover:text-primary flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="h-5 w-5" /> Instagram
            </Link>
            <Link
                href="https://www.tiktok.com/@nethen.rental"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-foreground transition-colors hover:text-primary flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Tiktok className="h-5 w-5" /> TikTok
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
