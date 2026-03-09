'use client';
import { Search, FileText, ShieldCheck, Bike } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Pilih Motor & Tanggal',
    description:
      'Jelajahi armada kami, pilih motor yang paling sesuai, dan tentukan tanggal sewa Anda melalui formulir pemesanan.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Kirim Dokumen via WA',
    description:
      'Siapkan foto E-KTP, SIM C, ID kerja/mahasiswa, tiket perjalanan, dan bukti inap. Kirim semua ke admin kami via WhatsApp.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Serah Terima & Jaminan',
    description:
      'Saat unit diantar atau Anda ambil, serahkan 1 identitas asli (KTP/SIM A/STNK) sebagai jaminan selama masa sewa.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Nikmati Perjalanan Anda',
    description:
      'Ambil kunci dan mulailah petualangan Anda di Bandung! Tim kami siap membantu jika Anda membutuhkan bantuan di jalan.',
    icon: Bike,
  },
]

export default function Process() {
  return (
    <section
      id="proses"
      className="relative w-full py-16 md:py-24 bg-background"
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`font-display font-bold text-4xl lg:text-5xl text-foreground mb-4`}
          >
            Sewa dalam <span className="text-primary">4 Langkah Mudah</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground`}
          >
            Proses pemesanan kami cepat, mudah, dan transparan. Ikuti langkah-langkah di bawah ini untuk memulai.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative group`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-border -z-10" />
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-card rounded-2xl p-6 text-center border shadow-sm flex flex-col items-center`}
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center font-display font-bold text-primary-foreground text-2xl shadow-lg mb-4 ring-4 ring-background">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-xl text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
