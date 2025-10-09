import { useState } from "react";
import { MapPin, Target, ShieldCheck, TrendingUp, Dumbbell } from "lucide-react";

import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

const locations = [
  "Zeus Power House, Březinova 4690/144, 586 01 Jihlava",
  "Kamenice nad Lipou - Evolution Gym, Na Kariance 315, 394 70 Kamenice nad Lipou"
];

const benefits: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Plán na míru",
    description: "Společně nastavíme rozumný plán podle tvých cílů a času, který vydrží dlouhodobě.",
    icon: Target
  },
  {
    title: "Bezpečná technika",
    description: "Každý pohyb hlídám – od dechu po tempo – aby tělo sílilo bez zbytečné bolesti.",
    icon: ShieldCheck
  },
  {
    title: "Postupný progres",
    description: "Navazujeme na sebe, vidíš reálné změny ve síle, kondici i držení těla.",
    icon: TrendingUp
  }
];

const IndividualTraining = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConsultationRequest = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_consultation", {
        action: "individual_training"
      });
    }

    setIsModalOpen(true);
  };

  const handleLearnMore = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="individualni" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-primary">
              Individuální spolupráce 1:1
            </span>
            <h2 className="font-heading text-4xl font-bold uppercase leading-[1.05] text-foreground sm:text-5xl">
              Individuální tréninky
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Hodina je jen o tobě. Nejdřív projdeme cíle a omezení, potom stavíme cvičení do bloků tak, aby dávalo hlavu i patu. Domů si odnášíš jasný plán, jak pokračovat mezi našimi tréninky.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-soft)] md:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                Kde a jak často
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {locations.map((location) => (
                  <li key={location} className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                    <span>{location}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl bg-primary/5 p-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                <Dumbbell className="h-4 w-4" /> Cena dle domluvy
              </h4>
              <p className="text-sm text-gray-600">
                Společně nastavíme rozsah a frekvenci tak, aby plán seděl tvému času i rozpočtu.
              </p>
              <p className="text-sm text-gray-600">
                Nabízím jednorázové konzultace, pravidelné 1:1 lekce i balíčky s online podporou.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Co si odnášíte
            </h3>
            <ul className="space-y-4">
              {benefits.map(({ title, description, icon: Icon }) => (
                <li key={title} className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              onClick={handleConsultationRequest}
              className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-primary)] transition hover:bg-primary-dark"
            >
              Domluvit konzultaci
            </Button>
            <Button
              variant="outline"
              onClick={handleLearnMore}
              className="rounded-full border-gray-300 px-8 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100"
            >
              Chci vědět více
            </Button>
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

export default IndividualTraining;

