import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Users, CreditCard, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const RepsRunDetail = () => {
  const handleReservation = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_book', {
        lesson_name: 'REPS & RUN'
      });
    }

    window.open(
      'https://www.rezervace.zeuspowerhouse.cz/Calendar',
      '_blank',
      'noopener,noreferrer'
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              🏃‍♀️ REPS & RUN
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kombinace běhu a silových bloků, která prověří tvoji kondici i vůli.Rychlé tempo, spousta energie a skvělá atmosféra.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Co tě na lekci čeká */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🏅 Co tě na lekci čeká</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Běžecké úseky:</strong> Střídání krátkých úseků v různých intenzitách</li>
                  <li>• <strong>Dřepy a výpady:</strong> Posílení spodní části těla</li>
                  <li>• <strong>Cviky s jednoručkami:</strong> Funkční síla pro celé tělo</li>
                  <li>• <strong>Komplexní kondice:</strong> Spojení běhu a silových prvků</li>
                  <li>• <strong>Atmosféra Hyrox:</strong> Přátelské prostředí a motivace k výkonu</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro koho je vhodná */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🤝 Pro koho je lekce vhodná</h2>
                <p className="text-gray-700">
                  Pro všechny, kdo chtějí výzvu a nebojí se kombinace běhu a posilování. Vhodné pro muže i ženy
                  s alespoň základní kondicí. Pokud jsi začátečník, můžeš upravit vzdálenosti a intenzitu.
                  Inspirováno závody Hyrox.
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
                      <li>• Vytrvalost a kardiovaskulární fitness</li>
                      <li>• Funkční síla celého těla</li>
                      <li>• Rychlost a agilita</li>
                      <li>• Spalování velkého množství kalorií</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Mentální benefity:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Odolnost vůči únavě</li>
                      <li>• Překonávání vlastních limitů</li>
                      <li>• Týmový duch a motivace</li>
                      <li>• Pocit úspěchu po dokončení</li>
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
                      <h4 className="font-semibold">Warm-up (10 minut)</h4>
                      <p className="text-gray-700">Dynamické zahřátí, lehký běh </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Hlavní blok – série běhu a cviků (40 minut)</h4>
                      <p className="text-gray-700">Střídání běžeckých úseků s funkčními cviky jako lunges, wall balls a kettlebell swings a dalších </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Cool-down (10 minut)</h4>
                      <p className="text-gray-700">Protažení pro lepší regeneraci</p>
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
                    <li>• Lehká běžecká obuv s dobrou oporou</li>
                    <li>• Dostatek vody</li>
                    <li>• Pohodlné sportovní oblečení</li>
                    <li>• Ručník na pot</li>
                    <li>• Dobrou náladu</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Organizační informace */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">📅 Organizační informace</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">Termín</p>
                        <p className="text-gray-600">Úterý od 16:00</p>
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
                        <p className="text-gray-600">Min. 5 osob</p>
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
                Chci se přidat
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RepsRunDetail;
