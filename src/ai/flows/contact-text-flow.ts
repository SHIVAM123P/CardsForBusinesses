'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ContactTextOutputSchema = z.object({
  contactText: z.string().describe('A warm and approachable Contact Us section text.'),
});
export type ContactTextOutput = z.infer<typeof ContactTextOutputSchema>;

export async function getContactText(): Promise<ContactTextOutput> {
  return contactTextFlow();
}

const contactTextPrompt = ai.definePrompt({
  name: 'contactTextPrompt',
  output: { schema: ContactTextOutputSchema },
  prompt: `Write a warm and approachable Contact Us section text for a modern website. Encourage users to reach out for collaborations, partnerships, or questions. Keep it friendly and motivating, e.g., ‘We’d love to hear from you’, ‘Let’s start something amazing together’, ‘Drop us a message and we’ll get back quickly’.`,
});

const contactTextFlow = ai.defineFlow(
  {
    name: 'contactTextFlow',
    outputSchema: ContactTextOutputSchema,
  },
  async () => {
    const { output } = await contactTextPrompt();
    return output!;
  }
);
