import Link from 'next/link';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Palette className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg text-primary">Cardfolio</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="#portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden sm:inline-block">
            Our Work
          </Link>
          <Link href="#ai-tool" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden sm:inline-block">
            AI Tool
          </Link>
          <Button asChild>
            <Link href="#contact">
              Contact Us
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
