
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rmb-rental-bandung.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RMB - Rental Motor Bandung | Sewa Matic Cepat & Aman',
  description: 'Sewa motor matic di Bandung dengan mudah dan cepat. Harga terjangkau mulai 60rb, layanan terpercaya, unit siap pakai. Pesan sekarang!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';

  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </head>
      <body className={cn("font-sans")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
