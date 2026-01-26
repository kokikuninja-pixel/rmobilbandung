'use client';

import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function FloatingActionButton() {
  const whatsappMessage = `Halo Admin RMJP! 👋

Saya ingin bertanya mengenai ketersediaan sewa motor. Berikut detail identitas saya:

Nama: [isi nama]

Asal Kota: [isi kota asal]

Domisili Sekarang: [isi lokasi domisili sekarang]

Mohon info ketersediaan unit dan persyaratannya ya min. Terima kasih!`;

  const whatsappUrl = `https://wa.me/6285189976267?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 rounded-full bg-green-500 px-6 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate-bounce hover:animate-none"
      aria-label="Chat via WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageSquare className="mr-3 h-6 w-6" />
        Pencet Untuk Hubungi kami
      </Link>
    </Button>
  );
}
