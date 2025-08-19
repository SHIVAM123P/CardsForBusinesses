import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative text-center py-24 md:py-40">
       <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter font-headline text-shadow-glow animate-text-reveal">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
            Designing
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent"> Tomorrow's</span>
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500">
             First Impressions.
          </span>
        </h1>
        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-in-up">
          We craft visually stunning, futuristic business cards that transcend the ordinary.
          Merge innovation with identity and make your introduction unforgettable.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <Button asChild size="lg" variant="futuristic">
            <Link href="#portfolio">Explore Designs</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#contact">Start a Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
