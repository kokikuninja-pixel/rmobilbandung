
import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';

// Menggunakan domain yang benar sebagai fallback utama
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rentalmotorbandungrmb.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'RMB - Rental Motor Bandung | Sewa Matic Cepat & Aman',
  description: 'Sewa motor matic di Bandung dengan mudah dan cepat. Harga terjangkau mulai 60rb, layanan terpercaya, unit siap pakai. Pesan sekarang!',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'RMB Rental Motor Bandung',
    images: [
      {
        url: '/images/hero1.png',
        width: 1200,
        height: 630,
        alt: 'RMB Rental Motor Bandung',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GTM ID: GTM-KM5GLHDW
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KM5GLHDW';
  // Ads ID: AW-11380968042
  const adsId = process.env.NEXT_PUBLIC_ADS_ID || 'AW-11380968042';

  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        {/* Google tag (gtag.js) - Manual Installation */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-manual-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${adsId}');
          `}
        </Script>
      </head>
      <body className={cn("font-sans")}>
        {/* Google Tag Manager (noscript handled by the component) */}
        <GoogleTagManager gtmId={gtmId} />
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
