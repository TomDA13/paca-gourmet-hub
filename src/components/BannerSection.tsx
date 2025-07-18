
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BannerSection = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
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
  );
};

export default BannerSection;
