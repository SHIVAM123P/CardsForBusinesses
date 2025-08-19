import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  {
    src: "https://placehold.co/600x400.png",
    hint: "minimalist modern",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "elegant floral",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "bold geometric",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "corporate professional",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "creative artistic",
  },
  {
    src: "https://placehold.co/600x400.png",
    hint: "luxury gold",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            My Designs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some examples of business cards I've designed.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index}
              className="group glassmorphism-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-2"
              style={{ animation: `fade-in-up 0.5s ease-out ${index * 0.1}s forwards`, opacity: 0 }}
            >
              <CardContent className="p-0">
                <Image
                  src={item.src}
                  alt={`Business card design ${index + 1}`}
                  width={600}
                  height={400}
                  data-ai-hint={item.hint}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
