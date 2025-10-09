import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const location = useLocation();
  
  const navItems = [
    { label: "Úvod", action: () => scrollToTop() },
    { label: "O mně", action: () => scrollToSection("about") },
    { label: "Moje lekce", action: () => scrollToSection("moje-lekce") },
    { label: "Kontakt", action: () => scrollToSection("contact") }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" 
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading font-bold text-2xl">
            <span className="text-foreground">
              Kačí
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="font-medium transition-colors duration-200 hover:text-primary text-foreground"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'click_consultation', {
                    action: 'navigation_cta'
                  });
                }
                window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
              }}
              className="bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-2 rounded-md font-medium text-sm transition-colors"
            >
              Domluvit konzultaci
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="md:hidden text-foreground"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-center pb-4 border-b border-border">
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Kačí
                  </h2>
                  <p className="text-sm text-muted-foreground italic mt-1">
                    „Síla je v odvaze"
                  </p>
                </div>
                
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    className="text-left font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                
                <Button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'click_consultation', {
                        action: 'mobile_navigation_cta'
                      });
                    }
                    window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
                    setIsOpen(false);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary-dark font-medium mt-4 rounded-md"
                >
                  👉 Domluvit konzultaci
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;