import { Button } from "@/components/ui/button";
import lessonPhoto1 from "@/assets/hiit-training-photo.jpg";
import stretchingPhoto from "@/assets/stretching-photo-new.jpg";
import repsRunPhoto from "@/assets/reps-run-photo-new.jpg";

const Lessons = () => {
  const handleReservation = (lessonName: string) => {
    // Track booking click event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: lessonName
      });
    }

    // Open external reservation link in new tab
    window.open("https://www.rezervace.zeuspowerhouse.cz/Calendar", "_blank", "noopener,noreferrer");
  };

  const lessons = [
    {
      id: "heat",
      title: "HEAT (HIIT trénink)",
      shortTitle: "HEAT",
      description:
        "Vysoce intenzivní intervalový trénink, který kombinuje praktické cviky a pomáhá zlepšit kondici, sílu i vytrvalost. Efektivní forma cvičení vhodná pro každého, kdo se chce cítit silnější a mít více energie do běžného života.",
      benefits: [
        "Intenzivní intervaly – krátké, ale účinné bloky cvičení s pauzami pro maximální efekt",
        "Různorodé cviky – pestrá škála a variabilita, která neomrzí",
        "Rychlost a efektivita – během 20–30 minut spálíš kalorie, zpevníš tělo a zlepšíš kondici",
        "Přizpůsobení úrovni – vhodné jak pro začátečníky, tak pro pokročilé"
      ],
      equipment: "TRX, kettlebell, expandéry, cviky s vlastní vahou a další pomůcky dostupné v gymu",
      image: lessonPhoto1,
      imageAlt: "HIIT trénink s vysokou intenzitou",
      schedule: "Středu od 17:00 a neděli od 9:00",
      price: "190 Kč",
      minCapacity: "Min. kapacita: 4 osoby"
    },
    {
      id: "reps-run",
      title: "REPS & RUN",
      shortTitle: "REPS & RUN",
      description:
        "Kombinace běhu a silově-kondičních bloků. Přesně ten typ tréninku, kde se spálí kalorie, zvýší tep a posouvají limity. Skvělé pro ty, kdo milují výzvy a týmovou atmosféru.",
      whatToExpect:
        "Výpady, veslo, wall balls, ropes, angličáky a další funkční cviky. Připraveno tak, aby to byla zábava i poctivá dřina.",
      benefits: [
        "Běh + workout v intervalech",
        "Skvělá atmosféra, týmová energie",
        "Funkční síla, disciplína, výdrž",
        "Pro všechny, kdo milují výzvy"
      ],
      image: repsRunPhoto,
      imageAlt: "Kombinace běhu a silového tréninku",
      schedule: "Úterý od 16:00",
      price: "190 Kč",
      cancellation: "do 12:00 téhož dne",
      minCapacity: "Min. kapacita: 5 osob"
    },
    {
      id: "stretching",
      title: "Strečink • Mobilita • Core",
      shortTitle: "Strečink/Mobilita/Core",
      description:
        "Uvolňovací a posilovací trénink pro zdravé a funkční tělo. Vhodné pro každého, kdo chce zlepšit flexibilitu, odstranit ztuhlost a posílit střed těla.",
      whatToExpect: [
        "Protažení a rozhýbání celého těla",
        "Posílení středu těla (core)",
        "Jednoduché cviky s vlastní vahou pro lepší kontrolu těla"
      ],
      suitableFor: [
        "Začátečníky i pokročilé",
        "Každý, kdo chce začít den aktivně a cítit se dobře"
      ],
      whyCome: [
        "Načerpáš energii na celý den",
        "Zlepšíš mobilitu, držení těla a náladu"
      ],
      image: stretchingPhoto,
      imageAlt: "Stretching a mobilita - cvičení pro celé tělo",
      schedule: "Středu od 06:00",
      price: "190 Kč",
      cancellation: "do 20:00 den předem (úterý)",
      minCapacity: "Min. kapacita: 5 osob"
    }
  ];

  return (
    <section id="lekce" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold font-heading text-primary mb-8">
            Moje lekce
          </h2>
        </div>

        <div className="space-y-16 max-w-7xl mx-auto">
          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative">
                  <img
                    src={lesson.image}
                    alt={lesson.imageAlt}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-premium"
                  />
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary">{lesson.title}</h3>

                <p className="text-xl text-foreground leading-relaxed">{lesson.description}</p>

                {/* What to expect section */}
                {lesson.whatToExpect && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Co tě čeká:</h4>
                    {Array.isArray(lesson.whatToExpect) ? (
                      <ul className="text-lg text-muted-foreground space-y-1">
                        {lesson.whatToExpect.map((item: string, idx: number) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-lg text-muted-foreground">{lesson.whatToExpect}</p>
                    )}
                  </div>
                )}

                {/* Benefits section */}
                {lesson.benefits && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Hlavní benefity:</h4>
                    <ul className="text-lg text-muted-foreground space-y-1">
                      {lesson.benefits.map((benefit: string, idx: number) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Equipment section */}
                {lesson.equipment && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Co používáme:</h4>
                    <p className="text-lg text-muted-foreground">{lesson.equipment}</p>
                  </div>
                )}

                {/* Suitable for section */}
                {lesson.suitableFor && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Pro koho je lekce vhodná:</h4>
                    <ul className="text-lg text-muted-foreground space-y-1">
                      {lesson.suitableFor.map((item: string, idx: number) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Why come section */}
                {lesson.whyCome && (
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">Proč přijít:</h4>
                    <ul className="text-lg text-muted-foreground space-y-1">
                      {lesson.whyCome.map((reason: string, idx: number) => (
                        <li key={idx}>• {reason}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Organizational info */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary">{lesson.price}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">{lesson.schedule}</p>
                  <p className="text-base text-muted-foreground">{lesson.minCapacity}</p>
                  <p className="text-base text-muted-foreground">Storno: {lesson.cancellation}</p>
                </div>

                <Button
                  onClick={() => handleReservation(lesson.shortTitle)}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 text-lg shadow-primary transform hover:scale-105 transition-all duration-300 rounded-full"
                >
                  Rezervovat
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
