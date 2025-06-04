
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-bl from-white via-gray-50 to-accent/30 overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-white via-accent/50 to-white transform skew-y-1 origin-top-left"></div>
      
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Nos Catégories de Produits
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-sm">🥩</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Viandes & Charcuteries</h4>
                  <p className="text-gray-600">Élevage local, découpe artisanale, traçabilité complète</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-sm">🥕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Fruits & Légumes</h4>
                  <p className="text-gray-600">Produits de saison, agriculture raisonnée et biologique</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-sm">🧀</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Épicerie Fine</h4>
                  <p className="text-gray-600">Huiles d'olive, miels, conserves et spécialités provençales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-secondary/10 transition-colors duration-200">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-sm">🐟</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Poissons & Fruits de Mer</h4>
                  <p className="text-gray-600">Pêche locale méditerranéenne, fraîcheur garantie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Process de Livraison
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                <div>
                  <h4 className="font-semibold text-primary">Commande & Planning</h4>
                  <p className="text-gray-600 text-sm">Plateforme en ligne ou contact commercial dédié</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                <div>
                  <h4 className="font-semibold text-primary">Préparation & Conditionnement</h4>
                  <p className="text-gray-600 text-sm">Respect de la chaîne du froid et normes HACCP</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-white/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full flex items-center justify-center font-bold shadow-md">3</div>
                <div>
                  <h4 className="font-semibold text-primary">Livraison Express</h4>
                  <p className="text-gray-600 text-sm">24h à 48h selon zones, créneaux adaptés à vos contraintes</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>

      {/* Diagonal transition */}
      <div className="absolute bottom-0 right-0 w-full h-20 bg-primary transform skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default ServicesSection;
