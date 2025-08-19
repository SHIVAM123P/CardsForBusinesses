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
    <section id="ai-tool" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Need a Design Idea?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use our AI-powered tool to get a business card design recommendation based on your industry.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mt-10 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Bot className="w-6 h-6 text-primary" />
              AI Design Assistant
            </CardTitle>
            <CardDescription>
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
                      <FormLabel>Business Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., A modern coffee shop focusing on artisanal beans and a cozy atmosphere."
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={loading} className="w-full sm:w-auto">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Generating..." : "Get Recommendation"}
                </Button>
              </form>
            </Form>

            {recommendation && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-headline font-semibold text-primary">Our Suggestion:</h3>
                <blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-muted-foreground bg-background/50 p-4 rounded-r-lg">
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
