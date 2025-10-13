import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Users, CreditCard, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const HIITDetail = () => {
  const handleReservation = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: "HIIT trénink"
      });
    }

    window.open(
      "https://www.rezervace.zeuspowerhouse.cz/Calendar",
      "_blank",
      "noopener,noreferrer"
    );
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">⚡ HIIT trénink</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tahle lekce je pro tebe, pokud hledáš rychlé výsledky a energii na celý den.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Pro koho je vhodná */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🙋‍♀️ Pro koho je lekce vhodná</h2>
                <p className="text-gray-700">
                  Pro začátečníky i pokročilé – každý si nastaví vlastní intenzitu podle svých možností.
                  Vhodné pro muže i ženy, kteří chtějí zlepšit kondici a spálit kalorie v krátkém čase.
                  Pokud máš nějaká omezení, vždy ti ukážu alternativní varianty cviků.
                </p>
              </CardContent>
            </Card>

            {/* Benefity */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">💪 Jaké benefity ti přinese</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Fyzické benefity:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Rychlé spalování tuků</li>
                      <li>• Zlepšení kardiovaskulární kondice</li>
                      <li>• Posílení svalů celého těla</li>
                      <li>• Zvýšení síly a výbušnosti</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Mentální benefity:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Psychická odolnost</li>
                      <li>• Uvolnění stresu</li>
                      <li>• Pocit úspěchu a energie</li>
                      <li>• Zlepšení nálady</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jak lekce probíhá */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">📋 Jak lekce probíhá krok za krokem</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Rozcvička (10 minut)</h4>
                      <p className="text-gray-700">Postupné rozehřátí kloubů, aktivace svalů a příprava na hlavní část.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Hlavní intervalový blok (35 minut)</h4>
                      <p className="text-gray-700">Střídání vysoké intenzity (30–45 s) s aktivním odpočinkem (15–30 s).</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Závěrečné protažení (10 minut)</h4>
                      <p className="text-gray-700">Uvolnění svalů, zklidnění tepu a mentální uvolnění.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Praktické tipy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">📝 Praktické tipy</h2>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-800 mb-2">Co si vzít s sebou:</p>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Ručník – zapotíš se pořádně, ale ten pocit stojí za to</li>
                    <li>• Láhev s vodou – hydratace je klíčová</li>
                    <li>• Pohodlné sportovní oblečení</li>
                    <li>• Čisté sportovní boty s dobrou oporou</li>
                  </ul>
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
                        <p className="text-gray-600">Středa od 17:00 a neděle od 9:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Cena</p>
                        <p className="text-gray-600">190 Kč</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Kapacita</p>
                        <p className="text-gray-600">Min. 4 osoby</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-800">📍 Místo konání:</p>
                  <p className="text-green-700">Zeus Power House, Březinova 4690/144, 586 01 Jihlava</p>
                  <p className="text-sm text-green-600 mt-1">✅ Přijímáme MultiSport karty</p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center py-8">
              <Button
                onClick={handleReservation}
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-bold text-lg px-12 py-6"
              >
                Rezervovat si své místo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HIITDetail;
