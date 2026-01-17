import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    // Fallback image
    return {
      id: 'fallback',
      description: 'Fallback image',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      imageHint: 'placeholder'
    };
  }
  return image;
};

export interface Motor {
  id: string;
  name: string;
  class: 'Premium' | 'Menengah' | 'Ekonomis' | 'Khusus';
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
    specs: { cc: '155cc', torque: '13.9 Nm' },
    feature: 'The Sporty King. Mesin VVA paling kencang, ban lebar, dan tampilan sangat gagah untuk wisatawan.',
    cardImage: getImage('yamaha-aerox-card'),
    detailImage: getImage('yamaha-aerox-detail')
  },
  {
    id: 'honda-vario-150',
    name: 'Honda Vario 150cc',
    class: 'Premium',
    specs: { cc: '150cc', torque: '13.4 Nm' },
    feature: 'Smart & Powerful. Akselerasi instan, bodi aerodinamis, dan fitur Keyless (tanpa kunci).',
    cardImage: getImage('honda-vario-150-card'),
    detailImage: getImage('honda-vario-150-detail')
  },
  {
    id: 'honda-vario-125',
    name: 'Honda Vario 125 LED',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '10.8 Nm' },
    feature: 'Stabil untuk boncengan, lampu LED terang, dan bagasi muat banyak barang.',
    specialLabel: 'Bagasi Luas',
    cardImage: getImage('honda-vario-125-card'),
    detailImage: getImage('honda-vario-125-detail')
  },
  {
    id: 'yamaha-gear',
    name: 'Yamaha Gear',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.5 Nm' },
    feature: 'Practical Choice. Fitur Double Hook (dua gantungan) sangat membantu membawa belanjaan/oleh-oleh.',
    cardImage: getImage('yamaha-gear-card'),
    detailImage: getImage('yamaha-gear-detail')
  },
  {
    id: 'yamaha-x-ride',
    name: 'Yamaha X-Ride',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Adventure Style. Suspensi tabung empuk, setang lebar, sangat nyaman di jalanan tidak rata.',
    cardImage: getImage('yamaha-x-ride-card'),
    detailImage: getImage('yamaha-x-ride-detail')
  },
  {
    id: 'yamaha-fino',
    name: 'Yamaha Fino',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Classic Chic. Desain retro elegan, sangat pas untuk keliling kota dengan gaya santai.',
    cardImage: getImage('yamaha-fino-card'),
    detailImage: getImage('yamaha-fino-detail')
  },
  {
    id: 'yamaha-mio-z',
    name: 'Yamaha Mio Z',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Agile & Steady. Mesin 125cc bertenaga dengan ban lebih lebar dari varian Mio lainnya.',
    cardImage: getImage('yamaha-mio-z-card'),
    detailImage: getImage('yamaha-mio-z-detail')
  },
  {
    id: 'yamaha-soul-gt',
    name: 'Yamaha Soul GT',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.6 Nm' },
    feature: 'Bold Design. Tampilan kokoh dan lampu depan tajam, memberikan kesan berkendara yang mantap.',
    cardImage: getImage('yamaha-soul-gt-card'),
    detailImage: getImage('yamaha-soul-gt-detail')
  },
  {
    id: 'yamaha-xeon-gt',
    name: 'Yamaha Xeon GT',
    class: 'Menengah',
    specs: { cc: '125cc', torque: '9.8 Nm' },
    feature: 'Liquid Cooled. Mesin berpendingin cairan membuat performa tetap stabil meski dipakai keliling Jakarta seharian.',
    cardImage: getImage('yamaha-xeon-gt-card'),
    detailImage: getImage('yamaha-xeon-gt-detail')
  },
  {
    id: 'honda-beat-new',
    name: 'Honda Beat New',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Teknologi rangka eSAF terbaru, sangat ringan dan super hemat bahan bakar.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-new-card'),
    detailImage: getImage('honda-beat-new-detail')
  },
  {
    id: 'honda-beat-street',
    name: 'Honda Beat Street',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Setang terbuka gaya petualang, posisi tangan lebih lebar dan tidak cepat pegal.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-street-card'),
    detailImage: getImage('honda-beat-street-detail')
  },
  {
    id: 'honda-beat-esp',
    name: 'Honda Beat ESP',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Starter halus (ACG), pilihan paling bandel dan ekonomis untuk wisatawan.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-esp-card'),
    detailImage: getImage('honda-beat-esp-detail')
  },
  {
    id: 'honda-beat-pop',
    name: 'Honda Beat Pop',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.0 Nm' },
    feature: 'Bodi paling ramping dan membulat, sangat lincah untuk selap-selip di gang sempit.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-beat-pop-card'),
    detailImage: getImage('honda-beat-pop-detail')
  },
  {
    id: 'honda-genio',
    name: 'Honda Genio',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Desain modern-retro yang ringan, sangat cocok untuk pengendara pemula.',
    specialLabel: 'Paling Irit',
    cardImage: getImage('honda-genio-card'),
    detailImage: getImage('honda-genio-detail')
  },
  {
    id: 'honda-spacy',
    name: 'Honda Spacy',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '8.9 Nm' },
    feature: 'Fitur Helm-In, bagasi ekstra lega untuk menyimpan tas atau jaket di dalam jok.',
    specialLabel: 'Bagasi Luas',
    cardImage: getImage('honda-spacy-card'),
    detailImage: getImage('honda-spacy-detail')
  },
  {
    id: 'honda-scoopy-new',
    name: 'Honda Scoopy (New)',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.3 Nm' },
    feature: 'Iconic & Trendy. Ban ring 12 yang stabil, lampu depan projector, dan ada slot charger HP.',
    cardImage: getImage('honda-scoopy-new-card'),
    detailImage: getImage('honda-scoopy-new-detail')
  },
  {
    id: 'honda-scoopy-old',
    name: 'Honda Scoopy Old',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Original Retro. Velg jari-jari klasik yang memberikan kesan otentik untuk jalan-jalan santai.',
    cardImage: getImage('honda-scoopy-old-card'),
    detailImage: getImage('honda-scoopy-old-detail')
  },
  {
    id: 'honda-vario-110',
    name: 'Honda Vario 110cc',
    class: 'Ekonomis',
    specs: { cc: '110cc', torque: '9.1 Nm' },
    feature: 'Comfort Matik. Dek kaki sangat luas dan dilengkapi fitur remote Answer Back System.',
    cardImage: getImage('honda-vario-110-card'),
    detailImage: getImage('honda-vario-110-detail')
  },
  {
    id: 'yamaha-mio-gt',
    name: 'Yamaha Mio GT',
    class: 'Ekonomis',
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Sporty Look. Desain legendaris yang tangguh dan sangat mudah perawatannya.',
    cardImage: getImage('yamaha-mio-gt-card'),
    detailImage: getImage('yamaha-mio-gt-detail')
  },
  {
    id: 'yamaha-mio-j',
    name: 'Yamaha Mio J',
    class: 'Ekonomis',
    specs: { cc: '113cc', torque: '8.5 Nm' },
    feature: 'Simple & Light. Motor sangat ringan, memudahkan wisatawan saat harus parkir atau mundur.',
    cardImage: getImage('yamaha-mio-j-card'),
    detailImage: getImage('yamaha-mio-j-detail')
  },
  {
    id: 'polytron-fox-r',
    name: 'Polytron Fox R',
    class: 'Khusus',
    specs: { cc: '3000 Watt', torque: 'N/A' },
    feature: 'The Future Drive. Tanpa suara, torsi instan, dan ada fitur mundur (reverse) untuk kemudahan parkir.',
    specialLabel: 'Eco Friendly',
    cardImage: getImage('polytron-fox-r-card'),
    detailImage: getImage('polytron-fox-r-detail')
  },
];

export const standardFacilities = [
  '2 Helm',
  '2 Jas Hujan',
  'Phone Holder',
];

export const aboutUsText = 'RMJP (Rental Motor Jakarta Pusat) adalah partner mobilitas terpercaya Anda di jantung kota Jakarta dan Bandung. Kami berdedikasi untuk menyediakan armada motor berkualitas dengan pelayanan terbaik, memastikan setiap perjalanan Anda aman, nyaman, dan efisien. Dengan proses pemesanan yang mudah dan fasilitas lengkap, kami siap mendukung segala kebutuhan perjalanan Anda, baik untuk bekerja, berlibur, atau aktivitas harian lainnya.';
