import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CarCard } from '@/components/car-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ArrowRight,
  MessageCircle,
  Ship,
  ShieldCheck,
  Users,
  FileCheck,
  Wrench,
  MapPin,
  PhoneCall,
  Banknote,
} from 'lucide-react';
import { carInventory } from '@/lib/cars';
import { generateSeoMetadata } from '@/lib/seo';
import { getWhatsAppLink } from '@/brands';

const pageSlug = '/sewa-mobil';
const title = 'Sewa Mobil Bandung | Rental Mobil Terbaik RMB';
const description =
  'Sewa mobil di Bandung mulai 275rb/hari. Tersedia Avanza, Innova, Alphard, Hiace, Fortuner & Brio. Tanpa supir atau dengan supir, antar jemput tersedia. Pesan sekarang!';

export const metadata: Metadata = generateSeoMetadata(
  'Sewa Mobil Bandung',
  title,
  description,
  pageSlug
);

const carFaqs = [
  {
    question: 'Apakah harga sewa mobil sudah termasuk supir?',
    answer:
      'Harga di atas adalah tarif lepas kunci (tanpa supir). Jika membutuhkan mobil ber-supir, kami juga menyediakan paket harian dengan tarif berbeda. Hubungi tim kami via WhatsApp untuk penawaran terbaik.',
  },
  {
    question: 'Apakah ada layanan antar jemput mobil?',
    answer:
      'Ya. Mobil dapat diantar ke lokasi Anda di Bandung, termasuk hotel, penginapan, atau Bandara Husein Sastranegara. Biaya antar jemput menyesuaikan jarak lokasi.',
  },
  {
    question: 'Syarat apa saja untuk menyewa mobil?',
    answer:
      'Cukup bawa KTP (dan SIM jika menyewa manual / ber-supir dengan opsi self-drive). Untuk unit premium seperti Alphard atau Hiace, kami memberlakukan uang jaminan (deposit) yang dikembalikan setelah unit kembali.',
  },
  {
    question: 'Apakah diperbolehkan keluar kota?',
    answer:
      'Boleh. Mobil standar diperbolehkan dipakai di sekitar Jawa Barat. Untuk perjalanan antar kota atau antar pulau, beri tahu tim kami terlebih dahulu agar dapat diatur sesuai ketentuan.',
  },
  {
    question: 'Bagaimana cara memesan?',
    answer:
      'Pilih unit favorit Anda, lalu klik tombol Sewa. Tim kami akan segera menghubungi Anda via WhatsApp untuk konfirmasi ketersediaan unit dan pembayaran.',
  },
];

const keunggulan = [
  {
    icon: ShieldCheck,
    title: 'Unit Terawat',
    description: 'Seluruh mobil servis rutin, pajak lengkap, dan asuransi aktif.',
  },
  {
    icon: Users,
    title: 'Lepas Kunci atau Ber-Supir',
    description: 'Bebas pilih: self-drive untuk gaya santai atau dengan supir profesional.',
  },
  {
    icon: Ship,
    title: 'Antar Jemput',
    description: 'Unit bisa diantar ke hotel, villa, maupun bandara di Bandung.',
  },
  {
    icon: FileCheck,
    title: 'Proses Cepat',
    description: 'Pesan via WhatsApp, unit siap tanpa birokasi berbelit.',
  },
  {
    icon: Banknote,
    title: 'Harga Transparan',
    description: 'Tanpa hidden cost. Harga yang tertera adalah harga yang Anda bayar.',
  },
  {
    icon: Wrench,
    title: 'Dukungan 24/7',
    description: 'Bantuan darurat di jalan tersedia kapan pun Anda membutuhkan.',
  },
];

const proses = [
  {
    step: '01',
    title: 'Pilih Unit',
    description: 'Tentukan mobil yang cocok untuk kebutuhan Anda.',
  },
  {
    step: '02',
    title: 'Hubungi Kami',
    description: 'Chat WhatsApp dan konfirmasi ketersediaan unit serta tanggal.',
  },
  {
    step: '03',
    title: 'Selesaikan Pembayaran',
    description: 'Lakukan DP untuk mengunci unit di tanggal pilihan Anda.',
  },
  {
    step: '04',
    title: 'Ambil & Jalan',
    description: 'Ambil unit atau diantar ke lokasi. Selamat berkendara!',
  },
];

