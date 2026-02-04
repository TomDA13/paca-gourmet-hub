import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Apple, Beef, Egg, Package, Truck, ShieldCheck, Users, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface CityLandingData {
  slug: string;
  cityName: string;
  department: string;
  departmentNumber: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: string;
  clients: {
    title: string;
    items: string[];
  };
  products: {
    intro: string;
    highlights: string[];
  };
  logistics: {
    intro: string;
    points: string[];
  };
  egalim: {
    intro: string;
    points: string[];
  };
  faqItems: Array<{ question: string; answer: string }>;
}

const CityLandingPage = ({ data }: { data: CityLandingData }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        url={`/${data.slug}`}
        canonicalUrl={`https://www.localizz.fr/${data.slug}`}
        faqItems={data.faqItems}
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: `Fournisseur ${data.cityName}`, url: `/${data.slug}` },
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
                {data.hero.headline}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {data.hero.subheadline}
              </p>
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
                  onClick={handleContact}
                >
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-5xl">
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              {data.intro}
            </p>

            {/* Clients ciblés */}
            <h2 className="text-3xl font-bold text-primary mb-8">{data.clients.title}</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {data.clients.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i % 4 === 0 && <Building className="w-4 h-4 text-primary" />}
                    {i % 4 === 1 && <Users className="w-4 h-4 text-primary" />}
                    {i % 4 === 2 && <ShieldCheck className="w-4 h-4 text-primary" />}
                    {i % 4 === 3 && <Truck className="w-4 h-4 text-primary" />}
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
                onClick={handleContact}
              >
                Contactez-nous pour un devis
              </Button>
            </div>
          </div>
        </section>

        {/* Gamme de produits */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute top-16 right-10 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-5xl">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Plus de 700 références de produits locaux PACA
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {data.products.intro}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <button onClick={() => handleNavigate('/nos-produits/fruits-et-legumes')} className="bg-accent/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-left group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <Apple className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">Fruits & Légumes</h3>
                </div>
                <p className="text-gray-600">De saison, récoltés à juste maturité, en 1ère et 4ème gamme. Calibres adaptés à la restauration collective.</p>
              </button>

              <button onClick={() => handleNavigate('/nos-produits/viandes')} className="bg-accent/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-left group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <Beef className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">Viandes</h3>
                </div>
                <p className="text-gray-600">Boeuf HVE/Bio, agneau du Lubéron, porc plein air de la Crau, taureau de Camargue AOP, volaille Label Rouge.</p>
              </button>

              <button onClick={() => handleNavigate('/nos-produits/cremeries')} className="bg-accent/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-left group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                    <Egg className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">Crémerie & Oeufs</h3>
                </div>
                <p className="text-gray-600">Fromages fermiers des Alpes du Sud, yaourts bio, oeufs plein air, Banon AOP. Direct producteurs.</p>
              </button>

              <button onClick={() => handleNavigate('/nos-produits/epicerie')} className="bg-accent/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 text-left group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">Épicerie</h3>
                </div>
                <p className="text-gray-600">Riz de Camargue IGP, légumineuses équitables, farines bio, miel de Provence, confitures artisanales.</p>
              </button>
            </div>

            {data.products.highlights.length > 0 && (
              <div className="bg-accent/30 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-primary mb-3">Spécialités disponibles pour {data.cityName} :</h3>
                <ul className="space-y-2">
                  {data.products.highlights.map((h, i) => (
                    <li key={i} className="text-gray-700">• {h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Logistique */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-5xl">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Livraison à {data.cityName} et dans tout le {data.department}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {data.logistics.intro}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.logistics.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EGAlim */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-5xl">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Conformité loi EGAlim à {data.cityName}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {data.egalim.intro}
            </p>
            <div className="space-y-4 mb-12">
              {data.egalim.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-accent/30 p-5 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg py-4 px-8"
                onClick={() => handleNavigate('/loi-egalim')}
              >
                Guide complet loi EGAlim en PACA
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {data.faqItems.length > 0 && (
          <section className="relative py-20 bg-accent overflow-hidden">
            <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-5xl">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {data.faqItems.map((faq, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="relative py-16 bg-primary overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Approvisionnez votre établissement à {data.cityName} en produits 100% locaux
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Demandez un devis adapté à vos volumes et vos besoins. Réponse sous 24h.
            </p>
            <Button
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-10"
              onClick={handleContact}
            >
              Demander un devis
            </Button>
          </div>
        </section>
      </main>

      <BannerSection />
      <Footer />
    </div>
  );
};

export default CityLandingPage;
