
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MissionSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Notre Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Depuis plus de <strong className="text-primary">10 ans</strong>, nous accompagnons les professionnels de la restauration dans leur transition vers un approvisionnement <strong className="text-secondary">100% local</strong> en région Sud PACA.
              </p>
              <p>
                Notre mission est de <strong className="text-primary">relocaliser l'alimentation</strong> en créant des ponts durables entre les producteurs locaux et les restaurateurs, tout en garantissant une logistique optimisée et des produits de qualité.
              </p>
              <p>
                Nous croyons en une <strong className="text-secondary">économie circulaire</strong> qui valorise notre terroir, rémunère justement nos producteurs et offre aux consommateurs des produits frais, de saison et pleins de sens.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group"
                onClick={() => handleNavigation('/nos-engagements')}
              >
                En savoir plus sur notre mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png" 
                alt="Produits locaux de Provence" 
                className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
