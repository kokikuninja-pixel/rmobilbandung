import { Logo } from '@/components/icons/logo';
import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">Partner mobilitas terpercaya Anda.</p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
            <Link href="#" aria-label="Github"><Github className="h-5 w-5 text-muted-foreground hover:text-primary" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Produk</h3>
            <ul className="space-y-2">
              <li><Link href="/#armada" className="text-muted-foreground hover:text-primary">Motor Matic</Link></li>
              <li><Link href="/#armada" className="text-muted-foreground hover:text-primary">Motor Sport</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Perusahaan</h3>
            <ul className="space-y-2">
              <li><Link href="/#tentang-kami" className="text-muted-foreground hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="/#lokasi" className="text-muted-foreground hover:text-primary">Lokasi Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/40 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RMJP Rental. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
