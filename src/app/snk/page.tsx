import { ArrowLeft, Ban, CheckCircle, FileText, MapPin, Milestone, Phone, Wallet } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan Sewa Motor | Nethen Rental Semarang',
  description: 'Pahami syarat dan ketentuan sewa motor di Nethen Rental Semarang. Informasi lengkap tentang booking, jaminan, dan penggunaan unit.',
  alternates: {
    canonical: '/snk',
  },
};

export default function SnKPage() {
  const facilities = [
    { text: '2 Helm SNI' },
    { text: 'Jas Hujan' },
    { text: 'Phone Holder (Tersedia pada unit tertentu)' },
  ];

  const bookingSteps = [
    { text: 'Siapkan Dokumen: Foto KTP, SIM C aktif, ID Pegawai/KTM, serta tiket kereta/pesawat (jika ada).' },
    { text: 'Kirim Data: Hubungi kami via WhatsApp di 0877-3890-8578.' },
    { text: 'Jaminan Identitas: Salah satu identitas asli akan kami simpan sebagai jaminan selama masa sewa berlangsung.' },
  ];

  const terms = [
    {
      title: 'Batas Wilayah Operasional',
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      points: [
        'Motor hanya boleh digunakan di wilayah Kota Semarang dan sekitarnya (area yang wajar).',
        'Penggunaan di luar wilayah tersebut memerlukan kesepakatan baru dengan pihak Nethen.',
        'Pelanggaran batas wilayah tanpa konfirmasi akan dikenakan denda tambahan sebesar IDR 100.000/hari.',
      ],
    },
    {
      title: 'Tanggung Jawab & Larangan',
      icon: <Ban className="h-6 w-6 text-destructive" />,
      points: [
        'Status Sewa: Masa sewa tidak dapat diperpanjang secara otomatis kecuali ada kesepakatan baru.',
        'Penyewa bertanggung jawab penuh atas kondisi kendaraan dan keselamatan selama masa sewa.',
        'Unit tidak boleh digunakan untuk tindakan yang melanggar hukum/kriminal.',
        'Unit tidak boleh dipinjamkan atau disewakan kembali kepada pihak lain.',
      ],
    },
    {
        title: 'Ketentuan Denda & Kehilangan',
        icon: <Wallet className="h-6 w-6 text-secondary" />,
        points: [
          'STNK Hilang: Denda Rp 1.000.000,-.',
          'Helm Hilang: Denda Rp 100.000,- per helm.',
          'Jas Hujan Hilang: Denda Rp 70.000,-.',
          'Kunci Hilang: Denda Rp 200.000,-.',
          'Holder HP Patah/Hilang: Denda Rp 20.000,-.',
        ],
      },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-24">
        
        <div className="mb-12 text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-secondary mb-4 inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Halaman Utama
            </Link>
             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">Syarat & Ketentuan</h1>
             <p className="text-lg text-muted-foreground">Transparansi adalah prioritas kami.</p>
        </div>

        <div className="space-y-12">
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                    <Milestone className="h-6 w-6 text-secondary" />
                    <span>Fasilitas Termasuk</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">Setiap penyewaan unit di Nethen sudah termasuk fasilitas pendukung untuk kenyamanan berkendara Anda:</p>
                <ul className="space-y-2">
                    {facilities.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary" />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                    <FileText className="h-6 w-6 text-secondary" />
                    <span>Syarat & Cara Booking</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="mb-4 text-muted-foreground">Proses pemesanan kami rancang sangat praktis melalui WhatsApp:</p>
                 <ul className="space-y-3 list-decimal list-inside">
                    {bookingSteps.map((item, index) => (
                        <li key={index}>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            
            <div>
                <h2 className="text-3xl font-bold text-center mb-8">Ketentuan Penggunaan (Penting)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {terms.map((section) => (
                        <Card key={section.title}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    {section.icon}
                                    <span>{section.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {section.points.map((point, index) => (
                                         <li key={index} className="flex items-start gap-2">
                                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary/50" />
                                            <span>{point}</span>
                                         </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Separator />
            
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Masih ada pertanyaan?</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                Jangan ragu untuk menghubungi kami jika ada ketentuan yang kurang jelas. Tim kami siap membantu Anda.
                </p>
                <Button asChild>
                    <a href="https://wa.me/6287738908578" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-4 w-4" /> Hubungi via WhatsApp
                    </a>
                </Button>
            </div>

        </div>

      </div>
    </div>
  );
}
