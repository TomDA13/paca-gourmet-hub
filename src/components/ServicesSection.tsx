
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-accent overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Notre Offre
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Des solutions complètes d'approvisionnement adaptées aux besoins de chaque professionnel de la restauration
          </p>
        </div>

        {/* Grille 2x2 avec les 4 images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Viandes & Poissons */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary h-full overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/3ea8ff4b-d03a-44e5-abf1-8048c99852bd.png" 
                alt="Viandes et Poissons frais" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary mb-2">Viandes & Poissons</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 font-medium">
                Produits frais de qualité supérieure, sélectionnés avec soin
              </p>
            </CardContent>
          </Card>

          {/* Produits laitiers et Œufs */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary h-full overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/1749ed36-1ac4-46ec-8899-4094836780b4.png" 
                alt="Produits laitiers et fromages" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary mb-2">Produits laitiers & Œufs</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 font-medium">
                Fromages artisanaux, produits laitiers frais et œufs de qualité
              </p>
            </CardContent>
          </Card>

          {/* Fruits & Légumes */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500 h-full overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/c3c893bb-e47a-4576-bf1f-1cde41dc41d9.png" 
                alt="Fruits et légumes frais de saison" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary mb-2">Fruits & Légumes</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 font-medium">
                Produits de saison, récoltés à maturité pour une fraîcheur optimale
              </p>
            </CardContent>
          </Card>

          {/* Épicerie */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-amber-500 h-full overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/fe72f7a5-fb92-4f22-919d-6a1f1c9f56fd.png" 
                alt="Épicerie fine et produits d'épicerie" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl text-primary mb-2">Épicerie</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 font-medium">
                Épices, légumineuses, farines et produits d'épicerie fine
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bouton En savoir plus */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group"
            onClick={() => {/* TODO: Navigate to services page */}}
          >
            Découvrir toute notre offre
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
