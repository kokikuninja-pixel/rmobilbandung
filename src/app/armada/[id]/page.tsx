import { motorInventory, standardFacilities } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowLeft, Gauge, Wind, Fuel } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      description: `Detail dan spesifikasi untuk ${motor.name}.`,
    };
  }

export default function MotorDetailPage({ params }: MotorDetailPageProps) {
  const motor = motorInventory.find(m => m.id === params.id);

  if (!motor) {
    notFound();
  }

  const specs = [
    { icon: Gauge, value: motor.specs.cc, label: 'Engine' },
    { icon: Wind, value: motor.specs.torque, label: 'Torque' },
    { icon: Fuel, value: motor.specs.tankCapacity, label: 'Tank' },
  ];

  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-theme(height.14))]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center animate-in fade-in-30 slide-in-from-left-12 duration-500">
            <Link href="/#armada" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-flex items-center self-start">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Armada
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">{motor.name}</h1>
            
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                {specs.map((spec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-card border">
                    <spec.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-lg font-bold">{spec.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                  </div>
                ))}
            </div>

            <Button asChild size="lg" className="w-full md:w-auto self-start">
                 <Link href="/#pesan">Sewa Sekarang</Link>
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative aspect-square max-h-[70vh] animate-in fade-in-30 slide-in-from-right-12 duration-500">
             <Image 
                src={motor.detailImage.imageUrl}
                alt={motor.name}
                fill
                className="object-contain"
                priority
                data-ai-hint={motor.detailImage.imageHint}
            />
          </div>
        </div>
        
        <div className="mt-24 border-t pt-16">
          <h3 className="text-3xl font-bold text-center mb-10">Fasilitas Standar</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {standardFacilities.map((facility, index) => (
              <li key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-card border hover:border-primary/50 hover:shadow-lg transition-all">
                <CheckCircle className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
