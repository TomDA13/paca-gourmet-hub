
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, ChefHat, Hotel, Wheat, Hammer, Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TargetAudienceSection = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const restaurateurs = [
    {
      icon: Users,
      title: "Restauration collective publique",
      description: "Réponse aux appels d'offres publics, MAPA, gré à gré"
    },
    {
      icon: ChefHat,
      title: "Sociétés de restauration", 
      description: "Scolaire, entreprise, santé et médico-social"
    },
    {
      icon: Hotel,
      title: "Restauration commerciale et hôtellerie",
      description: "Petits déjeuners, restauration, offre apéritive de terroir"
    }
  ];

  const producteurs = [
    {
      icon: Wheat,
      title: "Agriculteurs",
      description: "Producteurs de fruits et légumes, BOF, épicerie et produits carnés"
    },
    {
      icon: Factory,
      title: "Coopératives",
      description: "Pour valoriser vos produits en restauration collective"
    },
    {
      icon: Hammer,
      title: "PME agroalimentaires",
      description: "le meilleur de notre région"
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Section Restaurateurs */}
          <div className="bg-accent p-8 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Restaurateurs
              </h3>
              <p className="text-gray-600">
                Nous vous accompagnons au quotidien depuis plus de 10 ans
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              {restaurateurs.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={handleJoinUs}
              >
                Rejoignez-nous
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Section Producteurs */}
          <div className="bg-accent p-8 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Producteurs
              </h3>
              <p className="text-gray-600">
                Nous mettons en valeur votre production locale en circuits courts
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              {producteurs.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                onClick={handleJoinUs}
              >
                Rejoignez-nous
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
