import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  const quickLinks = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Services',
    href: '/#services'
  }, {
    name: 'Get Quote',
    href: '/#quote'
  }, {
    name: 'Cities',
    href: '/#cities'
  }, {
    name: 'Why Choose Us',
    href: '/#why-choose-us'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const services = [{
    name: 'Residential Moving',
    href: '/services/residential'
  }, {
    name: 'Commercial Moving',
    href: '/services/commercial'
  }, {
    name: 'Long-Distance Moving',
    href: '/services/long-distance'
  }, {
    name: 'Piano Moving',
    href: '/services/piano'
  }, {
    name: 'Storage Solutions',
    href: '/services/storage'
  }, {
    name: 'Packing Services',
    href: '/services/packing'
  }];
  const locations = [{
    name: 'Edmonton',
    href: '/cities/edmonton'
  }, {
    name: 'Calgary',
    href: '/cities/calgary'
  }, {
    name: 'Vancouver',
    href: '/cities/vancouver'
  }, {
    name: 'Toronto',
    href: '/cities/toronto'
  }, {
    name: 'Ottawa',
    href: '/cities/ottawa'
  }, {
    name: 'Montreal',
    href: '/cities/montreal'
  }];
  return <footer className="bg-deep-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h3 className="text-2xl font-heading font-bold">XYZ Packers and Movers</h3>
                <p className="text-gray-300 text-sm">Moving & Storage</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional moving company serving Alberta and neighboring provinces. 
              We provide flat-rate, fully insured moving services with no hidden fees.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-bright-teal flex-shrink-0" />
                <span>0000000000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-bright-teal flex-shrink-0" />
                <span>xyz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-bright-teal flex-shrink-0" />
                <span>xyz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-bright-teal transition-colors duration-200">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map(service => <li key={service.name}>
                  <a href={service.href} className="text-gray-300 hover:text-bright-teal transition-colors duration-200">
                    {service.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Cities We Serve</h4>
            <ul className="space-y-3">
              {locations.map(location => <li key={location.name}>
                  <a href={location.href} className="text-gray-300 hover:text-bright-teal transition-colors duration-200">
                    {location.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-bright-teal mb-1">100%</div>
              <div className="text-sm text-gray-300">Professional Team</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-bright-teal mb-1">500+</div>
              <div className="text-sm text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-bright-teal mb-1">100%</div>
              <div className="text-sm text-gray-300">Insured & Licensed</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-sm text-gray-300">
                © 2024 XYZ Packers and Movers. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-gray-300 hover:text-bright-teal transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-300 hover:text-bright-teal transition-colors">
                  Terms of Service
                </a>
                <a href="/accessibility" className="text-gray-300 hover:text-bright-teal transition-colors">
                  Accessibility
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-300 mr-2">Follow Us:</span>
              <a href="#" className="p-2 bg-gray-700 hover:bg-bright-teal rounded-full transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-bright-teal rounded-full transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-bright-teal rounded-full transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-gray-700 hover:bg-bright-teal rounded-full transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">Licensed & Certified Moving Company</p>
            <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
              <div className="text-xs text-gray-500">CAM Certified</div>
              <div className="text-xs text-gray-500">Transport Canada Licensed</div>
              <div className="text-xs text-gray-500">BBB Accredited</div>
              <div className="text-xs text-gray-500">Provincial Licensed</div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;