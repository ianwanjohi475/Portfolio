import { useLenis } from './hooks/useLenis.js';
import GridBackground from './components/GridBackground.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import FeaturedWork from './components/FeaturedWork.jsx';
import WhyMe from './components/WhyMe.jsx';
import Services from './components/Services.jsx';
import Marquee from './components/Marquee.jsx';
import Awards from './components/Awards.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  useLenis();

  return (
    <>
      <GridBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <WhyMe />
        <Services />
        <Marquee />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
