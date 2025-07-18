import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import PracticeAreas from './components/PracticeAreas';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <PracticeAreas />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;