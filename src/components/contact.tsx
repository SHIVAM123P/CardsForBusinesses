"use client";

import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Get Your Own Card
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Like what you see? Let's work together to create a card for your business. The first one is on me!
          </p>
          <Button asChild size="lg" variant="futuristic" className="mt-8">
            <Link href="https://wa.me/9508034347" target="_blank" rel="noopener noreferrer">
              <Send className="mr-2 h-5 w-5" />
              Send a Message on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
