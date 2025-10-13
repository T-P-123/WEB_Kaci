import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import lessonPhoto1 from "@/assets/hiit-training-photo.jpg";
import repsRunPhoto from "@/assets/reps-run-photo-new.jpg";
import stretchingPhoto from "@/assets/stretching-photo-new.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: stretchingPhoto,
      title: "Strečink • Mobilita • Core",
      description:
        "Uvolňovací a posilovací trénink pro zdravé a funkční tělo. Vhodné pro každého, kdo chce zlepšit flexibilitu, odstranit ztuhlost a posílit střed těla.",
      buttonText: "Zjistit více",
      price: "190 Kč",
      schedule: "Každou středu 06:00–07:00"
    },
    {
      image: lessonPhoto1,
      title: "HEAT (HIIT trénink)",
      description:
        "Vysoce intenzivní intervalový trénink, který kombinuje praktické cviky a pomáhá zlepšit kondici, sílu i vytrvalost. Efektivní forma cvičení vhodná pro každého, kdo se chce cítit silnější a mít více energie do běžného života.",
      buttonText: "Zjistit více",
      price: "190 Kč",
      schedule: "Každou neděli 09:00 a středu 17:00–18:00"
    },
    {
      image: repsRunPhoto,
      title: "REPS & RUN",
      description:
        "Kombinace běhu a silově-kondičních bloků. Přesně ten typ tréninku, kde se spálí kalorie, zvýší tep a posouvají limity. Skvělé pro ty, kdo milují výzvy a týmovou atmosféru.",
      buttonText: "Zjistit více",
      price: "190 Kč",
      schedule: "Každé úterý 16:00"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gray-100 flex items-center py-20">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[12rem] lg:text-[20rem] font-black text-white/20 select-none whitespace-nowrap">
          MOVEMENT CORE
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-gray-600 mb-4">Personalized workout plans</div>
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8">MOJE LEKCE</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nabízím různé typy tréninků přizpůsobených vašim cílům a úrovni zdatnosti. Od intenzivních HIIT tréninků až po
            relaxační stretching – najdete si to své.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg overflow-hidden">
              <div className="aspect-square">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                <div className="mb-4">
                  <div className="text-lg font-bold text-black">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.schedule}</div>
                </div>

                <Button
                  variant="outline"
                  onClick={() => window.open("https://www.rezervace.zeuspowerhouse.cz/Calendar", "_blank")}
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-6 py-3 rounded-none uppercase tracking-wide bg-transparent"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => window.open("https://www.rezervace.zeuspowerhouse.cz/Calendar", "_blank")}
            className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 text-lg rounded-none uppercase tracking-wide"
          >
            Rezervovat lekci
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
