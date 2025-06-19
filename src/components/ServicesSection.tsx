
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="services" className="relative py-20 bg-accent overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Notre Offre
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            + de 700 références de produits alimentaires sourcés dans la région SUD 
            pour les professionnels de la région
          </p>
        </div>

        {/* Grille 2x2 avec les 4 nouvelles images optimisées */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Viandes & Poissons */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary h-full overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/47e0a558-801f-4ef3-adc0-8f62a229fd1f.png" 
                alt="Viandes et Poissons frais" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">Viandes & Poissons</h3>
              </div>
            </div>
          </Card>

          {/* Produits laitiers et Œufs */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary h-full overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/b650fece-a4de-4296-894f-187b48fb735a.png" 
                alt="Produits laitiers et fromages" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">Produits laitiers & Œufs</h3>
              </div>
            </div>
          </Card>

          {/* Fruits & Légumes */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500 h-full overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/b0581c11-96e5-4547-838e-003518167057.png" 
                alt="Fruits et légumes frais de saison" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">Fruits & Légumes</h3>
              </div>
            </div>
          </Card>

          {/* Épicerie */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-amber-500 h-full overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/lovable-uploads/69c8c5f0-7825-4770-ab31-b54fbb8f0a9f.png" 
                alt="Épicerie fine et produits d'épicerie" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">Épicerie</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Bouton En savoir plus */}
        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group"
            onClick={() => handleNavigation('/notre-offre')}
          >
            Découvrir toute notre offre
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
