import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import LocationsServed from '@/components/LocationsServed';
import QuoteForm from '@/components/QuoteForm';

import Footer from '@/components/Footer';
import MobileStickyBanner from '@/components/MobileStickyBanner';

const Index = () => {
  // Add fade-in animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <div className="fade-in-up" id="quote">
          <QuoteForm />
        </div>
        
        <div className="fade-in-up" id="services">
          <ServicesSection />
        </div>
        
        <div className="fade-in-up" id="why-choose-us">
          <WhyChooseUs />
        </div>
        
        <div className="fade-in-up">
          <TestimonialsCarousel />
        </div>
        
        <div className="fade-in-up" id="cities">
          <LocationsServed />
        </div>
      </main>
      
      <Footer />
      
      {/* Mobile Sticky Banner */}
      <MobileStickyBanner />
    </div>
  );
};

export default Index;
