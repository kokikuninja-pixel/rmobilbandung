import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="RMJP Rental Logo"
      width={256}
      height={256}
      priority
      className="h-16 w-16 object-contain drop-shadow-lg transition-all duration-300 md:h-28 md:w-28 md:translate-y-4"
    />
  );
}
