'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Motor } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight, Settings2, Power } from 'lucide-react';

interface MotorCardProps {
  motor: Motor;
}

export function MotorCard({ motor }: MotorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card border hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-secondary/20">
        <CardHeader className="p-0">
          <motion.div 
            className="aspect-[4/3] relative p-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={motor.cardImage.imageUrl}
              alt={motor.name}
              fill
              className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={motor.cardImage.imageHint}
            />
          </motion.div>
          <div className="p-6 pb-2">
            <CardTitle className="font-headline text-xl font-bold">{motor.name}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1 text-sm">{motor.class} Class</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-2 flex flex-col p-6">
          <div className="mb-4">
              <p className="text-sm text-muted-foreground">Mulai dari</p>
              <p className="text-xl font-bold text-primary">
                  Rp {motor.price.toLocaleString('id-ID')}{' '}
                  <span className="text-sm font-normal text-muted-foreground">/hari</span>
              </p>
          </div>
           {motor.specialLabel && (
            <Badge
              variant="outline"
              className={cn("w-fit mb-4 font-semibold text-xs", {
                "bg-blue-500/20 text-blue-500 border-blue-500/30": motor.specialLabel === "Bagasi Luas",
                "bg-green-500/20 text-green-500 border-green-500/30": motor.specialLabel === "Paling Irit",
                "bg-purple-500/20 text-purple-500 border-purple-500/30": motor.specialLabel === "Eco Friendly",
              })}
            >
              {motor.specialLabel === "Bagasi Luas" && "👜 Bagasi Luas"}
              {motor.specialLabel === "Paling Irit" && "⛽ Paling Irit"}
              {motor.specialLabel === "Eco Friendly" && "⚡ Eco Friendly"}
            </Badge>
          )}

          <div className="mt-auto">
            <div className="flex items-center justify-between text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                    <Settings2 className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{motor.specs.cc}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Power className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{motor.specs.torque}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full bg-transparent hover:bg-secondary hover:text-secondary-foreground">
                    <Link href={`/armada/${motor.id}`}>
                        Lihat Detail
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={`/?motor=${encodeURIComponent(motor.name)}#pesan`}>
                        Sewa
                    </Link>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
