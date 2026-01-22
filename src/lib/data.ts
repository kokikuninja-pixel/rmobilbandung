import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

// PENTING: Jika gambar tidak muncul, periksa dan sesuaikan nama file dan ekstensi (.png, .jpg, dll.) di sini.
const motorImageMap: { [id: string]: ImagePlaceholder } = {
  'yamaha-aerox': { id: 'yamaha-aerox', imageUrl: '/images/yamaha-aerox.png', description: 'Yamaha Aerox', imageHint: 'yamaha aerox' },
  'honda-vario-150': { id: 'honda-vario-150', imageUrl: '/images/honda-vario-150.png', description: 'Honda Vario 150cc', imageHint: 'honda vario 150' },
  'honda-vario-125': { id: 'honda-vario-125', imageUrl: '/images/honda-vario-125.png', description: 'Honda Vario 125 LED', imageHint: 'honda vario 125' },
  'yamaha-gear': { id: 'yamaha-gear', imageUrl: '/images/yamaha-gear.png', description: 'Yamaha Gear', imageHint: 'yamaha gear' },
  'yamaha-x-ride': { id: 'yamaha-x-ride', imageUrl: '/images/yamaha-x-ride.png', description: 'Yamaha X-Ride', imageHint: 'yamaha x-ride' },
  'yamaha-fino': { id: 'yamaha-fino', imageUrl: '/images/yamaha-fino.png', description: 'Yamaha Fino', imageHint: 'yamaha fino' },
  'yamaha-mio-z': { id: 'yamaha-mio-z', imageUrl: '/images/yamaha-mio-z.png', description: 'Yamaha Mio Z', imageHint: 'yamaha mio z' },
  'yamaha-soul-gt': { id: 'yamaha-soul-gt', imageUrl: '/images/yamaha-soul-gt.png', description: 'Yamaha Soul GT', imageHint: 'yamaha soul gt' },
  'yamaha-xeon-gt': { id: 'yamaha-xeon-gt', imageUrl: '/images/yamaha-xeon-gt.png', description: 'Yamaha Xeon GT', imageHint: 'yamaha xeon gt' },
  'honda-beat-new': { id: 'honda-beat-new', imageUrl: '/images/honda-beat-new.png', description: 'Honda Beat New', imageHint: 'honda beat' },
  'honda-beat-street': { id: 'honda-beat-street', imageUrl: '/images/honda-beat-street.png', description: 'Honda Beat Street', imageHint: 'honda beat street' },
  'honda-beat-esp': { id: 'honda-beat-esp', imageUrl: '/images/honda-beat-esp.png', description: 'Honda Beat ESP', imageHint: 'honda beat esp' },
  'honda-beat-pop': { id: 'honda-beat-pop', imageUrl: '/images/honda-beat-pop.png', description: 'Honda Beat Pop', imageHint: 'honda beat pop' },
  'honda-genio': { id: 'honda-genio', imageUrl: '/images/honda-genio.png', description: 'Honda Genio', imageHint: 'honda genio' },
  'honda-spacy': { id: 'honda-spacy', imageUrl: '/images/honda-spacy.png', description: 'Honda Spacy', imageHint: 'honda spacy' },
  'honda-scoopy-new': { id: 'honda-scoopy-new', imageUrl: '/images/honda-scoopy-new.png', description: 'Honda Scoopy (New)', imageHint: 'honda scoopy' },
  'honda-scoopy-old': { id: 'honda-scoopy-old', imageUrl: '/images/honda-scoopy-old.png', description: 'Honda Scoopy Old', imageHint: 'classic scooter' },
  'honda-vario-110': { id: 'honda-vario-110', imageUrl: '/images/honda-vario-110.png', description: 'Honda Vario 110cc', imageHint: 'honda vario 110' },
  'yamaha-mio-gt': { id: 'yamaha-mio-gt', imageUrl: '/images/yamaha-mio-gt.png', description: 'Yamaha Mio GT', imageHint: 'yamaha mio gt' },
  'yamaha-mio-j': { id: 'yamaha-mio-j', imageUrl: '/images/yamaha-mio-j.png', description: 'Yamaha Mio J', imageHint: 'yamaha mio j' },
  'polytron-fox-r': { id: 'polytron-fox-r', imageUrl: '/images/polytron-fox-r.png', description: 'Polytron Fox R', imageHint: 'electric scooter' },
};

const fallbackImage: ImagePlaceholder = {
  id: 'fallback',
  description: 'Fallback image',
  imageUrl: '/images/fallback.png',
  imageHint: 'placeholder'
};

