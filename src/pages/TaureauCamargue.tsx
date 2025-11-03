import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import PhoneBanner from '@/components/PhoneBanner';
import SEO from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TaureauCamargue = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const products = [
    {
      name: "Gardianne de taureau AOP",
      image: "/lovable-uploads/gardianne-taureau-camargue.png",
      alt: "Gardianne de taureau de Camargue AOP, viande locale en morceaux"
    },
    {
      name: "Pavé Camarguais AOP",
      image: "/lovable-uploads/pave-camarguais-aop.png",
      alt: "Pavé de taureau de Camargue AOP, viande rouge maigre et tendre"
    },
    {
      name: "Côtes de Taureau des Manades",
      image: "/lovable-uploads/cotes-taureau-manades.png",
      alt: "Côtes de taureau de Camargue AOP, viande de qualité des manades"
    }
  ];

  const faqItems = [
    {
      question: "Quelle est la différence entre taureau et bœuf ?",
      answer: "Le taureau de Camargue est un mâle non castré de la race Raço di Biòu, élevé en semi-liberté dans les manades. Sa viande est plus maigre, plus rouge et a un goût plus intense que le bœuf traditionnel. Le taureau bénéficie d'un élevage extensif unique dans les marais camarguais."
    },
    {
      question: "Qu'est-ce que l'AOP \"Taureau de Camargue\" ?",
      answer: "L'Appellation d'Origine Protégée (AOP) garantit l'origine géographique et le respect d'un cahier des charges strict : élevage dans les manades de Camargue, alimentation naturelle, race Raço di Biòu, et transformation locale. C'est un gage de qualité et d'authenticité."
    },
    {
      question: "La viande de taureau est-elle forte ?",
      answer: "La viande de taureau de Camargue a un goût plus prononcé que le bœuf, avec une saveur authentique et caractéristique du terroir. Elle n'est pas \"forte\" au sens désagréable, mais offre une expérience gustative riche et intense, appréciée des amateurs de viande de caractère."
    },
    {
      question: "Comment cuisiner la viande de taureau ?",
      answer: "La viande de taureau se prête particulièrement bien aux cuissons mijotées comme la gardianne (ragoût traditionnel camarguais au vin rouge). Les pavés peuvent être grillés ou poêlés, idéalement saignants à point. Les côtes sont excellentes braisées ou au barbecue. Une marinade préalable est souvent recommandée."
    },
    {
      question: "Où trouver la viande de taureau de Camargue ?",
      answer: "Localizz travaille en partenariat direct avec les Abattoirs du Pays d'Arles pour fournir la viande de taureau de Camargue AOP aux professionnels de la restauration collective en région PACA. Contactez-nous pour connaître la disponibilité et les modalités de commande."
    }
  ];

  return (
    <>
      <SEO
        title="Taureaux de Camargue AOP – Viande locale et produits du terroir"
        description="Découvrez la viande de taureau de Camargue AOP : élevage en liberté, terroir unique, produits locaux issus des manades camarguaises. En partenariat avec les Abattoirs du Pays d'Arles."
        keywords={["viande de taureau de Camargue", "taureau viande", "viande AOP Camargue", "taureau de Camargue", "produits locaux Camargue", "élevage de taureau Camargue", "gardianne de taureau", "manades camarguaises", "race Raço di Biòu"]}
        url="https://www.localizz.fr/taureaux-de-camargue-aop"
        image="/lovable-uploads/taureau-camargue.png"
        type="article"
        canonicalUrl="https://www.localizz.fr/taureaux-de-camargue-aop"
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Nos produits', url: '/notre-offre' },
          { name: 'Viandes et Poissons', url: '/nos-produits/viandes' },
          { name: 'Taureau de Camargue AOP', url: '/taureaux-de-camargue-aop' }
        ]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <PhoneBanner />
        
      


        {/* Le taureau de Camargue, symbole du territoire */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Le taureau de Camargue, symbole du territoire</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  La <strong>Camargue</strong> est un territoire unique où se mêlent marais, étangs salés et traditions taurines séculaires. 
                  Les <strong>manades</strong>, ces troupeaux de taureaux élevés en semi-liberté, font partie intégrante du paysage et de l'identité camarguaise. 
                  Les gardians perpétuent un savoir-faire ancestral, respectant les cycles naturels et le bien-être animal dans un <strong>élevage extensif</strong> exemplaire.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le <strong>taureau de Camargue</strong>, de race <strong>Raço di Biòu</strong>, se distingue par son pelage noir profond et ses cornes en lyre caractéristiques. 
                  Animal emblématique de la région, il évolue librement dans les pâturages salés, se nourrissant d'herbes naturelles et de végétaux locaux. 
                  Cette vie en plein air confère à sa viande des qualités organoleptiques exceptionnelles, reflet authentique du terroir camarguais.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/taureau-camargue.png" 
                  alt="Taureau de Camargue en liberté dans les marais, race Raço di Biòu"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Une viande d'exception issue du terroir */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Une viande d'exception issue du terroir</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La <strong>viande de taureau AOP</strong> se caractérise par sa couleur rouge intense, son faible taux de matière grasse et son goût prononcé. 
                Plus maigre que le bœuf traditionnel, elle est particulièrement <strong>riche en fer</strong> et en protéines de qualité. 
                Sa texture ferme et sa saveur authentique en font une <strong>viande camarguaise</strong> recherchée par les amateurs de produits de caractère.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cette viande d'exception se distingue du bœuf par son élevage unique en Camargue et son alimentation naturelle variée. 
                Le mode d'élevage extensif et le terroir salin confèrent à la viande des qualités nutritionnelles supérieures et une typicité gustative incomparable. 
                C'est un <strong>produit local durable</strong> qui s'inscrit parfaitement dans les critères de qualité de la restauration collective, 
                notamment dans le cadre de la <a href="/loi-egalim" className="text-primary hover:text-secondary underline font-semibold">loi EGAlim</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Nos produits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nos produits à base de taureau de Camargue</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Notre producteur partenaire */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Notre producteur partenaire : Abattoirs du Pays d'Arles</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Localizz travaille en partenariat direct avec les <strong>Abattoirs du Pays d'Arles</strong>, acteur majeur de la filière 
                  <strong> AOP Taureau de Camargue</strong>. Cette collaboration garantit la traçabilité complète, depuis les <strong>manades de Camargue</strong> 
                  jusqu'aux cuisines de nos clients professionnels.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Les Abattoirs du Pays d'Arles s'engagent à respecter le cahier des charges strict de l'AOP, valorisant un <strong>élevage en plein air</strong> 
                  respectueux du bien-être animal et des traditions camarguaises. La transformation locale et le savoir-faire artisanal préservent 
                  toutes les qualités de cette viande d'exception.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/taureauproducteur.png" 
                  alt="Manade camarguaise partenaire de Localizz, élevage de taureaux en liberté"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">FAQ : viande de taureau de Camargue</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Découvrez d'autres produits locaux */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Découvrez d'autres produits locaux</h2>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => { navigate('/nos-produits/cremeries'); window.scrollTo(0, 0); }}
              >
                Beurre, oeuf et fromage
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => { navigate('/nos-produits/epicerie'); window.scrollTo(0, 0); }}
              >
                Notre Epicerie
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => { navigate('/notre-offre'); window.scrollTo(0, 0); }}
              >
                Notre offre complète
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl text-primary mb-4">
                  Intéressé par la viande de taureau de Camargue ?
                </CardTitle>
                <CardDescription className="text-lg">
                  Contactez-nous pour découvrir les produits disponibles ou devenir partenaire distributeur.
                  Nous vous accompagnons dans l'approvisionnement de viandes locales de qualité pour votre restauration collective.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  onClick={handleContactUs}
                  className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg"
                >
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <BannerSection />
        <Footer />
      </div>
    </>
  );
};

export default TaureauCamargue;
