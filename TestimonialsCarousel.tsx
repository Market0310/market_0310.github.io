import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      rating: 5,
      text: 'Our movers made our cross-country move from Toronto to Vancouver absolutely seamless. The team was professional, punctual, and took exceptional care of our belongings. No hidden fees, just transparent pricing as promised.',
      service: 'Long-Distance Moving'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Calgary, AB',
      rating: 5,
      text: 'Outstanding service for our office relocation. They moved our entire IT infrastructure and furniture over the weekend with zero downtime. The team\'s expertise and attention to detail was impressive.',
      service: 'Commercial Moving'
    },
    {
      id: 3,
      name: 'Eleanor Rodriguez',
      location: 'Montreal, QC',
      rating: 5,
      text: 'When we needed to help my elderly mother move to assisted living, our moving team was incredibly compassionate and patient. They understood the emotional aspect and made the transition as smooth as possible.',
      service: 'Senior Moving'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Halifax, NS',
      rating: 5,
      text: 'Emergency same-day move due to a job relocation. Our moving team responded within 2 hours and had us moved the same day. Incredible service when we needed it most. Highly recommend!',
      service: 'Express Moving'
    },
    {
      id: 5,
      name: 'Jennifer Walsh',
      location: 'Winnipeg, MB',
      rating: 5,
      text: 'Professional piano moving service that exceeded expectations. Our baby grand piano was moved safely and the team took extra care with our hardwood floors. Worth every penny.',
      service: 'Piano Moving'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-deep-navy to-bright-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied 
            customers across Canada have to say about their moving experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-start space-x-6">
              {/* Quote icon */}
              <div className="flex-shrink-0">
                <Quote className="h-12 w-12 text-bright-teal" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                {/* Testimonial text */}
                <blockquote className="text-lg md:text-xl text-warm-charcoal leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-bright-teal to-vibrant-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-deep-navy">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-muted-foreground">
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-bright-teal font-semibold">
                      {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 p-3 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 p-3 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <a href="#quote">
            <Button className="bg-vibrant-coral hover:bg-vibrant-coral/90 text-white font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-200">
              Get Your Free Quote Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;