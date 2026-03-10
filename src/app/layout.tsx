
import type {Metadata} from 'next';
import Script from 'next/script';
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
      <body className={cn("font-sans")}>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11380968042"></Script>
        <Script id="google-ads-config">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-11380968042');
          `}
        </Script>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
