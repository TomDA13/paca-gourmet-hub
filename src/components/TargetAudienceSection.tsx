
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Building, Heart, Hotel } from 'lucide-react';

const TargetAudienceSection = () => {
  const targetGroups = [
    {
      icon: Users,
      title: "RESTAURATION COLLECTIVE",
      subtitle: "(SCOLAIRE, ENTREPRISE, ÉTABLISSEMENT DE SANTÉ)",
      description: "Solutions adaptées pour nourrir vos convives avec des produits locaux de qualité"
    },
    {
      icon: Building,
      title: "RESTAURATION COMMERCIALE",
      subtitle: "",
      description: "Valorisez votre carte avec des produits authentiques de notre région"
    },
    {
      icon: Hotel,
      title: "HÔTELS",
      subtitle: "",
      description: "Offrez une expérience culinaire unique avec nos produits du terroir"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Avec qui nous travaillons
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {targetGroups.map((group, index) => (
            <div 
              key={index}
              className="bg-accent p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
                <group.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {group.title}
              </h3>
              {group.subtitle && (
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  {group.subtitle}
                </p>
              )}
              <p className="text-gray-600 leading-relaxed">
                {group.description}
              </p>
            </div>
          ))}
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
