import { ArrowRight, Phone, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBanner from '@/components/MobileStickyBanner';

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  features: string[];
  process: { step: string; description: string }[];
  pricing: { title: string; description: string; features: string[] };
  faqs: { question: string; answer: string }[];
  testimonial?: { name: string; location: string; text: string; rating: number };
}

const ServicePageTemplate = ({
  title,
  subtitle,
  heroImage,
  description,
  features,
  process,
  pricing,
  faqs,
  testimonial
}: ServicePageProps) => {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "XYZ Packers and Movers",
      "telephone": "0000000000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit -I9, New Horizon Mall, 260300 Writing Creek Cres",
        "addressLocality": "Balzac",
        "addressRegion": "AB",
        "postalCode": "T4A 0X8",
        "addressCountry": "CA"
      }
    },
    "areaServed": ["Alberta", "British Columbia", "Saskatchewan"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "0000000000",
      "serviceUrl": "https://xyzpackers.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section 
          className="relative min-h-[60vh] flex items-center justify-center pt-20"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 43, 76, 0.7), rgba(26, 43, 76, 0.5)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="h-5 w-5 text-bright-teal" />
                  <span className="font-semibold">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="h-5 w-5 text-bright-teal" />
                  <span className="font-semibold">24/7 Support</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="btn-cta text-lg px-8 py-6 min-h-[48px] min-w-[280px] flex items-center justify-center">
                  Call Now: 0000000000
                  <Phone className="ml-2 h-5 w-5" />
                </div>
                <a href="/#quote">
                  <Button className="btn-outline text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-deep-navy min-h-[48px] min-w-[200px]">
                    Get Online Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16">
          {/* Description Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-soft-silver">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  Why Choose Our {title}?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-bright-teal flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  Our Simple Process
                </h2>
                <div className="space-y-8">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-12 h-12 bg-bright-teal text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-deep-navy mb-2">
                          {step.step}
                        </h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 bg-soft-silver">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-6">
                  {pricing.title}
                </h2>
                <p className="text-xl text-gray-700 mb-8">{pricing.description}</p>
                
                <div className="bg-white rounded-lg p-8 shadow-lg max-w-md mx-auto">
                  <h3 className="text-2xl font-heading font-bold text-deep-navy mb-6">What's Included</h3>
                  <ul className="space-y-3 text-left">
                    {pricing.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-bright-teal flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <div className="btn-cta w-full py-4 text-lg flex items-center justify-center">
                      Get Your Free Quote: 0000000000
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          {testimonial && (
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-12">
                    What Our Customers Say
                  </h2>
                  <div className="bg-soft-silver rounded-lg p-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-xl text-gray-700 italic mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    <cite className="text-deep-navy font-semibold">
                      {testimonial.name}, {testimonial.location}
                    </cite>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          <section className="py-16 bg-soft-silver">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-none">
                      <AccordionTrigger className="px-6 py-4 text-left font-semibold text-deep-navy hover:text-bright-teal">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 bg-deep-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl mb-8 text-gray-200">
                  Get your free, no-obligation quote today. Our team is standing by 24/7 to help with your move.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-bright-teal hover:bg-bright-teal/90 text-white px-8 py-6 text-lg min-h-[48px] min-w-[250px] flex items-center justify-center">
                    Call Now: 0000000000
                    <Phone className="ml-2 h-5 w-5" />
                  </div>
                  <a href="/#quote">
                    <Button className="border-2 border-white text-white hover:bg-white hover:text-deep-navy px-8 py-6 text-lg min-h-[48px] min-w-[200px]">
                      Get Online Quote
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
        <MobileStickyBanner />
      </div>
    </>
  );
};

export default ServicePageTemplate;