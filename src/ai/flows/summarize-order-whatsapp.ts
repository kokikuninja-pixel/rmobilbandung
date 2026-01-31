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
  name: z.string().describe('The name of the customer.'),
  email: z.string().describe('The email of the customer.'),
  ktpOrigin: z.string().describe('The KTP origin of the customer.'),
  currentDomicile: z.string().describe('The current domicile of the customer.'),
  workLocation: z.string().describe('The work location of the customer.'),
  workDurationInBandung: z
    .string()
    .optional()
    .describe('How long the customer has been working in Bandung (if applicable).'),
  desiredMotor: z.string().describe('The desired motorcycle.'),
  rentalStartDate: z.string().describe('The rental start date.'),
  rentalStartTime: z.string().describe('The rental start time.'),
  rentalEndDate: z.string().describe('The rental end date.'),
  rentalEndTime: z.string().describe('The rental end time.'),
  unitCount: z.number().describe('The number of motorcycle units being rented.'),
  personCount: z.number().describe('The number of people the rental is for.'),
  usagePurpose: z.string().describe('The purpose for using the motorcycle (e.g., tourism, project).'),
  destination: z.string().describe('The intended travel destination(s).'),
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
Saya ingin mengajukan penyewaan motor:

Nama: {{{name}}}
Email: {{{email}}}
Asal KTP: {{{ktpOrigin}}}
Domisili: {{{currentDomicile}}}
Lokasi Kerja: {{{workLocation}}}
{{#if workDurationInBandung}}
Lama di Bandung: {{{workDurationInBandung}}}
{{/if}}
Unit Motor: {{{desiredMotor}}}
Tgl. Mulai: {{{rentalStartDate}}} jam {{{rentalStartTime}}}
Tgl. Selesai: {{{rentalEndDate}}} jam {{{rentalEndTime}}}
Jumlah Unit: {{{unitCount}}} unit
Jumlah Orang: {{{personCount}}} orang
Kebutuhan: {{{usagePurpose}}}
Tujuan: {{{destination}}}

Mohon info ketersediaan unitnya, min!

Dikirim dari {{{domain}}}`,
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
