import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';

const MobileStickyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReservation = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_consultation', {
        action: 'mobile_sticky_cta'
      });
    }
    setIsModalOpen(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden">
      <div className="safe-area-inset-bottom">
        <Button 
          onClick={handleReservation}
          className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary-dark font-semibold text-lg rounded-md shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-premium)] transition-all duration-300 tracking-wide"
          size="lg"
        >
          Domluvit konzultaci
        </Button>
      </div>
      
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="consultation"
      />
    </div>
  );
};

export default MobileStickyButton;