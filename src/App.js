import React from 'react';
import Navbar from './componants/Navbar';
import Hero from './componants/Hero';
import Services from './componants/Services';
import Projects from './componants/Projects';
import WhyWorkWithMe from './componants/WhyWorkWithMe';
import Skills from './componants/Skills';
import Testimonials from './componants/Testimonials';
import Contact from './componants/Contact';
import Footer from './componants/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyWorkWithMe />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;