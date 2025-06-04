
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Avec Localizz, commander et recevoir nos produits n'a jamais été aussi facile, ce qui nous permet de nous concentrer sur l'essentiel : offrir une cuisine de qualité.",
      author: "Anthony Delama",
      position: "Chef de cuisine Elior"
    },
    {
      quote: "Travailler avec Localizz est un vrai plaisir ! Leurs produits locaux sont d'une qualité exceptionnelle et nous permettent de servir le meilleur de notre région dans nos assiettes.",
      author: "Philipe Therran",
      position: "Chef de cuisine Elior"
    },
    {
      quote: "Localizz simplifie notre approvisionnement tout en valorisant les producteurs locaux. Une collaboration où tout le monde y trouve son compte !",
      author: "Alexandre Martin",
      position: "Chef de cuisine Elior"
    },
    {
      quote: "La fraîcheur des produits Localizz fait toute la différence dans nos plats. Nos clients le remarquent immédiatement et apprécient cette qualité locale.",
      author: "Marie Dubois",
      position: "Chef de cuisine Sodexo"
    },
    {
      quote: "Grâce à Localizz, nous proposons désormais des menus 100% locaux qui racontent l'histoire de notre terroir provençal à chaque bouchée.",
      author: "Jean-Luc Moreau",
      position: "Responsable restauration collective"
    },
    {
      quote: "L'efficacité de la logistique Localizz nous fait gagner un temps précieux. Plus besoin de courir après les fournisseurs, tout arrive à l'heure !",
      author: "Sophie Legrand",
      position: "Chef de cuisine Compass Group"
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
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
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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
