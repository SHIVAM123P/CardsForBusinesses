'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const HeroTextOutputSchema = z.object({
  headline: z.string().describe('A short, bold, and inspiring headline.'),
  subheading: z.string().describe('A clear one-line explanation of what the business does and why it matters.'),
  cta: z.string().describe('A strong call-to-action button text.'),
});
export type HeroTextOutput = z.infer<typeof HeroTextOutputSchema>;

export async function getHeroText(): Promise<HeroTextOutput> {
  return heroTextFlow();
}

const heroTextPrompt = ai.definePrompt({
  name: 'heroTextPrompt',
  output: { schema: HeroTextOutputSchema },
  prompt: `Write an engaging hero section headline and subheading for a modern website. The headline should be short, bold, and inspiring. The subheading should clearly explain what the business does and why it matters in one line. Add a strong call-to-action like ‘Get Started’, ‘Work With Us’, or ‘Let’s Build Together’.`,
});

const heroTextFlow = ai.defineFlow(
  {
    name: 'heroTextFlow',
    outputSchema: HeroTextOutputSchema,
  },
  async () => {
    const { output } = await heroTextPrompt();
    return output!;
  }
);
