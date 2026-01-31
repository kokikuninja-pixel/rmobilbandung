
import { Logo } from '@/components/icons/logo';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { Tiktok } from './icons/tiktok';
import React from 'react';

export function Footer() {
  const seoAreas = [
    'Sewa Motor Dago', 'Rental Motor Lembang', 'Sewa Motor Braga', 
    'Rental Motor Setiabudi', 'Sewa Motor Cihampelas', 'Rental Motor Gedung Sate', 
    'Sewa Motor Buahbatu', 'Rental Motor Stasiun Bandung', 'Sewa Motor Bandara Husein Sastranegara'
  ];

  const seoArmada = [
    'Sewa Motor Aerox Bandung', 'Rental Honda Vario', 'Sewa Yamaha Gear', 
    'Rental Scoopy Stylish', 'Sewa Motor Matic Bandung'
  ];

  return (
    <footer className="w-full border-t border-secondary-foreground/10 bg-secondary text-secondary-foreground">
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-secondary-foreground/70">Your Freedom to Explore Starts Here.</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/nethen.rental/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-secondary-foreground/70 hover:text-primary" /></Link>
            <Link href="https://www.tiktok.com/@nethen.rental" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><Tiktok className="h-5 w-5 text-secondary-foreground/70 hover:text-primary" /></Link>
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
              <li><Link href="/snk" className="text-secondary-foreground/70 hover:text-primary">Syarat &amp; Ketentuan</Link></li>
              <li><Link href="#" className="text-secondary-foreground/70 hover:text-primary">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* SEO Footer Section */}
      <div className="container px-4 pt-8 pb-12 text-xs border-t border-secondary-foreground/10 text-secondary-foreground/60">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-secondary-foreground/80 mb-2">Layanan Sewa Motor RMB</h4>
            <p>
              RMB (Rental Motor Bandung) adalah penyedia jasa transportasi roda dua terbaik dengan layanan cepat mulai pukul 05.30 pagi. Kami berkomitmen memberikan pengalaman berkendara yang aman, nyaman, dan bebas hambatan bagi setiap pelanggan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-secondary-foreground/80 mb-2">Area Layanan Kami</h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {seoAreas.map((area, index) => (
                <React.Fragment key={area}>
                  <Link href="/#pesan" className="hover:text-primary transition-colors">{area}</Link>
                  {index < seoAreas.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-secondary-foreground/80 mb-2">Pilihan Armada Terpopuler</h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {seoArmada.map((armada, index) => (
                <React.Fragment key={armada}>
                  <Link href="/#pesan" className="hover:text-primary transition-colors">{armada}</Link>
                  {index < seoArmada.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-secondary-foreground/10 py-6">
        <p className="text-center text-sm text-secondary-foreground/70">
          © {new Date().getFullYear()} RMB Rental. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
