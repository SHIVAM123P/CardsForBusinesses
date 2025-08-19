// This is an AI-powered tool suggesting suitable card designs based on business sector.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignRecommendationInputSchema = z.object({
  businessDescription: z
    .string()
    .describe('A description of the user\u2019s business or industry.'),
});
export type DesignRecommendationInput = z.infer<typeof DesignRecommendationInputSchema>;

const DesignRecommendationOutputSchema = z.object({
  designRecommendation: z.string().describe('The AI recommended business card design template based on the business description.'),
});
export type DesignRecommendationOutput = z.infer<typeof DesignRecommendationOutputSchema>;

export async function getDesignRecommendation(
  input: DesignRecommendationInput
): Promise<DesignRecommendationOutput> {
  return designRecommendationFlow(input);
}

const designRecommendationPrompt = ai.definePrompt({
  name: 'designRecommendationPrompt',
  input: {schema: DesignRecommendationInputSchema},
  output: {schema: DesignRecommendationOutputSchema},
  prompt: `You are an AI business card design assistant. Based on the business description, provide a business card design template recommendation. Return the design recommendation in the output field.

Business Description: {{{businessDescription}}}`,
});

const designRecommendationFlow = ai.defineFlow(
  {
    name: 'designRecommendationFlow',
    inputSchema: DesignRecommendationInputSchema,
    outputSchema: DesignRecommendationOutputSchema,
  },
  async input => {
    const {output} = await designRecommendationPrompt(input);
    return output!;
  }
);
