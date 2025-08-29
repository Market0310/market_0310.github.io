import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LocationsServed = () => {
  const serviceAreas = [
    {
      name: 'Major Canadian Cities',
      cities: [
        { name: 'Edmonton', href: '/cities/edmonton' },
        { name: 'Calgary', href: '/cities/calgary' },
        { name: 'Vancouver', href: '/cities/vancouver' },
        { name: 'Toronto', href: '/cities/toronto' },
        { name: 'Ottawa', href: '/cities/ottawa' },
        { name: 'Montreal', href: '/cities/montreal' }
      ],
      featured: true
    },
    {
      name: 'Alberta & Surrounding Areas',
      cities: [
        { name: 'Sherwood Park', href: '#' },
        { name: 'St. Albert', href: '#' },
        { name: 'Spruce Grove', href: '#' },
        { name: 'Red Deer', href: '#' },
        { name: 'British Columbia', href: '#' },
        { name: 'Saskatchewan', href: '#' }
      ],
      featured: true
    }
  ];

  const featuredAreas = serviceAreas.filter(p => p.featured);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide reliable moving services across Alberta and neighboring provinces, 
            ensuring consistent quality and professional service for all your moving needs.
          </p>
        </div>

        {/* Service Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredAreas.map((area, index) => (
            <div 
              key={index}
              className="card-elevated p-8 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-bright-teal to-deep-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-deep-navy mb-4">
                {area.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {area.cities.map((city, cityIndex) => (
                  city.href.startsWith('/') ? (
                    <Link 
                      key={cityIndex} 
                      to={city.href}
                      className="text-muted-foreground hover:text-bright-teal transition-colors duration-200 font-medium"
                    >
                      {city.name}
                    </Link>
                  ) : (
                    <a 
                      key={cityIndex} 
                      href={city.href}
                      className="text-muted-foreground hover:text-bright-teal transition-colors duration-200 font-medium"
                    >
                      {city.name}
                    </a>
                  )
                ))}
              </div>
              
              <Link to="/#quote">
                <Button className="btn-teal">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Service Coverage CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-deep-navy to-bright-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Don't See Your City Listed?
            </h3>
            <p className="text-lg mb-6 text-gray-200">
              We're expanding our network constantly. Contact us to see if we serve your area 
              or can arrange special transportation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-vibrant-coral hover:bg-vibrant-coral/90 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200">
                Check Service Area
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-deep-navy font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                Call: 0000000000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsServed;
