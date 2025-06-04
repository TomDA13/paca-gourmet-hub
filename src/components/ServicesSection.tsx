
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Beef, Fish, Egg, Apple, Wheat, Droplets } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-bl from-white via-gray-50 to-accent/30 overflow-hidden">
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

        {/* Grille des catégories de produits */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {/* Viandes & Poissons */}
          <Card className="bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Beef className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Viandes & Poissons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-2">• Bœuf en race à viande HVE et BIO</p>
                <p className="font-medium mb-2">• Porc plein air des Alpes et de la Crau HVE et BIO</p>
                <p className="font-medium mb-2">• Agneau du Lubéron et de La Crau HVE et BIO</p>
                <p className="font-medium mb-2">• Volailles Label Rouge et BIO</p>
                <p className="font-medium mb-2">• Taureau de Camargue AOP</p>
                <p className="font-medium">• Loup du Frioul BIO</p>
              </div>
            </CardContent>
          </Card>

          {/* Produits laitiers et Œufs */}
          <Card className="bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Produits laitiers & Œufs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-2">• Fromage blanc, crème et yaourt (100g, 1kg, 5kg)</p>
                <p className="font-medium mb-2">• Fromages pasteurisés ou au lait cru à la découpe</p>
                <p className="font-medium mb-2">• Œufs 100% plein air ou BIO (coquille ou coulé)</p>
                <p className="font-medium">• Beurre, lait...</p>
              </div>
            </CardContent>
          </Card>

          {/* Fruits & Légumes */}
          <Card className="bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Apple className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Fruits & Légumes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-2 text-green-600">De saison uniquement !</p>
                <p className="font-medium mb-2">• 1ère et 4ème gamme avec calibres adaptés</p>
                <p className="font-medium">• Récoltés à juste maturité pour vos jours de consommation</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Et aussi */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl shadow-lg border border-white/20 mb-16">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Wheat className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Et aussi...</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Légumineuses</h4>
              <p className="text-sm text-gray-600">Équitables</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Farines & Céréales</h4>
              <p className="text-sm text-gray-600">Farines BIO, Riz de Camargue IGP, Semoules/pâtes BIO</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Épicerie Fine</h4>
              <p className="text-sm text-gray-600">Confitures au chaudron, Tartinables, Miel IGP et Label Rouge</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Conserves & Jus</h4>
              <p className="text-sm text-gray-600">Conserves, Jus HVE...</p>
            </div>
          </div>
        </div>

        {/* Process de Livraison */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl shadow-lg border border-white/20">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Process de Livraison
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg bg-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md text-lg">1</div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Commande & Planning</h4>
                <p className="text-gray-600 text-sm">Plateforme en ligne ou contact commercial dédié</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg bg-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md text-lg">2</div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Préparation & Conditionnement</h4>
                <p className="text-gray-600 text-sm">Respect de la chaîne du froid et normes HACCP</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg bg-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md text-lg">3</div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Livraison Express</h4>
                <p className="text-gray-600 text-sm">24h à 48h selon zones, créneaux adaptés à vos contraintes</p>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-8 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6">
            Demander un devis personnalisé
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
