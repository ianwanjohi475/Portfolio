import { useLenis } from './hooks/useLenis.js';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import FeaturedScene from './components/FeaturedScene.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Lab from './components/Lab.jsx';
import Services from './components/Services.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useLenis();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FeaturedScene />
        <Skills />
        <Experience />
        <Lab />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
