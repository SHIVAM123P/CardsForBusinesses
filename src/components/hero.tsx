import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative text-center py-24 md:py-40">
       <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter font-headline text-shadow-glow animate-text-reveal">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
            Stand Out With a
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent"> Custom</span>
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
             Business Card.
          </span>
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up">
          I design modern, eye-catching business cards that make a great first impression.
          Let's create a card that people will remember.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button asChild size="lg" variant="futuristic">
            <Link href="#portfolio">See My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
