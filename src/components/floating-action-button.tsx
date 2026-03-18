'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsappIcon } from './icons/whatsapp';
import { useState, useEffect } from 'react';

export function FloatingActionButton() {
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6282329616166';
    const domainName = window.location.hostname;
    const message = `Halo, saya menghubungi dari situs ${domainName}. Saya ingin bertanya tentang sewa motor.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
  }, []);

  if (!whatsappUrl) {
    return null;
  }

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 p-0 text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate-bounce hover:animate-none md:w-auto md:px-6"
      aria-label="Chat via WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="h-8 w-8 shrink-0" />
        <span className="hidden font-semibold text-base md:inline">
          Chat via WhatsApp
        </span>
      </Link>
    </Button>
  );
}
