import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Info, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Daftar Harga Sewa Mobil Bandung | RMB Rental',
  description: 'Daftar harga sewa mobil harian termurah di RMB Rental Bandung. Tarif transparan dan kompetitif mulai dari Rp 300.000 per hari.',
  alternates: {
    canonical: '/harga',
  },
};

const priceList = [
  { price: 300000, models: 'Toyota Calya.' },
  { price: 300000, models: 'Daihatsu Sigra.' },
  { price: 350000, models: 'Toyota Avanza.' },
  { price: 1200000, models: 'Toyota Fortuner.' },
];

export default function HargaPage() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Daftar Harga Sewa Mobil</h1>
            <p className="text-lg text-muted-foreground">Transparan, kompetitif, dan fleksibel untuk Anda.</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Harga Sewa Per Hari</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Harga Mulai Dari</TableHead>
                    <TableHead>Model Mobil</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {priceList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold text-primary text-lg">
                        Rp {item.price.toLocaleString('id-ID')}
                      </TableCell>
                      <TableCell>{item.models}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Alert className="mt-6 border-primary/30 bg-primary/10">
                <Info className="h-4 w-4 text-primary" />
                <AlertTitle className="text-primary">Harga Dinamis</AlertTitle>
                <AlertDescription>
                  Harga dasar dapat berubah sewaktu-waktu tergantung pada ketersediaan unit, musim (high season), dan durasi sewa (mingguan/bulanan).
                </AlertDescription>
              </Alert>
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
                <h4 className="font-semibold text-muted-foreground">Pemesanan & Pengantaran Unit</h4>
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