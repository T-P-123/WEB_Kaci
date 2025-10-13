import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, TrendingUp, Heart } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Začátečnický program",
      subtitle: "Pro ty, kdo začínají svou fitness cestu",
      duration: "8 týdnů",
      intensity: "Základní",
      description: "Bezpečný a postupný úvod do světa fitness. Naučíš se správnou techniku a vytvoříš si zdravé návyky.",
      features: [
        "Úvod do základních cviků",
        "Postupné zvyšování zátěže",
        "Individuální tempo",
        "Týdenní konzultace"
      ],
      price: "2500 Kč/měsíc",
      popular: false
    },
    {
      title: "Pokročilý program",
      subtitle: "Pro aktivní ženy s fitness zkušenostmi",
      duration: "12 týdnů",
      intensity: "Vysoká",
      description: "Intenzivní program pro dosažení výrazných výsledků. Kombinace síly, kondice a flexibility.",
      features: [
        "Pokročilé tréninky",
        "Nutriční plán",
        "Měření pokroku",
        "Skupinové výzvy"
      ],
      price: "3500 Kč/měsíc",
      popular: true
    },
    {
      title: "Transformační program",
      subtitle: "Kompletní změna životního stylu",
      duration: "16 týdnů",
      intensity: "Maximální",
      description: "Holistic přístup k zdraví zahrnující trénink, výživu, spánek a mentální well-being.",
      features: [
        "Personalizovaný plán",
        "Týdenní konzultace",
        "Nutriční poradenství",
        "Podpora 24/7"
      ],
      price: "5000 Kč/měsíc",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Individuální přístup",
      description: "Každý program je přizpůsoben tvým specifickým potřebám a cílům"
    },
    {
      icon: TrendingUp,
      title: "Měřitelné výsledky",
      description: "Pravidelné sledování pokroku a úprava programu podle výsledků"
    },
    {
      icon: Heart,
      title: "Holistic přístup",
      description: "Zaměření na celkové zdraví, nejen na fyzickou kondici"
    },
    {
      icon: Clock,
      title: "Flexibilní rozvrh",
      description: "Přizpůsobíme časy tréninků tvému pracovnímu harmonogramu"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Tréninkové programy
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8">
              Personalizované programy založené na vědeckých poznatcích a letech praxe. 
              Najdi program, který ti sedí.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
            >
              Konzultace zdarma
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                program.popular ? 'ring-2 ring-primary shadow-lg scale-105' : 'hover:scale-105'
              }`}>
                {program.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Nejoblíbenější
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-primary">{program.title}</CardTitle>
                  <p className="text-foreground/70">{program.subtitle}</p>
                  
                  <div className="flex gap-2 mt-4">
                    <Badge variant="outline">{program.duration}</Badge>
                    <Badge variant="secondary">{program.intensity}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">{program.description}</p>
                  
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-foreground/70 flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-primary mb-4">{program.price}</div>
                    <Button 
                      className={`w-full ${program.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={program.popular ? 'default' : 'outline'}
                      onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
                    >
                      Vybrat program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Proč si vybrat moje programy?
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Každý program je založen na vědeckých poznatcích a praktických zkušenostech 
              s desítkami klientek.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Připravená začít?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rezervuj si bezplatnou konzultaci a společně najdeme program, který je přesně pro tebe.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
              onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
            >
              Rezervovat konzultaci
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;