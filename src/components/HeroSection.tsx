
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/1c0f7a3f-8d50-4114-8fa1-f64d6a5d8893.png')",
          backgroundPosition: "center 55%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Relocalisez !
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in-up font-medium text-shadow-lg" style={{animationDelay: '0.2s', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
          La solution clé en main d'approvisionnement 100% local en région Sud PACA pour les restaurateurs, depuis plus de 10 ans
        </p>
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Découvrir nos produits
          </Button>
          <img 
            src="/lovable-uploads/3c8f6a3d-67be-497f-b393-06800f4b4b47.png" 
            alt="Badge 100 valeurs du Sud" 
            className="w-28 h-28 md:w-32 md:h-32 opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
