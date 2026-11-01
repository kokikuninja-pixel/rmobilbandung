import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Info, Clock, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppLink } from '@/components/whatsapp-link';
import { carInventory, formatRupiah, PRICE_BASIS, PRICE_NOTE } from '@/lib/cars';

export const metadata: Metadata = {
  title: 'Harga Sewa Mobil Bandung | RMB Rental',
  description: 'Harga sewa mobil Bandung lepas kunci: Calya & Sigra mulai Rp 319.000/hari, Avanza Rp 385.000/hari, Fortuner Rp 1.100.000/hari. Booking via WhatsApp.',
  alternates: {
    canonical: '/harga',
  },
};

export default function HargaPage() {
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
              <CardTitle>Tarif Sewa Mobil</CardTitle>
              <p className="text-sm text-muted-foreground">
                Mulai dari · {PRICE_BASIS}
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-muted-foreground">
                      <th className="py-3 pr-4 font-medium">Unit</th>
                      <th className="py-3 px-4 font-medium text-right">Per hari</th>
                      <th className="py-3 px-4 font-medium text-right">Per minggu</th>
                      <th className="py-3 pl-4 font-medium text-right">Per bulan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {carInventory.map((car) => (
                      <tr key={car.id}>
                        <td className="py-4 pr-4">
                          <p className="font-semibold">{car.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {car.seats} Kursi · {car.transmission}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-right font-bold text-accent whitespace-nowrap">
                          {formatRupiah(car.pricing.day)}
                        </td>
                        <td className="py-4 px-4 text-right font-semibold whitespace-nowrap">
                          {formatRupiah(car.pricing.week)}
                        </td>
                        <td className="py-4 pl-4 text-right font-semibold whitespace-nowrap">
                          {formatRupiah(car.pricing.month)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Alert className="mt-6 border-accent/40 bg-accent/10">
                <Info className="h-4 w-4 text-[hsl(var(--gold))]" />
                <AlertTitle className="text-accent">Catatan Harga</AlertTitle>
                <AlertDescription>{PRICE_NOTE}</AlertDescription>
              </Alert>
              <Button asChild size="lg" className="mt-6 w-full sm:w-auto h-12 px-8 font-semibold bg-green-600 hover:bg-green-700 text-white">
                <WhatsAppLink location="halaman-harga">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Booking via WhatsApp
                </WhatsAppLink>
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