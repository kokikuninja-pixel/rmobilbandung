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
  phone: z.string().describe("The customer's WhatsApp number."),
  previousInvoice: z.string().optional().describe('The previous invoice number, if they are a returning customer.'),
  
  // New customer fields
  email: z.string().optional().describe("The customer's email address."),
  ktpCity: z.string().optional().describe("The customer's city of origin from KTP."),
  currentDomicile: z.string().optional().describe("The customer's current city of domicile."),
  occupation: z.string().optional().describe("The customer's occupation."),
  workLocation: z.string().optional().describe("The customer's work location (city)."),
  bandungStayDuration: z.string().optional().describe('How long the customer has stayed in Bandung, if applicable.'),
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
  summary: z.string().describe('A pre-formatted, detailed order message for WhatsApp.'),
});
export type SummarizeOrderForWhatsAppOutput = z.infer<typeof SummarizeOrderForWhatsAppOutputSchema>;

export async function summarizeOrderForWhatsApp(
  input: SummarizeOrderForWhatsAppInput
): Promise<SummarizeOrderForWhatsAppOutput> {
  try {
    return await summarizeOrderForWhatsAppFlow(input);
  } catch (error) {
    console.error('AI Flow Error:', error);
    // Fallback message if AI fails or rate limit exceeded
    const fallback = `Halo Admin RMB! 👋
Ada permintaan sewa baru dari ${input.name} (${input.phone}).

Detail Sewa:
- Unit: ${input.desiredMotor} (${input.unitCount} unit)
- Durasi: ${input.rentalStartDate} s/d ${input.rentalEndDate}
- Tujuan: ${input.destination}

Mohon segera diproses, min. Terima kasih!

---
_Pesan ini dikirim melalui domain: ${input.domain || 'RMB Rental'}_`;
    return { summary: fallback };
  }
}

const summarizeOrderPrompt = ai.definePrompt({
  name: 'summarizeOrderPrompt',
  input: {schema: SummarizeOrderForWhatsAppInputSchema},
  output: {schema: SummarizeOrderForWhatsAppOutputSchema},
  prompt: `Halo Admin RMB! 👋
Ada permintaan sewa baru.

*Status Pelanggan*: {{#if ktpCity}}Pelanggan Baru{{else}}Pelanggan Setia{{/if}}
{{#if previousInvoice}}*No. Invoice Lama*: {{{previousInvoice}}}{{/if}}

- Nama: *{{{name}}}*
- No. WhatsApp: *{{{phone}}}*
{{#if email}}- Email: *{{{email}}}*{{/if}}
{{#if ktpCity}}- Kota Asal (KTP): *{{{ktpCity}}}*{{/if}}
{{#if currentDomicile}}- Domisili Sekarang: *{{{currentDomicile}}}*{{/if}}
{{#if occupation}}- Pekerjaan: *{{{occupation}}}*{{/if}}
{{#if workLocation}}- Lokasi Kerja: *{{{workLocation}}}*{{/if}}
{{#if bandungStayDuration}}- Lama di Bandung: *{{{bandungStayDuration}}}*{{/if}}
{{#if socialMediaUsername}}- Medsos ({{{socialMediaPlatform}}}): *{{{socialMediaUsername}}}*{{/if}}

- Unit Motor: *{{{desiredMotor}}}*
- Waktu Mulai: *{{{rentalStartDate}}} jam {{{rentalStartTime}}}*
- Waktu Selesai: *{{{rentalEndDate}}} jam {{{rentalEndTime}}}*
- Jumlah Unit: *{{{unitCount}}} unit*
- Jumlah Orang: *{{{personCount}}} orang*

- Metode Pengambilan: *{{#if deliveryAddress}}Antar ke Alamat{{else}}Ambil di Garasi{{/if}}*
{{#if deliveryAddress}}- Alamat Antar: *{{{deliveryAddress}}}*{{/if}}
- Kebutuhan: *{{{usagePurpose}}}*
- Tujuan Lokasi: *{{{destination}}}*

- Tahu dari: *{{{sourceOfInformation}}}*
{{#if domain}}
---
_Pesan ini dikirim melalui domain: {{{domain}}}_
{{/if}}

Mohon segera diproses dan konfirmasi ketersediaan unitnya, min. Terima kasih!`,
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
