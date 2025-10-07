import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";
import PhoneBanner from "@/components/PhoneBanner";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const FruitsLegumes = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  const productTypes = [
    {
      name: "Fruits et légumes « Moches »",
      image: "/lovable-uploads/legumes-moches.webp",
    },
    {
      name: "Légumes ultra frais",
      image: "/lovable-uploads/legumes-ultra-frais.png",
    },
    {
      name: "Fruit cueillis à juste maturité",
      image: "/lovable-uploads/fruit-maturite.jpg",
    },
    {
      name: "4ème et 5ème gammes local",
      image: "/lovable-uploads/4eme-5eme-gamme.jpg",
    },
  ];

  const producers = [
    {
      name: "Rachid Rifi",
      description:
        "Producteur passionné de fruits et légumes frais, Rachid cultive avec soin ses produits pour offrir une qualité exceptionnelle. Son engagement pour la fraîcheur et la saveur fait de lui un partenaire de confiance de Localizz.",
      image: "/lovable-uploads/fruitetlégume.jpg",
      specialty: "Fruits et légumes frais",
    },
    {
      name: "Terre de Crau / Mas St Paul",
      description:
        "Groupement de producteurs de fruits à noyau autour de Mouriès, St Martin de Crau et Fos. Sarah Monteux a repris le flambeau familial et propose des fruits bio et non bio. Localizz travaille avec eux depuis 2 ans pour toute la saison des fruits à noyaux.",
      image: "/lovable-uploads/terre-de-crau.png",
      specialty: "Fruits à noyau Bio et conventionnels",
    },
    {
      name: "GAEC des Bougainvilliers",
      description:
        "Loïc Laber cultive avec passion une grande variété de fruits et légumes de saison. Cette exploitation familiale près d'Aix-en-Provence privilégie les méthodes respectueuses de l'environnement pour offrir des produits de qualité.",
      image: "/lovable-uploads/gaec-bougainvilliers.png",
      specialty: "Maraîchage de saison",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Fruits & Légumes</h1>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Savourez la fraîcheur et l'authenticité de nos fruits et légumes, cultivés avec passion par nos
                  producteurs locaux.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Récolte quotidienne pour une fraîcheur optimale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>100 % Fruits et légumes (Bio , HVE, IGP et AOP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Fruits et légumes de saison toute l’année sans rupture </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Variétés anciennes et savoureuses</span>
                  </li>
                </ul>
              </div>
              <Button
                onClick={handleContactUs}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 mt-8"
              >
                Découvrir nos produits
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/image.png"
                alt="Fruits et légumes frais"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

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

export default FruitsLegumes;
