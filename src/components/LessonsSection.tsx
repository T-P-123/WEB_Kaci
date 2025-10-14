import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, CreditCard, Users, MapPin } from "lucide-react";

import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LessonsSection = () => {
  const lessons = [
    {
      id: 1,
      name: "Ženy v pohybu",
      emoji: "🌸",
      date: "Čtvrtek od 18:00 a sobota od 17:00",
      price: "130 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 20:00 den předem",
      description: "Efektivní trénink zaměřený na posílení středu těla, mobilitu a pružnost.Pomůže ti zpevnit postavu, rozhýbat tělo a cítit se silněji i sebevědoměji",
      detailLink: "/women-in-motion-detail",
      booking_method: "form",
      booking_url: "",
      descriptionSpacing: "30px",
      whatsappLink: "https://chat.whatsapp.com/GHHcRaLBN5C6irZ39sxIof?mode=wwt",
      whatsappMessage: "Ahoj, rada bych si rezervovala lekci Zeny v pohybu.",
    },
    {
      id: 2,
      name: "HIIT trénink",
      emoji: "🔥",
      date: "Středa od 17:00 a neděle od 09:00",
      price: "190 Kč",
      capacity: "min. 4 osoby",
      cancellation: "do 20:00 den předem (sobota)",
      description: "Dynamický trénink zaměřený na zlepšení kondice, síly a spalování tuků. Každý trénink je jiný rychlý, intenzivní a vždy plný energie.",
      detailLink: "/hiit-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar",
      descriptionSpacing: "30px",
    },
    {
      id: 3,
      name: "REPS & RUN",
      emoji: "🏃‍♀️",
      date: "Úterý od 16:00",
      price: "190 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 12:00 téhož dne",
      description:
        "Kombinace běhu a silových cviků inspirovaná závodním formátem Hyrox. Intenzivní trénink pro celé tělo který posílí fyzičku, spálí kalorie a dodá skvělou energii.",
      detailLink: "/reps-run-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar",
      descriptionSpacing: "30px",
    },
    {
      id: 4,
      name: "Strečink • Mobilita • Core",
      emoji: "🧘‍♀️",
      date: "Středa od 06:00",
      price: "190 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 20:00 den předem (úterý)",
      description: "Komplexní lekce zaměřená na mobilitu, protažení a posílení středu těla. Pomůže ti zlepšit držení, uvolnit napětí a cítit se lehčeji v každém pohybu.",
      detailLink: "/stretching-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar",
      descriptionSpacing: "30px",
    },
  ];

  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    lessonName: string;
  }>({ isOpen: false, lessonName: "" });

  const handleReservation = (lesson: (typeof lessons)[number]) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: lesson.name,
        booking_method: lesson.booking_method,
      });
    }

    switch (lesson.booking_method) {
      case "zeus":
      case "external":
        window.open(lesson.booking_url, "_blank", "noopener,noreferrer");
        break;
      case "email":
        window.location.href = `mailto:${lesson.booking_url}?subject=Rezervace lekce: ${lesson.name}`;
        break;
      case "form":
      default:
        setContactModal({ isOpen: true, lessonName: lesson.name });
        break;
    }
  };

  const handleWhatsAppReservation = (lesson: (typeof lessons)[number]) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: lesson.name,
        booking_method: "whatsapp",
      });
    }

    const whatsappBase = lesson.whatsappLink || "https://wa.me/420734439196";
    const message = encodeURIComponent(
      lesson.whatsappMessage || `Ahoj, rada bych si rezervovala lekci ${lesson.name}.`,
    );

    window.open(`${whatsappBase}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const getButtonText = (lesson: (typeof lessons)[number]) => {
    switch (lesson.booking_method) {
      case "zeus":
        return "Rezervovat online (Zeus)";
      case "external":
        return "Rezervovat online";
      case "email":
        return "Napsat trenérce";
      case "form":
        return "Rezervovat u trenérky";
      default:
        return "Rezervovat";
    }
  };

  return (
    <section id="moje-lekce" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">MOJE LEKCE</h2>
          <div className="bg-gray-100 p-4 rounded-lg inline-block">
            <p className="text-lg font-semibold text-gray-900 mb-1">📍 Místo konání - skupinové lekce</p>
            <p className="text-sm text-gray-600">
              • Obrataň – sportovní hala
              <br />• Jihlava - Zeus Power House
            </p>
          </div>
        </div>

        <div className="relative mb-16">
    
          <div className="rounded-[28px] border border-primary/10 bg-white/95 shadow-sm backdrop-blur-sm overflow-hidden">
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-4 px-6 py-6 bg-primary/10 text-base font-semibold uppercase tracking-[0.2em] text-foreground text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary/80" />
                Lekce
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary/60" />
                Termín
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary/40" />
                Místo
              </div>
            </div>
            <div className="divide-y divide-border/60">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-4 px-6 py-4 text-sm text-foreground/80 text-center"
                >
                  <div className="font-semibold text-foreground">{lesson.name}</div>
                  <div className="text-foreground/70">{lesson.date}</div>
                  <div className="text-foreground/70">{lesson.id === 1 ? "Obrataň" : "Jihlava"}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-secondary/70 to-primary/60" />
              <CardHeader className="space-y-3 pb-0 pt-6">
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    <span className="mr-2 text-3xl leading-none">{lesson.emoji}</span>
                    <span>{lesson.name}</span>
                  </CardTitle>
                  <p
                    className="text-base text-muted-foreground"
                    style={{ marginTop: lesson.descriptionSpacing ?? "0.5rem" }}
                  >
                    {lesson.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-6 pb-6 pt-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/5 text-primary">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Termín</p>
                      <p className="text-sm font-medium text-foreground">{lesson.date}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 px-4 py-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Cena</p>
                        <p className="text-sm font-medium text-foreground">{lesson.price}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-border/80 bg-muted/40 px-4 py-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/5 text-primary">
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Kapacita</p>
                        <p className="text-sm font-medium text-foreground">{lesson.capacity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 px-4 py-3 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-900">Místo konání</p>
                        <p className="text-sm text-emerald-800">
                          {lesson.id === 1
                            ? "Obrataň – tělocvična (Sportovní hala, Obrataň 163, 394 12 Obrataň)"
                            : "Zeus Power House, Březinova 4690/144, 586 01 Jihlava"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {lesson.id !== 1 && (
                    <div className="flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50/70 px-4 py-3 shadow-sm">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                        🎫
                      </div>
                      <p className="text-sm font-semibold text-blue-900">Přijímáme MultiSport karty</p>
                    </div>
                  )}
                </div>

                <div className="mt-auto space-y-3 pt-2">
                  {lesson.detailLink && (
                    <Link to={lesson.detailLink}>
                      <Button className="w-full rounded-2xl border border-border bg-muted/60 py-3 font-semibold text-foreground transition-colors hover:bg-muted">
                        Více info
                      </Button>
                    </Link>
                  )}
                  {lesson.whatsappLink ? (
                    <Button
                      onClick={() => handleWhatsAppReservation(lesson)}
                      className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      Rezervovat (WhatsApp)
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleReservation(lesson)}
                      className="w-full rounded-2xl bg-primary py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      {getButtonText(lesson)}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={() => setContactModal({ isOpen: false, lessonName: "" })}
        lessonName={contactModal.lessonName}
        type="lesson"
      />
    </section>
  );
};

export default LessonsSection;
