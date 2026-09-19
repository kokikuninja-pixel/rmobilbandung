'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Cog } from 'lucide-react';
import type { Car } from '@/lib/cars';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="relative overflow-hidden h-full flex flex-col bg-card border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1.5">
        {car.popular && (
          <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground shadow-lg">
            Paling Laris
          </Badge>
        )}
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src={car.imageUrl}
            alt={`${car.name} - sewa mobil Bandung lepas kunci`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            quality={75}
            loading="lazy"
            data-ai-hint={car.imageHint}
          />
        </div>
        <CardContent className="flex flex-col flex-grow p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-headline text-xl font-bold">{car.name}</h3>
            <Badge variant="outline" className="font-semibold text-xs shrink-0">
              {car.segment}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{car.feature}</p>

          <div className="flex items-center gap-4 text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">{car.seats} Kursi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cog className="w-4 h-4 text-primary" />
              <span className="text-sm">{car.transmission}</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">Harga Sewa</p>
              <p className="text-2xl font-bold text-accent">Tanya Admin</p>
            </div>
            <Button asChild className="w-full group">
              <Link href={`/?motor=${encodeURIComponent(car.name)}#pesan`}>
                Sewa Mobil Ini
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}