import Image from 'next/image';
import { generatePersuasiveSlogan } from '@/ai/flows/generate-persuasive-slogan';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { aboutUsText, motorInventory } from '@/lib/data';
import { AnimatedText } from '@/components/animations/animated-text';
import { Button } from '@/components/ui/button';
import { MotorCard } from '@/components/motor-card';
import { OrderForm } from '@/components/order-form';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Building } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-jakarta');
  const sloganData = await generatePersuasiveSlogan({ businessDescription: "Rental motor di Jakarta Pusat dan Bandung yang modern, premium, dan terpercaya." });
  const slogan = sloganData.slogan || "Mobilitas Modern, Tanpa Batas.";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="z-20 container px-4">
          <AnimatedText text={slogan} className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground drop-shadow-lg mb-6" />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            Solusi rental motor premium di Jakarta & Bandung dengan proses cepat dan armada terbaik.
          </p>
          <Button asChild size="lg">
            <Link href="#pesan">Mulai Menyewa</Link>
          </Button>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="armada" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Pilihan Armada Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pilih motor yang paling sesuai dengan gaya dan kebutuhan perjalanan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {motorInventory.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="tentang-kami" className="py-16 md:py-24 bg-card">
        <div className="container px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Tentang RMJP Rental</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {aboutUsText}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-background/50 text-center p-6">
              <Users className="mx-auto h-10 w-10 text-primary mb-4" />
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-muted-foreground">Pelanggan Puas</p>
            </Card>
            <Card className="bg-background/50 text-center p-6">
              <Building className="mx-auto h-10 w-10 text-primary mb-4" />
              <p className="text-2xl font-bold">2 Kota</p>
              <p className="text-muted-foreground">Jakarta & Bandung</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="lokasi" className="relative h-[500px] w-full">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666427490214!2d106.8249646153942!3d-6.175392395529126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1678886363000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RMJP Rental"
            className=""
          ></iframe>
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 p-8 rounded-lg text-center pointer-events-auto shadow-2xl backdrop-blur-sm">
              <MapPin className="mx-auto h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-2xl font-bold">Temukan Kami</h3>
              <p className="text-muted-foreground mt-2">Kantor pusat kami di Jakarta Pusat & cabang di Bandung.</p>
          </div>
      </section>

      {/* Order Section */}
      <section id="pesan" className="py-16 md:py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Sewa Motor Sekarang</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Isi formulir di bawah ini untuk mengirim pesanan Anda langsung ke admin kami via WhatsApp.
            </p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <OrderForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
