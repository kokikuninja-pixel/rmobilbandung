import { Logo } from '@/components/icons/logo';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { Tiktok } from './icons/tiktok';

export function Footer() {
  return (
    <footer className="w-full border-t border-secondary-foreground/10 bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-secondary-foreground/70">Your Freedom to Explore Starts Here.</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/rentalmotorjakartapusatrmjp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-secondary-foreground/70 hover:text-primary" /></Link>
            <Link href="https://www.tiktok.com/@rentalmotorjakart2" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><Tiktok className="h-5 w-5 text-secondary-foreground/70 hover:text-primary" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Produk</h3>
            <ul className="space-y-2">
              <li><Link href="/armada" className="text-secondary-foreground/70 hover:text-primary">Motor Matic</Link></li>
              <li><Link href="/harga" className="text-secondary-foreground/70 hover:text-primary">Daftar Harga</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Perusahaan</h3>
            <ul className="space-y-2">
              <li><Link href="/#tentang-kami" className="text-secondary-foreground/70 hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="/galeri" className="text-secondary-foreground/70 hover:text-primary">Galeri</Link></li>
              <li><Link href="/#lokasi" className="text-secondary-foreground/70 hover:text-primary">Lokasi Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-secondary-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/snk" className="text-secondary-foreground/70 hover:text-primary">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-primary">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 py-6">
        <p className="text-center text-sm text-secondary-foreground/70">
          © {new Date().getFullYear()} RMJP Rental. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
