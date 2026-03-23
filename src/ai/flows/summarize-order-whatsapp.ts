'use server';

/**
 * @fileOverview A flow for summarizing order details for WhatsApp using AI.
 *
 * - summarizeOrderForWhatsApp - A function that summarizes order details for WhatsApp.
 * - SummarizeOrderForWhatsAppInput - The input type for the summarizeOrderForWhatsApp function.
 * - SummarizeOrderForWhatsAppOutput - The return type for the summarizeOrderForWhatsApp function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeOrderForWhatsAppInputSchema = z.object({
  previousCustomer: z.enum(['yes', 'no']).describe('Is this a returning customer?'),
  name: z.string().describe('The full name of the customer.'),
  phone: z.string().describe('The customer\'s WhatsApp number.'),
  previousInvoice: z.string().optional().describe('The previous invoice number, if they are a returning customer.'),
  
  // New customer fields
  email: z.string().optional().describe('The customer\'s email address.'),
  ktp: z.string().optional().describe('The customer\'s KTP number.'),
  currentDomicile: z.string().optional().describe('The customer\'s current domicile.'),
  workLocation: z.string().optional().describe('The customer\'s work location or occupation.'),
  socialMediaPlatform: z.string().optional().describe('The social media platform (e.g., Instagram, TikTok).'),
  socialMediaUsername: z.string().optional().describe('The customer\'s social media username.'),

  // Rental details
  desiredMotor: z.string().describe('The desired motorcycle.'),
  rentalStartDate: z.string().describe('The rental start date.'),
  rentalStartTime: z.string().describe('The rental start time.'),
  rentalEndDate: z.string().describe('The rental end date.'),
  rentalEndTime: z.string().describe('The rental end time.'),
  unitCount: z.number().describe('The number of motorcycle units being rented.'),
  personCount: z.number().describe('The number of people the rental is for.'),
  
  // Delivery
  pickupMethod: z.enum(['garage', 'delivery']).describe('The chosen pickup method.'),
  deliveryAddress: z.string().optional().describe('The delivery address, if applicable.'),

  // Additional Info
  usagePurpose: z.string().describe('The purpose for using the motorcycle (e.g., tourism, project).'),
  destination: z.string().describe('The intended travel destination(s).'),
  sourceOfInformation: z.string().describe('How the customer found out about the service.'),
  
  domain: z.string().optional().describe('The domain the request is sent from.'),
});
export type SummarizeOrderForWhatsAppInput = z.infer<typeof SummarizeOrderForWhatsAppInputSchema>;

const SummarizeOrderForWhatsAppOutputSchema = z.object({
  summary: z.string().describe('A summarized version of the order details for WhatsApp.'),
});
export type SummarizeOrderForWhatsAppOutput = z.infer<typeof SummarizeOrderForWhatsAppOutputSchema>;

export async function summarizeOrderForWhatsApp(
  input: SummarizeOrderForWhatsAppInput
): Promise<SummarizeOrderForWhatsAppOutput> {
  return summarizeOrderForWhatsAppFlow(input);
}

const summarizeOrderPrompt = ai.definePrompt({
  name: 'summarizeOrderPrompt',
  input: {schema: SummarizeOrderForWhatsAppInputSchema},
  output: {schema: SummarizeOrderForWhatsAppOutputSchema},
  prompt: `Halo Admin RMB! 👋
Ada permintaan sewa baru:
{{#if domain}}
---
🌐 *Domain Asal: {{{domain}}}*
---
{{/if}}

👤 **STATUS PELANGGAN**
{{#if ktp}}
*Pelanggan Baru*
{{else}}
*Pelanggan Setia* (Pernah menyewa sebelumnya)
{{/if}}
{{#if previousInvoice}}
No. Invoice Lama: {{{previousInvoice}}}
{{/if}}

---
📋 **A. DATA DIRI**
---
- Nama: *{{{name}}}*
- No. WhatsApp: *{{{phone}}}*
{{#if email}}
- Email: *{{{email}}}*
{{/if}}
{{#if ktp}}
- No. KTP: *{{{ktp}}}*
{{/if}}
{{#if currentDomicile}}
- Domisili: *{{{currentDomicile}}}*
{{/if}}
{{#if workLocation}}
- Pekerjaan: *{{{workLocation}}}*
{{/if}}
{{#if socialMediaUsername}}
- Medsos ({{{socialMediaPlatform}}}): *{{{socialMediaUsername}}}*
{{/if}}

---
🏍️ **B. DETAIL PERMINTAAN SEWA**
---
- Unit Motor: *{{{desiredMotor}}}*
- Waktu Mulai: *{{{rentalStartDate}}} jam {{{rentalStartTime}}}*
- Waktu Selesai: *{{{rentalEndDate}}} jam {{{rentalEndTime}}}*
- Jumlah Unit: *{{{unitCount}}} unit*
- Jumlah Orang: *{{{personCount}}} orang*

---
📍 **C. PENGAMBILAN & PENGGUNAAN**
---
- Metode: *{{#if deliveryAddress}}Antar ke Alamat{{else}}Ambil di Garasi{{/if}}*
{{#if deliveryAddress}}
- Alamat Antar: *{{{deliveryAddress}}}*
{{/if}}
- Kebutuhan: *{{{usagePurpose}}}*
- Tujuan Lokasi: *{{{destination}}}*

---
ℹ️ **D. INFO TAMBAHAN**
---
- Tahu dari: *{{{sourceOfInformation}}}*

Mohon segera diproses dan konfirmasi ketersediaan unitnya, min. Terima kasih!
`,
});

const summarizeOrderForWhatsAppFlow = ai.defineFlow(
  {
    name: 'summarizeOrderForWhatsAppFlow',
    inputSchema: SummarizeOrderForWhatsAppInputSchema,
    outputSchema: SummarizeOrderForWhatsAppOutputSchema,
  },
  async input => {
    const {output} = await summarizeOrderPrompt(input);
    return output!;
  }
);
