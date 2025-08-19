import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-background text-center py-20 md:py-32">
       <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-headline text-primary">
          Crafting Connections, One Card at a Time.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          At Cardfolio, we design bespoke business cards that make a lasting impression.
          We blend creativity with strategy to create a powerful networking tool that reflects your brand's essence.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="font-bold">
            <Link href="#portfolio">View Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
