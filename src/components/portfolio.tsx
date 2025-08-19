"use client"; // Add this line at the very top

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const portfolioItems = [
  {
    src: "/images/image1.png",
    hint: "minimalist modern",
  },
  {
    src: "/images/image2.png",
    hint: "elegant floral",
  },
  {
    src: "/images/image3.png",
    hint: "bold geometric",
  },
  {
    src: "/images/image4.png",
    hint: "corporate professional",
  },
  {
    src: "/images/image4.png",
    hint: "creative artistic",
  },
  {
    src: "/images/image3.png",
    hint: "luxury gold",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-portfolio-background"> {/* Changed background class */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            My Designs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcasing a selection of my recent work.
          </p>
        </div>

        {/* Carousel Implementation */}
        <Carousel
          className="w-full max-w-3xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {portfolioItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center h-96">
                  <Image
                    src={item.src}
                    alt={`Business card design ${index + 1}`}
                    width={800}
                    height={600}
                    data-ai-hint={item.hint}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* End Carousel Implementation */}

      </div>
    </section>
  );
}
