import { Palette } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline text-primary">Cardfolio</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cardfolio. All Rights Reserved.
        </p>
         <p className="text-xs mt-2">Crafting the future of connection.</p>
      </div>
    </footer>
  );
}
