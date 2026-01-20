import { z } from "zod";

export const rentalFormSchema = z.object({
  name: z.string().min(2, { message: "Nama harus diisi, minimal 2 karakter." }),
  ktpOrigin: z.string().min(3, { message: "Asal KTP harus diisi." }),
  currentDomicile: z.string().min(3, { message: "Domisili sekarang harus diisi." }),
  workLocation: z.string().min(3, { message: "Lokasi kerja harus diisi." }),
  workDurationInJakarta: z.string().optional(),
  desiredMotor: z.string({ required_error: "Silakan pilih motor yang diinginkan." }),
  rentalDates: z.object({
    from: z.date({ required_error: "Tanggal mulai sewa harus diisi." }),
    to: z.date({ required_error: "Tanggal selesai sewa harus diisi." }),
  }),
  purpose: z.string().min(5, { message: "Tujuan penggunaan harus diisi, minimal 5 karakter." }),
  honeypot: z.string().optional(), // Bot protection
}).refine(data => {
  if (data.workLocation.toLowerCase().includes('jakarta')) {
    return !!data.workDurationInJakarta && data.workDurationInJakarta.length > 0;
  }
  return true;
}, {
  message: "Mohon isi sudah berapa lama bekerja di Jakarta.",
  path: ["workDurationInJakarta"],
}).refine(data => data.rentalDates.from <= data.rentalDates.to, {
  message: "Tanggal selesai tidak boleh sebelum tanggal mulai.",
  path: ["rentalDates"],
});

export type RentalFormValues = z.infer<typeof rentalFormSchema>;
