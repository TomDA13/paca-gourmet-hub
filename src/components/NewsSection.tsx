
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const NewsSection = () => {
  const newsItems = [
    {
      image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
      title: "Nouveau partenariat avec les Maraîchers de Ventoux",
      excerpt: "Extension de notre gamme de légumes bio avec 15 nouveaux producteurs de la région du Mont Ventoux pour renforcer notre offre locale.",
      date: "15 Nov 2024"
    },
    {
      image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
      title: "Localizz certifié B-Corp",
      excerpt: "Reconnaissance officielle de nos engagements sociaux et environnementaux par la certification B-Corporation internationale.",
      date: "08 Nov 2024"
    },
    {
      image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
      title: "Ouverture d'un nouvel entrepôt à Marseille",
      excerpt: "Renforcement de notre capacité logistique pour mieux servir les Bouches-du-Rhône et le Var avec plus d'efficacité.",
      date: "02 Nov 2024"
    },
    {
      image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
      title: "Saison des primeurs : 50 nouvelles variétés",
      excerpt: "Découvrez notre nouvelle gamme de légumes primeurs en direct des producteurs provençaux pour le printemps.",
      date: "25 Oct 2024"
    },
    {
      image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
      title: "Record de livraisons en octobre",
      excerpt: "Plus de 120 tonnes de produits locaux livrés ce mois-ci, un record qui témoigne de la confiance de nos partenaires.",
      date: "20 Oct 2024"
    }
  ];

  return (
    <section className="relative py-16 bg-accent overflow-hidden">
      {/* Floating elements - same as TerrainDeJeuSection */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-18 h-18 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre actu
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsItems.map((article, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full cursor-pointer hover:scale-105 transform transition-transform">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                      <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
