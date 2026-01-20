
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motorInventory, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MotorCard } from '@/components/motor-card';
import { OrderForm } from '@/components/order-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MapPin, Award, ArrowRight, Clock, ShieldCheck, Umbrella, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

export default async function Home() {
  const heroSlide = {
    image: PlaceHolderImages.find(img => img.id === 'hero-rmjp-logo-bg'),
    title: "Sewa Motor Jakarta Pusat – Praktis, Murah & Terpercaya.",
    subtitle: "Keliling Jakarta tanpa macet dengan armada terbaru. Jemput unitmu di Kemayoran atau kirim ke hotel/stasiun terdekat."
  };

  const favoriteMotorIds = ['honda-genio', 'honda-beat-new', 'yamaha-mio-z'];
  const favoriteMotors = motorInventory.filter(motor => favoriteMotorIds.includes(motor.id));

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
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Sewa Motor Jakarta Pusat (RMJP): Cepat, Terpercaya, & Transparan</h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        RMJP adalah penyedia layanan rental motor yang berdedikasi untuk mendukung mobilitas Anda di Jakarta. Apakah Anda seorang wisatawan, pekerja, atau pendatang, kami memastikan perjalanan Anda di ibu kota menjadi lebih mudah dengan armada yang selalu dalam kondisi prima.
                    </p>

                    <div className="mt-12">
                      <h3 className="text-3xl font-bold mb-6">Fasilitas Standar Kami</h3>
                      <div className="space-y-4">
                          <div className="flex items-start gap-4">
                              <div className="bg-secondary/10 border border-secondary/20 rounded-full p-2">
                                  <ShieldCheck className="h-6 w-6 text-secondary" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-lg">2 Helm SNI</h4>
                                  <p className="text-muted-foreground">Untuk keamanan Anda dan penumpang.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="bg-secondary/10 border border-secondary/20 rounded-full p-2">
                                  <Umbrella className="h-6 w-6 text-secondary" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-lg">Jas Hujan</h4>
                                  <p className="text-muted-foreground">Agar perjalanan tetap lancar saat hujan.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="bg-secondary/10 border border-secondary/20 rounded-full p-2">
                                  <Smartphone className="h-6 w-6 text-secondary" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-lg">Phone Holder</h4>
                                  <p className="text-muted-foreground">Memudahkan navigasi Anda di jalan.</p>
                              </div>
                          </div>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6">
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

                    <Card className="bg-card mt-12">
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
                  <h3 className="font-headline text-3xl font-bold mb-8">Apa Kata Pelanggan Kami</h3>
                  <TestimonialCarousel testimonials={testimonials} />
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
      <section id="pesan" className="py-16 md:py-24 bg-background">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Sewa Motor Anda Sekarang</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Isi formulir di bawah ini untuk mengirim pesanan Anda langsung ke admin kami via WhatsApp.
            </p>
          </div>
          <Card className="bg-card backdrop-blur-sm border shadow-xl">
            <CardContent className="p-6 md:p-8">
              <OrderForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
