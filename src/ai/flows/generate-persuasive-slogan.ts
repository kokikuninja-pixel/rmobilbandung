'use server';

/**
 * @fileOverview A flow that generates a persuasive slogan based on a business description.
 *
 * - generatePersuasiveSlogan - A function that generates a persuasive slogan.
 * - GeneratePersuasiveSloganInput - The input type for the generatePersuasiveSlogan function.
 * - GeneratePersuasiveSloganOutput - The return type for the generatePersuasiveSlogan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersuasiveSloganInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the business for which to generate a slogan.'),
});
export type GeneratePersuasiveSloganInput = z.infer<typeof GeneratePersuasiveSloganInputSchema>;

const GeneratePersuasiveSloganOutputSchema = z.object({
  slogan: z.string().describe('A persuasive slogan for the business.'),
});
export type GeneratePersuasiveSloganOutput = z.infer<typeof GeneratePersuasiveSloganOutputSchema>;

export async function generatePersuasiveSlogan(
  input: GeneratePersuasiveSloganInput
): Promise<GeneratePersuasiveSloganOutput> {
  return generatePersuasiveSloganFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersuasiveSloganPrompt',
  input: {schema: GeneratePersuasiveSloganInputSchema},
  output: {schema: GeneratePersuasiveSloganOutputSchema},
  prompt: `You are a marketing expert specializing in creating persuasive slogans.

  Generate a slogan for the following business description:

  {{businessDescription}}

  The slogan should be concise, memorable, and relevant to the business.
  It should evoke feelings of trust, excitement, or satisfaction.
  Use the Zod schema description of the output field 'slogan' as a guide.
  `,
});

const generatePersuasiveSloganFlow = ai.defineFlow(
  {
    name: 'generatePersuasiveSloganFlow',
    inputSchema: GeneratePersuasiveSloganInputSchema,
    outputSchema: GeneratePersuasiveSloganOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
