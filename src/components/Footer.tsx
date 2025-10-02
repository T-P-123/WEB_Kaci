import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-bold">
              Kačí
            </h3>
            <p className="text-lg italic opacity-90">
              „Síla je v odvaze."
            </p>
            <p className="opacity-80 leading-relaxed">
              Posouvám vlastní hranice a inspiruji ostatní k aktivnímu životnímu stylu.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">
              Kontakt
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:Katarina.lapackova@seznam.cz"
                  className="hover:opacity-80 transition-opacity break-all"
                >
                  Katarina.lapackova@seznam.cz
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a 
                  href="tel:+420734439196"
                  className="hover:opacity-80 transition-opacity"
                >
                  734 439 196
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <a 
                  href="https://instagram.com/katerina_lapackova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  @katerina_lapackova
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click_consultation', {
                      action: 'footer_cta'
                    });
                  }
                  window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
                }}
                className="bg-background text-foreground hover:bg-background/90 font-semibold px-6 py-3 rounded-md"
              >
                Domluvit konzultaci
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-6">
          <p className="opacity-70 text-center text-sm">
            © {new Date().getFullYear()} Kačí. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;