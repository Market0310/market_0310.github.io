import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileStickyBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bright-teal text-white shadow-lg">
      <div className="block">
        <Button className="w-full bg-bright-teal hover:bg-bright-teal/90 text-white border-none rounded-none py-4 text-lg font-bold min-h-[60px]">
          <Phone className="h-5 w-5 mr-2" />
          Contact: 0000000000
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBanner;