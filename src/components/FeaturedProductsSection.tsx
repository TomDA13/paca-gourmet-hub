
import { Button } from '@/components/ui/button';
import { Phone, Sparkles } from 'lucide-react';

const FeaturedProductsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Produits mis en avant */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
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
              <div>
                <h3 className="font-semibold text-primary text-lg">Steak Haché de Taureau</h3>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
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
              </div>
              <div>
                <h3 className="font-semibold text-primary text-lg">Carottes de Provence</h3>
              </div>
            </div>
          </div>

          {/* Call to action commander */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-right">
              <p className="text-lg font-semibold text-primary">Commandez maintenant</p>
              <p className="text-sm text-gray-600">Livraison rapide en région Sud</p>
            </div>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open('tel:+33426309540', '_self')}
            >
              <Phone className="mr-2 w-4 h-4" />
              04 26 30 95 40
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
