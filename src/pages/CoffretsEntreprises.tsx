import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhoneBanner from '@/components/PhoneBanner';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Gift, Heart, Truck, Users, Building, Calendar } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const CoffretsEntreprises = () => {
  const navigate = useNavigate();

  const handleDemandeDevis = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const productTypes = [
    {
      name: "Bisque de homard",
      image: "/lovable-uploads/Photo bisque de homard 400 gr.jpg",
    },
    {
      name: "Crackers aux olives & romarin",
      image: "/lovable-uploads/Photo crackers olives romarin.png",
    },
    {
      name: "Croustillant enrobés de chocolats",
      image: "/lovable-uploads/Photo Croustillants enrobés de chocolats.png",
    },
    {
      name: "Gardianne de Taureau de Manade",
      image: "/lovable-uploads/Photo gardianne de Taureau 400 gr.png",
    },
    {
      name: "Pétillant de pomme (sans alcool)",
      image: "/lovable-uploads/Photo pétillant de pomme.jpg",
    },
    {
      name: "Rillettes de saumon à l'aneth",
      image: "/lovable-uploads/Photo rillettes saumon à l'aneth 100 gr.jpg",
    },
    {
      name: "Petites barques de Marseille",
      image: "/lovable-uploads/Photo Petites barques marseillaises parfum Citron.png",
    },
    {
      name: "Houmous BIO",
      image: "/lovable-uploads/Photo houmous BIO.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PhoneBanner />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-10 pb-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/lovable-uploads/coffret-prestige.png')",
            backgroundPosition: "center 75%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-primary/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Des coffrets gourmands locaux, durables et solidaires
          </h1>
          <p 
            style={{
              animationDelay: '0.2s',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
            }} 
            className="text-xl mb-6 opacity-95 animate-fade-in-up text-shadow-lg font-bold md:text-3xl"
          >
            Localizz conçoit, confectionne et livre des coffrets sur-mesure pour vos collaborateurs, clients ou bénéficiaires.
          </p>
          <div 
            className="flex flex-col items-center gap-4 animate-fade-in-up" 
            style={{
              animationDelay: '0.4s'
            }}
          >
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
              onClick={handleDemandeDevis}
            >
              Demandez un devis
            </Button>
            <img 
              src="/lovable-uploads/3c8f6a3d-67be-497f-b393-06800f4b4b47.png" 
              alt="Badge 100 valeurs du Sud" 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-90 mt-2" 
            />
          </div>
        </div>
      </section>

      {/* Section 1 - À qui s'adressent nos coffrets ? */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              À qui s'adressent nos coffrets ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Entreprises
              </h3>
              <p className="text-muted-foreground text-center">
                Remerciez vos équipes et partenaires avec un cadeau porteur de sens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Collectivités
              </h3>
              <p className="text-muted-foreground text-center">
                Offrez aux habitants des coffrets locaux, responsables et festifs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Événementiel & hôtellerie
              </h3>
              <p className="text-muted-foreground text-center">
                Surprenez vos invités avec une sélection de terroir.
              </p>
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

      {/* Section 2 - La promesse */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Clé en main. Local. Responsable.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src="/lovable-uploads/82c65f87-6503-4130-bc1b-fe53acd69e82.png"
                  alt="Coffret de Noël avec produits locaux"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"

                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Sélection de produits locaux et artisanaux de Provence
              </h3>
              <p className="text-muted-foreground">
                Des produits authentiques sélectionnés avec soin chez nos producteurs partenaires de la région PACA.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src="/lovable-uploads/esat.png"
                  alt="Préparation des paniers par les ESAT"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Confection par des ESAT, pour donner du sens à vos cadeaux
              </h3>
              <p className="text-muted-foreground">
                Nos coffrets sont préparés par des Établissements et Services d'Aide par le Travail, créant de la valeur sociale.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src="/lovable-uploads/014c2ad9-7d0c-486f-8984-1d228d8819e8.png"
                  alt="Camion de livraison Localizz"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Livraison directe sur vos sites, partout en région PACA
              </h3>
              <p className="text-muted-foreground">
                Une logistique optimisée pour livrer vos coffrets directement là où vous en avez besoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/49d82e29-84e6-45c0-a8c6-a2c19fe37be3.png"
            alt="Produits locaux de Provence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              Prêt à offrir des coffrets qui ont du sens ?
            </h2>
            <Button 
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8 mb-6"
              onClick={handleDemandeDevis}
            >
              Demandez un devis
            </Button>
            
            {/* Logo 100 Valeurs du Sud */}
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/f5aa6d66-eda4-4d3a-a3b9-36b0c48fe5ad.png"
                alt="100 Valeurs du Sud"
                className="h-24 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoffretsEntreprises;