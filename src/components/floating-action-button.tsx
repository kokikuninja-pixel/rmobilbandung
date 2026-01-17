'use client';

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function FloatingActionButton() {
  const phoneNumber = '6285189976267';
  const message = 'Halo Admin RMJP, saya ingin bertanya tentang sewa motor.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full p-0 shadow-lg transition-all animate-bounce hover:animate-none bg-green-500 hover:bg-green-600 text-white shadow-green-500/40 hover:shadow-green-500/60"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi via WhatsApp"
      >
        <Phone className="h-7 w-7" />
      </Link>
    </Button>
  );
}
