import { ArrowLeft, Clock, Info, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daftar Harga Sewa Motor Jakarta Pusat | RMJP Rental',
  description: 'Daftar harga sewa motor harian termurah di RMJP Rental Jakarta Pusat. Tarif transparan dan kompetitif mulai dari Rp 60.000 per hari.',
  alternates: {
    canonical: '/harga',
  },
};

const priceList = [
  { price: 60000, models: 'Yamaha Mio J, Xeon GT, Soul GT, Honda Spacy.' },
  { price: 70000, models: 'Honda Beat FI/Pop, Yamaha Mio Z 125cc, Mio S 125cc, Fino, X-Ride.' },
  { price: 80000, models: 'Honda Beat ESP/Street, Vario 110cc, Honda Genio, Yamaha Gear.' },
  { price: 100000, models: 'Honda Vario 125cc Old.' },
  { price: 110000, models: 'Honda Vario 125cc LED, Yamaha Lexi, Fazzio.' },
  { price: 120000, models: 'Honda Vario 150cc New, Scoopy Terbaru.' },
  { price: 130000, models: 'Motor Listrik Polytron FOX R.' },
  { price: 160000, models: 'Yamaha Aerox.' },
  { price: 180000, models: 'Yamaha New NMAX, Honda PCX 150cc.' },
];

export default function HargaPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto max-w-screen-lg px-4 py-12 md:py-24">
        <div className="mb-12 text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-secondary mb-4 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Halaman Utama
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-2">Daftar Harga Sewa</h1>
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
                  <TableHead>Model Motor</TableHead>
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

        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <PlusCircle className="h-6 w-6 text-secondary" />
                        <span>Ketentuan Biaya Tambahan</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div>
                     <h4 className="font-semibold">Weekend & Tanggal Merah</h4>
                     <p className="text-muted-foreground">Dikenakan biaya tambahan sebesar <span className="text-foreground font-bold">Rp 20.000</span> dari harga dasar.</p>
                   </div>
                   <div>
                     <h4 className="font-semibold">Promo Durasi</h4>
                     <p className="text-muted-foreground">Biaya tambahan weekend <span className="text-green-500 font-bold">GRATIS</span> untuk pemakaian sewa lebih dari 3 hari.</p>
                   </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Clock className="h-6 w-6 text-secondary" />
                        <span>Jam Operasional</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div>
                        <h4 className="font-semibold text-muted-foreground">Pemesanan & Pengantaran Unit</h4>
                        <p className="text-2xl font-bold text-foreground mt-1">08:00 - 21:00 WIB</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-muted-foreground">Garasi (Ambil/Kembalikan Sendiri)</h4>
                        <p className="text-2xl font-bold text-foreground mt-1">05:00 - 21:30 WIB</p>
                    </div>
                    <p className="text-xs text-muted-foreground !mt-6">Pemesanan di luar jam operasional akan kami proses pada jam buka berikutnya.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
