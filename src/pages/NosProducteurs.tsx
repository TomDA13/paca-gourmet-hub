import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Award, Handshake, Leaf, TrendingUp } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';

const NosProducteurs = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const faqItems = [
    {
      question: 'Combien de producteurs partenaires travaillent avec Localizz ?',
      answer: 'Localizz travaille avec près de 150 producteurs partenaires répartis sur les 6 départements de la région PACA. Ce réseau couvre les filières fruits et légumes, viandes, crémerie et épicerie.',
    },
    {
      question: 'Comment Localizz sélectionne-t-il ses producteurs ?',
      answer: 'Nos 3 ingénieurs agronomes auditent et suivent chaque producteur partenaire. Nous vérifions les pratiques agricoles, la qualité des produits et la capacité à répondre aux volumes de la restauration collective.',
    },
    {
      question: 'Comment est assurée la juste rémunération des producteurs ?',
      answer: 'Localizz s\'engage pour une juste rémunération de ses producteurs partenaires. Nous avons mené une étude conjointement avec Max Havelaar sur ce sujet. Les prix sont négociés en direct et les volumes planifiés à l\'année pour sécuriser les revenus des agriculteurs.',
    },
    {
      question: 'Peut-on devenir producteur partenaire de Localizz ?',
      answer: 'Si vous êtes producteur en région PACA (fruits et légumes, viandes, crémerie, épicerie), contactez-nous. Nous étudions les partenariats avec les agriculteurs, coopératives et PME agroalimentaires de la région Sud.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Nos producteurs locaux PACA - Réseau de 150 partenaires - Localizz"
        description="Localizz travaille avec près de 150 producteurs partenaires en région PACA. Fruits, légumes, viandes, crémerie, épicerie : découvrez notre réseau de sourcing local et notre engagement pour une juste rémunération."
        keywords={[
          'producteurs locaux paca',
          'sourcing local restauration collective',
          'circuit court paca',
          'producteurs fruits légumes paca',
          'filière courte région sud',
          'producteurs partenaires restauration',
          'agriculteurs paca',
          'réseau producteurs locaux',
          'approvisionnement local paca',
          'producteurs bio paca',
        ]}
        canonicalUrl="https://www.localizz.fr/nos-producteurs-paca"
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Nos producteurs PACA', url: '/nos-producteurs-paca' },
        ]}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute bottom-16 left-12 w-20 h-20 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute top-16 right-12">
            <img
              src="/lovable-uploads/5d92b68c-0931-4b04-a795-34c52321739a.png"
              alt="100 Valeurs du Sud"
              className="w-24 h-24 md:w-32 md:h-32 opacity-90"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos producteurs partenaires en région PACA
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Près de 150 producteurs partenaires sur les 6 départements de la région Sud.
                Agriculteurs, coopératives et PME agroalimentaires : un réseau audité et suivi
                par nos ingénieurs agronomes.
              </p>
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
                  onClick={handleContact}
                >
                  Découvrir nos produits
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Figures Section */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-primary mb-2">~150</div>
                <p className="text-gray-600">producteurs partenaires</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-primary mb-2">6</div>
                <p className="text-gray-600">départements PACA couverts</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-5xl font-bold text-primary mb-2">3</div>
                <p className="text-gray-600">ingénieurs agronomes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Producer Photos Carousel Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute top-16 left-10 w-28 h-28 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Ils nous font confiance
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  { name: "Alazard et Roux", image: "/lovable-uploads/alazard.png", specialty: "Viandes régionales" },
                  { name: "Comptoir des Salaisons", image: "/lovable-uploads/comptoir-salaisons.png", specialty: "Charcuterie artisanale" },
                  { name: "Salaisons du Champsaur", image: "/lovable-uploads/salaisons-champsaur.png", specialty: "Porc de montagne" },
                  { name: "Ferme du Buissonet", image: "/lovable-uploads/ferme-buissonet.png", specialty: "Produits laitiers" },
                  { name: "Coopérative de l'Ubaye", image: "/lovable-uploads/cooperative-ubaye.png", specialty: "Fromages de montagne" },
                  { name: "ESAT de la Haute Lèbre", image: "/lovable-uploads/esat-haute-lebre.png", specialty: "Fromages de chèvre" },
                  { name: "Rachid Rifi", image: "/lovable-uploads/rachid.jpg", specialty: "Fruits et légumes" },
                  { name: "Terre de Crau", image: "/lovable-uploads/terre-de-crau.png", specialty: "Fruits à noyau" },
                  { name: "GAEC des Bougainvilliers", image: "/lovable-uploads/gaec-bougainvilliers.png", specialty: "Maraîchage" },
                  { name: "Moulin St Joseph", image: "/lovable-uploads/moulin-st-joseph.png", specialty: "Farines artisanales" },
                  { name: "Duransia", image: "/lovable-uploads/duransia.png", specialty: "Céréales équitables" },
                  { name: "Carret Munos", image: "/lovable-uploads/carret-munoz.png", specialty: "Couscous artisanal" },
                ].map((producer, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-2">
                      <div className="bg-accent rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                        <div className="aspect-square relative">
                          <img
                            src={producer.image}
                            alt={producer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-primary text-sm md:text-base">{producer.name}</h3>
                          <p className="text-muted-foreground text-xs mt-1">{producer.specialty}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white border-muted" />
              <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white border-muted" />
            </Carousel>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute top-16 right-10 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Notre philosophie : l'unique intermédiaire
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Localizz est l'unique intermédiaire entre vous et les producteurs.
              Pas de grossiste, pas de centrale d'achat : un lien direct qui garantit
              la traçabilité et une juste rémunération des agriculteurs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-accent/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Juste rémunération</h3>
                </div>
                <p className="text-gray-700">
                  Nous nous engageons pour une juste rémunération de nos producteurs partenaires.
                  Une étude menée conjointement avec Max Havelaar guide notre politique tarifaire.
                </p>
              </div>
              <div className="bg-accent/50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Volumes garantis</h3>
                </div>
                <p className="text-gray-700">
                  Planification annuelle des cultures en fonction de vos volumes.
                  Les producteurs peuvent anticiper leur production et sécuriser leurs revenus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Producer Types Section */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-8 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Nos partenaires producteurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Agriculteurs</h3>
                <p className="text-gray-600">
                  Producteurs de fruits et légumes, BOF (beurre, oeufs, fromages),
                  épicerie et produits carnés de la région Sud.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Coopératives</h3>
                <p className="text-gray-600">
                  Coopératives agricoles qui souhaitent valoriser leurs produits
                  auprès de la restauration collective.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">PME agroalimentaires</h3>
                <p className="text-gray-600">
                  Transformateurs locaux et PME qui proposent le meilleur
                  de notre région : conserves, condiments, produits transformés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Coverage Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Nos terroirs de sourcing
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Nos producteurs partenaires sont répartis sur l'ensemble de la région PACA,
              à moins de 200 km de nos points de livraison.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Vaucluse</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Maraîchage du Comtat Venaissin, fruits du Ventoux, miel de lavande.
                </p>
              </div>
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Bouches-du-Rhône</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Légumes de la Crau, riz de Camargue IGP, taureau de Camargue AOP.
                </p>
              </div>
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Alpes-de-Haute-Provence</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Agneau du Lubéron, fromages fermiers, Banon AOP.
                </p>
              </div>
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Hautes-Alpes</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Yaourts bio du Champsaur, fromages des alpages, crémerie fermière.
                </p>
              </div>
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Var</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Miels de Provence, huile d'olive, produits du terroir varois.
                </p>
              </div>
              <div className="bg-accent/50 p-5 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-primary">Alpes-Maritimes</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Agrumes de Menton, huile d'olive de Nice, produits de l'arrière-pays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Notre démarche qualité producteurs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Audit initial</h3>
                  <p className="text-gray-700 text-sm">
                    Nos ingénieurs agronomes visitent chaque exploitation candidate
                    pour évaluer les pratiques agricoles et la qualité des produits.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Suivi régulier</h3>
                  <p className="text-gray-700 text-sm">
                    Les producteurs partenaires sont suivis tout au long de l'année
                    par notre équipe technique.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Planification annuelle</h3>
                  <p className="text-gray-700 text-sm">
                    Les cultures sont planifiées avec les producteurs en fonction
                    de vos volumes prévisionnels sur l'année.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Triple agréage</h3>
                  <p className="text-gray-700 text-sm">
                    Contrôle qualité chez le producteur, à la plateforme
                    et avant livraison dans vos cuisines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Questions sur nos producteurs
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((faq, i) => (
                <div key={i} className="bg-accent/30 p-6 rounded-lg">
                  <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 bg-primary overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous êtes producteur en région PACA ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Agriculteur, coopérative ou PME agroalimentaire : rejoignez notre réseau
              et valorisez vos produits auprès de la restauration collective.
            </p>
            <Button
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-10"
              onClick={handleContact}
            >
              Nous contacter
            </Button>
          </div>
        </section>
      </main>

      <BannerSection />
      <Footer />
    </div>
  );
};

export default NosProducteurs;
