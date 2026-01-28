'use client';

import { Button } from './ui/button';
import Link from 'next/link';
import { WhatsappIcon } from './icons/whatsapp';

export function FloatingActionButton() {
  const whatsappMessage = `Halo Admin Nethen! 👋

Saya ingin bertanya mengenai ketersediaan sewa motor. Berikut detail identitas saya:

Nama: [isi nama]

Asal Kota: [isi kota asal]

Domisili Sekarang: [isi lokasi domisili sekarang]

Mohon info ketersediaan unit dan persyaratannya ya min. Terima kasih!`;

  const whatsappUrl = `https://wa.me/6285189976267?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 p-0 text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate-bounce hover:animate-none md:w-auto md:px-6"
      aria-label="Chat via WhatsApp"
    >
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <WhatsappIcon className="h-8 w-8 shrink-0" />
        <span className="hidden font-semibold text-base md:inline">
          Pencet Untuk Hubungi kami
        </span>
      </Link>
    </Button>
  );
}
