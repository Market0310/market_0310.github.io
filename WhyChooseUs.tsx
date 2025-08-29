import { Shield, DollarSign, Users, Clock, Award, MapPin } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Fully Insured & Licensed',
      description: 'Comprehensive coverage and proper licensing in all provinces',
      stat: '100%',
      statLabel: 'Coverage'
    },
    {
      icon: DollarSign,
      title: 'Transparent Flat-Rate Pricing',
      description: 'No hidden fees, no surprises - just honest, upfront pricing',
      stat: '$0',
      statLabel: 'Hidden Fees'
    },
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Background-checked, trained, and uniformed moving professionals',
      stat: '100%',
      statLabel: 'Professional'
    },
    {
      icon: Clock,
      title: 'On-Time Guarantee',
      description: 'We arrive when promised and complete moves on schedule',
      stat: '98%',
      statLabel: 'On-Time Rate'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards and customer satisfaction guarantee',
      stat: '4.9/5',
      statLabel: 'Customer Rating'
    },
    {
      icon: MapPin,
      title: 'Regional Coverage',
      description: 'Serving Alberta, British Columbia, and Saskatchewan with local expertise',
      stat: '3',
      statLabel: 'Provinces Served'
    }
  ];

  const certifications = [
    {
      name: "BBB Accredited Business",
      image: "/lovable-uploads/699cad12-9821-47da-89ea-4c3b90989aca.png",
      description: "Better Business Bureau accredited with A+ rating"
    },
    {
      name: "WSIB Ontario",
      image: "/lovable-uploads/13385a44-e022-473f-814c-5fae68de6f14.png",
      description: "Workplace Safety and Insurance Board certified"
    },
    {
      name: "Canadian Business Owner Certified",
      image: "/lovable-uploads/66f06656-ef8e-4a0a-9e35-5058a41e09ca.png",
      description: "Certified Canadian business owner"
    },
    {
      name: "100% Satisfaction Guaranteed",
      image: "/lovable-uploads/316a26c9-6fd6-4c8b-a7a3-69e163d9f7e9.png",
      description: "We guarantee 100% customer satisfaction"
    },
    {
      name: "Google Guaranteed Service Provider",
      image: "/lovable-uploads/71aed492-c1e6-495e-86af-f14870bf3bb9.png",
      description: "Google guaranteed service provider"
    },
    {
      name: "Fully Insured",
      image: "/lovable-uploads/d8576510-b4cd-4b13-a6ae-ce6323e77d97.png",
      description: "Comprehensive insurance coverage for your peace of mind"
    },
    {
      name: "2024 Top Insurance Employer",
      image: "/lovable-uploads/927cbc66-e0e5-4c70-8cce-cb7374f0336a.png",
      description: "Recognized as top insurance employer in 2024"
    },
    {
      name: "Google Customer Reviews",
      image: "/lovable-uploads/80a4d17c-8958-4165-8903-21c9d93ed6fd.png",
      description: "Verified customer reviews on Google"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-6">
            Why Choose Our Moving Services?
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">Our Story</h3>
              <p className="text-lg text-muted-foreground">
                We started our moving company with a simple goal in mind: to create a platform that makes it easy for people to connect with us to have hustle free moving. Our journey has been a long and winding one, but we're proud of what we've accomplished so far with our professional movers team.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">Our Community</h3>
              <p className="text-lg text-muted-foreground">
                We believe that building a strong and supportive community is key to our success. That's why we've created a moving company that puts people first, and fosters a sense of belonging and connection among our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                {/* Icon with hover effect */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-bright-teal to-deep-navy rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-heading font-bold text-vibrant-coral mb-1">
                    {feature.stat}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {feature.statLabel}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-deep-navy mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications & Accreditations Section */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4 text-deep-navy">
              Our Certifications & Accreditations
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trust in our certified and accredited moving services. We maintain the highest standards 
              of professionalism, safety, and customer satisfaction.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1">
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 text-center h-full flex flex-col">
                        <div className="flex-1 flex items-center justify-center mb-4">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="max-w-full max-h-32 w-auto h-auto object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2 min-h-[2.5rem] flex items-center justify-center">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {cert.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-deep-navy to-bright-teal rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-lg mb-6 text-gray-200">
            Join thousands of satisfied customers who trust XYZ Packers and Movers for their moving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote">
              <button className="bg-vibrant-coral hover:bg-vibrant-coral/90 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200">
                Get Your Free Quote
              </button>
            </a>
            <div className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
              Call Now: 0000000000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;