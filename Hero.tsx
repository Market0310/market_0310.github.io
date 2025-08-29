import { ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-moving.jpg';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 43, 76, 0.7), rgba(26, 43, 76, 0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Best Moving Services Across Canada – 
            <span className="text-bright-teal">Flat-Rate, Fully Insured,</span>
            <br />No Hidden Fees
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            24/7 customer support • Local + long-distance coverage
            <br />
            Professional packing and moving services across all provinces
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-bright-teal" />
              <span className="font-semibold">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <DollarSign className="h-5 w-5 text-bright-teal" />
              <span className="font-semibold">Flat-Rate Pricing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-5 w-5 text-bright-teal" />
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="btn-cta text-lg px-8 py-6 min-h-[48px] min-w-[280px] flex items-center justify-center">
              Call / Text: 0000000000
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
            <a href="#quote">
              <Button className="btn-outline text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-deep-navy min-h-[48px] min-w-[200px]">
                Instant Online Quote
              </Button>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bright-teal mb-2">100%</div>
              <div className="text-sm text-gray-300">Professional Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bright-teal mb-2">500+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bright-teal mb-2">24/7</div>
              <div className="text-sm text-gray-300">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-bright-teal mb-2">3</div>
              <div className="text-sm text-gray-300">Provinces Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;