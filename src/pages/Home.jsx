import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Services from '../components/portfolio/Services';
import Projects from '../components/portfolio/Projects';
import TechStack from '../components/portfolio/TechStack';
import Process from '../components/portfolio/Process';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}