import type { BrandConfig } from './types';

/**
 * RMB — Rental Motor Bandung
 * This is the REFERENCE brand template for all other landings.
 */
/**
 * RMB — Rental Mobil Bandung
 * Full car rental brand (previously motor). All product surfaces now show cars.
 */
export const rmbBrand: BrandConfig = {
  id: 'rmb',
  shortName: 'RMB',
  legalName: 'RMB Rental Mobil Bandung',
  city: 'Bandung',
  tagline: 'Kebebasan Menjelajah Dimulai di Sini.',
  description:
    'Sewa mobil di Bandung dengan mudah dan cepat. Harga tanya admin, sistem lepas kunci tanpa supir, layanan terpercaya, unit siap pakai. Pesan sekarang!',
  siteUrl: 'https://rentalmobilbandungrmb.com',
  whatsappNumber: '6282329616166',
  gtmId: 'GTM-KM5GLHDW',
  adsId: 'AW-11380968042',
  logoPath: '/images/logo.png',
  ogImagePath: '/images/Hero_White_car_driving_on_road_20260919164146.webp',
  social: {
    instagram: 'https://www.instagram.com/inforentalmotorbandung/',
    tiktok: 'https://www.tiktok.com/@nethen.rental',
  },
  navLinks: [
    { href: '/armada', label: 'Armada' },
    { href: '/harga', label: 'Harga' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/lokasi', label: 'Lokasi' },
    { href: '/faq', label: 'FAQ' },
    { href: '/snk', label: 'S&K' },
  ],
  seoLocations: [
    { name: 'Sewa Mobil Dago', href: '/sewa-mobil-dago' },
    { name: 'Rental Mobil Lembang', href: '/sewa-mobil-lembang' },
    { name: 'Sewa Mobil Braga', href: '/sewa-mobil-braga' },
    { name: 'Rental Mobil Setiabudi', href: '/sewa-mobil-setiabudi' },
    { name: 'Sewa Mobil Cihampelas', href: '/sewa-mobil-cihampelas' },
    { name: 'Rental Mobil Gedung Sate', href: '/sewa-mobil-gedung-sate' },
    { name: 'Sewa Mobil Buahbatu', href: '/sewa-mobil-buahbatu' },
    { name: 'Rental Mobil Stasiun Bandung', href: '/sewa-mobil-stasiun-bandung' },
    { name: 'Sewa Mobil Bandara Husein Sastranegara', href: '/sewa-mobil-bandara-husein' },
  ],
  homepageSections: [
    'Header',
    'Hero',
    'Keunggulan',
    'Armada',
    'Proses',
    'FAQ',
    'OrderForm (#pesan)',
    'CTA',
    'Footer',
    'FloatingWhatsApp',
    'PromoPopup',
  ],
  promoPopup: {
    enabled: true,
    delayMs: 12000,
    eyebrow: 'Unit mobil terbatas hari ini',
    title: 'Pesan sekarang, keburu kehabisan!',
    description:
      'Weekend & musim liburan unit cepat ludes. Amankan mobil favorit Anda sekarang sebelum penuh.',
    primaryCta: 'Pesan Sekarang',
    secondaryCta: 'Chat WhatsApp',
    footnote: 'Respon cepat via WhatsApp · Harga tanya admin',
  },
  business: {
    streetAddress: 'Jl. Samiaji No.11A, Arjuna, Kec. Cicendo',
    addressLocality: 'Bandung',
    addressRegion: 'Jawa Barat',
    postalCode: '40172',
    addressCountry: 'ID',
    latitude: -6.892019,
    longitude: 107.587885,
    openingHours: 'Mo-Su 05:00-21:30',
    priceRange: 'Harga tanya admin',
  },
  theme: {
    background: '43 67% 96%',
    foreground: '80 24% 9%',
    primary: '43 100% 54%',
    primaryForeground: '80 24% 9%',
    muted: '43 33% 91%',
    mutedForeground: '0 0% 40%',
    border: '43 33% 91%',
    ring: '43 100% 54%',
    radius: '0.625rem',
    fontSans: 'Inter',
    fontDisplay: 'Plus Jakarta Sans',
  },
};
