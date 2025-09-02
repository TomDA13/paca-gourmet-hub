
import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';

const FeaturedProductsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Produits mis en avant - centrés */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/44886672-833c-4a35-9136-87e1904f657b.png" 
                    alt="Steak Haché de Taureau" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Nouveauté
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-primary text-lg">Steak Haché de Taureau</h3>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 relative">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/8b336d1e-d4f6-498a-8018-ebdb3bd49091.png" 
                    alt="Carottes de Provence" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Nouveauté
                </div>
                {/* Call to action commander - overlay transparent */}
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="text-white text-sm font-bold mb-2">COMMANDER</p>
                    <Button 
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 text-white px-3 py-1 text-xs shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => window.open('tel:+33426309540', '_self')}
                    >
                      <Phone className="mr-1 w-3 h-3" />
                      04 26 30 95 40
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-primary text-lg">Carottes de Provence</h3>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/212b7c19-2973-4da1-b68f-efd4542bac70.png" 
                    alt="Truites saumonées" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Nouveauté
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-primary text-lg">Truites saumonées</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
