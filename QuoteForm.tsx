import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, User, Home } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  moveSize: string;
  fromAddress: string;
  toAddress: string;
  notes: string;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    moveSize: '',
    fromAddress: '',
    toAddress: '',
    notes: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will contact you within 2 hours.');
  };

  const moveSizes = [
    'Studio Apartment',
    '1 Bedroom Apartment',
    '2 Bedroom Apartment',
    '3 Bedroom House',
    '4 Bedroom House',
    '5+ Bedroom House',
    'Small Office',
    'Medium Office',
    'Large Office',
    'Other'
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Get Your Free Moving Quote
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out our simple form and get a personalized quote within 2 hours
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
              <CardTitle className="text-2xl">Request Your Quote</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Provide your details below for an accurate moving estimate
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="+1 (403) 123-4567"
                      required
                    />
                  </div>
                </div>

                {/* Move Details */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="moveSize" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Home/Office Size *
                    </Label>
                    <Select onValueChange={(value) => updateFormData('moveSize', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the size of your move" />
                      </SelectTrigger>
                      <SelectContent>
                        {moveSizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fromAddress" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Moving From (Address/Postal Code) *
                      </Label>
                      <Input
                        id="fromAddress"
                        value={formData.fromAddress}
                        onChange={(e) => updateFormData('fromAddress', e.target.value)}
                        placeholder="123 Main St, Calgary, AB T2P 1A1"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Include postal code for accurate distance calculation
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="toAddress" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Moving To (Address/Postal Code) *
                      </Label>
                      <Input
                        id="toAddress"
                        value={formData.toAddress}
                        onChange={(e) => updateFormData('toAddress', e.target.value)}
                        placeholder="456 Oak Ave, Edmonton, AB T5G 2B2"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Include postal code for accurate distance calculation
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => updateFormData('notes', e.target.value)}
                      placeholder="Tell us about any special requirements, fragile items, or other details that might affect your move..."
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Mention pianos, artwork, storage needs, specific dates, or any other special requirements
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button type="submit" className="btn-cta w-full md:w-auto px-12 py-4 text-lg">
                    Get My Free Quote
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll review your request and contact you within 2 hours with a personalized quote.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;