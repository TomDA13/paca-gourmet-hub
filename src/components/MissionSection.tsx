
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
              <span className="text-primary">Notre </span>
              <span className="text-secondary">ADN</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Une juste rémunération */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Partenariat avec les producteurs" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Une juste rémunération de nos producteurs partenaires</h3>
                <p className="text-gray-700 leading-relaxed">
                  Avec qui nous travaillons <strong>main dans la main</strong> et que nous accompagnons <strong>au quotidien</strong>
                </p>
              </div>
            </div>

            {/* Produits locaux et de saison */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Sélection de produits locaux" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-green-500/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Des produits locaux et de saison sélectionnés avec soin</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fruits, légumes, BOF, viande, charcuterie et produits d'épicerie, tous sourcés dans la <strong>région SUD PACA</strong>
                </p>
              </div>
            </div>

            {/* Logistique optimisée */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Logistique et livraison" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Une logistique optimisée en flux tendu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Offrant des produits <strong>ultrafrais</strong> en <strong>circuits courts</strong>, dans le respect de la <strong>chaîne du froid</strong>, et avec des DDM et DLC longues
                </p>
              </div>
            </div>

            {/* Produits sous signes de qualité */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-gray-100 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Produits de qualité certifiés" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 via-amber-500/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Des produits sous signes de qualité</h3>
                <p className="text-gray-700 leading-relaxed">
                  Des produits <strong>labélisés et certifiés</strong> répondant aux exigences de la <strong>loi EGALIM</strong> en restauration collective
                </p>
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
