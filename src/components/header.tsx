import Link from 'next/link';
import { Palette, Bot, Briefcase, Send, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/50 backdrop-blur-lg">
      <div className="absolute top-full w-full bg-gradient-to-r from-primary to-accent p-2 text-center text-sm font-bold text-primary-foreground">
        <Link href="#contact" className="flex items-center justify-center gap-2">
          <Gift className="h-5 w-5" />
          <span>Get Your First Card Free! Click Here to Claim.</span>
        </Link>
      </div>
      <div className="container mx-auto flex h-20 max-w-screen-xl items-center justify-between px-4 pt-8 md:pt-4">
        <Link href="/" className="flex items-center space-x-2">
          <Palette className="h-8 w-8 text-primary" />
          <span className="font-bold font-headline text-2xl text-foreground">Cardfolio</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <Link href="#portfolio" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            My Work
          </Link>
          {/* <Link href="#ai-tool" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            Design AI
          </Link> */}
          <Link href="#contact" className="font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact Me
          </Link>
        </nav>
        <Button asChild variant="futuristic" className="hidden md:inline-flex">
            <Link href="#contact">
              Get Your Card
            </Link>
        </Button>
      </div>
    </header>
  );
}
