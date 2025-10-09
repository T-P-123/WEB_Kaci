import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CreditCard, Users } from "lucide-react";

import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WomenInMotionDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReservation = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: "Ženy v pohybu"
      });
    }

    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zpět na hlavní stránku
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">👩‍🦰 Ženy v pohybu</h1>
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800 mb-1">📍 Místo konání</p>
              <p className="text-gray-700">
                Obrataň – tělocvična (Sportovní hala, Obrataň 163, 394 12 Obrataň)
              </p>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">130 Kč / lekce</div>
            <p className="text-green-600 font-semibold mb-1">První trénink zdarma</p>
            <p className="text-gray-600">Min. 5 osob</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Motivační popis */}
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Přijď si užít hodinu pohybu, která ti dodá sílu a dobrou náladu. Chci ti pomoci rozhýbat tělo a
                  načerpat novou energii – hodinu jen pro tebe, bez tlaku na výkon, s jednoduchým cvičením a v partě žen,
                  které se vzájemně podporují.
                </p>
              </CardContent>
            </Card>

            {/* Jak lekce probíhá */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🧘 Jak vypadá lekce (60 minut)</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Rozhýbání a protažení</h4>
                      <p className="text-gray-700">Příjemný začátek, kdy tělo nastartuješ.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Posilovací část</h4>
                      <p className="text-gray-700">Jednoduché, bezpečné cviky bez skákání zaměřené na nohy, záda a střed těla.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Kondiční blok</h4>
                      <p className="text-gray-700">Krátký blok, kde se trochu zadýcháš a zlepšíš kondici – vždy jsou k dispozici lehčí i náročnější varianty.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Malý bonus</h4>
                      <p className="text-gray-700">Na závěr může přijít něco navíc, co nás propojí – krátká výzva nebo sdílení.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Protažení a uvolnění</h4>
                      <p className="text-gray-700">Zklidnění těla i mysli, odcházíš s lehkostí a dobrou náladou.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shrnutí */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">✨ Krátce</h2>
                <div className="bg-yellow-50 p-6 rounded-lg text-center">
                  <p className="text-lg font-medium text-yellow-800">
                    🙌 Na lekci se rozhýbeš, posílíš celé tělo, zlepšíš kondici a odcházíš s úsměvem a energií do dalších
                    dnů. 🌟
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Organizační informace */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🗓️ Organizační informace</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Termín</p>
                        <p className="text-gray-600">Termíny budou brzy oznámeny</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">💳 Cena</p>
                        <p className="text-gray-600 text-lg font-bold">130 Kč / lekce</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Kapacita</p>
                        <p className="text-gray-600">Min. 5 osob</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Storno podmínky</p>
                        <p className="text-gray-600">Do 20:00 den předem</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">📍 Místo konání:</p>
                  <p className="text-green-700">
                    Obrataň – tělocvična (Sportovní hala, Obrataň 163, 394 12 Obrataň)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Button
                onClick={handleReservation}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-12 py-6"
              >
                🙌 Rezervovat lekci
              </Button>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <p>
                  Nebo napiš přímo na:{" "}
                  <a
                    href="mailto:katarina.lapackova@seznam.cz?subject=Rezervace%20-%20Ženy%20v%20pohybu"
                    className="text-primary hover:underline"
                  >
                    katarina.lapackova@seznam.cz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lessonName="Ženy v pohybu"
        type="lesson"
      />
    </div>
  );
};

export default WomenInMotionDetail;
