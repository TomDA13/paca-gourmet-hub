
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Wheat, Apple, Package, Truck, Target, Award, MessageCircle } from 'lucide-react';

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
          </div>

          {/* Notre Gamme Section */}
          <section id="notre-gamme" className="mb-20">
            <div className="bg-accent p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Notre Gamme</h2>
              
              {/* Description */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Plus de <strong>700 références</strong> de produits alimentaires sourcés dans la région Sud pour les professionnels de la restauration
                </p>
              </div>

              {/* Grille des 4 catégories */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Viandes & Poissons */}
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold text-primary flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <ShoppingCart className="w-5 h-5 text-white" />
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
                        <Package className="w-5 h-5 text-white" />
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
                        <Apple className="w-5 h-5 text-white" />
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
                        <Wheat className="w-5 h-5 text-white" />
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
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Logistique optimisée</h2>
              
              {/* Description */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  une logistique en circuit court et en flux tendu basée sur une économie circulaire
                </p>
              </div>

              {/* Espace pour le schéma logistique */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-gray-500 italic">
                  Schéma logistique à venir...
                </p>
              </div>
            </div>
          </section>

          {/* Livraisons 100% locale Section - Style complètement différent */}
          <section id="livraisons-locale" className="mb-20">
            <div className="bg-primary text-white p-12 rounded-2xl relative overflow-hidden">
              {/* Effet de fond décoratif */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-center">Livraisons 100% locales</h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-16"></div>
                
                {/* Liste des 4 points en style minimaliste */}
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Point 1 */}
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed">
                        Une solution logistique clé en main pour les professionnels de la restauration
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed">
                        Une chaîne de valeurs optimisée grâce aux circuits courts
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed">
                        Des produits locaux de qualité adaptés à votre segment d'activité
                      </p>
                    </div>
                  </div>

                  {/* Point 4 */}
                  <div className="flex items-center space-x-6 group">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl leading-relaxed">
                        Des outils de communication pour redonner du sens à une consommation de proximité
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotreOffre;
