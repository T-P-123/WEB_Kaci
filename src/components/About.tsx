import aboutPhoto1 from "@/assets/about-photo-1.jpg";

const About = () => {
  return (
    <>
      {/* Delší verze - detailní stránka O mně */}
      <section id="o-mne" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8">O mně</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src={aboutPhoto1}
                  alt="Kačí – trenérka"
                  className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                />
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-foreground">
                    Ahoj, já jsem Kačí.
                  </p>

                  <p className="text-xl leading-relaxed text-foreground">
                    Sport je pro mě víc než jen trénink – je to vášeň, která mě provází už od příprav na přijímačky na
                    policejní školu. Od té doby jsem si vyzkoušela závodní plavání, půlmaratony i posilování, ale nejvíc mě
                    nakonec pohltil CrossFit.
                  </p>

                  <p className="text-xl leading-relaxed text-foreground">
                    Ten mě naučil nejen síle a vytrvalosti, ale hlavně tomu, že síla je v odvaze – udělat krok vpřed,
                    překonat sama sebe a posouvat vlastní hranice.
                  </p>

                  <p className="text-xl leading-relaxed text-foreground">
                    Postupem času jsem si ale uvědomila, že klíčem je balanc. Ať už jde o jakýkoli sport, rovnováha mezi
                    výkonem, regenerací a radostí z pohybu je pro mě zásadní.
                  </p>

                  <p className="text-xl leading-relaxed text-foreground">
                    Nejsem vrcholový sportovec, ale umím své tělo zapojit naplno – ať už při běhu, plavání nebo silovém
                    tréninku. Právě ta pestrost a svoboda v pohybu mě na tom baví nejvíc.
                  </p>

                  <p className="text-xl leading-relaxed text-foreground">
                    Tréninky proto vnímám jako prostor, kde nejde jen o svaly a výkon. Jsou o energii, lepším zdraví, radosti
                    z každého malého posunu – a o tom, cítit se silně nejen fyzicky, ale i v hlavě.
                  </p>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
                  <p className="text-3xl font-bold">„Síla je v odvaze”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
