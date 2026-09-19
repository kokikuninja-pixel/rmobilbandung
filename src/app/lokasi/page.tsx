
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getWhatsAppLink } from '@/brands';

export const metadata: Metadata = {
    title: 'Lokasi & Kontak | RMB Rental Mobil Bandung',
    description: 'Temukan lokasi garasi kami di Bandung untuk mengambil unit sewa. Hubungi kami via WhatsApp untuk info respon cepat.',
    alternates: {
        canonical: '/lokasi',
    },
};

export default function LokasiPage() {
    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.985994273295!2d107.58788467590216!3d-6.89201946743118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e67041a75049%3A0xe54c1f938722b512!2sJl.%20Samiaji%20No.11a%2C%20Arjuna%2C%20Kec.%20Cicendo%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040172!5e0!3m2!1sen!2sid!4v1719234567890!5m2!1sen!2sid`;
    const whatsappUrl = getWhatsAppLink();

  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <div className="container mx-auto max-w-screen-xl px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold">Temukan Kami</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Kunjungi garasi kami untuk mengambil unit sewa. Sebebas Anda menjelajah kota Bandung.
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
                            title="Lokasi RMB Rental Mobil Bandung"
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
                                <p className="text-muted-foreground">Jl. Samiaji No.11A, Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat 40172</p>
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
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
