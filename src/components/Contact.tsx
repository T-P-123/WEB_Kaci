import { useState } from "react";
import { Mail, Phone, Instagram } from "lucide-react";

import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultationRequest = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_consultation", {
        action: "contact_section"
      });
    }

    setIsModalOpen(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/94 via-background/97 to-background" />

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
              Kontakt
            </h2>

            <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
              Chceš začít trénovat nebo se na něco zeptat? Ráda si s tebou popovídám!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-card/95 rounded-lg shadow-[var(--shadow-soft)] border border-border/80 backdrop-blur-sm overflow-hidden">
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4 p-5 bg-secondary/60 rounded-lg hover:bg-secondary/80 transition-colors">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-1">E-mail</p>
                      <a
                        href="mailto:Katarina.lapackova@seznam.cz"
                        className="text-foreground/70 hover:text-primary transition-colors text-lg break-all"
                      >
                        Katarina.lapackova@seznam.cz
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-secondary/60 rounded-lg hover:bg-secondary/80 transition-colors">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-1">Telefon</p>
                      <a
                        href="tel:+420734439196"
                        className="text-foreground/70 hover:text-primary transition-colors text-lg"
                      >
                        734 439 196
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-secondary/60 rounded-lg hover:bg-secondary/80 transition-colors">
                    <Instagram className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground mb-1">Instagram</p>
                      <a
                        href="https://instagram.com/katerina_lapackova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors text-lg break-all"
                      >
                        @katerina_lapackova
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleConsultationRequest}
                  className="bg-primary text-primary-foreground hover:bg-primary-dark font-semibold px-8 py-6 text-lg rounded-md shadow-[var(--shadow-primary)] transition-all"
                  size="lg"
                >
                  Domluvit konzultaci
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-secondary/60 hover:border-primary font-semibold px-8 py-6 text-lg rounded-md transition-all"
                  size="lg"
                >
                  <a href="mailto:katarina.lapackova@seznam.cz">
                    Napsat mi
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="consultation"
      />
    </section>
  );
};

export default Contact;
