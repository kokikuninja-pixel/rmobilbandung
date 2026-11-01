import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';
import { getBrand, getAdsId, getGtmId, getSiteUrl } from '@/brands';
import { JsonLd } from '@/components/json-ld';
import { GoogleTags } from '@/components/google-tags';
import { buildLocalBusinessJsonLd, buildWebsiteJsonLd } from '@/lib/seo';
import { getTagSettingsFromEnv } from '@/lib/tag-settings';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const brand = getBrand();
const siteUrl = getSiteUrl();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563EB',
};

const defaultTitle = `${brand.shortName} - Rental Mobil ${brand.city} | Sewa Mobil Cepat & Aman`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: brand.description,
  applicationName: brand.legalName,
  keywords: [
    `sewa mobil ${brand.city}`,
    `rental mobil ${brand.city}`,
    'sewa mobil bandung',
    'rental mobil murah bandung',
    brand.shortName,
  ],
  authors: [{ name: brand.legalName }],
  creator: brand.legalName,
  publisher: brand.legalName,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: brand.legalName,
    title: defaultTitle,
    description: brand.description,
    images: [
      {
        url: brand.ogImagePath,
        width: 1200,
        height: 630,
        alt: brand.legalName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: brand.description,
    images: [brand.ogImagePath],
  },
  category: 'travel',
};

/**
 * Tag IDs are read from env only, never from cookies.
 *
 * This keeps every public page statically rendered (no per-request storage
 * read). Reading cookies here would opt the whole site into dynamic rendering,
 * which costs TTFB on every page for values that change maybe once a year.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envTags = getTagSettingsFromEnv();
  const gtmId = envTags.gtmId || getGtmId();
  const adsId = envTags.adsId || getAdsId();

  return (
    <html lang="id" className={cn('!scroll-smooth', inter.variable, plusJakarta.variable)}>
      <body className={cn('font-sans antialiased', inter.className)}>
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        <GoogleTagManager gtmId={gtmId} />
        {/* Google Ads gtag.js (konversi "Klik WhatsApp"). GA4 langsung hanya bila tanpa GTM. */}
        <GoogleTags ga4Id={gtmId ? undefined : envTags.ga4Id} adsId={adsId} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
