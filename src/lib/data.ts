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
  specs: {
    cc: string;
    torque: string;
    tankCapacity: string;
  };
  cardImage: ImagePlaceholder;
  detailImage: ImagePlaceholder;
}

export const motorInventory: Motor[] = [
  {
    id: 'honda-vario',
    name: 'Honda Vario 125',
    specs: {
      cc: '125cc',
      torque: '11.1 Nm',
      tankCapacity: '5.5 L',
    },
    cardImage: getImage('honda-vario-1'),
    detailImage: getImage('honda-vario-detail'),
  },
  {
    id: 'honda-scoopy',
    name: 'Honda Scoopy',
    specs: {
      cc: '110cc',
      torque: '9.3 Nm',
      tankCapacity: '4.2 L',
    },
    cardImage: getImage('honda-scoopy-1'),
    detailImage: getImage('honda-scoopy-detail'),
  },
  {
    id: 'yamaha-nmax',
    name: 'Yamaha NMAX',
    specs: {
      cc: '155cc',
      torque: '13.9 Nm',
      tankCapacity: '7.1 L',
    },
    cardImage: getImage('yamaha-nmax-1'),
    detailImage: getImage('yamaha-nmax-detail'),
  },
  {
    id: 'yamaha-aerox',
    name: 'Yamaha Aerox',
    specs: {
      cc: '155cc',
      torque: '13.9 Nm',
      tankCapacity: '5.5 L',
    },
    cardImage: getImage('yamaha-aerox-1'),
    detailImage: getImage('yamaha-aerox-detail'),
  },
];

export const standardFacilities = [
  '2 Helm SNI',
  '2 Jas Hujan',
  '1 Ponco',
  '1 Plastik pembungkus',
  'Phone Holder',
  'Kunci Rem',
];

export const aboutUsText = 'RMJP (Rental Motor Jakarta Pusat) adalah partner mobilitas terpercaya Anda di jantung kota Jakarta dan Bandung. Kami berdedikasi untuk menyediakan armada motor berkualitas dengan pelayanan terbaik, memastikan setiap perjalanan Anda aman, nyaman, dan efisien. Dengan proses pemesanan yang mudah dan fasilitas lengkap, kami siap mendukung segala kebutuhan perjalanan Anda, baik untuk bekerja, berlibur, atau aktivitas harian lainnya.';
