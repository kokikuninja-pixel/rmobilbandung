
import type {Metadata} from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from '@/components/floating-action-button';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const siteUrl = 'https://rentalmotorjktrmjp.com';

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
    default: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    template: `%s | RMJP Rental`,
  },
  description: 'Sewa motor di Jakarta Pusat? RMJP Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah mulai Rp 60rb. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
  keywords: [
    'sewa motor jakarta pusat',
    'rental motor jakarta pusat',
    'sewa motor jakarta',
    'rental motor jakarta',
    'rental motor terdekat',
    'sewa motor harian jakarta',
    'rental motor murah jakarta',
    'sewa motor matic jakarta',
    'sewa motor dekat stasiun gambir',
    'rental motor kemayoran',
    'sewa motor syarat mudah',
    'rmjp rental',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    description: 'Sewa motor di Jakarta Pusat? RMJP Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah mulai Rp 60rb. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
    url: siteUrl,
    siteName: 'RMJP Rental',
    images: [
      {
        url: '/images/og-image.png', // Local image in /public/images/
        width: 1200,
        height: 630,
        alt: 'Sewa Motor Murah di Jakarta Pusat | RMJP Rental',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    description: 'Sewa motor di Jakarta Pusat? RMJP Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah mulai Rp 60rb. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
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
  name: 'RMJP Rental - Rental Motor Jakarta Pusat',
  image: `${siteUrl}/images/LOGO-RMJP-R.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+6285189976267',
  priceRange: 'Rp 60.000 - Rp 180.000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. F Utan Panjang III No.23, RT.14/RW.5',
    addressLocality: 'Kecamatan Kemayoran',
    addressRegion: 'Kota Jakarta Pusat',
    postalCode: '10650',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.1681334,
    longitude: 106.8416485,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
        <Header />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
        <Toaster />
        <FloatingActionButton />
      </body>
    </html>
  );
}
