
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Beef, Fish, Egg, Apple, Wheat, Droplets, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Notre Offre
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Des solutions complètes d'approvisionnement adaptées aux besoins de chaque professionnel de la restauration
          </p>
        </div>

        {/* Grille 2x2 avec les 4 sections principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Viandes & Poissons */}
          <Card className="bg-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Beef className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Viandes & Poissons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-1 text-center">
              <div className="text-base text-gray-700">
                <p className="font-medium mb-3">• Bœuf en race à viande HVE et BIO</p>
                <p className="font-medium mb-3">• Porc plein air des Alpes et de la Crau HVE et BIO</p>
                <p className="font-medium mb-3">• Agneau du Lubéron et de La Crau HVE et BIO</p>
                <p className="font-medium mb-3">• Volailles Label Rouge et BIO</p>
                <p className="font-medium mb-3">• Taureau de Camargue AOP</p>
                <p className="font-medium">• Loup du Frioul BIO</p>
              </div>
            </CardContent>
          </Card>

          {/* Produits laitiers et Œufs */}
          <Card className="bg-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Produits laitiers & Œufs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-1 text-center">
              <div className="text-base text-gray-700">
                <p className="font-medium mb-3">• Fromage blanc, crème et yaourt (100g, 1kg, 5kg)</p>
                <p className="font-medium mb-3">• Fromages pasteurisés ou au lait cru à la découpe</p>
                <p className="font-medium mb-3">• Œufs 100% plein air ou BIO (coquille ou coulé)</p>
                <p className="font-medium">• Beurre, lait...</p>
              </div>
            </CardContent>
          </Card>

          {/* Fruits & Légumes */}
          <Card className="bg-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500 h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Fruits & Légumes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex-1 text-center">
              <div className="text-base text-gray-700">
                <p className="font-medium mb-3 text-green-600">De saison uniquement !</p>
                <p className="font-medium mb-3">• 1ère et 4ème gamme avec calibres adaptés</p>
                <p className="font-medium">• Récoltés à juste maturité pour vos jours de consommation</p>
              </div>
            </CardContent>
          </Card>

          {/* Épicerie */}
          <Card className="bg-accent shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-amber-500 h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Épicerie</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 text-center">
              <div className="space-y-3">
                <div className="text-base text-gray-700">
                  <p className="font-medium mb-3">• Légumineuses équitables</p>
                  <p className="font-medium mb-3">• Farines BIO, Riz de Camargue IGP</p>
                  <p className="font-medium mb-3">• Confitures, Miel IGP</p>
                  <p className="font-medium">• Conserves, Jus HVE...</p>
                </div>
              </div>
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