export interface Motor {
  id: string;
  name: string;
  class: 'Premium' | 'Menengah' | 'Ekonomis' | 'Khusus';
  price: number;
  specs: {
    cc: string;
    torque: string;
  };
  feature: string;
  specialLabel?: 'Bagasi Luas' | 'Paling Irit' | 'Eco Friendly';
  cardImage: ImagePlaceholder;
  detailImage: ImagePlaceholder;
}

export const motorInventory: Motor[] = [
  {
    id: 'yamaha-aerox',
    name: 'Yamaha Aerox',
    class: 'Premium',
    price: 160000,
    specs: { cc: '155cc', torque: '13.9 Nm' },
    feature: 'Mesin VVA paling kencang dan ban lebar untuk stabilitas maksimal.',
    cardImage: motorImageMap['yamaha-aerox'] || fallbackImage,
    detailImage: motorImageMap['yamaha-aerox'] || fallbackImage
  },
  {
    id: 'honda-vario-150',
    name: 'Honda Vario 150cc',
    class: 'Premium',
    price: 120000,
    specs: { cc: '150cc', torque: '13.4 Nm' },
    feature: 'Akselerasi instan dengan fitur Smart Key (Keyless) untuk keamanan ekstra.',
    cardImage: motorImageMap['honda-vario-150'] || fallbackImage,
    detailImage: motorImageMap['honda-vario-150'] || fallbackImage
  },
  {
    id: 'honda-vario-125',
    name: 'Honda Vario 125 LED',
    class: 'Menengah',
    price: 110000,
    specs: { cc: '125cc', torque: '10.8 Nm' },
    feature: 'Sangat stabil untuk boncengan dan bagasi muat banyak barang.',
    specialLabel: 'Bagasi Luas',
    cardImage: motorImageMap['honda-vario-125'] || fallbackImage,
    detailImage: motorImageMap['honda-vario-125'] || fallbackImage
  },
  {
    id: 'yamaha-gear',
    name: 'Yamaha Gear',
    class: 'Menengah',
    price: 80000,
    specs: { cc: '125cc', torque: '9.5 Nm' },
    feature: 'Dilengkapi Double Hook (dua gantungan) untuk membawa banyak belanjaan.',
    cardImage: motorImageMap['yamaha-gear'] || fallbackImage,
    detailImage: motorImageMap['yamaha-gear'] || fallbackImage
  },
  {
    id: 'yamaha-x-ride',
    name: 'Yamaha X-Ride',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Suspensi tabung yang sangat empuk dan nyaman di jalan bergelombang.',
    cardImage: motorImageMap['yamaha-x-ride'] || fallbackImage,
    detailImage: motorImageMap['yamaha-x-ride'] || fallbackImage
  },
  {
    id: 'yamaha-fino',
    name: 'Yamaha Fino',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Desain retro yang elegan untuk keliling kota dengan gaya santai.',
    cardImage: motorImageMap['yamaha-fino'] || fallbackImage,
    detailImage: motorImageMap['yamaha-fino'] || fallbackImage
  },
  {
    id: 'yamaha-mio-z',
    name: 'Yamaha Mio Z',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Mesin Blue Core bertenaga dengan ban lebar agar lebih stabil.',
    cardImage: motorImageMap['yamaha-mio-z'] || fallbackImage,
    detailImage: motorImageMap['yamaha-mio-z'] || fallbackImage
  },
  {
    id: 'yamaha-soul-gt',
    name: 'Yamaha Soul GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Tampilan maskulin dengan lampu depan tajam dan bodi kokoh.',
    cardImage: motorImageMap['yamaha-soul-gt'] || fallbackImage,
    detailImage: motorImageMap['yamaha-soul-gt'] || fallbackImage
  },
  {
    id: 'yamaha-xeon-gt',
    name: 'Yamaha Xeon GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.8 Nm' },
    feature: 'Mesin berpendingin cairan (Radiator) untuk performa jarak jauh.',
    cardImage: motorImageMap['yamaha-xeon-gt'] || fallbackImage,
    detailImage: motorImageMap['yamaha-xeon-gt'] || fallbackImage
  },
  {
    id: 'honda-beat-new',
    name: 'Honda Beat New',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Rangka eSAF terbaru yang sangat ringan dan super hemat bbm.',
    specialLabel: 'Paling Irit',
    cardImage: motorImageMap['honda-beat-new'] || fallbackImage,
    detailImage: motorImageMap['honda-beat-new'] || fallbackImage
  },
  {
    id: 'honda-beat-street',
    name: 'Honda Beat Street',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Setang gaya petualang untuk posisi berkendara santai dan tidak pegal.',
    specialLabel: 'Paling Irit',
    cardImage: motorImageMap['honda-beat-street'] || fallbackImage,
    detailImage: motorImageMap['honda-beat-street'] || fallbackImage
  },
  {
    id: 'honda-beat-esp',
    name: 'Honda Beat ESP',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Starter halus (ACG) dan mesin bandel untuk pemakaian harian.',
    specialLabel: 'Paling Irit',
    cardImage: motorImageMap['honda-beat-esp'] || fallbackImage,
    detailImage: motorImageMap['honda-beat-esp'] || fallbackImage
  },
  {
    id: 'honda-beat-pop',
    name: 'Honda Beat Pop',
    class: 'Ekonomis',
    price: 70000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Bodi paling ramping dan lincah untuk menembus kemacetan parah.',
    specialLabel: 'Paling Irit',
    cardImage: motorImageMap['honda-beat-pop'] || fallbackImage,
    detailImage: motorImageMap['honda-beat-pop'] || fallbackImage
  },
  {
    id: 'honda-genio',
    name: 'Honda Genio',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Desain modern-retro yang ringan dan sangat mudah dikendalikan.',
    specialLabel: 'Paling Irit',
    cardImage: motorImageMap['honda-genio'] || fallbackImage,
    detailImage: motorImageMap['honda-genio'] || fallbackImage
  },
  {
    id: 'honda-spacy',
    name: 'Honda Spacy',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '110cc', torque: '8.9 Nm' },
    feature: 'Bagasi ekstra besar (Helm-In) untuk menyimpan tas di dalam jok.',
    specialLabel: 'Bagasi Luas',
    cardImage: motorImageMap['honda-spacy'] || fallbackImage,
    detailImage: motorImageMap['honda-spacy'] || fallbackImage
  },
  {
    id: 'honda-scoopy-new',
    name: 'Honda Scoopy (New)',
    class: 'Ekonomis',
    price: 120000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Ban ring 12 yang stabil dan fitur slot charger HP di laci.',
    cardImage: motorImageMap['honda-scoopy-new'] || fallbackImage,
    detailImage: motorImageMap['honda-scoopy-new'] || fallbackImage
  },
  {
    id: 'honda-scoopy-old',
    name: 'Honda Scoopy Old',
    class: 'Ekonomis',
    price: 110000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Velg jari-jari klasik untuk kesan retro yang otentik.',
    cardImage: motorImageMap['honda-scoopy-old'] || fallbackImage,
    detailImage: motorImageMap['honda-scoopy-old'] || fallbackImage
  },
  {
    id: 'honda-vario-110',
    name: 'Honda Vario 110cc',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Dek kaki luas dan dilengkapi fitur remote Answer Back System.',
    cardImage: motorImageMap['honda-vario-110'] || fallbackImage,
    detailImage: motorImageMap['honda-vario-110'] || fallbackImage
  },
  {
    id: 'yamaha-mio-gt',
    name: 'Yamaha Mio GT',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Desain sporty legendaris yang tangguh dan perawatan mudah.',
    cardImage: motorImageMap['yamaha-mio-gt'] || fallbackImage,
    detailImage: motorImageMap['yamaha-mio-gt'] || fallbackImage
  },
  {
    id: 'yamaha-mio-j',
    name: 'Yamaha Mio J',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Motor paling ringan memudahkan saat parkir atau manuver.',
    cardImage: motorImageMap['yamaha-mio-j'] || fallbackImage,
    detailImage: motorImageMap['yamaha-mio-j'] || fallbackImage
  },
  {
    id: 'polytron-fox-r',
    name: 'Polytron Fox R',
    class: 'Khusus',
    price: 130000,
    specs: { cc: '3000 Watt', torque: 'N/A' },
    feature: 'Motor listrik tanpa suara dengan fitur mundur (Reverse Mode).',
    specialLabel: 'Eco Friendly',
    cardImage: motorImageMap['polytron-fox-r'] || fallbackImage,
    detailImage: motorImageMap['polytron-fox-r'] || fallbackImage
  },
];

export const standardFacilities = [
  { icon: 'Helmet', text: '2 Helm' },
  { icon: 'Wind', text: '2 Jas Hujan' },
  { icon: 'Smartphone', text: 'Phone Holder' },
];

export interface Testimonial {
  name: string;
  role: string;
  avatarUrl: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
    {
      name: 'Budi Santoso',
      role: 'Turis Lokal',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'Pelayanannya cepat dan ramah. Motornya juga dalam kondisi prima, jadi keliling Jakarta lebih nyaman. Recommended!',
    },
    {
      name: 'Sarah Wijayanti',
      role: 'Mahasiswi',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      comment: 'Harga sewanya sangat terjangkau untuk kantong mahasiswa. Prosesnya juga nggak ribet, cocok untuk kebutuhan harian.',
    },
    {
      name: 'Alexandre Dubois',
      role: 'Turis Asing',
      avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      comment: "Great service! The staff was very helpful and the scooter was perfect for exploring the city. I'll definitely rent from RMJP again.",
    },
];
