
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const FeaturedProductsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Produits mis en avant */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/44886672-833c-4a35-9136-87e1904f657b.png" 
                  alt="Viande fraîche locale" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Viandes fraîches</h3>
                <p className="text-sm text-gray-600">De nos producteurs locaux</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/8b336d1e-d4f6-498a-8018-ebdb3bd49091.png" 
                  alt="Légumes frais de saison" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Légumes de saison</h3>
                <p className="text-sm text-gray-600">Fraîcheur garantie</p>
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
