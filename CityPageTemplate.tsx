import { ArrowRight, Phone, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBanner from '@/components/MobileStickyBanner';

interface CityPageProps {
  cityName: string;
  province: string;
  heroImage: string;
  phoneNumber: string;
  description: string;
  landmarks: string;
  serviceAreas: { area: string; distance: string; driveTime: string }[];
  localServices: string[];
  testimonials: { name: string; neighborhood: string; text: string; rating: number }[];
  faqs: { question: string; answer: string }[];
}

const CityPageTemplate = ({
  cityName,
  province,
  heroImage,
  phoneNumber,
  description,
  landmarks,
  serviceAreas,
  localServices,
  testimonials,
  faqs
}: CityPageProps) => {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": `XYZ Packers and Movers - ${cityName}`,
    "description": `Professional moving services in ${cityName}, ${province}`,
    "telephone": phoneNumber,
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "addressRegion": province,
      "addressCountry": "CA"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": province,
      "addressCountry": "CA"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59"
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
          className="relative min-h-[70vh] flex items-center justify-center pt-20"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 43, 76, 0.7), rgba(26, 43, 76, 0.5)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Trusted Packers and Movers in {cityName}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Professional moving services throughout {cityName} and surrounding areas
                <br />
                Flat-rate pricing • Fully insured • Local expertise
              </p>
              
              {/* Local Phone Number */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <Phone className="h-6 w-6 text-bright-teal" />
                  <span className="text-2xl font-bold">{phoneNumber}</span>
                </div>
                <p className="text-sm text-gray-200">Local {cityName} Moving Hotline</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="btn-cta text-lg px-8 py-6 min-h-[48px] min-w-[280px] flex items-center justify-center">
                  Call Local {cityName} Team
                  <Phone className="ml-2 h-5 w-5" />
                </div>
                <a href="/#quote">
                  <Button className="btn-outline text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-deep-navy min-h-[48px] min-w-[200px]">
                    Get Free Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="py-16">
          {/* City Description */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-8">
                  Professional Moving Services in {cityName}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    {description}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {landmarks}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas & Driving Distances */}
          <section className="py-16 bg-soft-silver">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  Areas We Serve Around {cityName}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-deep-navy">{area.area}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                            <MapPin className="h-4 w-4 text-bright-teal" />
                            <span>{area.distance}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4 text-bright-teal" />
                            <span>{area.driveTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Local Services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  Our {cityName} Moving Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {localServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-soft-silver rounded-lg">
                      <CheckCircle className="h-6 w-6 text-bright-teal flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Local Testimonials */}
          <section className="py-16 bg-soft-silver">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  What {cityName} Residents Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="flex justify-start mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 italic mb-4">
                        "{testimonial.text}"
                      </blockquote>
                      <cite className="text-deep-navy font-semibold">
                        {testimonial.name}, {testimonial.neighborhood}
                      </cite>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-deep-navy mb-12">
                  {cityName} Moving FAQs
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-soft-silver rounded-lg border-none">
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

          {/* Local CTA Section */}
          <section className="py-16 bg-deep-navy text-white">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Ready to Move in {cityName}?
                </h2>
                <p className="text-xl mb-8 text-gray-200">
                  Call our local {cityName} team for your free quote. We're here 24/7 to help with your move.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-bright-teal hover:bg-bright-teal/90 text-white px-8 py-6 text-lg min-h-[48px] min-w-[250px] flex items-center justify-center">
                    Call {cityName}: {phoneNumber}
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

export default CityPageTemplate;