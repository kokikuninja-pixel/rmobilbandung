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
  ktpOrigin: z.string().describe('The KTP origin of the customer.'),
  currentDomicile: z.string().describe('The current domicile of the customer.'),
  workLocation: z.string().describe('The work location of the customer.'),
  workDurationInJakarta: z
    .string()
    .optional()
    .describe('How long the customer has been working in Jakarta (if applicable).'),
  desiredMotor: z.string().describe('The desired motorcycle.'),
  rentalStartDate: z.string().describe('The rental start date.'),
  rentalEndDate: z.string().describe('The rental end date.'),
  purpose: z.string().describe('The purpose of the rental.'),
  numberOfUnits: z.string().describe('The number of units being rented.'),
  numberOfPeople: z.string().describe('The number of people the rental is for.'),
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
  prompt: `You are an AI assistant helping to summarize order details for sending via WhatsApp.
  Your goal is to create a concise and informative summary that includes only the most essential information.

  Here are the order details:
  - Name: {{{name}}}
  - KTP Origin: {{{ktpOrigin}}}
  - Current Domicile: {{{currentDomicile}}}
  - Work Location: {{{workLocation}}}
  {{#if workDurationInJakarta}}
  - Work Duration in Jakarta: {{{workDurationInJakarta}}}
  {{/if}}
  - Motor: {{{desiredMotor}}}
  - Rental Start Date: {{{rentalStartDate}}}
  - Rental End Date: {{{rentalEndDate}}}
  - Jumlah Unit: {{{numberOfUnits}}}
  - Jumlah Orang: {{{numberOfPeople}}}
  - Purpose: {{{purpose}}}

  Please provide a summary of these details suitable for sending in a WhatsApp message to RMJP admin.
  Focus on key details like name, rental dates, and purpose. Be brief and to the point.
  Ensure that the summary includes all information necessary for processing the rental request.
  Consider security and do not include phone numbers or credit card details.
  Respond in Bahasa Indonesian.
  Do not respond with anything other than the summary.
  Summary: `,
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
