import type {Metadata} from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from '@next/third-parties/google';
import { cn } from '@/lib/utils';
import { getBrand, getGtmId, getSiteUrl } from '@/brands';
import { JsonLd } from '@/components/json-ld';
import { GoogleTags } from '@/components/google-tags';
import { buildLocalBusinessJsonLd, buildWebsiteJsonLd } from '@/lib/seo';
import { cookies } from 'next/headers';
import { TAG_SETTINGS_COOKIE, resolveTagSettings, sanitizeTagSettings, type TagSettings } from '@/lib/tag-settings';

/** Reads tag settings saved by the admin panel (signed cookie, httpOnly). */
async function readSavedTagSettings(cookieStore: Awaited<ReturnType<typeof cookies>>) {
  const raw = cookieStore.get(TAG_SETTINGS_COOKIE)?.value;
  if (!raw) return null;
  try {
    return sanitizeTagSettings(JSON.parse(raw) as Partial<TagSettings>);
  } catch {
    return null;
  }
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GTM id can come from env or from the admin panel (saved in a cookie).
  const cookieStore = await cookies();
  const savedTags = await readSavedTagSettings(cookieStore);
  const tags = resolveTagSettings(savedTags);
  const gtmId = tags.gtmId || getGtmId();

  return (
    <html lang="id" className={cn('!scroll-smooth', inter.variable, plusJakarta.variable)}>
      <body className={cn('font-sans antialiased', inter.className)}>
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <JsonLd data={buildWebsiteJsonLd()} />
        <GoogleTagManager gtmId={gtmId} />
        {/* Direct GA4 / Google Ads tags. Skip when GTM already fires these tags. */}
        {!gtmId && <GoogleTags ga4Id={tags.ga4Id} adsId={tags.adsId} />}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
