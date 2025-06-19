
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CommitmentsSection = () => {
  return (
    <section id="commitments" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-48 -translate-x-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full translate-y-40 translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="bg-primary/95 p-8 rounded-xl text-center hover:bg-primary hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl border border-primary/20 text-white">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg hover:text-white transition-colors duration-300">150</div>
            <p className="opacity-90 text-lg font-medium">Producteurs partenaires locaux</p>
          </div>
          <div className="bg-primary/95 p-8 rounded-xl text-center hover:bg-primary hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl border border-primary/20 text-white">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg hover:text-white transition-colors duration-300">700</div>
            <p className="opacity-90 text-lg font-medium">Références de produits locaux</p>
          </div>
          <div className="bg-primary/95 p-8 rounded-xl text-center hover:bg-primary hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl border border-primary/20 text-white">
            <div className="text-6xl md:text-7xl font-bold text-secondary mb-4 drop-shadow-lg hover:text-white transition-colors duration-300">760</div>
            <p className="opacity-90 text-lg font-medium">Tonnes de produits locaux livrés en 2024</p>
          </div>
        </div>

        {/* Bouton En savoir plus */}
        <div className="text-center">
          <Button 
            variant="default"
            className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 group font-semibold"
            onClick={() => {/* TODO: Navigate to commitments page */}}
          >
            En savoir plus
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
