
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/images/logo-nethen-new1.png"
      alt="RMB Rental Motor Logo"
      width={256}
      height={256}
      priority
      className="h-16 w-16 object-contain drop-shadow-lg transition-all duration-300 md:h-20 md:w-20"
    />
  );
}
