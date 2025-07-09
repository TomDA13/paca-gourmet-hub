
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Travailler avec Localizz nous a permis d'accéder à des nouveaux marchés pour les pros et collectivités et de nous assurer des volumes. J'apprécie notre relation au travers des années et leur sérieux !",
      author: "Loïc Laber",
      position: "GAEC des Bougainvilliers (Aix en Provence, 13)"
    },
    {
      quote: "Des produits locaux sur lesquels on peut compter avec une délicieuse gamme de produits laitiers!!! Bienveillance au menu !!",
      author: "Sophie Imbert",
      position: "La Cinéfabrique (Marseille, 13)"
    }
  ];

  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Défilement automatique toutes les 4 secondes

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 right-16 w-28 h-28 bg-primary/15 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-24 h-24 bg-secondary/15 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-accent/60 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos partenaires disent de notre service
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-secondary mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
