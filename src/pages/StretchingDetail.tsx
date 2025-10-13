import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Users, CreditCard, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const StretchingDetail = () => {
  const handleReservation = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_book', {
        lesson_name: 'Strečink • Mobilita • Core'
      });
    }
    window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
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
              🌿 Strečink • Mobilita • Core
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jemnější lekce pro tělo i mysl. Ideální pro vyvážení intenzivních tréninků a péči o své tělo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Co tě na lekci čeká */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">🌿 Co tě na lekci čeká</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Bloky na flexibilitu:</strong> Hluboké protažení hlavních svalových skupin</li>
                  <li>• <strong>Mobilita ramen:</strong> Uvolnění napětí z dlouhého sezení a práce u počítače</li>
                  <li>• <strong>Mobilita kyčlí:</strong> Zlepšení rozsahu pohybu a prevence bolesti</li>
                  <li>• <strong>Mobilita páteře:</strong> Protažení a posílení pro zdravá záda</li>
                  <li>• <strong>Core cviky:</strong> Plank, dead bug, hollow hold pro silný střed těla</li>
                  <li>• <strong>Relaxace:</strong> Klidné ukončení s hlubokým dýcháním</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro koho je vhodná */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">👥 Pro koho je lekce vhodná</h2>
                <p className="text-gray-700">
                  Pro každého, kdo chce vyvážit silové tréninky, odstranit bolest zad a být pohyblivější. 
                  Skvělé pro lidi s kancelářskou prací, sportovce i pro ty, kdo hledají klidnější formu cvičení. 
                  Vhodné pro všechny věkové kategorie - od mladých po seniory.
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
                      <li>• Uvolnění svalového napětí</li>
                      <li>• Lepší držení těla</li>
                      <li>• Prevence zranění</li>
                      <li>• Zlepšení rozsahu pohybu</li>
                      <li>• Posílení hlubokých stabilizačních svalů</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Mentální benefity:</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Klidnější mysl</li>
                      <li>• Snížení stresu</li>
                      <li>• Lepší spánek</li>
                      <li>• Mindfulness a přítomnost</li>
                      <li>• Celkové uvolnění</li>
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
                      <h4 className="font-semibold">Jemná rozcvička (10 minut)</h4>
                      <p className="text-gray-700">Postupné probuzení těla, jemné pohyby a příprava na hlubší práci</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Bloky na flexibilitu a mobilitu (35 minut)</h4>
                      <p className="text-gray-700">Systematická práce na ramenech, kyčlích, páteři s důrazem na kvalitu pohybu</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Core cviky (10 minut)</h4>
                      <p className="text-gray-700">Plank variace, dead bug, hollow hold pro silný a stabilní střed těla</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Relaxace (5 minut)</h4>
                      <p className="text-gray-700">Hluboké dýchání, finální protažení a uklidnění mysli</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Praktické tipy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">💡 Praktické tipy</h2>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold text-yellow-800 mb-2">Co si vzít s sebou:</p>
                  <ul className="space-y-1 text-yellow-700">
                    <li>• Pohodlné oblečení, ve kterém se ti dobře pohybuje</li>
                    <li>• Karimatku (pokud máš vlastní - pro větší pohodlí)</li>
                    <li>• Láhev s vodou</li>
                    <li>• Ručník (pokud se chceš cítit ještě pohodlněji)</li>
                    <li>• Otevřenou mysl a ochotu pracovat na sobě</li>
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
                        <p className="text-gray-600">Středa od 06:00</p>
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
                  <p className="text-sm text-green-600 mt-1">💳 Přijímáme MultiSport karty</p>
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
                👉 Zarezervovat další termín
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StretchingDetail;