import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Features from '@/components/Features';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Features />
      <About />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
