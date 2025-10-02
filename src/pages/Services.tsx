import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Video, Apple } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Apple,
      title: "Nutriční poradenství",
      description: "Sestavím ti personalizovaný jídelníček podle tvých cílů a preferencí. Naučím tě zdravě jíst bez drastických diet.",
      features: [
        "Individuální jídelníček",
        "Recepty a návody",
        "Týdenní kontroly",
        "Aplikace pro sledování"
      ],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Users,
      title: "Skupinové tréninky",
      description: "Motivující atmosféra skupiny s individuálním přístupem. Každý cvičí podle svých možností.",
      features: [
        "Maximálně 8 osob",
        "Různé úrovně zdatnosti",
        "Motivační prostředí",
        "Pravidelný rozvrh"
      ],
      image: "/api/placeholder/300/200"
    },
    {
      icon: Video,
      title: "Online tréninky",
      description: "Trénuj odkudkoli s živým přenosem nebo podle nahraných videí. Flexibilita bez kompromisů v kvalitě.",
      features: [
        "Živé online lekce",
        "Knihovna videí",
        "Individuální feedback",
        "Flexibilní časy"
      ],
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Moje služby
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              Profesionální přístup k fitness a zdraví. Každá služba je přizpůsobena tvým specifickým potřebám a cílům.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <service.icon className="w-16 h-16 text-primary" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
                  >
                    Rezervovat
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Začni svou cestu už dnes
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Každá cesta začíná prvním krokem. Já ti pomůžu udělat ho správným směrem.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
            >
              Rezervovat první lekci
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;