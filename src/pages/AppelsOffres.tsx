import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileText, CheckCircle, BarChart3, Users, Clock, Shield, MapPin } from 'lucide-react';

const AppelsOffres = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const faqItems = [
    {
      question: 'Quels types de marchés publics alimentaires pouvez-vous fournir ?',
      answer: 'Localizz répond aux MAPA (Marchés à Procédure Adaptée), aux marchés formalisés et aux accords-cadres alimentaires des collectivités de la région PACA. Nous couvrons les lots fruits et légumes, viandes, crémerie et épicerie fine.',
    },
    {
      question: 'Fournissez-vous les justificatifs EGAlim pour les marchés publics ?',
      answer: 'Oui, nous transmettons avec chaque livraison les justificatifs d\'origine exploitation par exploitation. Nous fournissons également des statistiques d\'achats EGAlim sur demande pour vous aider à piloter vos taux et préparer vos bilans annuels.',
    },
    {
      question: 'Dans quels départements PACA répondez-vous aux appels d\'offres ?',
      answer: 'Nous répondons aux marchés publics alimentaires des 6 départements PACA : Bouches-du-Rhône (13), Var (83), Alpes-Maritimes (06), Vaucluse (84), Alpes-de-Haute-Provence (04) et Hautes-Alpes (05).',
    },
    {
      question: 'Comment se déroule une réponse à un appel d\'offres avec Localizz ?',
      answer: 'Contactez-nous en amont de votre consultation ou transmettez-nous le cahier des charges. Nous analysons les lots, vérifions la disponibilité auprès de nos 150 producteurs partenaires, et construisons une offre conforme aux exigences du marché.',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Appels d'offres et marchés publics alimentaires PACA - Localizz"
        description="Localizz répond aux MAPA et marchés publics alimentaires en région PACA. Fournisseur de produits locaux pour collectivités : traçabilité complète, conformité EGAlim, 150 producteurs partenaires."
        keywords={[
          'appels offres alimentaires paca',
          'mapa restauration collective',
          'marché public denrées alimentaires',
          'fournisseur collectivités paca',
          'lot alimentaire marché public',
          'cahier des charges restauration collective',
          'fournisseur mapa fruits légumes',
          'marché public produits locaux',
          'egalim marché public',
          'fournisseur cantine marché public',
        ]}
        canonicalUrl="https://www.localizz.fr/appels-offres-marches-publics-paca"
        faqItems={faqItems}
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Appels d\'offres PACA', url: '/appels-offres-marches-publics-paca' },
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
                Appels d'offres et marchés publics alimentaires en PACA
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Localizz répond aux MAPA et marchés formalisés des collectivités de la région Sud.
                Près de 150 producteurs partenaires, traçabilité complète, conformité EGAlim garantie.
              </p>
              <div className="mt-8">
                <Button
                  className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-4 px-8"
                  onClick={handleContact}
                >
                  Nous consulter pour votre marché
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
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-600">traçabilité garantie</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute top-16 right-10 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Notre accompagnement sur vos marchés publics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-accent text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Réponse aux MAPA</h3>
                <p className="text-gray-600">
                  Nous répondons aux Marchés à Procédure Adaptée des collectivités PACA :
                  communes, intercommunalités, départements, établissements publics.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-accent text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Reporting EGAlim</h3>
                <p className="text-gray-600">
                  Statistiques d'achats sur demande pour piloter vos taux de produits durables
                  et préparer vos bilans annuels EGAlim.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-accent text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Traçabilité complète</h3>
                <p className="text-gray-600">
                  Justificatifs d'origine transmis à chaque livraison, exploitation par exploitation.
                  Documents conformes pour vos audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lots Section */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-8 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-8 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Les lots alimentaires que nous couvrons
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Tous nos produits sont sourcés exclusivement auprès de producteurs de la région Sud,
              dans un rayon de 200 km maximum.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Fruits et légumes</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Maraîchage du Vaucluse et de la Crau</li>
                  <li>• Fruits de saison du Lubéron</li>
                  <li>• Gamme bio certifiée</li>
                  <li>• Livraison à juste maturité</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Viandes</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Boeuf HVE région Sud</li>
                  <li>• Taureau de Camargue AOP</li>
                  <li>• Agneau du Lubéron</li>
                  <li>• Porc plein air de la Crau</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Crémerie</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Yaourts bio des Alpes du Sud</li>
                  <li>• Fromages fermiers locaux</li>
                  <li>• Banon AOP</li>
                  <li>• Oeufs plein air certifiés</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-3">Épicerie</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Riz de Camargue IGP</li>
                  <li>• Miel de Provence</li>
                  <li>• Légumineuses locales</li>
                  <li>• Produits transformés artisanaux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Localizz Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Pourquoi choisir Localizz pour vos marchés publics ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-accent/50 p-5 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">150 producteurs partenaires</h3>
                  <p className="text-gray-700 text-sm">
                    Un réseau de producteurs audités et suivis par nos 3 ingénieurs agronomes.
                    Planification annuelle des cultures en fonction de vos volumes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-accent/50 p-5 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Conformité EGAlim</h3>
                  <p className="text-gray-700 text-sm">
                    Produits labellisés AOP, IGP, Bio, HVE, Label Rouge pour atteindre
                    vos 50% de produits durables et 20% de bio.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-accent/50 p-5 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Flux tendu garanti</h3>
                  <p className="text-gray-700 text-sm">
                    Produits collectés chez les producteurs et livrés sans stock intermédiaire.
                    Fraîcheur et DLC longues garanties.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-accent/50 p-5 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Interlocuteur unique</h3>
                  <p className="text-gray-700 text-sm">
                    Localizz est l'unique intermédiaire entre vous et les producteurs.
                    Une seule facture, une seule livraison multiproduits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="relative py-20 bg-accent overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Couverture géographique
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Nous répondons aux appels d'offres et livrons les établissements publics
              des 6 départements de la région PACA.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Bouches-du-Rhône (13)', desc: 'Marseille, Aix, Arles et toutes les communes du département.' },
                { name: 'Var (83)', desc: 'Toulon, Hyères, Draguignan et l\'ensemble du littoral varois.' },
                { name: 'Alpes-Maritimes (06)', desc: 'Nice, Cannes, Antibes et les vallées de l\'arrière-pays.' },
                { name: 'Vaucluse (84)', desc: 'Avignon, Carpentras, Cavaillon et le Comtat Venaissin.' },
                { name: 'Alpes-de-Haute-Provence (04)', desc: 'Digne, Manosque, Forcalquier et le Lubéron.' },
                { name: 'Hautes-Alpes (05)', desc: 'Gap, Briançon, Embrun et les vallées alpines.' },
              ].map((dept) => (
                <div key={dept.name} className="bg-white p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-primary">{dept.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{dept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 bg-white overflow-hidden">
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Questions fréquentes sur les marchés publics
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
              Un marché public à venir ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre cahier des charges.
              Nous vous accompagnons dans la structuration de votre approvisionnement local.
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

export default AppelsOffres;
