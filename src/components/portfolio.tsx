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
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Our Masterpieces
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse through a selection of our finest business card designs. Each one tells a unique story.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group animate-fade-in transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <Image
                  src={item.src}
                  alt={`Business card design ${index + 1}`}
                  width={600}
                  height={400}
                  data-ai-hint={item.hint}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add fade-in animation to globals.css if not present
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; animation-delay: calc(var(--animation-delay, 0) * 100ms); opacity: 0; }
// Then in the component, use style={{'--animation-delay': index}}
// For simplicity, we can use a pre-existing animation or simply a transition on load.
// tailwindcss-animate has fade-in, but let's add a custom one for a staggered effect.
// For now, let's keep it simple without adding custom CSS to globals.css
// The component is already set up to use `animate-in` and `fade-in-0` from tailwindcss-animate via shadcn
// We will apply this via a slight modification to the component's className.
// Or we can just add a simple class for the animation.

// Let's use simple class for animation from tailwind config.
// The `animate-in` class is part of shadcn/ui.
// For staggered effect, we could use JS, but let's keep it CSS-based for now.
// The `animate-fade-in` with `animation-delay` is a better approach but requires changes in globals.css,
// which is less ideal. We will rely on default animations for now.
