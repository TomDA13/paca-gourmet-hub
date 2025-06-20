
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Beef, Egg, Apple, Package, Truck, Link, Award, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotreOffre = () => {
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section - Dark background */}
        <section className="relative py-20 bg-primary overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-16 right-12 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-12 w-20 h-20 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Notre Offre
              </h1>
            </div>
          </div>
        </section>

        {/* Notre Gamme Section - Light background */}
        <section id="notre-gamme" className="relative py-20 bg-accent overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white p-8 rounded-lg shadow-sm">
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
                        <Beef className="w-5 h-5 text-white" />
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
                        <Egg className="w-5 h-5 text-white" />
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
                        <Package className="w-5 h-5 text-white" />
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
          </div>
        </section>

        {/* Logistique optimisée Section - White background */}
        <section id="logistique-optimisee" className="relative py-20 bg-white overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-16 right-10 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-accent p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Logistique optimisée</h2>
              
              {/* Description */}
              <div className="text-center mb-12">
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  une logistique en circuit court et en flux tendu basée sur une économie circulaire
                </p>
              </div>

              {/* Espace pour le schéma logistique */}
              <div className="bg-gray-50 p-8 rounded-lg text-center mb-8">
                <p className="text-gray-500 italic">
                  Schéma logistique à venir...
                </p>
              </div>

              {/* Bouton Rejoignez-nous */}
              <div className="text-center">
                <Button 
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
                  onClick={handleJoinUs}
                >
                  Rejoignez-nous
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Un service 360° Section - Light background */}
        <section id="service-360" className="relative py-20 bg-accent overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-20 left-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-8 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-xl border border-secondary/20">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Un service 360°</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Point 1 */}
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-l-blue-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Une solution logistique clé en main pour les professionnels de la restauration</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Périmètre de livraison (13,84,04,05,06,83) :</strong> Livraison quotidienne de produits <strong>100% Sud PACA</strong> en palettes multiproduits avec nos propres camions</p>
                        <p><strong>Approvisionnements :</strong> Produits collectés directement chez les producteurs par nos chauffeurs</p>
                        <p><strong>0 gaspi :</strong> grâce à une logistique en flux tendu</p>
                        <p><strong>Juste maturité :</strong> Fruits et légumes récoltés au plus proche de votre jour de livraison</p>
                        <p><strong>Ultra frais :</strong> Viandes, épicerie et BOF produits à la demande pour des DLC et DDM longues</p>
                        <p><strong>Economie circulaire :</strong> Récupération des cagettes sur vos restaurants pour les ramener aux producteurs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-l-green-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Link className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Une chaîne de valeurs optimisée grâce aux circuits courts</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Circuit court local :</strong> Localizz est l'unique intermédiaire entre vous et les producteurs</p>
                        <p><strong>Juste rémunération :</strong> garantie aux producteurs en fonction de leurs coûts de production réels</p>
                        <p><strong>Prix compétitifs et cohérents :</strong> pour vous grâce à une logistique optimisée</p>
                        <p><strong>Valoriser votre terroir :</strong> Un accès direct à votre bassin de producteurs ultra locaux</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-l-orange-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Des produits locaux de qualité adaptés à votre segment d'activité</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Qualité des produits :</strong> Agréage lors des ramasses, à réception et avant livraison</p>
                        <p><strong>Juste maturité des fruits :</strong> récoltés à maturité et livrés en fonction de vos jours de consommation</p>
                        <p><strong>Calibres :</strong> Adaptés à vos besoins et coûts portions</p>
                        <p><strong>Fruits et légumes moches :</strong> Pour soutenir les producteurs et vous proposer des produits hors calibres à moindre coût</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-3">Des outils de communication pour redonner du sens à une consommation de proximité</h3>
                      <div className="space-y-3 text-gray-700">
                        <p><strong>Supports de communication :</strong> Transmis à chaque livraison pour valoriser les producteurs auprès de vos convives</p>
                        <p><strong>Animations :</strong> au sein de votre structure pour sensibiliser vos convives</p>
                        <p><strong>Visites d'exploitations agricoles :</strong> pour les enfants et les chefs, afin de recréer du lien et du sens</p>
                        <p><strong>Formations :</strong> via Le Loubatas, membre des Cuisines Nourricières</p>
                        <p><strong>Statistiques d'achats :</strong> transmis à la demande pour piloter vos achats EGALIM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default NotreOffre;
