
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-20 bg-white overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-24 right-20 w-28 h-28 bg-secondary/15 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 left-20 w-24 h-24 bg-primary/15 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent/80 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
              Notre Mission
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Une juste rémunération */}
            <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Une juste rémunération de nos producteurs partenaires</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Avec qui nous travaillons main dans la main et que nous accompagnons au quotidien
                  </p>
                </div>
              </div>
            </div>

            {/* Produits locaux et de saison */}
            <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl text-white">🌱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Des produits locaux et de saison sélectionnés avec soin</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fruits, légumes, BOF, viande, charcuterie et produits d'épicerie, tous sourcés dans la région SUD PACA
                  </p>
                </div>
              </div>
            </div>

            {/* Logistique optimisée */}
            <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl text-white">🚚</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Une logistique optimisée en flux tendu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Offrant des produits ultrafrais en circuits courts, dans le respect de la chaîne du froid, et avec des DDM et DLC longues
                  </p>
                </div>
              </div>
            </div>

            {/* Produits sous signes de qualité */}
            <div className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-2xl text-white">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Des produits sous signes de qualité</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Des produits labélisés et certifiés répondant aux exigences de la loi EGALIM en restauration collective
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton En savoir plus */}
          <div className="text-center">
            <Button 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group"
              onClick={() => {/* TODO: Navigate to mission page */}}
            >
              En savoir plus sur notre mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
