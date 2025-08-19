'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AboutUsOutputSchema = z.object({
  aboutUsText: z.string().describe('A professional and human-sounding ‘About Us’ section.'),
});
export type AboutUsOutput = z.infer<typeof AboutUsOutputSchema>;

export async function getAboutUsText(): Promise<AboutUsOutput> {
  return aboutUsFlow();
}

const aboutUsPrompt = ai.definePrompt({
  name: 'aboutUsPrompt',
  output: { schema: AboutUsOutputSchema },
  prompt: `Write a professional and human-sounding ‘About Us’ section for a modern website. It should describe a team passionate about innovation, creativity, and solving real problems. Keep it friendly, approachable, and easy to connect with. Add a line about trust, vision, and long-term partnerships.`,
});

const aboutUsFlow = ai.defineFlow(
  {
    name: 'aboutUsFlow',
    outputSchema: AboutUsOutputSchema,
  },
  async () => {
    const { output } = await aboutUsPrompt();
    return output!;
  }
);
