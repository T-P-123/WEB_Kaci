import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const TrainerSection = () => {
  const credentials = [
    { category: "Zkušenosti", items: ["Více než 5 let zkušeností", "Certifikovaná osobní trenérka", "Specialistka na výživu"] },
    { category: "Certifikace", items: ["ACSM Certifikace", "Certifikovaná nutriční specialistka", "Specialistka na skupinové fitness", "Trenérka sportovní výživy"] }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-[var(--shadow-soft)]">
              <img 
                src={heroBackground} 
                alt="Kačí - certifikovaná trenérka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight text-foreground">
              Ahoj, já jsem Kačí
            </h2>
            
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <p className="text-lg">
                Sport je pro mě víc než jen trénink – je to vášeň, která mě provází už od příprav na přijímačky na policejní školu. 
                Od té doby jsem si vyzkoušela závodní plavání, půlmaratony i posilování, ale nejvíc mě nakonec pohltil CrossFit.
              </p>
              <p className="text-lg">
                Ten mě naučil nejen síle a vytrvalosti, ale hlavně tomu, že síla je v odvaze – udělat krok vpřed, 
                překonat sama sebe a posouvat vlastní hranice.
              </p>
              <p className="text-lg">
                Tréninky proto vnímám jako prostor, kde nejde jen o svaly a výkon. Jsou o radosti, energii, 
                lepším zdraví a dobrém pocitu z každého malého posunu.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg text-center border border-primary/20">
                <p className="text-2xl font-heading font-bold text-foreground italic">
                  „Síla je v odvaze"
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;