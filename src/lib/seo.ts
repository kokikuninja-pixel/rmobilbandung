import type { Metadata } from 'next';
import { getBrand, getSiteUrl, getWhatsAppNumber } from '@/brands';
import { rentalFaqs } from '@/lib/faqs';

export function generateSeoMetadata(
  locationName: string,
  title: string,
  description: string,
  canonicalPath: string
): Metadata {
  const brand = getBrand();
  const siteUrl = getSiteUrl();
  const canonical = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: 'website',
      locale: 'id_ID',
      url: canonical,
      siteName: brand.legalName,
      title,
      description,
      images: [
        {
          url: brand.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${brand.shortName} — ${locationName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [brand.ogImagePath],
    },
  };
}

export function buildLocalBusinessJsonLd() {
  const brand = getBrand();
  const siteUrl = getSiteUrl();
  const phone = `+${getWhatsAppNumber()}`;
  const { business } = brand;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#business`,
    name: brand.legalName,
    alternateName: brand.shortName,
    description: brand.description,
    url: siteUrl,
    telephone: phone,
    image: `${siteUrl}${brand.ogImagePath}`,
    logo: `${siteUrl}${brand.logoPath}`,
    priceRange: business.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude,
    },
    openingHours: business.openingHours,
    areaServed: {
      '@type': 'City',
      name: brand.city,
    },
    sameAs: [brand.social.instagram, brand.social.tiktok].filter(Boolean),
  };
}

export function buildFaqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: rentalFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildWebsiteJsonLd() {
  const brand = getBrand();
  const siteUrl = getSiteUrl();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: brand.legalName,
    url: siteUrl,
    description: brand.description,
    inLanguage: 'id-ID',
    publisher: {
      '@id': `${siteUrl}/#business`,
    },
  };
}
