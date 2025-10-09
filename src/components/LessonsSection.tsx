import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, CreditCard, Users } from "lucide-react";

import ContactModal from "@/components/ContactModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LessonsSection = () => {
  const lessons = [
    {
      id: 1,
      name: "Ženy v pohybu",
      date: "Termíny budou brzy oznámeny",
      price: "130 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 20:00 den předem",
      status: "upcoming",
      description: "Efektivní trénink zaměřený na posílení, mobilitu, stretching a ženskou energii.",
      detailLink: "/women-in-motion-detail",
      booking_method: "form",
      booking_url: "",
      highlight: "První trénink zdarma"
    },
    {
      id: 2,
      name: "HIIT trénink",
      date: "Každou neděli 09:00 a ve středu 17:00–18:00",
      price: "190 Kč",
      capacity: "min. 4 osoby",
      cancellation: "do 20:00 den předem (sobota)",
      status: "active",
      description: "Dynamický intervalový trénink pro zlepšení kondice, síly a spalování tuků.",
      detailLink: "/hiit-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar"
    },
    {
      id: 3,
      name: "REPS & RUN",
      date: "Každé úterý 16:00",
      price: "190 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 12:00 téhož dne",
      status: "active",
      description:
        "Kombinace běhu a silových cviků inspirovaná závodním formátem Hyrox. Intenzivní trénink pro celé tělo a skvělá atmosféra!",
      detailLink: "/reps-run-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar"
    },
    {
      id: 4,
      name: "Strečink • Mobilita • Core",
      date: "Každou středu 06:00–07:00",
      price: "190 Kč",
      capacity: "min. 5 osob",
      cancellation: "do 20:00 den předem (úterý)",
      status: "active",
      description:
        "Jemnější lekce pro tělo i mysl – protažení, mobilita a posílení středu těla.",
      detailLink: "/stretching-detail",
      booking_method: "zeus",
      booking_url: "https://www.rezervace.zeuspowerhouse.cz/Calendar"
    }
  ];

  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    lessonName: string;
  }>({ isOpen: false, lessonName: "" });

  const handleReservation = (lesson: (typeof lessons)[number]) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_book", {
        lesson_name: lesson.name,
        booking_method: lesson.booking_method
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
        setContactModal({ isOpen: true, lessonName: lesson.name });
        break;
      default:
        setContactModal({ isOpen: true, lessonName: lesson.name });
        break;
    }
  };

  const handleNotifyNext = (lessonName: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "notify_next_lesson", {
        lesson_name: lessonName
      });
    }
    setContactModal({ isOpen: true, lessonName });
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
            <p className="text-lg font-semibold text-gray-900 mb-1">📍 Místo konání – skupinové lekce</p>
            <p className="text-sm text-gray-600">
              • Obrataň – tělocvična (Ženy v pohybu)
              <br />• Zeus Power House, Březinova 4690/144, 586 01 Jihlava
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-gray-100 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            <div>Lekce</div>
            <div>Termín</div>
            <div>Cena</div>
            <div>Status</div>
          </div>
          <div>
            {lessons.map((lesson) => (
              <div key={lesson.id} className="grid grid-cols-4 gap-4 p-4 border-t text-sm">
                <div className="font-medium">
                  <div>{lesson.name}</div>
                  {lesson.highlight && (
                    <div className="text-xs text-green-600 font-semibold mt-1">{lesson.highlight}</div>
                  )}
                </div>
                <div className="text-gray-600">{lesson.date}</div>
                <div className="font-semibold">{lesson.price}</div>
                <div>
                  {lesson.status === "active" ? (
                    <Badge variant="default" className="bg-green-500">Aktivní</Badge>
                  ) : lesson.status === "upcoming" ? (
                    <Badge variant="default" className="bg-blue-500">Připravujeme</Badge>
                  ) : (
                    <Badge variant="secondary">Proběhlo</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Karty lekcí */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl">{lesson.name}</CardTitle>
                  {lesson.status === "completed" ? (
                    <Badge variant="secondary">Proběhlo</Badge>
                  ) : lesson.status === "upcoming" ? (
                    <Badge variant="default" className="bg-blue-500">Připravujeme</Badge>
                  ) : (
                    <Badge variant="default" className="bg-green-500">Aktivní</Badge>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{lesson.description}</p>
                {lesson.highlight && (
                  <div className="inline-block mt-3 px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                    {lesson.highlight}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{lesson.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span className="font-semibold">{lesson.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{lesson.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>Storno: {lesson.cancellation}</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg mt-4">
                  <p className="text-sm font-medium text-green-800">📍 Místo konání</p>
                  <p className="text-sm text-green-700">
                    {lesson.id === 1
                      ? "Obrataň – tělocvična (Sportovní hala, Obrataň 163, 394 12 Obrataň)"
                      : "Zeus Power House, Březinova 4690/144, 586 01 Jihlava"}
                  </p>
                </div>

                {lesson.id !== 1 && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">✅ Přijímáme MultiSport karty</p>
                  </div>
                )}

                <div className="pt-4">
                  <div className="space-y-3">
                    {lesson.detailLink && (
                      <Link to={lesson.detailLink}>
                        <Button className="w-full bg-muted text-foreground hover:bg-muted/80 font-semibold py-3">
                          Více info
                        </Button>
                      </Link>
                    )}
                    {lesson.id === 1 && lesson.detailLink && (
                      <Button
                        onClick={() => handleReservation(lesson)}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
                      >
                        Rezervovat
                      </Button>
                    )}
                    {lesson.id !== 1 && lesson.status === "active" && (
                      <Button
                        onClick={() => handleReservation(lesson)}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
                      >
                        {getButtonText(lesson)}
                      </Button>
                    )}
                    {lesson.status !== "active" && lesson.id !== 1 && (
                      <Button
                        variant="outline"
                        onClick={() => handleNotifyNext(lesson.name)}
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3"
                      >
                        Zaslat info o příštím termínu
                      </Button>
                    )}
                  </div>
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
