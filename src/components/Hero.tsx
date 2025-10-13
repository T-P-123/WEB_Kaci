import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-photo-new.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Professional geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} className="w-full h-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-primary">
                Síla je v odvaze
              </h1>
              
              <p className="text-xl lg:text-2xl leading-relaxed text-foreground/80 max-w-2xl">
                Tréninky beru jako cestu k lepší náladě, síle a sebevědomí. A tuhle cestu ti chci ukázat taky.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => {
                  // Track booking click event
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click_book', {
                      lesson_name: 'Hero_Button'
                    });
                  }
                  // Open external reservation link in new tab
                  window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
                }}
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 text-lg shadow-lg transform hover:scale-[1.02] transition-all duration-200 rounded-lg"
              >
                Rezervovat lekci
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('kontakt')}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg transform hover:scale-[1.02] transition-all duration-200 rounded-lg"
              >
                Více informací
              </Button>
            </div>
          </div>

          {/* Image - Professional layout */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Professional image container */}
              <div className="bg-background border border-border shadow-xl rounded-lg overflow-hidden">
                <img 
                  src={heroPhoto} 
                  alt="Kačí - certifikovaná osobní trenérka"
                  className="w-full h-[500px] lg:h-[580px] object-cover"
                />
              </div>
              {/* Subtle accent */}
              <div className="absolute -inset-1 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-12 bg-foreground/20 relative">
          <div className="absolute bottom-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;