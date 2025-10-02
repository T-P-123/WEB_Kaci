import aboutPhoto1 from "@/assets/about-photo-1.jpg";

const About = () => {
  return (
    <>
      {/* Dlouhá verze - detailní stránka O mně */}
      <section id="o-mne" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8">
                O mně
              </h2>
            </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-foreground">
                    Ahoj, jsem Kačí a sport je pro mě víc než jen pohyb – je to vášeň, která mě provází už roky. Začalo to během příprav na přijímačky na policejní školu a od té doby se moje cesta pořádně rozjela.
                  </p>
                  
                  <p className="text-xl leading-relaxed text-foreground">
                    Vyzkoušela jsem závodní plavání, půlmaratony i posilování, ale nejvíc mě nakonec pohltil CrossFit. Naučil mě nejen síle a vytrvalosti, ale hlavně tomu, že síla je v odvaze – udělat krok vpřed, překonat sama sebe a posouvat hranice.
                  </p>
                  
                  <p className="text-xl leading-relaxed text-foreground">
                    Tréninky vnímám jako prostor, kde nejde jen o svaly a výkon. Jsou o radosti, energii, lepším zdraví a dobrém pocitu z každého malého posunu. Mám radost, když můžu ostatním ukázat, že sport nemusí být dřina, ale i zábava a čas jen pro sebe. Ať už začínáš, nebo už máš zkušenosti, věřím, že každý si může najít cestu k pohybu a cítit se ve svém těle skvěle.
                  </p>
                </div>
                
                <div className="bg-primary text-primary-foreground p-8 rounded-2xl text-center">
                  <p className="text-3xl font-bold">
                    „Síla je v odvaze"
                  </p>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;