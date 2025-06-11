
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, Hotel, Wheat, Factory, Handshake } from 'lucide-react';

const TargetAudienceSection = () => {
  const restaurateurs = [
    {
      icon: Users,
      title: "Restauration Collective",
      subtitle: "Scolaire, Entreprise, Établissement de santé",
      description: "Solutions adaptées pour nourrir vos convives avec des produits locaux de qualité"
    },
    {
      icon: Building,
      title: "Restauration Commerciale",
      subtitle: "Restaurants, Brasseries, Cafés",
      description: "Valorisez votre carte avec des produits authentiques de notre région"
    },
    {
      icon: Hotel,
      title: "Hôtels",
      subtitle: "Hôtellerie & Tourisme",
      description: "Offrez une expérience culinaire unique avec nos produits du terroir"
    }
  ];

  const producteurs = [
    {
      icon: Wheat,
      title: "Agriculteurs",
      subtitle: "Producteurs locaux",
      description: "Partenaires agriculteurs engagés dans une agriculture de qualité et respectueuse"
    },
    {
      icon: Factory,
      title: "Coopératives",
      subtitle: "Groupements de producteurs",
      description: "Coopératives agricoles et groupements pour une offre diversifiée et structurée"
    },
    {
      icon: Handshake,
      title: "Transformateurs",
      subtitle: "Artisans du goût",
      description: "Artisans et transformateurs locaux pour des produits élaborés de qualité"
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-16 right-12 w-28 h-28 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-16 left-12 w-20 h-20 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/60 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Avec qui nous travaillons
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Section Restaurateurs */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Restaurateurs</h3>
              <p className="text-gray-600">Nos partenaires de la restauration</p>
            </div>
            
            <div className="space-y-6">
              {restaurateurs.map((group, index) => (
                <div 
                  key={index}
                  className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors duration-300 flex-shrink-0">
                      <group.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 font-medium">
                        {group.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Producteurs */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Producteurs</h3>
              <p className="text-gray-600">Nos partenaires producteurs</p>
            </div>
            
            <div className="space-y-6">
              {producteurs.map((group, index) => (
                <div 
                  key={index}
                  className="bg-accent p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                      <group.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-1">
                        {group.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2 font-medium">
                        {group.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-semibold"
          >
            Rejoignez-nous
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
