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
    <div className="bg-background text-foreground w-full min-h-[calc(100vh-theme(height.14))]">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        <div className="flex justify-between items-center">
            <Button asChild variant="ghost" className="-ml-4">
                <Link href="/#armada">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Kembali ke Armada
                </Link>
            </Button>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            <div className="hidden lg:block lg:col-span-1">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-2 h-2 rounded-full bg-foreground transition-all duration-300 transform scale-125"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                </div>
            </div>
            
            <div className="lg:col-span-8 text-center">
                <div className="mb-4">
                    <p className="text-base md:text-lg uppercase tracking-widest text-muted-foreground">The Greatest</p>
                    <h1 className="font-extrabold text-5xl md:text-7xl tracking-tighter uppercase">
                        {(motor.name.split(' ')[1] || motor.name.split(' ')[0])} Ever Made
                    </h1>
                </div>
                
                <div className="relative max-w-3xl mx-auto aspect-[16/10]">
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

            <div className="lg:col-span-3 flex lg:flex-col justify-around lg:justify-center items-start gap-8 px-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center lg:items-start gap-3">
                    <spec.icon className="h-7 w-7 text-foreground" />
                    <div className="text-left">
                      <p className="text-xl font-bold">{spec.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-4">
            <h2 className="font-bold text-3xl">{motor.name}</h2>
            <Button asChild size="lg" className="w-full md:w-auto">
                 <Link href="/#pesan">Sewa Sekarang</Link>
            </Button>
        </div>
        
        <div className="mt-20 border-t pt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Fasilitas Standar</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {standardFacilities.map((facility, index) => (
              <li key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/50">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{facility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
