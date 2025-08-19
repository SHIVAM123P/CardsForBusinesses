
import Header from '@/components/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';
import AiTool from '@/components/ai-tool';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-indigo-950/20 to-background z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[50vw] h-[50vh] bg-gradient-radial from-purple-600/20 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"></div>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <Portfolio />
          {/* <AiTool /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
