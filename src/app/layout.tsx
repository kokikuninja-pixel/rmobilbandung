import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from '@/components/floating-action-button';

const siteUrl = 'https://rentalmotorjktrmjp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    template: `%s | RMJP Rental`,
  },
  description: 'Rental motor matic terpercaya di Jakarta Pusat. Armada terbaru, harga murah mulai Rp 60rb, gratis helm & jas hujan. Pesan via WhatsApp, antar jemput ke hotel/stasiun.',
  keywords: [
    'sewa motor jakarta',
    'rental motor jakarta',
    'sewa motor jakarta pusat',
    'rental motor jakarta pusat',
    'rmjp rental',
    'sewa motor matic jakarta',
    'rental motor murah jakarta',
    'sewa motor dekat stasiun gambir',
    'rental motor kemayoran',
    'sewa motor harian jakarta',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    description: 'Keliling Jakarta tanpa macet dengan armada terbaru. Jemput unitmu di Kemayoran atau kirim ke hotel/stasiun terdekat.',
    url: siteUrl,
    siteName: 'RMJP Rental',
    images: [
      {
        url: 'https://i.imgur.com/PBSV9FN.png', // Must be an absolute URL
        width: 1024,
        height: 1024,
        alt: 'RMJP Rental Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMJP Rental | Sewa Motor Matic Murah & Terpercaya di Jakarta Pusat',
    description: 'Keliling Jakarta tanpa macet dengan armada terbaru. Jemput unitmu di Kemayoran atau kirim ke hotel/stasiun terdekat.',
    images: ['https://i.imgur.com/PBSV9FN.png'], // Must be an absolute URL
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
  image: 'https://i.imgur.com/PBSV9FN.png',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <FloatingActionButton />
      </body>
    </html>
  );
}
