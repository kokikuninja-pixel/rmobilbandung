
import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
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
  const adsId = process.env.NEXT_PUBLIC_ADS_ID || 'AW-11380968042';

  return (
    <html lang="id" className="!scroll-smooth">
      <body className={cn("font-sans")}>
        {/* Google Tag Manager */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        
        {/* Google Ads / Analytics Tag */}
        {adsId && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}></Script>
            <Script id="google-ads-config">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${adsId}');
              `}
            </Script>
          </>
        )}
        
        {children}
        <Toaster />
      </body>
    </html>
  );
}
