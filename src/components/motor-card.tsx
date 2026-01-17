'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Motor } from '@/lib/data';
import { ArrowRight, Gauge, Fuel, Wind } from 'lucide-react';

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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card hover:bg-card/80 transition-colors duration-300">
        <CardHeader className="p-0">
          <div className="aspect-video relative">
            <Image
              src={motor.cardImage.imageUrl}
              alt={motor.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={motor.cardImage.imageHint}
            />
          </div>
          <div className="p-6 pb-2">
            <CardTitle className="font-headline text-xl">{motor.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              <span>{motor.specs.cc}</span>
            </li>
            <li className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-primary" />
              <span>{motor.specs.torque}</span>
            </li>
            <li className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-primary" />
              <span>{motor.specs.tankCapacity} Tank</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={`/armada/${motor.id}`}>
              Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
