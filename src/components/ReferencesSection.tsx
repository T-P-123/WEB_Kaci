import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReferencesSection = () => {
  const references = [
    {
      id: 1,
      text: "S Kačí jsem za 3 měsíce dosáhla toho, co jsem roky nezvládla sama. Konečně mám ráda pohyb!",
      author: "Anna K.",
      age: "28 let"
    },
    {
      id: 2,
      text: "Díky individuálnímu přístupu jsem překonala problémy se zády. Kačí ví, co dělá.",
      author: "Pavel M.",
      age: "42 let"
    },
    {
      id: 3,
      text: "Nejlepší rozhodnutí byla začít trénovat s Kačí. Cítím se silnější a energičtější než kdy dřív.",
      author: "Martina S.",
      age: "35 let"
    },
  ];

  return (
    <section id="reference" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            CO ŘÍKAJÍ MOJI KLIENTI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nejlepší odměnou za mou práci jsou spokojení klienti, kteří objevili radost z pohybu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((reference) => (
            <Card key={reference.id} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{reference.text}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 mr-4">
                    {reference.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{reference.author}</div>
                    <div className="text-sm text-gray-500">{reference.age}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;