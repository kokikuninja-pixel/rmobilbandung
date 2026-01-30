
import { GoogleTagManager } from '@next/third-parties/google';
import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from '@/components/floating-action-button';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const siteUrl = 'https://rentalmotorsemarangnethen.com';

const fontHeadline = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-headline',
});

const fontBody = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nethen Rental | Sewa Motor Murah & Terpercaya di Semarang',
    template: `%s | Nethen Rental`,
  },
  description: 'Sewa motor di Semarang? Nethen Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Rental motor terdekat dari Stasiun Tawang & Poncol.',
  keywords: [
    'sewa motor semarang',
    'rental motor semarang',
    'sewa motor terdekat semarang',
    'rental motor terdekat semarang',
    'sewa motor harian semarang',
    'rental motor murah semarang',
    'sewa motor matic semarang',
    'sewa motor dekat stasiun tawang',
    'rental motor simpang lima',
    'sewa motor syarat mudah',
    'sewa motor vario semarang',
    'sewa motor scoopy semarang',
    'sewa motor aerox semarang',
    'nethen rental',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nethen Rental | Sewa Motor Murah & Terpercaya di Semarang',
    description: 'Sewa motor di Semarang? Nethen Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
    url: siteUrl,
    siteName: 'Nethen Rental',
    images: [
      {
        url: '/images/og-image.png', // Local image in /public/images/
        width: 1200,
        height: 630,
        alt: 'Sewa Motor Murah di Semarang | Nethen Rental',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nethen Rental | Sewa Motor Murah & Terpercaya di Semarang',
    description: 'Sewa motor di Semarang? Nethen Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
    images: ['/images/og-image.png'], // Local image in /public/images/
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nethen Rental - Rental Motor Semarang',
  image: `${siteUrl}/images/logo-nethen-new.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+6287738908578',
  priceRange: 'Rp 60.000 - Rp 180.000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Imam Bonjol No.108',
    addressLocality: 'Semarang Utara',
    addressRegion: 'Kota Semarang',
    postalCode: '50132',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.982903,
    longitude: 110.4165829,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '05:00',
      closes: '21:30',
    },
  ],
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '4.9',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Pelanggan Google',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <Script
          id="json-ld-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(
        "font-body antialiased",
        fontHeadline.variable,
        fontBody.variable
        )}>
        <GoogleTagManager gtmId="GTM-KTD5D54J" />
        <Header />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
        <Toaster />
        <FloatingActionButton />
      </body>
    </html>
  );
}
