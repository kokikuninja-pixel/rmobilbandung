export interface CarPricing {
  day: number;
  week: number;
  month: number;
}

export interface Car {
  id: string;
  name: string;
  segment: 'MPV' | 'SUV' | 'Premium' | 'Minibus';
  seats: number;
  transmission: 'Matic' | 'Manual';
  /** Tarif lepas kunci, matic, per 24 jam / minggu / bulan. Harus sama dengan iklan. */
  pricing: CarPricing;
  feature: string;
  imageUrl: string;
  sceneImage?: string;
  imageHint: string;
  popular?: boolean;
}

export const carInventory: Car[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    pricing: { day: 385000, week: 2300000, month: 6000000 },
    feature: 'MPV andalan untuk keluarga, irit dan nyaman di dalam kota maupun luar kota.',
    imageUrl: '/images/Toyota_Avanza_front_view_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Avanza_parked_in_driveway_20260919114928.jpeg',
    imageHint: 'Toyota Avanza',
    popular: true,
  },
  {
    id: 'toyota-calya',
    name: 'Toyota Calya',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    pricing: { day: 319000, week: 2000000, month: 5000000 },
    feature: 'MPV ringkas dengan harga paling bersahabat untuk perjalanan harian.',
    imageUrl: '/images/Toyota_Calya_in_photo_studio_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Calya_parked_on_street_20260919114928.jpeg',
    imageHint: 'Toyota Calya',
  },
  {
    id: 'daihatsu-sigra',
    name: 'Daihatsu Sigra',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    pricing: { day: 319000, week: 2000000, month: 5000000 },
    feature: 'MPV irit dan lincah, pas untuk penjelajahan kota maupun keluar kota.',
    imageUrl: '/images/Silver_Daihatsu_Sigra_in_studio_20260919114928.jpeg',
    sceneImage: '/images/Daihatsu_Sigra_parked_at_cafe_20260919114928.jpeg',
    imageHint: 'Daihatsu Sigra',
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    segment: 'SUV',
    seats: 7,
    transmission: 'Matic',
    pricing: { day: 1100000, week: 7200000, month: 18000000 },
    feature: 'SUV tangguh untuk wisata pegunungan seperti Lembang dan Ciwidey.',
    imageUrl: '/images/Toyota_Fortuner_in_studio_20260919114928.jpeg',
    sceneImage: '/images/Toyota_Fortuner_parked_on_road_20260919114928.jpeg',
    imageHint: 'Toyota Fortuner',
  },
];

export const PRICE_NOTE =
  'Harga bisa naik saat libur panjang dan akan dikonfirmasi via WhatsApp.';
export const PRICE_BASIS = 'Lepas kunci, matic, per 24 jam';

export function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString('id-ID')}`;
}
