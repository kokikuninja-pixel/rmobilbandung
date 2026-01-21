import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    // Fallback image
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://i.imgur.com/H5R0EQs.png',
      imageHint: 'placeholder'
    };
  }
  return image;
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
    cardImage: getImage('yamaha-aerox-card'),
    detailImage: getImage('yamaha-aerox-detail')
  },
  {
    id: 'honda-vario-150',
    name: 'Honda Vario 150cc',
    class: 'Premium',
    price: 120000,
    specs: { cc: '150cc', torque: '13.4 Nm' },
    feature: 'Akselerasi instan dengan fitur Smart Key (Keyless) untuk keamanan ekstra.',
    cardImage: getImage('honda-vario-150-card'),
    detailImage: getImage('honda-vario-150-detail')
  },
  {
    id: 'honda-vario-125',
    name: 'Honda Vario 125 LED',
    class: 'Menengah',
    price: 110000,
    specs: { cc: '125cc', torque: '10.8 Nm' },
    feature: 'Sangat stabil untuk boncengan dan bagasi muat banyak barang.',
    specialLabel: 'Bagasi Luas',
    cardImage: getImage('honda-vario-125-card'),
    detailImage: getImage('honda-vario-125-detail')
  },
  {
    id: 'yamaha-gear',
    name: 'Yamaha Gear',
    class: 'Menengah',
    price: 80000,
    specs: { cc: '125cc', torque: '9.5 Nm' },
    feature: 'Dilengkapi Double Hook (dua gantungan) untuk membawa banyak belanjaan.',
    cardImage: getImage('yamaha-gear-card'),
    detailImage: getImage('yamaha-gear-detail')
  },
  {
    id: 'yamaha-x-ride',
    name: 'Yamaha X-Ride',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Suspensi tabung yang sangat empuk dan nyaman di jalan bergelombang.',
    cardImage: getImage('yamaha-x-ride-card'),
    detailImage: getImage('yamaha-x-ride-detail')
  },
  {
    id: 'yamaha-fino',
    name: 'Yamaha Fino',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Desain retro yang elegan untuk keliling kota dengan gaya santai.',
    cardImage: getImage('yamaha-fino-card'),
    detailImage: getImage('yamaha-fino-detail')
  },
  {
    id: 'yamaha-mio-z',
    name: 'Yamaha Mio Z',
    class: 'Menengah',
    price: 70000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Mesin Blue Core bertenaga dengan ban lebar agar lebih stabil.',
    cardImage: getImage('yamaha-mio-z-card'),
    detailImage: getImage('yamaha-mio-z-detail')
  },
  {
    id: 'yamaha-soul-gt',
    name: 'Yamaha Soul GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Tampilan maskulin dengan lampu depan tajam dan bodi kokoh.',
    cardImage: getImage('yamaha-soul-gt-card'),
    detailImage: getImage('yamaha-soul-gt-detail')
  },
  {
    id: 'yamaha-xeon-gt',
    name: 'Yamaha Xeon GT',
    class: 'Menengah',
    price: 60000,
    specs: { cc: '125cc', torque: '9.8 Nm' },
    feature: 'Mesin berpendingin cairan (Radiator) untuk performa jarak jauh.',
    cardImage: getImage('yamaha-xeon-gt-card'),
    detailImage: getImage('yamaha-xeon-gt-detail')
  },
  {
    id: 'honda-beat-new',
    name: 'Honda Beat New',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Rangka eSAF terbaru yang sangat ringan dan super hemat bbm.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-new-card'),
    detailImage: getImage('honda-beat-new-detail')
  },
  {
    id: 'honda-beat-street',
    name: 'Honda Beat Street',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Setang gaya petualang untuk posisi berkendara santai dan tidak pegal.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-street-card'),
    detailImage: getImage('honda-beat-street-detail')
  },
  {
    id: 'honda-beat-esp',
    name: 'Honda Beat ESP',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Starter halus (ACG) dan mesin bandel untuk pemakaian harian.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-esp-card'),
    detailImage: getImage('honda-beat-esp-detail')
  },
  {
    id: 'honda-beat-pop',
    name: 'Honda Beat Pop',
    class: 'Ekonomis',
    price: 70000,
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Bodi paling ramping dan lincah untuk menembus kemacetan parah.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-pop-card'),
    detailImage: getImage('honda-beat-pop-detail')
  },
  {
    id: 'honda-genio',
    name: 'Honda Genio',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Desain modern-retro yang ringan dan sangat mudah dikendalikan.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-genio-card'),
    detailImage: getImage('honda-genio-detail')
  },
  {
    id: 'honda-spacy',
    name: 'Honda Spacy',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '110cc', torque: '8.9 Nm' },
    feature: 'Bagasi ekstra besar (Helm-In) untuk menyimpan tas di dalam jok.',
    specialLabel: 'Bagasi Luas',
    cardImage: getImage('honda-spacy-card'),
    detailImage: getImage('honda-spacy-detail')
  },
  {
    id: 'honda-scoopy-new',
    name: 'Honda Scoopy (New)',
    class: 'Ekonomis',
    price: 120000,
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Ban ring 12 yang stabil dan fitur slot charger HP di laci.',
    cardImage: getImage('honda-scoopy-new-card'),
    detailImage: getImage('honda-scoopy-new-detail')
  },
  {
    id: 'honda-scoopy-old',
    name: 'Honda Scoopy Old',
    class: 'Ekonomis',
    price: 110000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Velg jari-jari klasik untuk kesan retro yang otentik.',
    cardImage: getImage('honda-scoopy-old-card'),
    detailImage: getImage('honda-scoopy-old-detail')
  },
  {
    id: 'honda-vario-110',
    name: 'Honda Vario 110cc',
    class: 'Ekonomis',
    price: 80000,
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Dek kaki luas dan dilengkapi fitur remote Answer Back System.',
    cardImage: getImage('honda-vario-110-card'),
    detailImage: getImage('honda-vario-110-detail')
  },
  {
    id: 'yamaha-mio-gt',
    name: 'Yamaha Mio GT',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Desain sporty legendaris yang tangguh dan perawatan mudah.',
    cardImage: getImage('yamaha-mio-gt-card'),
    detailImage: getImage('yamaha-mio-gt-detail')
  },
  {
    id: 'yamaha-mio-j',
    name: 'Yamaha Mio J',
    class: 'Ekonomis',
    price: 60000,
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Motor paling ringan memudahkan saat parkir atau manuver.',
    cardImage: getImage('yamaha-mio-j-card'),
    detailImage: getImage('yamaha-mio-j-detail')
  },
  {
    id: 'polytron-fox-r',
    name: 'Polytron Fox R',
    class: 'Khusus',
    price: 130000,
    specs: { cc: '3000 Watt', torque: 'N/A' },
    feature: 'Motor listrik tanpa suara dengan fitur mundur (Reverse Mode).',
    specialLabel: 'Eco Friendly',
    cardImage: getImage('polytron-fox-r-card'),
    detailImage: getImage('polytron-fox-r-detail')
  },
];

export const standardFacilities = [
  { icon: 'Helmet', text: '2 Helm' },
  { icon: 'Wind', text: '2 Jas Hujan' },
  { icon: 'Smartphone', text: 'Phone Holder' },
];
