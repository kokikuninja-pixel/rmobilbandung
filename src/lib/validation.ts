import { z } from "zod";

export const rentalFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi, minimal 2 karakter." }),
  ktpOrigin: z.string().min(3, { message: "Asal KTP harus diisi." }),
  currentDomicile: z.string().min(3, { message: "Domisili sekarang harus diisi." }),
  workLocation: z.string().min(3, { message: "Lokasi kerja harus diisi." }),
  workDurationInJakarta: z.string().optional(),
  desiredMotor: z.string({ required_error: "Silakan pilih motor yang diinginkan." }),
  rentalStartDate: z.date({ required_error: "Tanggal mulai sewa harus diisi." }),
  rentalStartTime: z.string({ required_error: "Jam mulai sewa harus diisi." }),
  rentalEndDate: z.date({ required_error: "Tanggal selesai sewa harus diisi." }),
  rentalEndTime: z.string({ required_error: "Jam selesai sewa harus diisi." }),
  unitCount: z.coerce.number().min(1, { message: "Jumlah unit minimal 1." }),
  personCount: z.coerce.number().min(1, { message: "Jumlah orang minimal 1." }),
  usagePurpose: z.string().min(3, { message: "Kebutuhan pemakaian harus diisi." }),
  destination: z.string().min(5, { message: "Tujuan (tempat) harus diisi, minimal 5 karakter." }),
  honeypot: z.string().optional(), // Bot protection
}).refine(data => {
  if (data.workLocation.toLowerCase().includes('jakarta')) {
    return !!data.workDurationInJakarta && data.workDurationInJakarta.length > 0;
  }
  return true;
}, {
  message: "Mohon isi sudah berapa lama bekerja di Jakarta.",
  path: ["workDurationInJakarta"],
}).refine(data => {
    if (data.rentalStartDate && data.rentalEndDate) {
        return data.rentalEndDate >= data.rentalStartDate;
    }
    return true;
}, {
  message: "Tanggal selesai tidak boleh sebelum tanggal mulai.",
  path: ["rentalEndDate"],
});

export type RentalFormValues = z.infer<typeof rentalFormSchema>;
