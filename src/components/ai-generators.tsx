"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2, Wand2, Quote, Sparkles, Star, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { getBusinessName, type BusinessNameOutput } from "@/ai/flows/business-name-flow";
import { getHeroText, type HeroTextOutput } from "@/ai/flows/hero-text-flow";
import { getAboutUsText, type AboutUsOutput } from "@/ai/flows/about-us-flow";
import { getPortfolioIdeas, type PortfolioIdeasOutput } from "@/ai/flows/portfolio-ideas-flow";
import { getContactText, type ContactTextOutput } from "@/ai/flows/contact-text-flow";

type GeneratorType = "businessName" | "heroText" | "aboutUs" | "portfolio" | "contact";

export default function AiGenerators() {
  const [loading, setLoading] = useState<GeneratorType | null>(null);
  const [results, setResults] = useState({
    businessName: null as BusinessNameOutput | null,
    heroText: null as HeroTextOutput | null,
    aboutUs: null as AboutUsOutput | null,
    portfolio: null as PortfolioIdeasOutput | null,
    contact: null as ContactTextOutput | null,
  });
  const { toast } = useToast();

  const handleGenerate = async (type: GeneratorType) => {
    setLoading(type);
    try {
      let result;
      if (type === "businessName") result = await getBusinessName();
      else if (type === "heroText") result = await getHeroText();
      else if (type === "aboutUs") result = await getAboutUsText();
      else if (type === "portfolio") result = await getPortfolioIdeas();
      else if (type === "contact") result = await getContactText();

      setResults(prev => ({ ...prev, [type]: result }));
    } catch (error) {
      console.error(`Failed to generate ${type}:`, error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: `There was a problem generating content. Please try again later.`,
      });
    } finally {
      setLoading(null);
    }
  };

  const renderResult = (type: GeneratorType) => {
    switch (type) {
      case 'businessName':
        return results.businessName && (
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">{results.businessName.businessName}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {results.businessName.taglines.map((tagline, i) => <li key={i}>{tagline}</li>)}
            </ul>
          </div>
        );
      case 'heroText':
        return results.heroText && (
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-primary">{results.heroText.headline}</h4>
            <p>{results.heroText.subheading}</p>
            <Button variant="futuristic">{results.heroText.cta}</Button>
          </div>
        );
      case 'aboutUs':
        return results.aboutUs && <p>{results.aboutUs.aboutUsText}</p>;
      case 'portfolio':
        return results.portfolio && (
          <div className="space-y-6">
            {results.portfolio.projects.map((p, i) => (
              <div key={i} className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-primary">{p.name}</h4>
                <p className="italic">{p.description}</p>
                <p className="text-sm text-muted-foreground">{p.impact}</p>
              </div>
            ))}
          </div>
        );
      case 'contact':
        return results.contact && <p>{results.contact.contactText}</p>;
      default:
        return null;
    }
  };

  const generators = [
    { type: "businessName" as GeneratorType, title: "Business Name & Tagline", icon: Sparkles },
    { type: "heroText" as GeneratorType, title: "Hero Section Text", icon: Star },
    { type: "aboutUs" as GeneratorType, title: "About Us Section", icon: Quote },
    { type: "portfolio" as GeneratorType, title: "Portfolio Ideas", icon: Wand2 },
    { type: "contact" as GeneratorType, title: "Contact Us Text", icon: MessageSquare },
  ];

  return (
    <section id="ai-generators" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            AI Content Generators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Instantly create compelling content for your website using our AI-powered tools.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto mt-12 glassmorphism-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
              <Wand2 className="w-8 h-8 text-primary" />
              Content Creation Suite
            </CardTitle>
            <CardDescription className="text-muted-foreground/80">
              Select a tool to generate professional content for your project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {generators.map(({ type, title, icon: Icon }) => (
                <AccordionItem value={type} key={type}>
                  <AccordionTrigger className="text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-accent" />
                      {title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <Button onClick={() => handleGenerate(type)} disabled={loading === type} variant="futuristic" size="sm" className="mb-4">
                        {loading === type && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {loading === type ? "Generating..." : "Generate"}
                      </Button>
                      {results[type] && (
                        <div className="mt-4 border-t border-white/10 pt-4 text-muted-foreground">
                           {renderResult(type)}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
