
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { MotorCard } from '@/components/motor-card';
import { OrderForm } from '@/components/order-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Award, ArrowRight, Clock, ShieldCheck, Umbrella, Smartphone, MessageSquareDashed, Wrench, Instagram } from 'lucide-react';
import Link from 'next/link';
import { GalleryCarousel } from '@/components/gallery-carousel';
import { Tiktok } from '@/components/icons/tiktok';
import { Suspense } from 'react';
import { motorInventory, testimonials } from '@/lib/data';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { TestimonialCard } from '@/components/testimonial-card';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/hero-section';


export const metadata: Metadata = {
  title: 'RMB Rental | Sewa Motor Murah & Terpercaya di Bandung',
  description: 'Sewa motor di Bandung? RMB Rental solusinya. Armada Vario, Aerox, Scoopy. Harga murah, syarat mudah, gratis helm & jas hujan. Rental motor terdekat dari Stasiun Bandung & Bandara Husein Sastranegara.',
  keywords: [
    'sewa motor bandung',
    'rental motor bandung',
    'sewa motor terdekat bandung',
    'rental motor terdekat bandung',
    'sewa motor harian bandung',
    'rental motor murah bandung',
    'sewa motor matic bandung',
    'sewa motor dekat stasiun bandung',
    'rental motor dago',
    'sewa motor syarat mudah',
    'sewa motor vario bandung',
    'sewa motor scoopy bandung',
    'sewa motor aerox bandung',
    'rmb rental',
  ],
  alternates: {
    canonical: '/',
  },
};


export default async function Home() {
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

  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('galeri-'));

  const socialPreviews = PlaceHolderImages.filter(p => p.id.startsWith('social-'));

  return (
    <>
      <HeroSection />

      {/* Fleet Section */}
      <section id="armada" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Armada Favorit di Bandung</h2>
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Cepat, Terpercaya, &amp; Transparan</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              RMB adalah penyedia layanan rental motor yang berdedikasi untuk mendukung mobilitas Anda di Bandung. Kami memastikan perjalanan Anda menjadi lebih mudah dengan armada yang selalu dalam kondisi prima.
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
                              <h4 className="font-semibold text-muted-foreground">Pemesanan &amp; Pengantaran Unit</h4>
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

                <div className="hidden md:block">
                  <Suspense fallback={<div className="w-full h-56 bg-background/50 animate-pulse rounded-lg" />}>
                    <TestimonialCarousel testimonials={testimonials} />
                  </Suspense>
                </div>
                
                <div className="block space-y-4 md:hidden">
                  {testimonials.slice(0, 3).map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild variant="outline" size="lg">
                    <Link href="https://www.google.com/maps/search/rental+motor+bandung/" target="_blank" rel="noopener noreferrer">
                      Lihat Lebih Banyak Review di Google <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeri-home" className="py-16 md:py-24 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Momen Seru Bersama RMB</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Intip keseruan para pelanggan setia kami saat menjelajahi Bandung dan momen di balik layar tim kami.
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

      {/* Social Media Preview Section */}
      <section id="socials" className="py-16 md:py-24 bg-muted">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Ikuti Keseruan Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lihat preview dari konten Instagram &amp; TikTok kami. Klik untuk melihat postingan lengkap dan jangan lupa follow!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPreviews.map((preview, index) => (
              <Link href={preview.postUrl!} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 h-full">
                  <div className="relative">
                    <Image
                      src={preview.imageUrl}
                      alt={preview.description}
                      width={500}
                      height={500}
                      className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={preview.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {preview.platform === 'Instagram' ? <Instagram className="h-12 w-12 text-white" /> : <Tiktok className="h-12 w-12 text-white" />}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
                        {preview.platform === 'Instagram' ? <Instagram className="h-5 w-5 text-pink-600" /> : <Tiktok className="h-5 w-5 text-black" />}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="font-semibold text-sm line-clamp-2">{preview.caption}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section id="lokasi" className="relative h-[400px] md:h-[500px] w-full">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9765324021287!2d107.59103007474926!3d-6.91003399310574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e617d91f4b59%3A0x41a7749e75522e83!2sRMB%20Nethen%20Rental%20Motor%20Bandung!5e0!3m2!1sen!2sid!4v1721980004514!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RMB Rental - Rental Motor Bandung"
          ></iframe>
          <div className="absolute inset-0 bg-transparent pointer-events-none" />
          <a 
            href="https://www.google.com/maps/place/RMB+Nethen+Rental+Motor+Bandung/@-6.910034,107.5936049,17z/data=!3m1!4b1!4m6!3m5!1s0x2e68e617d91f4b59:0x41a7749e75522e83!8m2!3d-6.910034!4d107.5936049!16s%2Fg%2F11sbpm2g8l"
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
                FORM RMB
              </CardTitle>
              <CardDescription className="text-secondary-foreground/80 pt-2 max-w-lg mx-auto">
                Isi formulir di bawah untuk mengirim pesanan Anda via WhatsApp.
                Admin kami akan segera merespon pesanan Anda.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 md:p-8">
              <Suspense fallback={<div className="w-full h-[888px] bg-card/10 animate-pulse rounded-lg" />}>
                <OrderForm />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
