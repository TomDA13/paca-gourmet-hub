import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerSection from "@/components/BannerSection";
import PhoneBanner from "@/components/PhoneBanner";
import SEO from "@/components/SEO";
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
      link: "/taureaux-de-camargue-aop",
    },
    {
      name: "Porc plein air de la crau HVE",
      image: "/lovable-uploads/porc-plein-air.png",
      link: "/nos-produits/viandes",
    },
    {
      name: "Boeuf race à viande",
      image: "/lovable-uploads/boeuf-race-viande.png",
      link: "/nos-produits/viandes",
    },
    {
      name: "Saucisserie de qualité",
      image: "/lovable-uploads/saucisserie.png",
      link: "/nos-produits/viandes",
    },
    {
      name: "Charcuterie de terroir des hautes Alpes",
      image: "/lovable-uploads/charcuterie-hautes-alpes.png",
      link: "/nos-produits/viandes",
    },
  ];

  const producers = [
    {
      name: "Alazard et Roux (13)",
      description:
        "Maison familiale située à Tarascon en Provence aux portes de la Camargue. Alazard et Roux commercialise des viandes régionales de qualité avec un savoir-faire transmis de génération en génération.",
      image: "/lovable-uploads/alazard.png",
      specialty: "Viandes régionales de Camargue",
    },
    {
      name: "Comptoir des Salaisons (13)",
      description:
        "Artisan charcutier à l'Estaque (13), le Comptoir des Salaisons propose des saucisses, plats cuisinés et charcuteries artisanales élaborés avec passion. Des produits d'exception préparés selon des recettes traditionnelles.",
      image: "/lovable-uploads/comptoir-salaisons.png",
      specialty: "Charcuterie artisanale",
    },
    {
      name: "Salaisons du Champsaur (05)",
      description:
        "Charcuterie artisanale des Hautes-Alpes (05), cette entreprise familiale de père en filles travaille en circuit court avec des élevages de montagne à taille humaine. Des recettes uniques créées avec passion depuis 1920.",
      image: "/lovable-uploads/salaisons-champsaur.png",
      specialty: "Porc de montagne en circuit court",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Viandes locales PACA - Boeuf, Agneau, Taureau de Camargue AOP, Porc plein air"
        description="Viandes locales de qualité en région PACA : boeuf race à viande HVE et Bio, taureau de Camargue AOP, agneau du Lubéron, porc plein air, volailles Label Rouge. Traçabilité complète, livraison restauration collective."
        keywords={[
          "viande locale paca",
          "taureau camargue aop",
          "boeuf bio paca",
          "agneau lubéron",
          "porc plein air crau",
          "volaille label rouge paca",
          "fournisseur viande restauration collective",
          "charcuterie artisanale provence",
          "viande circuit court"
        ]}
        url="/nos-produits/viandes"
        canonicalUrl="https://www.localizz.fr/nos-produits/viandes"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Notre Offre", url: "/notre-offre" },
          { name: "Viandes & Poissons", url: "/nos-produits/viandes" }
        ]}
      />
      <Header />

      {/* Hero Section avec titre et description */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nos Viandes & Poissons</h1>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Découvrez notre sélection de viandes et poissons de qualité, rigoureusement choisis auprès de
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
                  <a href={product.link} className="block">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
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
                  </a>
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
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">Aperçu de nos producteurs</h2>
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
