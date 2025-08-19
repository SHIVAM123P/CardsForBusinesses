'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const BusinessNameOutputSchema = z.object({
  businessName: z.string().describe('A short, catchy, and modern business name.'),
  taglines: z.array(z.string()).describe('5 powerful taglines that are simple, motivational, and highlight innovation, trust, and creativity.'),
});
export type BusinessNameOutput = z.infer<typeof BusinessNameOutputSchema>;

export async function getBusinessName(): Promise<BusinessNameOutput> {
  return businessNameFlow();
}

const businessNamePrompt = ai.definePrompt({
  name: 'businessNamePrompt',
  output: { schema: BusinessNameOutputSchema },
  prompt: `Suggest a short, catchy, and modern business name that feels trustworthy, innovative, and easy to remember. The name should connect emotionally with people and work well for a tech/creative brand. Also suggest 5 powerful taglines that are simple, motivational, and highlight innovation + trust + creativity.`,
});

const businessNameFlow = ai.defineFlow(
  {
    name: 'businessNameFlow',
    outputSchema: BusinessNameOutputSchema,
  },
  async () => {
    const { output } = await businessNamePrompt();
    return output!;
  }
);
