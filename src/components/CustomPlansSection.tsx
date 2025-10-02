import { Button } from "@/components/ui/button";
import trainingPhoto2 from "@/assets/training-photo-2.jpg";

const CustomPlansSection = () => {
  return (
    <section className="min-h-screen flex">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 relative">
        <img 
          src={trainingPhoto2} 
          alt="Individuální trénink s osobním přístupem"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 bg-black text-white flex items-center">
        <div className="p-8 lg:p-16 max-w-2xl">
          <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
            Evidence-based fitness coaching
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            INDIVIDUÁLNÍ FITNESS
            <br />
            & VÝŽIVOVÉ PLÁNY
          </h2>
          
          <p className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-300">
            Individuální trénink ti umožní naprosté soustředění na tvoje cíle. 
            Společně nastavíme plán přesně podle tvých potřeb – ať už jde o hubnutí, 
            nabrání svalů, zlepšení kondice nebo zdravější záda.
          </p>
          
          <div className="mb-8">
            <div className="text-2xl font-bold text-white mb-2">450 Kč + vstup do fitness</div>
            <p className="text-gray-300">Možnost zvýhodněného balíčku: 10 tréninků / 2 měsíce</p>
          </div>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.rezervace.zeuspowerhouse.cz/Calendar', '_blank')}
            className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg rounded-none uppercase tracking-wide bg-transparent"
          >
            Rezervovat trénink
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomPlansSection;