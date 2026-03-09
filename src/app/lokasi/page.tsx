
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Lokasi & Kontak | RMB Rental Motor Bandung',
  description: 'Temukan lokasi kami di Bandung. Kami siap melayani pengantaran unit ke lokasi Anda. Hubungi kami via WhatsApp untuk respon cepat.',
  alternates: {
    canonical: '/lokasi',
  },
};

export default function LokasiPage() {
    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916899750005!2d107.59995137475139!3d-6.900223993098716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65c36324855%3A0x2649a327a3713a8a!2sRental%20Motor%20Bandung%20-%20RMB!5e0!3m2!1sen!2sid!4v1700021676641!5m2!1sen!2sid`;

  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold">Temukan Kami</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kunjungi garasi kami atau hubungi kami untuk layanan antar-jemput di lokasi Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
                <Card className="overflow-hidden shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            src={googleMapsUrl}
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi RMB Rental Motor Bandung"
                        ></iframe>
                    </div>
                </Card>
            </div>

            <div className="lg:col-span-1 space-y-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Alamat Garasi</h3>
                                <p className="text-muted-foreground">Jl. Taman Sari Bawah No.2, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                             <div className="bg-primary/10 p-3 rounded-lg">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Jam Operasional</h3>
                                <p className="text-muted-foreground font-bold">05:00 - 21:30 WIB</p>
                                <p className="text-muted-foreground text-sm">Setiap Hari</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Button asChild size="lg" className="w-full">
                    <a href="https://wa.me/6282190105740" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" /> Hubungi Kami
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
