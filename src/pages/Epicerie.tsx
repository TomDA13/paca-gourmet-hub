import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import PhoneBanner from '@/components/PhoneBanner';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Epicerie = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const productTypes = [
    {
      name: "Riz",
      image: "/lovable-uploads/riz.png"
    },
    {
      name: "Pâtes",
      image: "/lovable-uploads/pate500.png"
    },
    {
      name: "Miel",
      image: "/lovable-uploads/miel.png"
    },
    {
      name: "Calissons",
      image: "/lovable-uploads/calisson.png"
    }
  ];

  const producers = [
    {
      name: "Moulin des Oliviers",
      description: "Moulin familial depuis 1850, ils pressent à froid les olives de leurs propres oliviers centenaires. Leur huile d'olive extra vierge AOP de Provence est reconnue pour sa finesse et ses arômes fruités.",
      image: "/lovable-uploads/44886672-833c-4a35-9136-87e1904f657b.png",
      specialty: "Huile d'olive AOP Provence"
    },
    {
      name: "Rucher du Ventoux",
      description: "Apiculteur passionné depuis 30 ans, Michel récolte ses miels selon les floraisons du Mont Ventoux. Lavande, thym, acacia... chaque miel révèle les secrets aromatiques de la Provence.",
      image: "/lovable-uploads/46b2ee52-f1f3-4fca-a2ef-35256b615fe1.png",
      specialty: "Miels de Provence"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Notre Épicerie Fine
              </h1>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Découvrez notre sélection de produits d'épicerie fine, 
                  élaborés par des artisans passionnés selon des méthodes traditionnelles.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Huiles d'olive première pression à froid</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Miels de Provence mono-floraux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Conserves artisanales sans conservateurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></span>
                    <span>Épices et aromates de qualité supérieure</span>
                  </li>
                </ul>
              </div>
              <Button 
                onClick={handleContactUs}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 mt-8"
              >
                Découvrir notre épicerie
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/pates.jpg"
                alt="Produits d'épicerie fine"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Nos Spécialités
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {productTypes.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg text-center">
                            {product.name}
                          </h3>
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
          <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
            Nos Producteurs Partenaires
          </h2>
          <div className="space-y-16">
            {producers.map((producer, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {producer.specialty}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {producer.name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {producer.description}
                  </p>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={producer.image}
                    alt={producer.name}
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
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

export default Epicerie;