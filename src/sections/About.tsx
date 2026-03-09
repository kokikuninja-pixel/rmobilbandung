'use client';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Headphones } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { icon: Award, value: '5+', label: 'Tahun Pengalaman' },
  { icon: Users, value: '50+', label: 'Unit Motor' },
  { icon: Clock, value: '10K+', label: 'Pelanggan Puas' },
  { icon: Headphones, value: '24/7', label: 'Dukungan Cepat' },
]

export default function About() {
  return (
    <section
      id="tentang-kami"
      className="py-16 md:py-24 bg-background"
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                    src="https://picsum.photos/seed/journey/800/600"
                    alt="Tim RMB Rental Bandung"
                    fill
                    className="object-cover"
                    data-ai-hint="team smiling"
                />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
          </div>

          <div className="space-y-6">
            <h2
              className={`font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight`}
            >
              Kenapa Pilih{' '}
              <span className="text-primary">RMB?</span>
            </h2>

            <p className={`text-lg text-muted-foreground leading-relaxed`}>
              Kami bukan hanya sekadar layanan sewa, kami adalah partner perjalanan Anda di Bandung. Dengan pengalaman lebih dari 5 tahun, kami berkomitmen memberikan unit motor matic terbaik dengan harga terjangkau dan layanan yang responsif.
            </p>

            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4`}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-display font-bold text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <Button asChild size="lg">
                <Link href="/#pesan">
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
