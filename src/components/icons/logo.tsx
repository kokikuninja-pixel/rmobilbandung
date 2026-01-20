import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://i.imgur.com/C9EEM4W.png"
      alt="RMJP Rental Logo"
      width={120}
      height={30}
      priority
    />
  );
}
