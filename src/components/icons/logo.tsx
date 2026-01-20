import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://i.imgur.com/PBSV9FN.png"
      alt="RMJP Rental Logo"
      width={1024}
      height={1024}
      priority
      className="h-28 w-28 object-contain drop-shadow-lg"
    />
  );
}
