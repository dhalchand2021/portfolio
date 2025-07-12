import Hero from '@/components/Hero';
import About from '@/components/About';
import Games from '@/components/Games';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Skills />
      <Contact />
    </div>
  );
}
