import { z } from "zod";

const phoneRegex = new RegExp(
  /^(\+62)\d{9,13}$/
);

// Base schema for shared fields
const baseSchema = z.object({
  name: z.string().min(2, { message: "Nama lengkap sesuai KTP harus diisi." }),
  phone: z.string().regex(phoneRegex, 'Format nomor WhatsApp tidak valid. Harus diawali dengan +62.'),
  desiredMotor: z.string({ required_error: "Silakan pilih motor yang diinginkan." }),
  rentalStartDate: z.date({ required_error: "Tanggal mulai sewa harus diisi." }),
  rentalStartTime: z.string({ required_error: "Jam mulai sewa harus diisi." }),
  rentalEndDate: z.date({ required_error: "Tanggal selesai sewa harus diisi." }),
  rentalEndTime: z.string({ required_error: "Jam selesai sewa harus diisi." }),
  unitCount: z.coerce.number().min(1, { message: "Jumlah unit minimal 1." }),
  personCount: z.coerce.number().min(1, { message: "Jumlah orang minimal 1." }),
  pickupMethod: z.enum(['garage', 'delivery'], { required_error: "Metode pengambilan harus dipilih." }),
  usagePurpose: z.string().min(3, { message: "Kebutuhan pemakaian harus diisi." }),
  destination: z.string().min(3, { message: "Tujuan (tempat) harus diisi." }),
  sourceOfInformation: z.string({ required_error: "Sumber informasi harus dipilih." }),
  disclaimerAgreed: z.literal<boolean>(true, {
    errorMap: () => ({ message: "Anda harus menyetujui pernyataan ini." }),
  }),
  honeypot: z.string().optional(),
});

// Schema for new customers
const newCustomerSchema = baseSchema.extend({
  previousCustomer: z.literal('no'),
  email: z.string({ required_error: "Email harus diisi." }).email({ message: "Format email tidak valid." }),
  ktpCity: z.string({ required_error: "Kota asal sesuai KTP harus diisi." }),
  currentDomicile: z.string({ required_error: "Kota domisili sekarang harus diisi." }),
  occupation: z.string().min(3, { message: "Pekerjaan harus diisi (min. 3 karakter)." }),
  workLocation: z.string({ required_error: "Lokasi kerja (kota) harus diisi." }),
  socialMediaPlatform: z.string().optional(),
  socialMediaUsername: z.string().optional(),
  previousInvoice: z.string().optional(), // Not for new customers
});

// Schema for returning customers
const returningCustomerSchema = baseSchema.extend({
  previousCustomer: z.literal('yes'),
  previousInvoice: z.string().optional(),
  // For returning customers, these are not needed
  email: z.string().email().optional(),
  ktpCity: z.string().optional(),
  currentDomicile: z.string().optional(),
  occupation: z.string().optional(),
  workLocation: z.string().optional(),
  socialMediaPlatform: z.string().optional(),
  socialMediaUsername: z.string().optional(),
});


// Discriminated union of the two schemas
const customerSchema = z.discriminatedUnion("previousCustomer", [
  newCustomerSchema,
  returningCustomerSchema,
]);

// Final schema with refinements for conditional logic
export const rentalFormSchema = customerSchema.refine(data => {
    if (data.rentalStartDate && data.rentalEndDate) {
        return data.rentalEndDate >= data.rentalStartDate;
    }
    return true;
}, {
  message: "Tanggal selesai tidak boleh sebelum tanggal mulai.",
  path: ["rentalEndDate"],
}).refine(data => {
  if (data.pickupMethod === 'delivery') {
    return !!data.deliveryAddress && data.deliveryAddress.length >= 10;
  }
  return true;
}, {
  message: "Alamat pengantaran wajib diisi (minimal 10 karakter) jika memilih metode antar.",
  path: ["deliveryAddress"],
}).refine(data => {
  if (data.previousCustomer === 'no' && data.socialMediaPlatform && data.socialMediaPlatform !== 'none') {
    return !!data.socialMediaUsername && data.socialMediaUsername.length > 2;
  }
  return true;
}, {
    message: "Username media sosial harus diisi.",
    path: ["socialMediaUsername"],
});


// We need to add the deliveryAddress to the base type.
// We make all fields from both schemas optional and then merge to create a complete type.
export type RentalFormValues = z.infer<typeof newCustomerSchema> & z.infer<typeof returningCustomerSchema> & {
    deliveryAddress?: string;
};
