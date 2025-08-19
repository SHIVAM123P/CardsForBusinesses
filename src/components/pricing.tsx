"use client"
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that works for you. Get your first card for free!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Card */}
          <Card className="glassmorphism-card flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">First Card Free</CardTitle>
              <CardDescription>Get started with a professionally designed card at no cost.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-4xl font-bold font-headline">₹0</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>1 Custom Card Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>High-Quality Printable File</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>One-time free offer</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="#contact">Claim Your Free Card</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Subscription */}
          <Card className="glassmorphism-card flex flex-col border-accent shadow-accent/20 scale-105">
            <CardHeader>
               <div className="flex justify-between items-center">
                <CardTitle className="font-headline text-2xl">Subscription</CardTitle>
                <div className="flex items-center gap-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4" />
                    <span>Best Value</span>
                </div>
              </div>
              <CardDescription>Stay fresh with personalized cards for every occasion.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
               <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold font-headline">₹49</p>
                <span className="text-muted-foreground">/ card</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Personalized cards for festivals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Unlimited printing rights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Fully customizable designs</span>
                </li>
                 <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="futuristic" className="w-full">
                <Link href="#contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Custom Project */}
          <Card className="glassmorphism-card flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Custom Project</CardTitle>
              <CardDescription>Have a unique idea? Let's build it together.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-4xl font-bold font-headline">Let's Talk</p>
               <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Branding Packages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Bulk card orders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Special design requests</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="#contact">Contact for Quote</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}