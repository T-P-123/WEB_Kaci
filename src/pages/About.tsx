import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users, Heart, CheckCircle } from "lucide-react";
import aboutPhoto1 from "@/assets/about-photo-1.jpg";
import aboutPhoto2 from "@/assets/about-photo-2.jpg";

const About = () => {
  const certifications = [
    {
      icon: Award,
      title: "Certifikovaná osobní trenérka",
      organization: "ACSM",
      year: "2020"
    },
    {
      icon: BookOpen,
      title: "Specialistka na výživu",
      organization: "ISSA",
      year: "2021"
    },
    {
      icon: Users,
      title: "Trenérka skupinových lekcí",
      organization: "Les Mills",
      year: "2019"
    },
    {
      icon: Heart,
      title: "Wellness coach",
      organization: "ICF",
      year: "2022"
    }
  ];

  const achievements = [
    "Více než 500 spokojených klientek",
    "5+ let zkušeností v oboru",
    "Specializace na trénink žen",
    "Pravidelné vzdělávání a kurzy",
    "Holistický přístup k zdraví"
  ];

  const philosophy = [
    {
      title: "Individuální přístup",
      description: "Každá žena je jedinečná, proto i každý tréninkový plán musí být šitý na míru."
    },
    {
      title: "Postupné změny",
      description: "Věřím v udržitelné změny, které ti zůstanou na celý život, ne v drastické diety."
    },
    {
      title: "Pozitivní motivace",
      description: "Trénink má být radost, ne trest. Společně si najdeme cestu, která tě bude bavit."
    },
    {
      title: "Zdraví na prvním místě",
      description: "Cílem není jen vypadat dobře, ale hlavně se cítit skvěle a být zdravý."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                  Jsem Kačí
                </h1>
                <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                  Certifikovaná osobní trenérka a wellness koučka s vášní pomáhat ženám 
                  objevit jejich vnitřní sílu a sebevědomí.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  500+ spokojených klientek
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  5+ let zkušeností
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  Certifikovaná trenérka
                </Badge>
              </div>

              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
              >
                Domluvit si schůzku
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={aboutPhoto1} 
                  alt="Kačí během tréninku"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={aboutPhoto2} 
                  alt="Kačí s klientkou"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">
              Moje cesta
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              <p className="text-xl">
                Můj vztah k fitness začal docela obyčejně - chtěla jsem se cítit lépe ve svém těle. 
                Ale rychle jsem zjistila, že pravidelný pohyb mi dal mnohem víc než jen fyzickou sílu.
              </p>
              <p className="text-lg">
                Dál mi sebevědomí, energii a radost z každého dne. A tohle přesně chci předat i tobě. 
                Věřím, že každá žena v sobě má obrovský potenciál - jen někdy potřebuje někoho, 
                kdo jí ukáže cestu a bude ji povzbuzovat.
              </p>
              <p className="text-lg">
                Za posledních pět let jsem pomohla více než 500 ženám najít jejich vnitřní sílu 
                a sebevědomí prostřednictvím pohybu a zdravého životního stylu. A věř mi, 
                že každá z nich byla úplně jiná - měla jiné cíle, možnosti i výzvy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Kvalifikace & certifikace
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Neustále se vzdělávám, abych ti mohla poskytovat ty nejlepší služby 
              založené na nejnovějších poznatcích.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{cert.title}</h3>
                  <p className="text-sm text-foreground/60">{cert.organization}</p>
                  <p className="text-sm text-foreground/60">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Co o mně říkají čísla
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center text-foreground/70">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Moje filosofie
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Věřím, že síla je v odvaze udělat první krok. A pak v každém dalším kroku, 
              který děláš směrem ke svým cílům.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {philosophy.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
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
              Jsi připravená začít svou cestu?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ráda bych tě poznala a společně si naplánovali cestu k tvým cílům.
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

export default About;