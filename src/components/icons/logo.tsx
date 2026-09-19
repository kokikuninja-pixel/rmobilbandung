import Image from 'next/image';
import { getBrand } from '@/brands';

export function Logo() {
  const brand = getBrand();

  return (
    <Image
      src={brand.logoPath}
      alt={`${brand.legalName} Logo`}
      width={128}
      height={128}
      priority
      fetchPriority="high"
      sizes="(max-width: 768px) 48px, 80px"
      quality={85}
      className="h-12 w-12 object-contain drop-shadow-sm transition-all duration-300 md:h-20 md:w-20"
    />
  );
}
