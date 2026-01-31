
import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from '@/components/floating-action-button';
import { cn } from '@/lib/utils';
import Script from 'next/script';

const siteUrl = 'https://rmb-rental-bandung.com';

const fontBody = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RMB Rental | Sewa Motor Murah & Terpercaya di Bandung',
    template: `%s | RMB Rental`,
  },
  description: 'Sewa motor di Bandung? RMB Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Rental motor terdekat dari Stasiun Bandung.',
  keywords: [
    'sewa motor bandung',
    'rental motor bandung',
    'sewa motor terdekat bandung',
    'rental motor terdekat bandung',
    'sewa motor harian bandung',
    'rental motor murah bandung',
    'sewa motor matic bandung',
    'sewa motor dekat stasiun bandung',
    'rental motor dago',
    'sewa motor syarat mudah',
    'sewa motor vario bandung',
    'sewa motor scoopy bandung',
    'sewa motor aerox bandung',
    'rmb rental',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RMB Rental | Sewa Motor Murah & Terpercaya di Bandung',
    description: 'Sewa motor di Bandung? RMB Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
    url: siteUrl,
    siteName: 'RMB Rental',
    images: [
      {
        url: '/images/logo-rmb.png',
        width: 512,
        height: 512,
        alt: 'Logo RMB Rental Motor Bandung',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMB Rental | Sewa Motor Murah & Terpercaya di Bandung',
    description: 'Sewa motor di Bandung? RMB Rental solusinya. Armada terbaru (Vario, Scoopy, Aerox), harga murah. Syarat mudah, gratis helm & jas hujan. Pesan sekarang!',
    images: ['/images/logo-rmb.png'],
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
  name: 'RMB Rental - Rental Motor Bandung',
  image: `${siteUrl}/images/logo-rmb.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+6282329616166',
  priceRange: 'Rp 60.000 - Rp 180.000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Samiaji No.11A, Arjuna, Kec. Cicendo',
    addressLocality: 'Bandung',
    addressRegion: 'Jawa Barat',
    postalCode: '40172',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.910034,
    longitude: 107.5936049,
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
        <link rel="icon" href="/images/logo-rmb.png" type="image/png" />
        <Script
          id="json-ld-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(
        "font-body antialiased",
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
