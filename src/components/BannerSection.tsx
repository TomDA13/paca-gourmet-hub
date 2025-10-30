
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const BannerSection = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const featuredArticles = [
    {
      id: 'actualites/loi-egalim-restauration-collective-paca-2025',
      title: 'Loi EGAlim en restauration collective',
      description: 'Tout comprendre sur les obligations EGAlim et comment Localizz vous accompagne',
      image: '/lovable-uploads/cantine.jpg'
    },
    {
      id: 'actualites',
      title: 'Nos actualités',
      description: 'Découvrez toutes nos dernières actualités et articles sur l\'alimentation locale',
      image: '/lovable-uploads/d5ec88bd-a124-419c-8f97-60beb373bc26.png'
    }
  ];

  return (
    <>
      <section className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/49d82e29-84e6-45c0-a8c6-a2c19fe37be3.png"
            alt="Produits locaux de Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Commencez dès maintenant à Relocaliser !
            </h2>
            <Button 
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8 mb-6"
              onClick={handleJoinUs}
            >
              Rejoignez-nous
            </Button>
            
            {/* Logo 100 Valeurs du Sud */}
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/f5aa6d66-eda4-4d3a-a3b9-36b0c48fe5ad.png"
                alt="100 Valeurs du Sud"
                className="h-24 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Articles en vedette */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              À découvrir
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {featuredArticles.map((article) => (
              <Card 
                key={article.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-primary/20"
                onClick={() => { navigate(`/${article.id}`); window.scrollTo(0, 0); }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {article.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-secondary hover:text-secondary/80 p-0 h-auto font-semibold group"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
