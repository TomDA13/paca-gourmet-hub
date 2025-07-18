
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PartnersSection = () => {
  const [api, setApi] = useState<any>();

  const partners = [
    {
      name: "Elior",
      logo: "/lovable-uploads/fa0a4f6c-2c3d-4d40-a98d-4a4ed3140472.png"
    },
    {
      name: "Ville de Nice",
      logo: "/lovable-uploads/f364a20b-ad60-412f-b0ae-b7a656320ee9.png"
    },
    {
      name: "Hôpital Saint Joseph Marseille",
      logo: "/lovable-uploads/c72c1b77-aa0c-4505-9913-980085bb8274.png"
    },
    {
      name: "Ville de Martigues",
      logo: "/lovable-uploads/65258fc7-c511-4b99-ba55-367f8794cfb4.png"
    },
    {
      name: "Allauch Terre de Provence",
      logo: "/lovable-uploads/8c10890e-1098-4b68-8083-73ecf862debb.png"
    },
    {
      name: "Ville de Septèmes-les-Vallons",
      logo: "/lovable-uploads/646f703e-707d-4a0e-a19c-bb1bfb943be7.png"
    },
    {
      name: "Istres",
      logo: "/lovable-uploads/1f842070-584e-48cc-bae2-e013363e5e32.png"
    },
    {
      name: "Mille et un repas",
      logo: "/lovable-uploads/56ecd2f6-29f5-4808-b86c-cb1c0d3041e8.png"
    },
    {
      name: "Le Loubatas",
      logo: "/lovable-uploads/d9ab88e7-3454-4a2f-8484-8f0cd434f783.png"
    },
    {
      name: "AC Sent de Provence",
      logo: "/lovable-uploads/18916636-2083-4611-a0a3-3740630fabfc.png"
    },
    {
      name: "Auriol",
      logo: "/lovable-uploads/e8d0e64f-1c18-49ea-ac70-fe2928d8b2f1.png"
    },
    {
      name: "Les Pennes-Mirabeau",
      logo: "/lovable-uploads/b2652914-24e9-4ada-b7c5-1c70e2fb789e.png"
    },
    {
      name: "Rouet Vert",
      logo: "/lovable-uploads/69064758-c886-46e2-be2d-7ec10f654e5f.png"
    },
    {
      name: "Valaé",
      logo: "/lovable-uploads/d7fbd255-4139-485f-9b55-233a4576345d.png"
    },
    {
      name: "Ciné Fabrique",
      logo: "/lovable-uploads/be35d69a-3bf2-4470-807b-7102a1a013f9.png"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative py-16 bg-accent overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-18 h-18 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec des communes, collectivités et professionnels de la restauration collective et commerciale
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 h-40 flex items-center justify-center group hover:scale-105">
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        className="max-h-28 max-w-full object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white border-gray-200" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white border-gray-200" />
          </Carousel>
        </div>

        {/* Indicateurs de progression */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
            <button
              key={index}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary/60 transition-colors duration-200"
              onClick={() => api?.scrollTo(index * 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
