import Image from 'next/image';
import { getBrand } from '@/brands';

export function Logo() {
  const brand = getBrand();

  return (
    <Image
      src={brand.logoPath}
      alt={`${brand.legalName} Logo`}
      width={256}
      height={256}
      priority
      className="h-12 w-12 object-contain drop-shadow-lg transition-all duration-300 md:h-20 md:w-20"
    />
  );
}
