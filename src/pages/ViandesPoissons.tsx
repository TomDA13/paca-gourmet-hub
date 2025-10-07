import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";
import PhoneBanner from "@/components/PhoneBanner";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ViandesPoissons = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const productTypes = [
    {
      name: "Taureau de Camargue AOP",
      image: "/lovable-uploads/taureau-camargue.png",
    },
    {
      name: "Porc plein air de la crau HVE",
      image: "/lovable-uploads/porc-plein-air.png",
    },
    {
      name: "Boeuf race à viande",
      image: "/lovable-uploads/boeuf-race-viande.png",
    },
    {
      name: "Saucisserie de qualité",
      image: "/lovable-uploads/saucisserie.png",
    },
    {
      name: "Charcuterie de terroir des hautes Alpes",
      image: "/lovable-uploads/charcuterie-hautes-alpes.png",
    },
  ];

  const producers = [
    {
      name: "Élevage Martin",
      description:
        "Éleveur de taureaux camarguais depuis 3 générations, Pascal Martin perpétue la tradition familiale dans le respect du bien-être animal. Ses bêtes pâturent librement dans les marais de Camargue.",
      image: "/lovable-uploads/0ff5f2e6-a1fb-4734-934e-06bb06e5d3c1.png",
      specialty: "Taureau de Camargue AOP",
    },
    {
      name: "Ferme des Alpilles",
      description:
        "Exploitation familiale située au cœur des Alpilles, la famille Dubois élève des bœufs de race Aubrac en plein air. Une viande d'exception, tendre et savoureuse.",
      image: "/lovable-uploads/11f16898-57c5-448b-8ca8-1b361fd5662d.png",
      specialty: "Bœuf de race Aubrac",
    },
    {
      name: "Pêcherie Méditerranée",
      description:
        "Pêcheurs artisanaux basés à Martigues, ils sélectionnent quotidiennement les meilleurs poissons de la côte méditerranéenne selon les arrivages et la saison.",
      image: "/lovable-uploads/13a3b908-a80d-4605-90a3-e8f8af450b4f.png",
      specialty: "Poissons de Méditerranée",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section avec titre et description */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Viandes & Poissons</h1>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Découvrez notre sélection de viandes et poissons d'exception, rigoureusement choisis auprès de
                  producteurs locaux de confiance.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Traçabilité complète de nos produits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Élevage respectueux du bien-être animal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Pêche responsable et circuits courts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Fraîcheur garantie par une logistique optimisée</span>
                  </li>
                </ul>
              </div>
              <Button
                onClick={handleContactUs}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 mt-8"
              >
                Découvrir notre gamme
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/viande.jpg"
                alt="Viandes et poissons de qualité"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Carrousel Produits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Le meilleur de notre région</h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {productTypes.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-lg">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg text-center">{product.name}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Section Producteurs */}
      <section className="py-16 bg-gradient-to-br from-secondary/5 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Nos Producteurs Partenaires</h2>
          <div className="space-y-16">
            {producers.map((producer, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {producer.specialty}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{producer.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{producer.description}</p>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <img src={producer.image} alt={producer.name} className="w-full h-auto rounded-2xl shadow-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BannerSection />
      <PhoneBanner />
      <Footer />
    </div>
  );
};

export default ViandesPoissons;
