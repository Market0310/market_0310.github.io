import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, User, Mail, Phone } from 'lucide-react';

interface ExitIntentFormData {
  name: string;
  email: string;
  phone: string;
}

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [formData, setFormData] = useState<ExitIntentFormData>({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    let exitTimer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving from the top of the page (exit intent)
      if (e.clientY <= 0 && showCount < 2) {
        setIsOpen(true);
        setShowCount(prev => prev + 1);
      }
    };

    const handleTouchStart = () => {
      // For mobile devices, detect when user tries to navigate away
      exitTimer = setTimeout(() => {
        if (showCount < 2) {
          setIsOpen(true);
          setShowCount(prev => prev + 1);
        }
      }, 30000); // Show after 30 seconds on mobile
    };

    const handleBeforeUnload = () => {
      if (showCount < 2) {
        setIsOpen(true);
        setShowCount(prev => prev + 1);
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && showCount < 2) {
        setIsOpen(true);
        setShowCount(prev => prev + 1);
      }
    };

    // Desktop exit intent
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Mobile exit intent
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [showCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Exit intent form submitted:', formData);
    alert('Thank you! We will contact you soon with a special offer.');
    setIsOpen(false);
  };

  const updateFormData = (field: keyof ExitIntentFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-background border-2 border-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            Wait! Don't Leave Yet!
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Get a special offer on your move. Just provide your details below!
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="exit-name" className="flex items-center gap-2 text-sm font-medium">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="exit-name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="Your full name"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exit-email" className="flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              Email Address *
            </Label>
            <Input
              id="exit-email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="your@email.com"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exit-phone" className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              Phone Number *
            </Label>
            <Input
              id="exit-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder="+1 (403) 123-4567"
              required
              className="border-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Get Special Offer
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="border-primary text-primary hover:bg-primary/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="text-center text-xs text-muted-foreground mt-2">
          Limited time offer. Contact us for exclusive pricing.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;