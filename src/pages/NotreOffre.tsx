
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Notre Gamme</h2>
              
              {/* Description */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Plus de 700 références de produits alimentaires sourcés dans la région Sud pour les professionnels de la restauration
                </p>
              </div>

              {/* Grille des 4 catégories */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Viandes & Poissons */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM1 3c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1h13l-4 7.68c-.25.5-.76.82-1.31.82H6.75c-.65 0-1.26-.42-1.49-1.03L3.58 5H2c-.55 0-1-.45-1-1V3z"/>
                        </svg>
                      </div>
                      Viandes & Poissons
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-gray-700">
                      <p>• <strong>Bœuf</strong> en race à viande HVE et BIO</p>
                      <p>• <strong>Porc</strong> plein air des Alpes et de la plaine de la Crau HVE et BIO</p>
                      <p>• <strong>Agneau</strong> du Lubéron et de la Plaine de La Crau HVE et BIO</p>
                      <p>• <strong>Volailles</strong> Label Rouge et BIO</p>
                      <p>• <strong>Taureau de Camargue</strong> AOP</p>
                      <p>• <strong>Loup du Frioul</strong> BIO</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Produits laitiers et Œufs */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      Produits laitiers & Œufs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-gray-700">
                      <p>• <strong>Fromage blanc, crème et yaourt</strong> conditionnés en pots de 100g, 1kg et 5kg</p>
                      <p>• <strong>Fromages</strong> pasteurisés ou au lait cru à la découpe</p>
                      <p>• <strong>Œufs</strong> en 100% plein air ou BIO : en coquille ou en coule !</p>
                      <p>• <strong>Beurre, lait...</strong></p>
                    </div>
                  </CardContent>
                </Card>

                {/* Fruits & Légumes */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9l-5.91 5.74L17.18 22 12 19.27 6.82 22l1.09-7.26L2 9l6.91-1.74L12 2z"/>
                        </svg>
                      </div>
                      Fruits & Légumes
                    </CardTitle>
                    <p className="text-green-600 font-semibold italic">de saison uniquement !</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-gray-700">
                      <p>• <strong>1ère et 4ème gamme</strong> avec des calibres selon vos besoins</p>
                      <p>• <strong>Récoltés à juste maturité</strong> pour vos jours de consommation</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Épicerie */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-amber-500">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                        </svg>
                      </div>
                      Épicerie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-gray-700">
                      <p>• <strong>Légumineuses</strong> équitables</p>
                      <p>• <strong>Farines</strong> BIO</p>
                      <p>• <strong>Riz de Camargue</strong> IGP</p>
                      <p>• <strong>Semoules/pâtes</strong> BIO</p>
                      <p>• <strong>Confitures</strong> au chaudron</p>
                      <p>• <strong>Tartinables</strong></p>
                      <p>• <strong>Miel</strong> IGP et Label Rouge</p>
                      <p>• <strong>Conserves</strong></p>
                      <p>• <strong>Jus</strong> HVE...</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
