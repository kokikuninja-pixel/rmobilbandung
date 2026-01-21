import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://i.imgur.com/PBSV9FN.png"
      alt="RMJP Rental Logo"
      width={1024}
      height={1024}
      priority
      className="h-16 w-16 object-contain drop-shadow-lg transition-all duration-300 md:h-28 md:w-28 md:translate-y-4"
    />
  );
}
