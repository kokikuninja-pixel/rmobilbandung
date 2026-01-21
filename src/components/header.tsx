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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // If mobile menu is open, always show the navbar
      if (isMenuOpen) {
        setIsVisible(true);
        return;
      }
      
      // Always show navbar at the top of the page
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide on scroll down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Show on scroll up
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMenuOpen]);


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
        'sticky top-0 z-50 w-full border-b border-secondary-foreground/10 bg-secondary/90 text-secondary-foreground shadow-md backdrop-blur-sm transition-transform duration-300 ease-in-out',
        {
            'translate-y-0': isVisible,
            '-translate-y-full': !isVisible,
        }
    )}>
      <div className="container flex h-24 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-secondary-foreground/80 transition-colors hover:text-primary"
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
          <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex text-primary hover:bg-primary/20">
            <Link href="https://www.instagram.com/rentalmotorjakartapusatrmjp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="hidden md:inline-flex text-primary hover:bg-primary/20">
            <Link href="https://www.tiktok.com/@rentalmotorjakart2" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
              <Tiktok className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary hover:bg-primary/20"
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
            'md:hidden absolute top-full left-0 w-full bg-secondary/90 backdrop-blur-sm pb-4',
            'animate-in fade-in-20 slide-in-from-top-2'
          )}
        >
          <nav className="grid gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-secondary-foreground transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="https://www.instagram.com/rentalmotorjakartapusatrmjp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-secondary-foreground transition-colors hover:text-primary flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="h-5 w-5" /> Instagram
            </Link>
            <Link
                href="https://www.tiktok.com/@rentalmotorjakart2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-secondary-foreground transition-colors hover:text-primary flex items-center gap-2"
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
