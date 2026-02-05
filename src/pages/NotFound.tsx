import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Notre Offre", href: "/notre-offre", description: "Découvrez nos 700+ produits locaux" },
    { name: "Fruits & Légumes", href: "/nos-produits/fruits-et-legumes", description: "Récoltés à juste maturité" },
    { name: "Viandes locales", href: "/nos-produits/viandes", description: "Taureau de Camargue AOP, agneau..." },
    { name: "Loi EGAlim", href: "/loi-egalim", description: "Guide conformité 2025" },
    { name: "Nos Producteurs", href: "/nos-producteurs-paca", description: "150 partenaires en PACA" },
    { name: "Contact", href: "/contact", description: "Demandez un devis" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page non trouvée - Erreur 404"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez nos produits locaux PACA et services pour la restauration collective."
        url="/404"
      />
      <Header />

      <main className="flex-grow bg-accent/20">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-8xl font-bold text-white/20 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page non trouvée
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              La page que vous recherchez n'existe pas ou a été déplacée.
              Pas de panique, retrouvez facilement ce que vous cherchez !
            </p>
          </div>
        </section>

        {/* Actions rapides */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <a href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Retour à l'accueil
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous contacter
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                onClick={() => window.history.back()}
              >
                <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Page précédente
                </a>
              </Button>
            </div>

            {/* Pages populaires */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-primary text-center mb-8">
                <Search className="w-6 h-6 inline-block mr-2" />
                Pages les plus consultées
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {popularPages.map((page) => (
                  <a
                    key={page.href}
                    href={page.href}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border-l-4 border-primary"
                  >
                    <h4 className="font-semibold text-primary mb-1">{page.name}</h4>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Vous cherchez un produit spécifique ou avez une question ?
            </p>
            <p className="text-xl font-semibold text-primary">
              Appelez-nous au <a href="tel:+33782352127" className="text-secondary hover:underline">07 82 35 21 27</a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
