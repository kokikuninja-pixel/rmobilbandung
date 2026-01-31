
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="w-full bg-background overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-24">
        {/* Left Side: Text and CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6 text-center md:text-left"
        >
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground">
            Sewa Motor Cepat &amp; Aman di Bandung
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
            Nikmati perjalananmu di Bandung dengan motor berkualitas dan layanan terpercaya.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              <Link href="#pesan">
                Pesan Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative aspect-square max-w-md mx-auto md:max-w-full min-h-[300px] md:min-h-[400px]"
        >
          <Image
            src="/images/hero-nethen-img.png"
            alt="Pasangan boncengan motor menikmati Bandung"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="couple scooter"
          />
        </motion.div>
      </div>
    </section>
  );
}
