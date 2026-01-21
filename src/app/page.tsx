
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motorInventory, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MotorCard } from '@/components/motor-card';
import { OrderForm } from '@/components/order-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Award, ArrowRight, Clock, ShieldCheck, Umbrella, Smartphone, MessageSquareDashed, Wrench } from 'lucide-react';
import Link from 'next/link';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { GalleryCarousel } from '@/components/gallery-carousel';

export default async function Home() {
  const heroSlide = {
    image: PlaceHolderImages.find(img => img.id === 'hero-rmjp-logo-bg'),
    title: "Sewa Motor Jakarta Pusat – Praktis, Murah & Terpercaya.",
    subtitle: "Keliling Jakarta tanpa macet dengan armada terbaru. Jemput unitmu di Kemayoran atau kirim ke hotel/stasiun terdekat."
  };

  const favoriteMotorIds = ['honda-genio', 'honda-beat-new', 'yamaha-mio-z'];
  const favoriteMotors = motorInventory.filter(motor => favoriteMotorIds.includes(motor.id));
  
  const advantages = [
    {
      icon: MessageSquareDashed,
      title: "Respon Cepat",
      description: "Chat Anda akan kami balas dalam 1-2 menit pada jam kerja."
    },
    {
      icon: Wrench,
      title: "Perawatan Rutin",
      description: "Semua unit mendapatkan servis berkala untuk performa terbaik."
    },
    {
      icon: ShieldCheck,
      title: "Garansi Servis",
      description: "Ada kendala di jalan? Bawa ke bengkel rekanan kami, gratis."
    }
  ];

  const facilities = [
    {
      icon: ShieldCheck,
      title: "2 Helm SNI",
      description: "Keamanan lengkap untuk Anda dan penumpang."
    },
    {
      icon: Umbrella,
      title: "Jas Hujan",
      description: "Perjalanan tetap lancar bahkan saat cuaca tak menentu."
    },
    {
      icon: Smartphone,
      title: "Phone Holder",
      description: "Memudahkan navigasi Anda selama di perjalanan."
    }
  ];

  const galleryImageIds = [
    'gallery-1',
    'gallery-2',
    'gallery-3',
    'gallery-4',
    'gallery-5',
    'gallery-6',
  ];
  const galleryImages = galleryImageIds.map(id => {
      const placeholder = PlaceHolderImages.find(p => p.id === id);
      return placeholder || {
          id: id,
          imageUrl: `https://picsum.photos/seed/${id}/500/700`,
          description: `Galeri foto ${id}`,
          imageHint: 'customer photo'
      };
  });


  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen text-white">
        {heroSlide.image && (
           <Image
            src={heroSlide.image.imageUrl}
            alt={heroSlide.image.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroSlide.image.imageHint}
          />
        )}
        <div className="relative z-10 h-full flex flex-col justify-end items-center container px-4 pb-20 md:pb-24">
           <div className="max-w-4xl text-center bg-black/25 backdrop-blur-md p-6 rounded-xl">
             <h1 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tighter mb-4">
              {heroSlide.title}
            </h1>
            <p className="text-xs md:text-sm text-neutral-200 mb-8">
              {heroSlide.subtitle}
            </p>
            <Button asChild size="lg" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              <Link href="#pesan">Cek Ketersediaan via WhatsApp</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="armada" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Armada Favorit Pelanggan</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pilihan paling populer yang ringan, irit, dan lincah untuk mobilitas harian di perkotaan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteMotors.map((motor) => (
              <MotorCard key={motor.id} motor={motor} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/armada">
                Lihat Semua Armada <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="tentang-kami" className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Cepat, Terpercaya, & Transparan</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              RMJP adalah penyedia layanan rental motor yang berdedikasi untuk mendukung mobilitas Anda di Jakarta. Kami memastikan perjalanan Anda di ibu kota menjadi lebih mudah dengan armada yang selalu dalam kondisi prima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[...advantages, ...facilities].map((item, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-2 gap-8">
                      <div className="bg-background/50 text-center p-6 rounded-lg border">
                          <Users className="mx-auto h-10 w-10 text-secondary mb-4" />
                          <p className="text-3xl font-bold">1000+</p>
                          <p className="text-muted-foreground">Pelanggan Puas</p>
                      </div>
                      <div className="bg-background/50 text-center p-6 rounded-lg border">
                          <Award className="mx-auto h-10 w-10 text-secondary mb-4" />
                          <p className="text-3xl font-bold">25k+</p>
                          <p className="text-muted-foreground">Perjalanan Sukses</p>
                      </div>
                  </div>
                  <Card className="bg-card">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-3 text-2xl">
                              <Clock className="h-6 w-6 text-secondary" />
                              <span>Jam Operasional</span>
                          </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 !pt-2">
                         <div>
                              <h4 className="font-semibold text-muted-foreground">Pemesanan & Pengantaran Unit</h4>
                              <p className="text-xl font-bold text-foreground mt-1">08:00 - 21:00 WIB</p>
                          </div>
                           <div>
                              <h4 className="font-semibold text-muted-foreground">Garasi (Ambil/Kembalikan Sendiri)</h4>
                              <p className="text-xl font-bold text-foreground mt-1">05:00 - 21:30 WIB</p>
                          </div>
                          <p className="text-xs text-muted-foreground !mt-6">Pemesanan di luar jam operasional akan kami proses pada jam buka berikutnya.</p>
                      </CardContent>
                  </Card>
              </div>
              <div className="w-full">
                <h3 className="font-headline text-3xl font-bold mb-8 text-center md:text-left">Apa Kata Pelanggan Kami</h3>
                <TestimonialCarousel testimonials={testimonials} />
              </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri-home" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Momen Seru Bersama RMJP</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Intip keseruan para pelanggan setia kami saat menjelajahi Jakarta dan momen di balik layar tim kami.
            </p>
          </div>
          
          <GalleryCarousel images={galleryImages} />

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg">
              <Link href="/galeri">
                Lihat Galeri Lengkap <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
          ></iframe>
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
          <a 
            href="https://maps.app.goo.gl/uR4G9S9sAUNS81XQ9"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/80 p-8 rounded-lg text-center pointer-events-auto shadow-2xl backdrop-blur-sm border hover:bg-background/95 transition-all cursor-pointer"
          >
              <MapPin className="mx-auto h-10 w-10 text-secondary mb-4" />
              <h3 className="font-headline text-2xl font-bold">Buka di Google Maps</h3>
              <p className="text-muted-foreground mt-2">Dapatkan petunjuk arah</p>
          </a>
      </section>

      {/* Order Section */}
      <section id="pesan" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container px-4 max-w-4xl mx-auto">
          <Card className="bg-transparent border-0 shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-5xl md:text-6xl font-extrabold text-primary tracking-wider">
                FORM RMJP
              </CardTitle>
              <CardDescription className="text-secondary-foreground/80 pt-2">
                Isi formulir di bawah ini untuk mengirim pesanan Anda langsung ke admin kami via WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 md:p-8">
              <OrderForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
