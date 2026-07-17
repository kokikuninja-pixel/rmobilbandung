import { Logo } from '@/components/icons/logo';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import { Tiktok } from './icons/tiktok';
import React from 'react';

export function Footer() {
  const seoAreas = [
    { name: 'Sewa Motor Dago', href: '/sewa-motor-dago' },
    { name: 'Rental Motor Lembang', href: '/rental-motor-lembang' },
    { name: 'Sewa Motor Braga', href: '/sewa-motor-braga' },
    { name: 'Rental Motor Setiabudi', href: '/rental-motor-setiabudi' },
    { name: 'Sewa Motor Cihampelas', href: '/sewa-motor-cihampelas' },
    { name: 'Rental Motor Gedung Sate', href: '/rental-motor-gedung-sate' },
    { name: 'Sewa Motor Buahbatu', href: '/sewa-motor-buahbatu' },
    { name: 'Rental Motor Stasiun Bandung', href: '/rental-motor-stasiun-bandung' },
    { name: 'Sewa Motor Bandara Husein Sastranegara', href: '/sewa-motor-bandara-husein' },
  ];

  const seoArmada = [
    'Sewa Motor Aerox Bandung', 'Rental Honda Vario', 'Sewa Yamaha Gear', 
    'Rental Scoopy Stylish', 'Sewa Motor Matic Bandung'
  ];

  return (
    <footer className="w-full border-t border-primary-foreground/10 bg-foreground text-background">
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Logo />
          <p className="text-sm text-background/70">Your Freedom to Explore Starts Here.</p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/inforentalmotorbandung/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 text-background/70 hover:text-primary" /></Link>
            <Link href="https://www.tiktok.com/@nethen.rental" target="_blank" rel="noopener noreferrer" aria-label="Tiktok"><Tiktok className="h-5 w-5 text-background/70 hover:text-primary" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold text-background">Produk</h3>
            <ul className="space-y-2">
              <li><Link href="/armada" className="text-background/70 hover:text-primary">Motor Matic</Link></li>
              <li><Link href="/harga" className="text-background/70 hover:text-primary">Daftar Harga</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-background">Perusahaan</h3>
            <ul className="space-y-2">
              <li><Link href="/tentang-kami" className="text-background/70 hover:text-primary">Tentang Kami</Link></li>
              <li><Link href="/galeri" className="text-background/70 hover:text-primary">Galeri</Link></li>
              <li><Link href="/lokasi" className="text-background/70 hover:text-primary">Lokasi Kami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-background">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/snk" className="text-background/70 hover:text-primary">Syarat &amp; Ketentuan</Link></li>
              <li><Link href="/faq" className="text-background/70 hover:text-primary">Tanya Jawab (FAQ)</Link></li>
              <li><Link href="/admin" className="text-background/20 hover:text-background/40 transition-colors text-[10px]">Admin Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container px-4 pt-8 pb-12 text-xs border-t border-background/10 text-background/60">
        <div className="max-w-screen-xl mx-auto space-y-6">
          <div>
            <h4 className="font-semibold text-sm text-background/80 mb-2">Layanan Sewa Motor RMB</h4>
            <p>
              RMB (Rental Motor Bandung) adalah penyedia jasa transportasi roda dua terbaik dengan layanan cepat mulai pukul 05.30 pagi. Kami berkomitmen memberikan pengalaman berkendara yang aman, nyaman, dan bebas hambatan bagi setiap pelanggan.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-background/80 mb-2">Area Layanan Kami</h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {seoAreas.map((area, index) => (
                <React.Fragment key={area.name}>
                  <Link href={area.href} className="hover:text-primary transition-colors">{area.name}</Link>
                  {index < seoAreas.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-background/10 py-6">
        <p className="text-center text-sm text-background/70">
          © {new Date().getFullYear()} RMB Rental. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
