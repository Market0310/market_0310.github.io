import { useState } from 'react';
import { Menu, X, Phone, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', type: isHomePage ? 'anchor' : 'link' },
    { name: 'Get Quote', href: isHomePage ? '#quote' : '/#quote', type: isHomePage ? 'anchor' : 'link' },
    { name: 'Cities', href: isHomePage ? '#cities' : '/#cities', type: isHomePage ? 'anchor' : 'link' },
    { name: 'Why Choose Us', href: isHomePage ? '#why-choose-us' : '/#why-choose-us', type: isHomePage ? 'anchor' : 'link' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-heading font-bold text-gray-900">
              XYZ Packers and Movers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-warm-charcoal hover:text-bright-teal transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-warm-charcoal hover:text-bright-teal transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-deep-navy">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">0000000000</span>
            </div>
            {isHomePage ? (
              <a href="#quote">
                <Button className="btn-cta min-h-[48px]">
                  <Quote className="h-4 w-4 mr-2" />
                  Get Free Quote
                </Button>
              </a>
            ) : (
              <Link to="/#quote">
                <Button className="btn-cta min-h-[48px]">
                  <Quote className="h-4 w-4 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-warm-charcoal hover:text-bright-teal transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-warm-charcoal hover:text-bright-teal transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-deep-navy mb-4">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">0000000000</span>
                </div>
                {isHomePage ? (
                  <a href="#quote" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-cta w-full">
                      <Quote className="h-4 w-4 mr-2" />
                      Get Free Quote
                    </Button>
                  </a>
                ) : (
                  <Link to="/#quote" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-cta w-full">
                      <Quote className="h-4 w-4 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;