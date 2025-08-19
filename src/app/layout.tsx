import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
});


export const metadata: Metadata = {
  title: 'Cardfolio | Futuristic Business Card Design',
  description: 'Crafting the future of connection, one card at a time.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
