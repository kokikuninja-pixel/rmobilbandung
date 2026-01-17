'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Motor } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight, Gauge, Wind } from 'lucide-react';

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
        <CardContent className="flex-grow pt-2">
          {motor.specialLabel && (
            <Badge
              variant="outline"
              className={cn("mb-3 font-semibold", {
                "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-800": motor.specialLabel === "Bagasi Luas",
                "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-200 dark:border-green-800": motor.specialLabel === "Paling Irit",
                "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/50 dark:text-purple-200 dark:border-purple-800": motor.specialLabel === "Eco Friendly",
              })}
            >
              {motor.specialLabel === "Bagasi Luas" && "👜 Bagasi Luas"}
              {motor.specialLabel === "Paling Irit" && "⛽ Paling Irit"}
              {motor.specialLabel === "Eco Friendly" && "⚡ Eco Friendly"}
            </Badge>
          )}
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              <span>{motor.specs.cc}</span>
            </li>
            <li className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-primary" />
              <span>{motor.specs.torque}</span>
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
