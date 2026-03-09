
import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-display',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'MaticRent - Sewa Skuter Matic',
  description: 'Sewa skuter matic premium di kota Anda dengan mudah dan cepat. Harga terjangkau, layanan 24/7.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
       <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11380968042"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11380968042');
          `}
        </Script>
      </head>
      <body className={cn("font-sans", inter.variable, jakarta.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
