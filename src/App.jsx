import { useEffect, useState } from 'react';
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
import ProjectPage from './components/ProjectPage.jsx';

/** Minimal hash router: #/project/<id> → project page, anything else → home. */
function useRoute() {
  const parse = () => {
    const m = window.location.hash.match(/^#\/project\/([\w-]+)/);
    return m ? { name: 'project', id: m[1] } : { name: 'home' };
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onHash = () => {
      const r = parse();
      setRoute(r);
      if (r.name === 'project') window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
}

export default function App() {
  useLenis();
  const route = useRoute();

  return (
    <>
      <GridBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      {route.name === 'project' ? (
        <main key={route.id}>
          <ProjectPage id={route.id} />
        </main>
      ) : (
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
      )}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
