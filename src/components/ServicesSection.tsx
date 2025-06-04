
import { Button } from '@/components/ui/button';

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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Nos Catégories de Produits
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🥩</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Viandes & Charcuteries</h4>
                  <p className="text-gray-600">Élevage local, découpe artisanale, traçabilité complète</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🥕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Fruits & Légumes</h4>
                  <p className="text-gray-600">Produits de saison, agriculture raisonnée et biologique</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🧀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Épicerie Fine</h4>
                  <p className="text-gray-600">Huiles d'olive, miels, conserves et spécialités provençales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">🐟</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Poissons & Fruits de Mer</h4>
                  <p className="text-gray-600">Pêche locale méditerranéenne, fraîcheur garantie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Process de Livraison
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-primary">Commande & Planning</h4>
                  <p className="text-gray-600 text-sm">Plateforme en ligne ou contact commercial dédié</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-primary">Préparation & Conditionnement</h4>
                  <p className="text-gray-600 text-sm">Respect de la chaîne du froid et normes HACCP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-primary">Livraison Express</h4>
                  <p className="text-gray-600 text-sm">24h à 48h selon zones, créneaux adaptés à vos contraintes</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
