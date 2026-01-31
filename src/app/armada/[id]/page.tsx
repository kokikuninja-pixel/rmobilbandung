import { motorInventory, standardFacilities } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowLeft, Power, Settings2, ShieldCheck, Umbrella, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';

interface MotorDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return motorInventory.map(motor => ({
    id: motor.id,
  }));
}

export async function generateMetadata({ params }: MotorDetailPageProps): Promise<Metadata> {
    const motor = motorInventory.find(m => m.id === params.id);
  
    if (!motor) {
      return {
        title: 'Motor Tidak Ditemukan',
      };
    }
  
    return {
      title: `Sewa ${motor.name} di Bandung | RMB Rental`,
      description: `Sewa motor ${motor.name} di Bandung. Cek spesifikasi, harga, dan fasilitas lengkap. Pesan sekarang, unit siap pakai.`,
      alternates: {
        canonical: `/armada/${motor.id}`,
      },
      openGraph: {
        images: [
          {
            url: motor.detailImage.imageUrl,
            width: 1024,
            height: 1024,
            alt: `Sewa motor ${motor.name}`,
          },
        ],
      },
    };
  }

export default function MotorDetailPage({ params }: MotorDetailPageProps) {
  const motor = motorInventory.find(m => m.id === params.id);

  if (!motor) {
    notFound();
  }

  const specs = [
    { icon: Settings2, value: motor.specs.cc, label: 'Engine' },
    { icon: Power, value: motor.specs.torque, label: 'Torque' },
  ];

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-theme(height.14))]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
        
        <div className="mb-12">
            <Link href="/armada" className="text-sm text-muted-foreground hover:text-secondary mb-4 inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Semua Armada
            </Link>
             <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">{motor.name}</h1>
             <p className="text-lg text-muted-foreground">{motor.class} Class</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Specs & Facilities */}
            <div className="lg:col-span-2 flex flex-col gap-10">
                
                {/* Specs */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Spesifikasi Teknis</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {specs.map((spec, index) => (
                            <Card key={index} className="p-4 rounded-lg bg-card text-center flex flex-col items-center justify-center">
                                <spec.icon className="h-8 w-8 text-secondary mb-3" />
                                <p className="text-xl font-bold">{spec.value}</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Facilities */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Fasilitas Termasuk</h3>
                     <ul className="space-y-4">
                        {standardFacilities.map((facility, index) => {
                            const Icon = facility.icon === 'Helmet' ? ShieldCheck : facility.icon === 'Wind' ? Umbrella : facility.icon === 'Smartphone' ? Smartphone : CheckCircle;
                            return (
                                <li key={index} className="flex items-center gap-4 text-lg">
                                    <Icon className="h-6 w-6 text-secondary" />
                                    <span>{facility.text}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                 
                <div className="mt-auto">
                    <div className="mb-6 text-center lg:text-left">
                        <p className="text-muted-foreground">Mulai dari</p>
                        <p className="text-4xl font-extrabold text-primary">
                            Rp {motor.price.toLocaleString('id-ID')}
                            <span className="text-xl font-medium text-muted-foreground">/hari</span>
                        </p>
                    </div>
                    <Button asChild size="lg" className="w-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                        <Link href={`/?motor=${encodeURIComponent(motor.name)}#pesan`}>Sewa Sekarang</Link>
                    </Button>
                </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-3 relative min-h-[400px] lg:min-h-0">
                <Image 
                    src={motor.detailImage.imageUrl}
                    alt={motor.name}
                    fill
                    className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)]"
                    priority
                    data-ai-hint={motor.detailImage.imageHint}
                />
            </div>
        </div>
        
        <div className="mt-24 border-t pt-16">
            <h3 className="text-3xl font-bold text-center mb-6">Keunggulan &amp; Fitur</h3>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">{motor.feature}</p>
             {motor.specialLabel && (
              <div className="flex justify-center mt-6">
                <Badge
                    variant="outline"
                    className={cn("w-fit font-semibold text-base", {
                        "bg-blue-500/20 text-blue-500 border-blue-500/30": motor.specialLabel === "Bagasi Luas",
                        "bg-green-500/20 text-green-500 border-green-500/30": motor.specialLabel === "Paling Irit",
                        "bg-purple-500/20 text-purple-500 border-purple-500/30": motor.specialLabel === "Eco Friendly",
                    })}
                >
                    {motor.specialLabel === "Bagasi Luas" && "👜 Bagasi Luas"}
                    {motor.specialLabel === "Paling Irit" && "⛽ Paling Irit"}
                    {motor.specialLabel === "Eco Friendly" && "⚡ Eco Friendly"}
                </Badge>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
