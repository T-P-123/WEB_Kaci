import heroPhoto from "@/assets/hero-photo-new.jpg";
import { EnergyIcon, HealthIcon, PracticalIcon, SafetyIcon } from "@/components/ui/icons";
import MobileStickyButton from "@/components/MobileStickyButton";

type Benefit = {
  icon: typeof EnergyIcon;
  text: string;
};

const heroBenefits: Benefit[] = [
  { icon: EnergyIcon, text: "Více energie do každého dne" },
  { icon: HealthIcon, text: "Méně bolesti a lepší držení těla" },
  { icon: PracticalIcon, text: "Praktičtější pohyb pro běžné činnosti" },
  { icon: SafetyIcon, text: "Důraz na techniku a bezpečnost" }
];

const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <div className="absolute -left-[30%] top-[-10%] hidden h-[560px] w-[560px] rounded-full bg-primary/15 blur-[220px] lg:block" />
          <div className="absolute -right-[15%] bottom-[-20%] hidden h-[620px] w-[620px] rounded-full bg-secondary/40 blur-[260px] lg:block" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] flex-col justify-center px-5 py-16 sm:px-6 lg:min-h-[80vh] lg:max-w-6xl lg:px-10 xl:max-w-7xl xl:px-0 transition-colors">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center xl:gap-20">
            <div className="order-1 space-y-8 text-center lg:text-left lg:space-y-10">
              <span className="inline-flex items-center rounded-full bg-primary/12 px-5 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Osobní trénink
              </span>
              <h1 className="text-4xl font-heading font-bold uppercase leading-[1.05] text-foreground sm:text-6xl xl:text-[3.8rem]">
                Trénuji tak, aby ti pohyb dělal život lepším.
              </h1>
              <div className="mx-auto w-full max-w-[360px] rounded-[28px] border border-white/40 bg-card/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur-sm lg:hidden">
                <div className="overflow-hidden rounded-[22px] border border-white/30">
                  <img
                    src={heroPhoto}
                    alt="Kateřina Lapáčková vede trénink"
                    className="h-[320px] w-full object-cover object-[center_40%]"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg lg:mx-0">
                Individuální tréninky, které zapadnou do tvého života. Naučíme se pracovat s tělem tak, aby mělo víc energie, méně bolesti a jistotu v každém pohybu.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:justify-items-start">
                {heroBenefits.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-2xl border border-foreground/10 bg-background/95 px-5 py-4 shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-0 hidden w-full max-w-[440px] sm:max-w-[480px] lg:order-2 lg:mx-0 lg:block lg:max-w-lg">
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-primary/18 via-background/96 to-background/98 blur-[18px] sm:hidden" aria-hidden />
              <div className="absolute -top-10 left-1/2 h-40 w-[75%] -translate-x-1/2 rounded-full bg-primary/25 blur-[70px]" aria-hidden />
              <div className="relative overflow-hidden rounded-[34px] border border-white/40 bg-card/95 shadow-[var(--shadow-premium)] backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-3 rounded-t-[34px] bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" aria-hidden />
                <div className="px-6 pt-9 pb-11 sm:px-10">
                  <div className="overflow-hidden rounded-[28px] border border-white/30 shadow-[var(--shadow-soft)]">
                    <img
                      src={heroPhoto}
                      alt="Kateřina Lapáčková vede trénink"
                      className="h-[580px] sm:h-[600px] w-full object-cover object-[center_35%] lg:object-[center_20%]"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MobileStickyButton />
    </>
  );
};

export default HeroSection;






