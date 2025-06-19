
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotreOffre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Notre Offre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de produits locaux et nos services personnalisés
            </p>
          </div>

          {/* Notre Gamme Section */}
          <section id="notre-gamme" className="mb-20">
            <div className="bg-accent p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Notre Gamme</h2>
              <p className="text-gray-700 text-lg">
                Contenu à venir pour la section Notre Gamme...
              </p>
            </div>
          </section>

          {/* Logistique optimisée Section */}
          <section id="logistique-optimisee" className="mb-20">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">Logistique optimisée</h2>
              <p className="text-gray-700 text-lg">
                Contenu à venir pour la section Logistique optimisée...
              </p>
            </div>
          </section>

          {/* Livraisons 100% locale Section */}
          <section id="livraisons-locale" className="mb-20">
            <div className="bg-secondary/10 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Livraisons 100% locale</h2>
              <p className="text-gray-700 text-lg">
                Contenu à venir pour la section Livraisons 100% locale...
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotreOffre;
