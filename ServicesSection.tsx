import { Home, Building2, Users, Truck, Zap, PackageOpen, Shield, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      image: "/lovable-uploads/2a5efd11-c517-4551-9697-e4e392bbaaa5.png",
      title: 'Residential Moving',
      description: 'Complete home moving services for families across Canada',
      features: ['Packing & unpacking', 'Furniture disassembly', 'Careful handling'],
      href: '/services/residential'
    },
    {
      icon: Building2,
      image: "/lovable-uploads/875a2fa3-a36d-412c-8069-3040f86c1ce3.png",
      title: 'Office & Commercial',
      description: 'Professional business relocations with minimal downtime',
      features: ['IT equipment care', 'Weekend moves', 'Inventory tracking'],
      href: '/services/commercial'
    },
    {
      icon: Users,
      image: "/lovable-uploads/2a2e1681-c482-4729-a1ea-19f72ed2c088.png",
      title: 'Senior & Assisted Living',
      description: 'Compassionate moving services for seniors and assisted living',
      features: ['Gentle handling', 'Downsizing help', 'Emotional support'],
      href: '/services/senior'
    },
    {
      icon: Truck,
      image: "/lovable-uploads/b28fb5a6-40c8-469c-8b9e-0af3a9c7819e.png",
      title: 'Long-Distance Moving',
      description: 'Cross-Canada moves with tracking and insurance',
      features: ['GPS tracking', 'Climate control', 'Delivery scheduling'],
      href: '/services/long-distance'
    },
    {
      icon: Zap,
      image: "/lovable-uploads/52d8c109-29a0-41f4-a984-8ad050790248.png",
      title: 'Express Same-Day',
      description: 'Urgent moves completed within the same day',
      features: ['Rapid response', 'Priority scheduling', '4-hour guarantee'],
      href: '/services/express'
    },
    {
      icon: PackageOpen,
      image: "/lovable-uploads/13221362-01d3-4949-a120-4a11949f5b4e.png",
      title: 'Packing Services',
      description: 'Professional packing with premium materials',
      features: ['Quality materials', 'Custom crating', 'Fragile protection'],
      href: '/services/packing'
    },
    {
      icon: Shield,
      image: "/lovable-uploads/b7a49cea-28a7-4f43-9a1c-e35fa9cb2d6c.png",
      title: 'Piano & Specialty Items',
      description: 'Expert handling of pianos and delicate items',
      features: ['Specialized equipment', 'Trained technicians', 'Insurance coverage'],
      href: '/services/piano'
    },
    {
      icon: Warehouse,
      image: "/lovable-uploads/50b4401c-a93b-4480-9a52-e72a808c8b41.png",
      title: 'Storage Solutions',
      description: 'Secure storage facilities across Canada',
      features: ['Climate controlled', '24/7 security', 'Flexible terms'],
      href: '/services/storage'
    }
  ];

  return (
    <section className="py-20 bg-soft-silver">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-6">
            Complete Moving Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential moves to commercial relocations, we provide comprehensive 
            moving services tailored to your specific needs across Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="card-elevated p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 group"
              >
                {service.image ? (
                  <div className="flex items-center justify-center w-20 h-20 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-bright-teal to-vibrant-coral rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                )}
                
                <h3 className="text-xl font-heading font-semibold text-deep-navy mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-center mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-warm-charcoal">
                      <div className="w-2 h-2 bg-bright-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.href}>
                  <Button className="btn-teal w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-cta text-lg px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;