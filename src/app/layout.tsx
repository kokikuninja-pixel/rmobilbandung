
import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';

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
  title: 'RMB - Rental Motor Bandung',
  description: 'Sewa motor matic di Bandung dengan mudah dan cepat. Harga terjangkau, layanan terpercaya, unit siap pakai.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11380968042"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11380968042');
        `}
      </script>
      </head>
      <body className={cn("font-sans", inter.variable, jakarta.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
