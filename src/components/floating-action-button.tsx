'use client';

import { MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function FloatingActionButton() {
  const whatsappMessage = `Halo Admin RMJP! 👋

Saya ingin bertanya mengenai ketersediaan sewa motor. Berikut detail identitas saya:

Nama: [isi nama]

Asal Kota: [isi kota asal]

Domisili Sekarang: [isi lokasi domisili sekarang]

Mohon info ketersediaan unit dan persyaratannya ya min. Terima kasih!`;

  const whatsappUrl = `https://wa.me/6285189976267?text=${encodeURIComponent(whatsappMessage)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(whatsappUrl)}&size=200x200&bgcolor=ffffff&color=003399&qzone=1`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 p-0 text-white shadow-lg transition-all hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate-bounce hover:animate-none"
          aria-label="Chat via WhatsApp"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4 bg-background border-primary shadow-2xl mr-4 mb-2 rounded-xl">
        <div className="flex flex-col items-center text-center gap-2">
            <p className="font-headline text-lg font-bold">Scan untuk Chat!</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg inline-block transition-transform hover:scale-105">
                <Image
                    src={qrCodeUrl}
                    alt="QR Code untuk WhatsApp RMJP Rental"
                    width={200}
                    height={200}
                />
            </a>
            <p className="text-sm text-muted-foreground">Atau klik kode QR di atas</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
