'use client';

import { Button } from './ui/button';
import { WhatsappIcon } from './icons/whatsapp';
import { WhatsAppLink } from './whatsapp-link';

export function FloatingActionButton() {
  return (
    <Button
      asChild
      className="fixed z-50 h-14 rounded-full bg-green-500 px-5 text-white shadow-lg transition-transform hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 md:h-16 md:px-6 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 md:bottom-6 md:right-6"
    >
      <WhatsAppLink location="floating" aria-label="Booking via WhatsApp">
        <WhatsappIcon className="h-7 w-7 md:h-8 md:w-8 shrink-0" />
        <span className="ml-2 font-semibold text-sm md:text-base">Booking via WhatsApp</span>
      </WhatsAppLink>
    </Button>
  );
}
