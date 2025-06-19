
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-64 md:h-80 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png"
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
            className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
            onClick={() => navigate('/contact')}
          >
            Rejoignez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
