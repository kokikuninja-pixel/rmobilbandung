'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsappIcon } from './icons/whatsapp';
import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/brands';

export function FloatingActionButton() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const domainName = window.location.hostname;
    const message = `Halo, saya menghubungi dari situs ${domainName}. Saya ingin bertanya tentang sewa mobil.`;
    setWhatsappUrl(getWhatsAppLink(message));
  }, []);

  if (!whatsappUrl) {
    return null;
  }

  return (
    <Button
      asChild
      className="fixed z-50 h-14 w-14 rounded-full bg-green-500 p-0 text-white shadow-lg transition-transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 md:h-16 md:w-auto md:px-6 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6"
      aria-label="Chat via WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
        <span className="hidden font-semibold text-base md:inline">
          Chat via WhatsApp
        </span>
      </Link>
    </Button>
  );
}
