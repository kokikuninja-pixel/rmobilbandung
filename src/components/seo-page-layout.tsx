'use client';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motorInventory } from '@/lib/data';
import { MotorCard } from '@/components/motor-card';
import type { Metadata } from 'next';

interface SeoPageLayoutProps {
  title: string;
  locationName: string;
  description: string;
  children: React.ReactNode;
}

export function generateSeoMetadata(locationName: string, title: string, description: string, canonicalPath: string): Metadata {
  return {
    title: title,
    description: description,
    alternates: {
      canonical: canonicalPath,
    },
  };
}

export default function SeoPageLayout({ title, locationName, description, children }: SeoPageLayoutProps) {
  const featuredMotors = motorInventory.slice(0, 4);

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-[calc(100vh-theme(height.24))]">
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {description}
              </p>
            </div>
            
            <div className="prose prose-slate dark:prose-invert max-w-4xl mx-auto text-foreground lg:prose-lg prose-headings:font-display prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
                {children}
            </div>

            <div className="text-center mt-16">
                <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
                    <Link href="/#pesan">
                        Pesan Sekarang di {locationName}
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">Pilihan Armada Populer</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Motor matic terbaik untuk menjelajahi {locationName} dan sekitarnya.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredMotors.map((motor) => (
                        <MotorCard key={motor.id} motor={motor} />
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/armada">Lihat Semua Armada</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
