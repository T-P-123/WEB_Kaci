import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Jsem úplný začátečník. Mohu se zúčastnit?",
      answer: "Určitě! Moje lekce jsou navržené pro všechny úrovně. Vždy ti ukážu alternativy cviků podle tvých možností a postupně tě provedu k pokročilejším technikám. Neboj se být začátečník – všichni jsme někdy začínali."
    },
    {
      id: "item-2", 
      question: "Mám problémy se zády. Je to pro mě vhodné?",
      answer: "Ano, ale nejdříve si promluvíme o tvých problémech. Mnoho cviků může naopak pomoct posílit záda a zlepšit držení těla. Vždy přizpůsobím trénink tvým potřebám a omezením. Doporučuji začít individuální konzultací."
    },
    {
      id: "item-3",
      question: "Co si mám vzít s sebou na první trénink?",
      answer: "Stačí pohodlné sportovní oblečení, čistá sportovní obuv a láhev na vodu. Veškeré vybavení (činky, podložky, gumy) mám připravené. Pokud máš vlastní podložku nebo ručník, můžeš si je samozřejmě přinést."
    },
    {
      id: "item-4",
      question: "Jak funguje storno a platby?",
      answer: "Lekci můžeš zrušit až 24 hodin předem bez poplatku (u stretching lekcí 2 hodiny předem). Platit lze hotově na místě, převodem nebo kartou. Pro pravidelné klienty nabízím měsíční permanentky se slevou."
    },
    {
      id: "item-5",
      question: "Jak probíhá první trénink?",
      answer: "První trénink začíná krátkým rozhovorem o tvých cílech a případných omezeních. Pak si zkusíme základní cviky, abych viděla tvou úroveň a mohla přizpůsobit další tréninky. Je to spíš seznamovací hodina, takže se neboj – nebude to brutální!"
    },
    {
      id: "item-6",
      question: "Nabízíš také online koučink?",
      answer: "Ano! Kromě osobních tréninků nabízím i online konzultace, vypracování tréninkových plánů a pravidelné online koučinkové call. Je to skvělá volba, pokud nemůžeš dojíždět nebo chceš kombinovat osobní a online přístup."
    },
    {
      id: "item-7",
      question: "Kolik času potřebuji, abych viděla výsledky?",
      answer: "Každý je jiný, ale většina klientů cítí první pozitivní změny už po 2-3 týdnech pravidelného tréninku – větší energii, lepší náladu, zlepšení kondice. Viditelné fyzické změny přicházejí obvykle po 6-8 týdnech."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ČASTO KLADENÉ OTÁZKY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpovědi na nejčastější dotazy o tréninku a mých službách. Pokud nenajdeš odpověď, 
            neváhej mi napsat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="bg-white rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;