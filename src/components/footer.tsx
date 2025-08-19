import { Palette } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-2">
            <Palette className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold font-headline text-primary">Cardfolio</span>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cardfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
