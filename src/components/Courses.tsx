import { Button } from "@/components/ui/button";
import beginnersPhoto from "@/assets/beginners-course-photo.jpg";

const Courses = () => {
  const handleExternalReservation = () => {
    // Track booking click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_book', {
        lesson_name: 'Courses_Section'
      });
    }
    
    // Open external reservation link in new tab
    window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kurzy" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl opacity-60"></div>
              <img 
                src={beginnersPhoto} 
                alt="Kurz pro začátečníky - Bosu ball cvičení"
                className="relative w-full max-w-md h-[500px] object-cover rounded-3xl shadow-premium"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold font-heading text-secondary leading-tight">
              Kurzy
            </h2>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary">
                Kurz pro začátečníky
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-primary">250 Kč / lekce</span>
                </div>
                <p className="text-lg text-muted-foreground">6 týdnů, max. 6 osob</p>
              </div>
              
              <p className="text-xl leading-relaxed text-foreground">
                Začni krok po kroku. Tento kurz je určený pro všechny, kdo chtějí získat zpět kondici, 
                naučit se správně cvičit a cítit se lépe ve svém těle.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                Tréninky probíhají v menší skupině, aby byl dostatek prostoru pro individuální přístup a správnou techniku.
              </p>
            </div>
            
            <Button 
              onClick={handleExternalReservation}
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-4 text-lg shadow-primary transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              Přihlásit se na kurz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;