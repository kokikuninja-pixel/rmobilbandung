'use client';

import { FilePenLine } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function FloatingActionButton() {
  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full p-0 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all animate-bounce hover:animate-none"
    >
      <Link
        href="/#pesan"
        aria-label="Pesan Sekarang"
      >
        <FilePenLine className="h-7 w-7" />
      </Link>
    </Button>
  );
}
