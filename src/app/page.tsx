
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motorInventory, testimonials } from '@/lib/data';
import { AnimatedText } from '@/components/animations/animated-text';
import { Button } from '@/components/ui/button';
import { MotorCard } from '@/components/motor-card';
import { OrderForm } from '@/components/order-form';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Award } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-jakarta');
  const slogan = "Your Freedom to Explore Starts Here.";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center text-center overflow-hidden">
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
          <AnimatedText text={slogan} className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground drop-shadow-lg mb-6" />
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            Solusi rental motor matic premium di Jakarta dengan proses cepat dan armada terbaik.
          </p>
          <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
            <Link href="#pesan">Mulai Menyewa</Link>
          </Button>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="armada" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Pilihan Armada Matic Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kami hanya menyediakan motor matic untuk kemudahan dan kenyamanan Anda menjelajahi kota.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorInventory.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="tentang-kami" className="py-16 md:py-24 bg-card/30">
        <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Sewa Motor Jakarta Pusat (RMJP): Cepat, Terpercaya, & Transparan</h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        RMJP adalah penyedia layanan rental motor yang berdedikasi untuk mendukung mobilitas Anda di Jakarta. Apakah Anda seorang wisatawan, pekerja, atau pendatang, kami memastikan perjalanan Anda di ibu kota menjadi lebih mudah dengan armada yang selalu dalam kondisi prima.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-6">
                        <div className="bg-background/50 text-center p-6 rounded-lg border border-border/20">
                            <Users className="mx-auto h-10 w-10 text-primary mb-4" />
                            <p className="text-3xl font-bold">1000+</p>
                            <p className="text-muted-foreground">Pelanggan Puas</p>
                        </div>
                        <div className="bg-background/50 text-center p-6 rounded-lg border border-border/20">
                            <Award className="mx-auto h-10 w-10 text-primary mb-4" />
                            <p className="text-3xl font-bold">25k+</p>
                            <p className="text-muted-foreground">Perjalanan Sukses</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background/50 p-6 border-border/20">
                            <CardContent className="p-0 flex flex-col items-start gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="lokasi" className="relative h-[500px] w-full">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.720770537023!2d106.84164857498995!3d-6.168133493819168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f54b3c734435%3A0x556e59c79268065c!2sRental%20Motor%20Jakarta%20Pusat%20RMJP!5e0!3m2!1sen!2sid!4v1768648168613!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RMJP Rental"
            className="grayscale contrast-125 opacity-50"
          ></iframe>
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 p-8 rounded-lg text-center pointer-events-auto shadow-2xl backdrop-blur-sm border border-border/20">
              <MapPin className="mx-auto h-10 w-10 text-primary mb-4" />
              <h3 className="font-headline text-2xl font-bold">Temukan Kami</h3>
              <p className="text-muted-foreground mt-2">Kantor pusat kami berlokasi di Jakarta Pusat.</p>
          </div>
      </section>

      {/* Order Section */}
      <section id="pesan" className="py-16 md:py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Sewa Motor Anda Sekarang</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Isi formulir di bawah ini untuk mengirim pesanan Anda langsung ke admin kami via WhatsApp.
            </p>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-xl shadow-black/20">
            <CardContent className="p-6 md:p-8">
              <OrderForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
