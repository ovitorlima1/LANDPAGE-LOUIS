
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import WhatsIncluded from './components/WhatsIncluded';
import Problems from './components/Problems';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navigation />
      
      <main>
        <Hero />
        <MarqueeBanner />
        <WhatsIncluded />
        <Problems />
        <About />
        <Testimonials />
        <BeforeAfterGallery />
        <Pricing />
        <BookingForm />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
