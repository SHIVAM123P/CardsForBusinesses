"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Loader2, Quote } from "lucide-react";
import { getDesignRecommendation } from "@/ai/flows/design-recommendation";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  businessDescription: z
    .string()
    .min(20, {
      message: "Please describe your business in at least 20 characters.",
    })
    .max(500, {
      message: "Description must not be longer than 500 characters.",
    }),
});

export default function AiTool() {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setRecommendation("");
    try {
      const result = await getDesignRecommendation(values);
      setRecommendation(result.designRecommendation);
    } catch (error) {
      console.error("Failed to get design recommendation:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with our AI tool. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-tool" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            AI-Powered Design Bot
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Describe your business and our AI will generate a unique card concept for you.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mt-12 glassmorphism-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
              <Bot className="w-8 h-8 text-primary" />
              Design Assistant v2.0
            </CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Enter a description of your business to get a personalized design suggestion.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="businessDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80">Your Business DNA</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., A sleek, sustainable tech startup creating minimalist smart home devices."
                          className="bg-transparent/20 border-white/20 focus:ring-accent"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} variant="futuristic" size="lg" className="w-full sm:w-auto">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Generating..." : "Generate Concept"}
                </Button>
              </form>
            </Form>

            {recommendation && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-xl font-headline font-semibold text-primary">AI Suggestion:</h3>
                <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground bg-black/20 p-4 rounded-r-lg">
                  <Quote className="h-5 w-5 text-accent/80 mb-2" />
                  {recommendation}
                </blockquote>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
