import type { ImagePlaceholder } from './placeholder-images';

// PENTING: Jika gambar tidak muncul, periksa dan sesuaikan nama file Anda di bawah ini.
// Pastikan path di `imageUrl` (misal: '/images/yamaha-aerox.png') SAMA PERSIS
// dengan nama file di folder `public/images/` Anda, termasuk ekstensinya (.png atau .jpg).

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
    cardImage: { id: 'yamaha-aerox-card', imageUrl: '/images/yamaha-aerox.png', description: 'Yamaha Aerox', imageHint: 'yamaha aerox' },
    detailImage: { id: 'yamaha-aerox-detail', imageUrl: '/images/yamaha-aerox.png', description: 'Yamaha Aerox', imageHint: 'yamaha aerox side' }
  },
  {
    id: 'honda-vario-150',
    name: 'Honda Vario 150cc',
    class: 'Premium',
    price: 120000,
    specs: { cc: '150cc', torque: '13.4 Nm' },
    feature: 'Akselerasi instan dengan fitur Smart Key (Keyless) untuk keamanan ekstra.',
    cardImage: { id: 'honda-vario-150-card', imageUrl: '/images/Honda-vario-150.png', description: 'Honda Vario 150cc', imageHint: 'honda vario 150' },
    detailImage: { id: 'honda-vario-150-detail', imageUrl: '/images/Honda-vario-150.png', description: 'Honda Vario 150cc', imageHint: 'honda vario 150 side' }
  },
  {
    id: 'honda-vario-125',
    name: 'Honda Vario 125 LED',
    class: 'Menengah',
    price: 110000,
    specs: { cc: '125cc', torque: '10.8 Nm' },
    feature: 'Sangat stabil untuk boncengan dan bagasi muat banyak barang.',
    specialLabel: 'Bagasi Luas',
    cardImage: { id: 'honda-vario-125-card', imageUrl: '/images/Honda-vario-125.png', description: 'Honda Vario 125 LED', imageHint: 'honda vario 125' },
    detailImage: { id: 'honda-vario-125-detail', imageUrl: '/images/Honda-vario-125.png', description: 'Honda Vario 125 LED', imageHint: 'honda vario 125 side' }
  },
  {
    id: 'yamaha-gear',
    name: 'Yamaha Gear',
    class: 'Menengah',
    price: 80000,
    specs: { cc: '125cc', torque: '9.5 Nm' },
    feature: 'Dilengkapi Double Hook (dua gantungan) untuk membawa banyak belanjaan.',
    cardImage: { id: 'yamaha-gear-card', imageUrl: '/images/yamaha-gear.png', description: 'Yamaha Gear', imageHint: 'yamaha gear' },
    detailImage: { id: 'yamaha-gear-detail', imageUrl: '/images/yamaha-gear.png', description: 'Yamaha Gear', imageHint: 'yamaha gear side' }
  },
  {
    id: 'yamaha-x-ride',
    name: 'Yamaha X-Ride',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Suspensi tabung yang sangat empuk dan nyaman di jalan bergelombang.',
    cardImage: { id: 'yamaha-x-ride-card', imageUrl: '/images/yamaha-x-ride.png', description: 'Yamaha X-Ride', imageHint: 'yamaha x-ride' },
    detailImage: { id: 'yamaha-x-ride-detail', imageUrl: '/images/yamaha-x-ride.png', description: 'Yamaha X-Ride', imageHint: 'yamaha x-ride side' }
  },
  {
    id: 'yamaha-fino',
    name: 'Yamaha Fino',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Desain retro yang elegan untuk keliling kota dengan gaya santai.',
    cardImage: { id: 'yamaha-fino-card', imageUrl: '/images/yamaha-fino.png', description: 'Yamaha Fino', imageHint: 'yamaha fino' },
    detailImage: { id: 'yamaha-fino-detail', imageUrl: '/images/yamaha-fino.png', description: 'Yamaha Fino', imageHint: 'yamaha fino side' }
  },
  {
    id: 'yamaha-mio-z',
    name: 'Yamaha Mio Z',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Mesin Blue Core bertenaga dengan ban lebar agar lebih stabil.',
    cardImage: { id: 'yamaha-mio-z-card', imageUrl: '/images/yamaha-mio-z.png', description: 'Yamaha Mio Z', imageHint: 'yamaha mio z' },
    detailImage: { id: 'yamaha-mio-z-detail', imageUrl: '/images/yamaha-mio-z.png', description: 'Yamaha Mio Z', imageHint: 'yamaha mio z side' }
  },
  {
    id: 'yamaha-soul-gt',
    name: 'Yamaha Soul GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Tampilan maskulin dengan lampu depan tajam dan bodi kokoh.',
    cardImage: { id: 'yamaha-soul-gt-card', imageUrl: '/images/yamaha-soul-gt.png', description: 'Yamaha Soul GT', imageHint: 'yamaha soul gt' },
    detailImage: { id: 'yamaha-soul-gt-detail', imageUrl: '/images/yamaha-soul-gt.png', description: 'Yamaha Soul GT', imageHint: 'yamaha soul gt side' }
  },
  {
    id: 'yamaha-xeon-gt',
    name: 'Yamaha Xeon GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.8 Nm' },
    feature: 'Mesin berpendingin cairan (Radiator) untuk performa jarak jauh.',
    cardImage: { id: 'yamaha-xeon-gt-card', imageUrl: '/images/yamaha-xeon-gt.png', description: 'Yamaha Xeon GT', imageHint: 'yamaha xeon gt' },
    detailImage: { id: 'yamaha-xeon-gt-detail', imageUrl: '/images/yamaha-xeon-gt.png', description: 'Yamaha Xeon GT', imageHint: 'yamaha xeon gt side' }
  },
  {
    id: 'honda-beat-new',
    name: 'Honda Beat New',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Rangka eSAF terbaru yang sangat ringan dan super hemat bbm.',
    specialLabel: 'Paling Irit',
    cardImage: { id: 'honda-beat-new-card', imageUrl: '/images/Honda-beat-new.png', description: 'Honda Beat New', imageHint: 'honda beat' },
    detailImage: { id: 'honda-beat-new-detail', imageUrl: '/images/Honda-beat-new.png', description: 'Honda Beat New', imageHint: 'honda beat side' }
  },
  {
    id: 'honda-beat-street',
    name: 'Honda Beat Street',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Setang gaya petualang untuk posisi berkendara santai dan tidak pegal.',
    specialLabel: 'Paling Irit',
    cardImage: { id: 'honda-beat-street-card', imageUrl: '/images/Honda-beat-street.png', description: 'Honda Beat Street', imageHint: 'honda beat street' },
    detailImage: { id: 'honda-beat-street-detail', imageUrl: '/images/Honda-beat-street.png', description: 'Honda Beat Street', imageHint: 'honda beat street side' }
  },
  {
    id: 'honda-beat-esp',
    name: 'Honda Beat ESP',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Starter halus (ACG) dan mesin bandel untuk pemakaian harian.',
    specialLabel: 'Paling Irit',
    cardImage: { id: 'honda-beat-esp-card', imageUrl: '/images/Honda-beat-esp.png', description: 'Honda Beat ESP', imageHint: 'honda beat esp' },
    detailImage: { id: 'honda-beat-esp-detail', imageUrl: '/images/Honda-beat-esp.png', description: 'Honda Beat ESP', imageHint: 'honda beat esp side' }
  },
  {
    id: 'honda-beat-pop',
    name: 'Honda Beat Pop',
    class: 'Ekonomis',
    price: 70000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Bodi paling ramping dan lincah untuk menembus kemacetan parah.',
    specialLabel: 'Paling Irit',
    cardImage: { id: 'honda-beat-pop-card', imageUrl: '/images/Honda-beat-pop.png', description: 'Honda Beat Pop', imageHint: 'honda beat pop' },
    detailImage: { id: 'honda-beat-pop-detail', imageUrl: '/images/Honda-beat-pop.png', description: 'Honda Beat Pop', imageHint: 'honda beat pop side' }
  },
  {
    id: 'honda-genio',
    name: 'Honda Genio',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Desain modern-retro yang ringan dan sangat mudah dikendalikan.',
    specialLabel: 'Paling Irit',
    cardImage: { id: 'honda-genio-card', imageUrl: '/images/Honda-genio.png', description: 'Honda Genio', imageHint: 'honda genio' },
    detailImage: { id: 'honda-genio-detail', imageUrl: '/images/Honda-genio.png', description: 'Honda Genio', imageHint: 'honda genio side' }
  },
  {
    id: 'honda-spacy',
    name: 'Honda Spacy',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '110cc', torque: '8.9 Nm' },
    feature: 'Bagasi ekstra besar (Helm-In) untuk menyimpan tas di dalam jok.',
    specialLabel: 'Bagasi Luas',
    cardImage: { id: 'honda-spacy-card', imageUrl: '/images/Honda-spacy.png', description: 'Honda Spacy', imageHint: 'honda spacy' },
    detailImage: { id: 'honda-spacy-detail', imageUrl: '/images/Honda-spacy.png', description: 'Honda Spacy', imageHint: 'honda spacy side' }
  },
  {
    id: 'honda-scoopy-new',
    name: 'Honda Scoopy (New)',
    class: 'Ekonomis',
    price: 120000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Ban ring 12 yang stabil dan fitur slot charger HP di laci.',
    cardImage: { id: 'honda-scoopy-new-card', imageUrl: '/images/Honda-scoopy-new.png', description: 'Honda Scoopy (New)', imageHint: 'honda scoopy' },
    detailImage: { id: 'honda-scoopy-new-detail', imageUrl: '/images/Honda-scoopy-new.png', description: 'Honda Scoopy (New)', imageHint: 'honda scoopy side' }
  },
  {
    id: 'honda-scoopy-old',
    name: 'Honda Scoopy Old',
    class: 'Ekonomis',
    price: 110000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Velg jari-jari klasik untuk kesan retro yang otentik.',
    cardImage: { id: 'honda-scoopy-old-card', imageUrl: '/images/Honda-scoopy-old.png', description: 'Honda Scoopy Old', imageHint: 'classic scooter' },
    detailImage: { id: 'honda-scoopy-old-detail', imageUrl: '/images/Honda-scoopy-old.png', description: 'Honda Scoopy Old', imageHint: 'classic scooter side' }
  },
  {
    id: 'honda-vario-110',
    name: 'Honda Vario 110cc',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Dek kaki luas dan dilengkapi fitur remote Answer Back System.',
    cardImage: { id: 'honda-vario-110-card', imageUrl: '/images/Honda-vario-110.png', description: 'Honda Vario 110cc', imageHint: 'honda vario 110' },
    detailImage: { id: 'honda-vario-110-detail', imageUrl: '/images/Honda-vario-110.png', description: 'Honda Vario 110cc', imageHint: 'honda vario 110 side' }
  },
  {
    id: 'yamaha-mio-gt',
    name: 'Yamaha Mio GT',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Desain sporty legendaris yang tangguh dan perawatan mudah.',
    cardImage: { id: 'yamaha-mio-gt-card', imageUrl: '/images/yamaha-mio-gt.png', description: 'Yamaha Mio GT', imageHint: 'yamaha mio gt' },
    detailImage: { id: 'yamaha-mio-gt-detail', imageUrl: '/images/yamaha-mio-gt.png', description: 'Yamaha Mio GT', imageHint: 'yamaha mio gt side' }
  },
  {
    id: 'yamaha-mio-j',
    name: 'Yamaha Mio J',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Motor paling ringan memudahkan saat parkir atau manuver.',
    cardImage: { id: 'yamaha-mio-j-card', imageUrl: '/images/yamaha-mio-j.png', description: 'Yamaha Mio J', imageHint: 'yamaha mio j' },
    detailImage: { id: 'yamaha-mio-j-detail', imageUrl: '/images/yamaha-mio-j.png', description: 'Yamaha Mio J', imageHint: 'yamaha mio j side' }
  },
  {
    id: 'polytron-fox-r',
    name: 'Polytron Fox R',
    class: 'Khusus',
    price: 130000,
    specs: { cc: '3000 Watt', torque: 'N/A' },
    feature: 'Motor listrik tanpa suara dengan fitur mundur (Reverse Mode).',
    specialLabel: 'Eco Friendly',
    cardImage: { id: 'polytron-fox-r-card', imageUrl: '/images/polytron-fox-r.png', description: 'Polytron Fox R', imageHint: 'electric scooter' },
    detailImage: { id: 'polytron-fox-r-detail', imageUrl: '/images/polytron-fox-r.png', description: 'Polytron Fox R', imageHint: 'electric scooter side' }
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
