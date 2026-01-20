import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="https://i.imgur.com/gKj3I3f.png"
      alt="RMJP Rental Logo"
      width={1024}
      height={1024}
      priority
      className="h-12 w-12 object-contain"
    />
  );
}
