import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CreditCard, Users, MapPin } from "lucide-react";

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const WomenInMotionDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Back button */}
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold lg:text-6xl">🌸 Ženy v pohybu</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Pohyb, který posílí tělo, uvolní mysl a dopřeje ti čas jen pro sebe
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* Co tě na lekci čeká */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">🌼 Co tě na lekci čeká</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>🌿 Plynulé zahřátí a jemné protažení celého těla</li>
                  <li>💪 Posílení středu těla, zad a nohou bez skákání a nárazů</li>
                  <li>🔥 Kardio a dynamika svižnější část s lehkými skoky a tempem, která tě nabije energií</li>
                  <li>🤍 Uvolnění a krátké sdílení na závěr</li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro koho je lekce vhodná */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">👭 Pro koho je lekce vhodná</h2>
                <p className="text-gray-700">
                 Pro všechny ženy, které chtějí rozhýbat tělo v bezpečném tempu, posílit svaly bez tlaku na výkon a dopřát si čas jen pro sebe.Lekce je otevřená začátečnicím i pokročilým každá část má jednodušší i náročnější variantu.Pokud máš zdravotní omezení nebo otázky, společně najdeme vhodné úpravy
                </p>
              </CardContent>
            </Card>

            {/* Benefity */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">✨ Jaké benefity ti lekce přinese</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 font-semibold text-primary">💪 Tělo</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>🌟 Lepší držení těla a pevnější střed</li>
                      <li>🌀 Větší mobilita kyčlí, ramen i páteře</li>
                      <li>💆‍♀️ Uvolnění napětí a snížení bolestí zad</li>
                      <li>⚡ Více energie pro běžný den</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-primary">🧠 Mysl</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>🤝 Sdílení v podporující komunitě žen</li>
                      <li>🫶 Lepší vnímání vlastního těla</li>
                      <li>⏳ Čas pro sebe bez spěchu</li>
                      <li>😊 Příjemná nálada po každé lekci</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jak lekce probíhá */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">🧘‍♀️ Jak lekce probíhá krok za krokem</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Pomalé probuzení těla (10 minut)</h4>
                      <p className="text-gray-700">Jemné mobilizační cviky a aktivace středu těla.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Posilovací část (15-20 minut)</h4>
                      <p className="text-gray-700">
            
           <p className="text-gray-700"></p>Funkční cviky s vlastní vahou pro rozvoj sílya stability</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Cardio a dynamika (15 minut)</h4>
                      <p className="text-gray-700">Dynamický blok s lehkými skoky a tempem, který rozproudí krev a přidá energii.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Zklidnění a sdílení (10 minut)</h4>
                      <p className="text-gray-700">Krátká relaxace, dech a prostor pro otázky nebo sdílení pocitů.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Praktické tipy */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">👜 Praktické tipy</h2>
                <div className="rounded-lg bg-yellow-50 p-4">
                  <p className="mb-2 font-semibold text-yellow-800">Co si vzít s sebou:</p>
                  <ul className="space-y-1 text-yellow-700">
                    <li>🧘‍♀️ Karimatku nebo podložku</li>
                    <li>👚 Pohodlné oblečení, ve kterém se cítíš dobře</li>
                    <li>💧 Láhev s vodou</li>
                    <li></li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Organizační informace */}
            <Card>
              <CardContent className="p-8">
                <h2 className="mb-4 text-2xl font-bold">📌 Organizační informace</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Termín</p>
                        <p className="text-gray-600">Čtvrtek od 18:00 a sobota od 17:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Cena</p>
                        <p className="text-gray-600">130 Kč / lekce</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold">Kapacita</p>
                        <p className="text-gray-600">Min. 5 osob</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-emerald-50 p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-emerald-800">Místo konání</p>
                      <p className="text-emerald-700">
                        Tělocvična Obrataň (Sportovní hala, Obrataň 163, 394 12 Obrataň)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WomenInMotionDetail;
