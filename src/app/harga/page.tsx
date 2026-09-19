import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Info, Clock, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getWhatsAppLink } from '@/brands';
import { carInventory } from '@/lib/cars';

export const metadata: Metadata = {
  title: 'Harga Sewa Mobil Bandung | RMB Rental',
  description: 'Cek harga sewa mobil di RMB Rental Bandung. Tarif transparan dan kompetitif. Hubungi admin via WhatsApp untuk informasi harga terbaik.',
  alternates: {
    canonical: '/harga',
  },
};

export default function HargaPage() {
  const whatsappUrl = getWhatsAppLink('Halo RMB, saya mau tanya harga sewa mobil. Tolong info tarifnya ya.');

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Harga Sewa Mobil</h1>
            <p className="text-lg text-muted-foreground">Transparan, kompetitif, dan fleksibel untuk Anda.</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Pilihan Unit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2.5">
                {carInventory.map((car) => (
                  <span key={car.id} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium">
                    {car.name} · {car.seats} Kursi · {car.transmission}
                  </span>
                ))}
              </div>
              <Alert className="mt-6 border-accent/40 bg-accent/10">
                <Info className="h-4 w-4 text-[hsl(var(--gold))]" />
                <AlertTitle className="text-accent">Harga Tanya Admin</AlertTitle>
                <AlertDescription>
                  Untuk mendapatkan tarif terbaik sesuai unit dan durasi, silakan hubungi admin kami
                  melalui WhatsApp. Respon cepat dan tanpa biaya tersembunyi.
                </AlertDescription>
              </Alert>
              <Button asChild size="lg" className="mt-6 w-full sm:w-auto h-12 px-8 font-semibold">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Tanya Harga via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-12 max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Clock className="h-6 w-6 text-primary" />
                <span>Jam Operasional</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-muted-foreground">Pemesanan Unit</h4>
                <p className="text-2xl font-bold text-foreground mt-1">08:00 - 21:00 WIB</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted-foreground">Ambil & Kembalikan Sendiri</h4>
                <p className="text-2xl font-bold text-foreground mt-1">05:00 - 21:30 WIB</p>
              </div>
              <p className="text-xs text-muted-foreground !mt-6">Pemesanan di luar jam operasional akan kami proses pada jam buka berikutnya.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}