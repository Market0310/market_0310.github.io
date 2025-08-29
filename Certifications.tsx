import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Our Certifications & Accreditations
          </h2>
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
                        <h3 className="font-semibold text-sm mb-2 min-h-[2.5rem] flex items-center justify-center">
                          {cert.name}
                        </h3>
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
    </section>
  );
};

export default Certifications;