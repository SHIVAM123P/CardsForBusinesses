'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const PortfolioProjectSchema = z.object({
    name: z.string().describe('A short creative project name.'),
    description: z.string().describe('A one-line description of what was built or solved.'),
    impact: z.string().describe('A sentence about the impact or result (e.g., helped brand grow, improved user experience, boosted engagement).'),
});

const PortfolioIdeasOutputSchema = z.object({
  projects: z.array(PortfolioProjectSchema).length(3),
});
export type PortfolioIdeasOutput = z.infer<typeof PortfolioIdeasOutputSchema>;

export async function getPortfolioIdeas(): Promise<PortfolioIdeasOutput> {
  return portfolioIdeasFlow();
}

const portfolioIdeasPrompt = ai.definePrompt({
  name: 'portfolioIdeasPrompt',
  output: { schema: PortfolioIdeasOutputSchema },
  prompt: `Generate 3 example project descriptions for a portfolio website. Each project should have: A short creative project name, a one-line description of what was built or solved, and a sentence about the impact or result (e.g., helped brand grow, improved user experience, boosted engagement).`,
});

const portfolioIdeasFlow = ai.defineFlow(
  {
    name: 'portfolioIdeasFlow',
    outputSchema: PortfolioIdeasOutputSchema,
  },
  async () => {
    const { output } = await portfolioIdeasPrompt();
    return output!;
  }
);
