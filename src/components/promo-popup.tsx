'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { getBrand, getWhatsAppLink } from '@/brands';

const STORAGE_KEY = 'rmb-promo-popup-dismissed';

export function PromoPopup() {
  const brand = getBrand();
  const popup = brand.promoPopup;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!popup.enabled) return;

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      // ignore storage errors
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      // Don't interrupt users who already jumped to the form
      if (window.location.hash === '#pesan') return;
      shown = true;
      setOpen(true);
      window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (scrolled >= 0.35) show();
    };

    const timer = window.setTimeout(show, popup.delayMs);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [popup.delayMs, popup.enabled]);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  const whatsappUrl = getWhatsAppLink(
    `Halo Admin ${brand.shortName}! Saya ingin pesan mobil sekarang sebelum kehabisan.`
  );

  const goToForm = () => {
    dismiss();
    const target = document.getElementById('pesan');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#pesan';
    }
  };

  if (!popup.enabled) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) dismiss();
        else setOpen(true);
      }}
    >
      <DialogContent className="z-[60] w-[calc(100%-1.5rem)] max-w-md gap-0 overflow-hidden rounded-2xl border-0 p-0 sm:rounded-2xl">
        <div className="bg-primary px-5 pb-4 pt-5 text-primary-foreground">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            {popup.eyebrow}
          </div>
          <DialogHeader className="space-y-2 text-left">
            <DialogTitle className="font-display text-2xl font-bold leading-tight text-primary-foreground sm:text-[1.65rem]">
              {popup.title}
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed text-primary-foreground/85">
              {popup.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-3 bg-card p-5">
          <Button
            size="lg"
            className="h-12 w-full text-base font-semibold"
            onClick={goToForm}
          >
            {popup.primaryCta}
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full border-2 text-base font-semibold"
          >
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
              <MessageCircle className="h-5 w-5" />
              {popup.secondaryCta}
            </Link>
          </Button>
          {popup.footnote && (
            <p className="text-center text-xs text-muted-foreground">{popup.footnote}</p>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="w-full py-1 text-center text-xs text-muted-foreground underline-offset-2 hover:underline"
          >
            Nanti saja
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
