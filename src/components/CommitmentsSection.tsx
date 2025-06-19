import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CommitmentsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="commitments" className="relative py-20 bg-accent overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-48 -translate-x-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-y-40 translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="bg-primary p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-primary">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg">150</div>
            <p className="text-white text-lg">Producteurs partenaires locaux</p>
          </div>
          <div className="bg-primary p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-primary">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg">700</div>
            <p className="text-white text-lg">Références de produits locaux</p>
          </div>
          <div className="bg-primary p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-primary">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg">760</div>
            <p className="text-white text-lg">Tonnes de produits locaux livrés en 2024</p>
          </div>
        </div>

        {/* Bouton En savoir plus */}
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group font-semibold"
            onClick={() => navigate('/nos-engagements')}
          >
            En savoir plus
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
