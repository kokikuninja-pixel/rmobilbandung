export interface Car {
  id: string;
  name: string;
  segment: 'MPV' | 'SUV' | 'Premium' | 'Minibus';
  seats: number;
  transmission: 'Matic' | 'Manual';
  price: number;
  feature: string;
  imageUrl: string;
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
    price: 350000,
    feature: 'MPV andalan untuk keluarga, irit dan nyaman di dalam kota maupun luar kota.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Toyota+Avanza',
    imageHint: 'toyota avanza',
    popular: true,
  },
  {
    id: 'toyota-calya',
    name: 'Toyota Calya',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 300000,
    feature: 'MPV ringkas dengan harga paling bersahabat untuk perjalanan harian.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Toyota+Calya',
    imageHint: 'toyota calya',
  },
  {
    id: 'toyota-innova-reborn',
    name: 'Toyota Innova Reborn',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 600000,
    feature: 'Leg room lega dan mesin diesel tangguh, nyaman untuk perjalanan jauh.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Innova+Reborn',
    imageHint: 'toyota innova reborn',
    popular: true,
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    segment: 'SUV',
    seats: 7,
    transmission: 'Matic',
    price: 1200000,
    feature: 'SUV tangguh untuk wisata pegunungan seperti Lembang dan Ciwidey.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Toyota+Fortuner',
    imageHint: 'toyota fortuner',
  },
  {
    id: 'toyota-alphard',
    name: 'Toyota Alphard',
    segment: 'Premium',
    seats: 7,
    transmission: 'Matic',
    price: 2500000,
    feature: 'MPV premium mewah dengan kursi captain seat dan kenyamanan eksekutif.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Toyota+Alphard',
    imageHint: 'toyota alphard',
    popular: true,
  },
  {
    id: 'toyota-hiace',
    name: 'Toyota Hiace',
    segment: 'Minibus',
    seats: 6,
    transmission: 'Matic',
    price: 1500000,
    feature: 'Minibus eksekutif untuk rombongan wisata maupun perjalanan bisnis.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Toyota+Hiace',
    imageHint: 'toyota hiace',
  },
  {
    id: 'honda-brio',
    name: 'Honda Brio',
    segment: 'MPV',
    seats: 5,
    transmission: 'Matic',
    price: 275000,
    feature: 'City car lincah dan irit, paling pas menembus kemacetan Bandung.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Honda+Brio',
    imageHint: 'honda brio',
  },
  {
    id: 'hyundai-stargazer',
    name: 'Hyundai Stargazer',
    segment: 'MPV',
    seats: 7,
    transmission: 'Matic',
    price: 550000,
    feature: 'MPV modern dengan fitur ADAS dan kabin yang sangat lega.',
    imageUrl: 'https://placehold.co/600x450/FFF4DD/9A6300?text=Hyundai+Stargazer',
    imageHint: 'hyundai stargazer',
  },
];