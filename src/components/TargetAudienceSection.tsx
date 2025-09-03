
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, ChefHat, Hotel, Wheat, Factory, Building2, Gift, Heart, Truck } from 'lucide-react';
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
      icon: Building2,
      title: "PME agroalimentaires",
      description: "Le meilleur de notre région"
    }
  ];

  const coffretsElements = [
    {
      icon: Gift,
      title: "Sélection locale",
      description: "Produits artisanaux de Provence"
    },
    {
      icon: Heart,
      title: "Confection ESAT",
      description: "Préparation solidaire"
    },
    {
      icon: Truck,
      title: "Livraison directe",
      description: "Partout en région PACA"
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

        {/* Section Entreprises & CSE */}
        <div className="mt-12">
          <div className="bg-accent p-6 rounded-xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-primary mb-2">
                Entreprises & CSE
              </h3>
              <p className="text-gray-600 text-sm">
                Des coffrets gourmands locaux, durables et solidaires
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {coffretsElements.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 min-w-0 flex-shrink-0">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-primary text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Button 
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-sm"
                onClick={handleJoinUs}
              >
                Demandez un devis
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
