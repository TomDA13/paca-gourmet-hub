import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const FeaturedProductsSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleProductClick = (productType: string) => {
    const routes = {
      'viande': '/nos-produits/viandes',
      'fruits': '/nos-produits/fruits-et-legumes', 
      'cremerie': '/nos-produits/cremeries',
      'epicerie': '/nos-produits/epicerie'
    };
    navigate(routes[productType as keyof typeof routes]);
  };

  const products = [
    {
      type: 'viande',
      image: '/lovable-uploads/44886672-833c-4a35-9136-87e1904f657b.png',
      alt: 'Steak Haché de Taureau',
      title: 'Steak Haché de Taureau'
    },
    {
      type: 'fruits',
      image: '/lovable-uploads/8b336d1e-d4f6-498a-8018-ebdb3bd49091.png',
      alt: 'Carottes de Provence',
      title: 'Carottes de Provence'
    },
    {
      type: 'cremerie',
      image: '/lovable-uploads/212b7c19-2973-4da1-b68f-efd4542bac70.png',
      alt: 'Truites saumonées',
      title: 'Truites saumonées'
    },
    {
      type: 'epicerie',
      image: '/lovable-uploads/1c0f7a3f-8d50-4114-8fa1-f64d6a5d8893.png',
      alt: 'Lentilles bio',
      title: 'Lentilles bio'
    }
  ];

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="flex flex-col items-center gap-4 cursor-pointer hover:transform hover:scale-105 transition-all duration-300" onClick={() => handleProductClick(product.type)}>
      <div className="relative">
        <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.alt} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Nouveauté
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-primary text-lg">{product.title}</h3>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Produits mis en avant - centrés */}
          {isMobile ? (
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 flex justify-center">
                      <ProductCard product={product} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;