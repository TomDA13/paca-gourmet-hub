import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import PhoneBanner from '@/components/PhoneBanner';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TaureauCamargue = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const products = [
    { name: "Gardianne de taureau AOP", image: "/lovable-uploads/gardianne-taureau-camargue.png", alt: "Gardianne de taureau de Camargue AOP prête à cuisiner pour restauration collective" },
    { name: "Pavé Camarguais AOP", image: "/lovable-uploads/pave-camarguais-aop.png", alt: "Pavé de taureau de Camargue AOP, viande rouge maigre" },
    { name: "Côtes de Taureau AOP", image: "/lovable-uploads/cotes-taureau-manades.png", alt: "Côtes de taureau de Camargue AOP issues des manades" },
    { name: "Merguez au Taureau AOP", image: "/lovable-uploads/mergueztaureau.png", alt: "Merguez au taureau de Camargue AOP" },
    { name: "Saucissette Camarguaise AOP", image: "/lovable-uploads/saucissetaureau.png", alt: "Saucissette camarguaise de taureau AOP" },
    { name: "Saucisson au Taureau AOP", image: "/lovable-uploads/saucissontaureau.png", alt: "Saucisson au taureau de Camargue AOP" }
  ];

  const faqItems = [
    { question: "Quelle différence avec le bœuf ?", answer: "Le taureau de Camargue (Raço di Biòu) est élevé en plein air en manade. Viande plus rouge, plus maigre, goût plus marqué. Idéal en mijotés et grillades." },
    { question: "Qu'est-ce que l'AOP Taureau de Camargue ?", answer: "Appellation d'Origine Protégée garantissant l'origine camarguaise, l'élevage extensif en zone humide et la transformation locale selon cahier des charges." },
    { question: "Comment l'intégrer en restauration collective ?", answer: "En gardianne, bourguignon, pavé grillé. Conditionnements adaptés, traçabilité fournie et supports de communication. Planification possible avec nos équipes." },
    { question: "Où est-elle disponible ?", answer: "Approvisionnement via Localizz pour PACA (collectivités, cuisines centrales). Contactez-nous pour volumes et fréquences." }
  ];

  return (
    <>
      <SEO
        title="Viande de taureau de Camargue AOP — Approvisionnement PACA (collective & CHR)"
        description="Approvisionnement en viande de taureau de Camargue AOP pour restauration collective et commerciale en PACA. Filière locale, traçabilité manades, partenaire : Abattoirs de Tarascon."
        keywords={[
          "viande de taureau de Camargue",
          "taureau de Camargue AOP",
          "approvisionnement restauration collective",
          "produits locaux PACA",
          "manades Camargue",
          "gardianne de taureau"
        ]}
        url="https://www.localizz.fr/taureaux-de-camargue-aop"
        image="/lovable-uploads/taureau-camargue.png"
        type="article"
        canonicalUrl="https://www.localizz.fr/taureaux-de-camargue-aop"
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Nos produits', url: '/notre-offre' },
          { name: 'Viandes et produits du terroir', url: '/nos-produits/viandes' },
          { name: 'Viande de taureau de Camargue AOP', url: '/taureaux-de-camargue-aop' }
        ]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <PhoneBanner />

        {/* H1 + intro avec photo à droite */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold text-primary mb-4">
                  Viande de taureau de Camargue AOP
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Localizz approvisionne en <strong>viande de taureau de Camargue AOP</strong> la <strong>restauration collective</strong> (cantines, cuisines centrales) et la <strong>restauration commerciale</strong> (CHR) en région PACA.
                  Filière locale, élevage extensif en manade, <strong>traçabilité</strong> complète et références adaptées aux usages professionnels.
                 
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/taureau-camargue.png"
                  alt="Taureau de Camargue AOP en liberté dans les marais"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Produits + bouton En savoir plus */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nos références disponibles</h2>
            <div className="grid md:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {products.map((p, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.image} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader><CardTitle className="text-base text-primary">{p.name}</CardTitle></CardHeader>
                </Card>
              ))}
              
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Volumes récurrents possibles. Fiches techniques et traçabilité sur demande.
            </p>
            <div className="mt-8 flex justify-center">

              <Button
                onClick={handleContactUs}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6 px-8 mt-8"
              >
                En savoir plus
              </Button>
            </div>

          </div>
        </section>

   

        {/* Une viande d'exception */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Une viande d'exception issue du terroir</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La <strong>viande de taureau AOP</strong> se distingue par sa couleur rouge intense, son faible taux de matière grasse et son goût prononcé.
                Plus maigre que le bœuf traditionnel, elle est <strong>riche en fer</strong> et en protéines de qualité. Texture ferme, saveur authentique, idéale pour une <strong>viande camarguaise</strong> de caractère.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'élevage extensif en Camargue et l'alimentation naturelle confèrent une typicité unique.
                Ce <strong>produit local durable</strong> s'intègre aux critères de qualité de la restauration collective, notamment dans le cadre de la
                <a href="/actualites/loi-egalim-restauration-collective-paca-2025" className="text-primary hover:text-secondary underline font-semibold"> loi EGAlim</a>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pour en savoir plus sur cette filière unique, découvrez notre article :{' '}
                <a href="/actualites/filiere-taureau-camargue-aop-paca" className="text-primary hover:text-secondary underline font-semibold">
                  Filière Taureau de Camargue AOP : des manades à la restauration collective
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Producteur partenaire */}
        <section id="filiere-aop" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Notre producteur partenaire : Abattoirs de Tarascon</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Partenariat direct avec les <strong>Abattoirs de Tarascon</strong>, acteur clé de la filière
                  <strong> AOP Taureau de Camargue</strong>. Traçabilité maîtrisée, de la manade aux cuisines.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Respect du cahier des charges AOP : <strong>élevage en plein air</strong> en zones humides camarguaises, transformation locale,
                  savoir-faire préservé. Qualité régulière et conformité pour la restauration professionnelle.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Découvrez{' '}
                  <a href="/actualites/filiere-taureau-camargue-aop-paca" className="text-primary hover:text-secondary underline font-semibold">
                    notre article complet sur la filière AOP Taureau de Camargue
                  </a>{' '}
                  pour comprendre tous les enjeux de cette production unique.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/lovable-uploads/taureauproducteur.png"
                  alt="Filière AOP Taureau de Camargue avec Abattoirs de Tarascon, manades et transformation locale"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">FAQ viande de taureau</h2>
            <div className="space-y-6">
              {faqItems.map((item, idx) => (
                <Card key={idx}>
                  <CardHeader><CardTitle className="text-lg text-primary">{item.question}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground leading-relaxed">{item.answer}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       

        <BannerSection />
        <Footer />
      </div>
    </>
  );
};

export default TaureauCamargue;
