import { useState } from "react";
import { Heart, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

const QuickAccessSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReservationInfo, setShowReservationInfo] = useState(false);
  const navigate = useNavigate();

  const handleReservationClick = () => {
    setShowReservationInfo(true);
  };

  const handleDetailClick = () => {
    navigate('/women-in-motion-detail');
  };

  return (
    <>
      {/* Floating sidebar button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-l-lg shadow-lg cursor-pointer transition-all duration-300 hover:pr-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <div className="text-sm font-medium whitespace-nowrap">
              <div>Ženy v pohybu</div>
              <div className="text-xs opacity-90">130 Kč | Obrataň</div>
            </div>
          </div>
          <div className="flex space-x-1 mt-2">
            <Button
              size="sm"
              variant="secondary"
              className="text-xs px-2 py-1 h-auto bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={handleDetailClick}
            >
              Detail
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="text-xs px-2 py-1 h-auto bg-white/20 hover:bg-white/30 text-white border-white/30"
              onClick={handleReservationClick}
            >
              <Calendar className="w-3 h-3 mr-1" />
              Rezervovat
            </Button>
          </div>
        </div>
      </div>

      {/* Reservation info dialog */}
      <Dialog open={showReservationInfo} onOpenChange={setShowReservationInfo}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-pink-600" />
              <span>Ženy v pohybu - Rezervace</span>
            </DialogTitle>
            <DialogDescription className="space-y-3 pt-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-medium text-pink-800 mb-2">🌟 Brzy spustíme!</p>
                <p className="text-sm text-pink-700">
                  Systém rezervací pro lekci "Ženy v pohybu" bude spuštěn velmi brzy. 
                  Zatím nás prosím kontaktujte přímo.
                </p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Místo:</strong> Obrataň – tělocvična</p>
                <p><strong>Adresa:</strong> Sportovní hala, Obrataň 163, 394 12 Obrataň</p>
                <p><strong>Cena:</strong> 130 Kč / lekce</p>
                <p><strong>Kapacita:</strong> min. 5 osob</p>
              </div>

              <div className="pt-4">
                <Button 
                  className="w-full"
                  onClick={() => {
                    const contactElement = document.getElementById('kontakt');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                      setShowReservationInfo(false);
                    }
                  }}
                >
                  Kontaktovat pro rezervaci
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickAccessSidebar;