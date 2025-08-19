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
    <section id="portfolio" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-shadow-funky">
            Our Masterpieces
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse through a selection of our finest business card designs. Each one tells a unique story.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group animate-fade-in transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 [transform-style:preserve-3d] hover:[transform:rotateY(15deg)_rotateX(5deg)_scale(1.05)]">
              <CardContent className="p-0">
                <Image
                  src={item.src}
                  alt={`Business card design ${index + 1}`}
                  width={600}
                  height={400}
                  data-ai-hint={item.hint}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
