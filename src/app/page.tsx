import Header from '@/components/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';
import AiTool from '@/components/ai-tool';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <AiTool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