export default function SewaMobilPage() {
  const whatsappUrl = getWhatsAppLink(
    'Halo RMB, saya ingin sewa mobil di Bandung. Mohon info ketersediaan unit.'
  );

  return (
    <>
      <Header />
      <main className="bg-background text-foreground overflow-x-hidden">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-background">
          <div className="absolute inset-0 opacity-20 text-foreground md:opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="absolute top-32 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" />
          <div className="absolute bottom-40 right-24 w-10 h-10 bg-primary/30 rounded-full animate-float-delayed hidden lg:block" />

          <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-24">
            <div className="container px-0 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/15 text-primary border-primary/30 text-sm px-4 py-1.5">
                  Rental Mobil Terpercaya di Bandung
                </Badge>
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
                  Sewa Mobil{' '}
                  <span className="text-primary relative inline-block">
                    Bandung
                    <svg
                      className="absolute -bottom-1 left-0 w-full text-primary"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M2 10C50 2 150 2 198 10"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Jelajahi Bandung dan sekitarnya dengan nyaman. Armada terawat, harga
                  bersahabat mulai{' '}
                  <span className="font-semibold text-foreground">Rp275rb/hari</span>,
                  bisa lepas kunci atau ber-supir.
                </p>

                <div className="flex rounded-2xl bg-primary px-5 py-3 shadow-soft w-fit">
                  <p className="font-display font-bold text-primary-foreground text-xl leading-none">
                    Mulai 275rb
                  </p>
                  <p className="text-xs text-primary-foreground/80 mt-1 ml-2">per hari</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <Button asChild size="lg" className="group h-12 sm:h-auto sm:px-8 sm:py-6 text-base font-semibold sm:animate-pulse-glow">
                    <Link href="#armada">
                      Lihat Armada
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-12 sm:h-auto sm:px-8 sm:py-6 text-base font-semibold border-2 border-foreground">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-8 pt-2">
                  <div>
                    <p className="font-display font-bold text-2xl sm:text-3xl">8+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Pilihan Unit</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl sm:text-3xl">10K+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Pelanggan Puas</p>
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl sm:text-3xl">24/7</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Dukungan</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square bg-primary/20 rounded-full blur-3xl" />
                <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-card-hover">
                  <Image
                    src="https://placehold.co/1200x900/FFF4DD/9A6300?text=Rental+Mobil+Bandung"
                    alt="Armada mobil sewa RMB di Bandung"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    data-ai-hint="rental car fleet bandung"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 sm:-left-6 bg-card rounded-2xl p-4 shadow-card animate-float hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">Antar Jemput</p>
                      <p className="text-sm text-muted-foreground">Hotel &amp; Bandara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Kenapa Pilih <span className="text-primary">RMB?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kepercayaan ribuan pelanggan adalah prioritas kami. Nikmati kemudahan sewa
                mobil tanpa ribet.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keunggulan.map((item) => (
                <Card
                  key={item.title}
                  className="p-6 bg-card border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Armada */}
        <section id="armada" className="py-16 md:py-24 scroll-mt-20">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Pilihan Armada <span className="text-primary">Mobil Kami</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                MPV keluarga, SUV tangguh, hingga MPV premium. Semua unit terawat dan siap
                pakai.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {carInventory.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Button asChild size="lg" variant="outline" className="h-12 px-8 font-semibold">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Tanya Unit Lain
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Proses */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Cara Sewa <span className="text-primary">Gampang</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Empat langkah sederhana dari memilih unit hingga mobil siap meluncur.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {proses.map((item) => (
                <div
                  key={item.step}
                  className="relative bg-card rounded-2xl p-6 border border-transparent hover:border-primary/50 transition-all duration-300"
                >
                  <p className="font-display font-extrabold text-5xl text-primary/25 mb-4">
                    {item.step}
                  </p>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Pertanyaan <span className="text-primary">Umum</span>
              </h2>
            </div>
            <Card className="max-w-3xl mx-auto p-6 sm:p-10">
              <Accordion type="single" collapsible className="w-full">
                {carFaqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`car-faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>
          <div className="container px-4 relative text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
              Kasih tahu kami kebutuhan Anda
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
              Siap Menjelajah Bandung <span className="text-primary">Pakai Mobil?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-background/70 max-w-xl mx-auto">
              Pesan sekarang, tim kami merespons cepat via WhatsApp. Unit terbatas, amankan
              jadwal Anda hari ini!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
              <Button asChild size="lg" className="h-12 sm:px-8 font-semibold bg-primary text-primary-foreground hover:bg-background hover:text-foreground sm:animate-pulse-glow">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Pesan via WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 sm:px-8 font-semibold border-2 border-background/30 text-background hover:bg-background hover:text-foreground">
                <Link href="/#pesan">
                  <FileCheck className="w-5 h-5 mr-2" />
                  Formulir Pemesanan
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}