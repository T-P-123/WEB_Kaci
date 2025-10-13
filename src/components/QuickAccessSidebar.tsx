import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const QuickAccessSidebar = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/women-in-motion-detail");
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById("kontakt");

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/#kontakt");
  };

  return (
    <div className="fixed right-4 top-1/2 z-50 -translate-y-1/2 transform">
      <div className="cursor-pointer rounded-l-lg bg-pink-600 p-3 text-white shadow-lg transition-all duration-300 hover:bg-pink-700 hover:pr-4">
        <div className="flex items-center space-x-2">
          <img src="/Kaci_logo.png" alt="Kaci logo" className="h-6 w-6 rounded-full border border-white/30 bg-white/20 p-0.5" />
          <div className="whitespace-nowrap text-sm font-medium">
            <div>Ženy v pohybu</div>
            <div className="text-xs opacity-90">130 Kč | Obrataň</div>
          </div>
        </div>
        <div className="mt-2 flex space-x-1">
          <Button
            size="sm"
            variant="secondary"
            className="h-auto px-2 py-1 text-xs text-white"
            onClick={handleDetailClick}
          >
            Detail
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-auto px-2 py-1 text-xs text-white"
            onClick={handleContactClick}
          >
            <Phone className="mr-1 h-3 w-3" />
            Kontakt
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessSidebar;
