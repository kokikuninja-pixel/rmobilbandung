import { motorInventory, standardFacilities } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

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

export async function generateMetadata({ params }: MotorDetailPageProps) {
    const motor = motorInventory.find(m => m.id === params.id);
  
    if (!motor) {
      return {
        title: 'Motor Tidak Ditemukan',
      };
    }
  
    return {
      title: `${motor.name} | RMJP Rental`,
      description: `Detail dan fasilitas untuk ${motor.name}.`,
    };
  }

export default function MotorDetailPage({ params }: MotorDetailPageProps) {
  const motor = motorInventory.find(m => m.id === params.id);

  if (!motor) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-12 md:py-20">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link href="/#armada">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Armada
        </Link>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <Card className="overflow-hidden shadow-2xl shadow-primary/10">
            <div className="aspect-w-3 aspect-h-2 relative">
              <Image
                src={motor.detailImage.imageUrl}
                alt={motor.name}
                width={1200}
                height={800}
                className="object-cover w-full h-full"
                priority
                data-ai-hint={motor.detailImage.imageHint}
              />
            </div>
          </Card>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{motor.name}</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Spesifikasi: {motor.specs.cc} / {motor.specs.torque} / Tangki {motor.specs.tankCapacity}
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-primary">Fasilitas Standar</h2>
          <Card className="bg-card/50">
            <CardContent className="p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {standardFacilities.map((facility, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{facility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Button asChild size="lg" className="mt-8 w-full md:w-auto">
             <Link href="/#pesan">Sewa Sekarang</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
