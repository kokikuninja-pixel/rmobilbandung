
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'RMB - Rental Motor Bandung | Sewa Matic Cepat & Aman',
  description: 'Sewa motor matic di Bandung dengan mudah dan cepat. Harga terjangkau mulai 60rb, layanan terpercaya, unit siap pakai. Pesan sekarang!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        <GoogleTagManager gtmId="AW-11380968042" />
      </head>
      <body className={cn("font-sans")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
