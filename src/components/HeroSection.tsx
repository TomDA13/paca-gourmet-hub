
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/1c0f7a3f-8d50-4114-8fa1-f64d6a5d8893.png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up flex items-center justify-center gap-4">
          Relocalisez !
          <img 
            src="/lovable-uploads/3d0d3557-1b51-4a73-a639-33c72eaddf43.png" 
            alt="Icône localisation" 
            className="w-12 h-12 md:w-16 md:h-16"
          />
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          La solution clé en main d'approvisionnement 100% local en région Sud PACA pour les restaurateurs, depuis plus de 10 ans
        </p>
        <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Découvrir nos produits
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
