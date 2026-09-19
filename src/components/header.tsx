'use client';

import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tiktok } from './icons/tiktok';
import { getBrand } from '@/brands';

export function Header() {
  const brand = getBrand();
  const navLinks = brand.navLinks;
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isTransparent = isHome && !hasScrolled && !isMenuOpen;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
    <header
      className={cn(
        'top-0 z-50 w-full backdrop-blur-md transition-all duration-300',
        isTransparent
          ? 'absolute bg-black/20 border-b border-white/10'
          : 'sticky bg-background/95 border-b',
        isTransparent ? 'border-white/10' : hasScrolled ? 'shadow-md border-border/20' : 'shadow-none border-transparent'
      )}
    >
      <div className="container flex h-16 items-center gap-2 px-4 md:h-20 md:gap-4">
        <div className="flex shrink-0">
          <Link
            href="/"
            className={cn('flex items-center', isTransparent && 'brightness-0 invert')}
            onClick={() => setIsMenuOpen(false)}
          >
            <Logo />
          </Link>
        </div>

        <nav className={cn('hidden md:flex md:items-center md:gap-6 text-sm', isTransparent ? 'text-white' : 'text-foreground')}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-medium transition-colors',
                isTransparent ? 'text-white/80 hover:text-white' : 'text-foreground/80 hover:text-primary'
              )}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              'h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm',
              isTransparent && 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
            )}
            variant={isTransparent ? 'outline' : 'default'}
          >
            <Link href="/#pesan" onClick={(e) => handleLinkClick(e, '/#pesan')}>
              <span className="sm:hidden">Book Now</span>
              <span className="hidden sm:inline">Book Now</span>
            </Link>
          </Button>
          {brand.social.instagram && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                'hidden md:inline-flex',
                isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
              )}
            >
              <Link href={brand.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </Link>
            </Button>
          )}
          {brand.social.tiktok && (
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={cn(
                'hidden md:inline-flex',
                isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
              )}
            >
              <Link href={brand.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                <Tiktok className="h-5 w-5" />
              </Link>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'h-10 w-10 md:hidden',
              isTransparent ? 'text-white hover:bg-white/20 hover:text-white' : 'text-primary hover:bg-primary/20'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-nav"
          className={cn(
            'md:hidden absolute inset-x-0 top-full z-50 border-b border-border/30 bg-background shadow-lg',
            'max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain',
            'animate-in fade-in-20 slide-in-from-top-2'
          )}
        >
          <nav className="flex flex-col gap-1 p-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary active:bg-primary/15"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-border" />

            <div className="grid grid-cols-2 gap-2 px-1">
              {brand.social.instagram && (
                <Link
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </Link>
              )}
              {brand.social.tiktok && (
                <Link
                  href={brand.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-3 text-sm font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Tiktok className="h-4 w-4" /> TikTok
                </Link>
              )}
            </div>

            <Button asChild size="lg" className="mt-3 h-12 w-full text-base font-semibold">
              <Link href="/#pesan" onClick={(e) => handleLinkClick(e, '/#pesan')}>
                Sewa Sekarang
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
