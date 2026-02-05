import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, BarChart3, Users, Clock, Shield } from 'lucide-react';

const AppelsOffres = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels types de marchés publics alimentaires pouvez-vous fournir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Localizz répond aux MAPA (Marchés à Procédure Adaptée), aux marchés formalisés et aux accords-cadres alimentaires des collectivités de la région PACA. Nous couvrons les lots fruits et légumes, viandes, crémerie et épicerie fine.',
        },
      },
      {
        '@type': 'Question',
        name: 'Fournissez-vous les justificatifs EGAlim pour les marchés publics ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous transmettons avec chaque livraison les justificatifs d\'origine exploitation par exploitation. Nous fournissons également des statistiques d\'achats EGAlim sur demande pour vous aider à piloter vos taux et préparer vos bilans annuels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Dans quels départements PACA répondez-vous aux appels d\'offres ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous répondons aux marchés publics alimentaires des 6 départements PACA : Bouches-du-Rhône (13), Var (83), Alpes-Maritimes (06), Vaucluse (84), Alpes-de-Haute-Provence (04) et Hautes-Alpes (05).',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment se déroule une réponse à un appel d\'offres avec Localizz ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contactez-nous en amont de votre consultation ou transmettez-nous le cahier des charges. Nous analysons les lots, vérifions la disponibilité auprès de nos 150 producteurs partenaires, et construisons une offre conforme aux exigences du marché.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
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
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-paca-green/10 to-paca-olive/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-paca-earth mb-6">
                Appels d'offres et marchés publics alimentaires en PACA
              </h1>
              <p className="text-lg md:text-xl text-paca-stone mb-8">
                Localizz répond aux MAPA et marchés formalisés des collectivités de la région Sud.
                Près de 150 producteurs partenaires, traçabilité complète, conformité EGAlim garantie.
              </p>
              <Button asChild size="lg" className="bg-paca-green hover:bg-paca-olive">
                <Link to="/contact">Nous consulter pour votre marché</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Notre accompagnement sur vos marchés publics
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">Réponse aux MAPA</h3>
                <p className="text-paca-stone">
                  Nous répondons aux Marchés à Procédure Adaptée des collectivités PACA :
                  communes, intercommunalités, départements, établissements publics.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">Reporting EGAlim</h3>
                <p className="text-paca-stone">
                  Statistiques d'achats sur demande pour piloter vos taux de produits durables
                  et préparer vos bilans annuels EGAlim.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">Traçabilité complète</h3>
                <p className="text-paca-stone">
                  Justificatifs d'origine transmis à chaque livraison, exploitation par exploitation.
                  Documents conformes pour vos audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lots Section */}
        <section className="py-16 bg-paca-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-4">
              Les lots alimentaires que nous couvrons
            </h2>
            <p className="text-center text-paca-stone mb-12 max-w-2xl mx-auto">
              Tous nos produits sont sourcés exclusivement auprès de producteurs de la région Sud,
              dans un rayon de 200 km maximum.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-paca-earth mb-3">Fruits et légumes</h3>
                <ul className="text-paca-stone space-y-2 text-sm">
                  <li>Maraîchage du Vaucluse et de la Crau</li>
                  <li>Fruits de saison du Lubéron</li>
                  <li>Gamme bio certifiée</li>
                  <li>Livraison à juste maturité</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-paca-earth mb-3">Viandes</h3>
                <ul className="text-paca-stone space-y-2 text-sm">
                  <li>Boeuf HVE région Sud</li>
                  <li>Taureau de Camargue AOP</li>
                  <li>Agneau du Lubéron</li>
                  <li>Porc plein air de la Crau</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-paca-earth mb-3">Crémerie</h3>
                <ul className="text-paca-stone space-y-2 text-sm">
                  <li>Yaourts bio des Alpes du Sud</li>
                  <li>Fromages fermiers locaux</li>
                  <li>Banon AOP</li>
                  <li>Oeufs plein air certifiés</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-paca-earth mb-3">Épicerie</h3>
                <ul className="text-paca-stone space-y-2 text-sm">
                  <li>Riz de Camargue IGP</li>
                  <li>Miel de Provence</li>
                  <li>Légumineuses locales</li>
                  <li>Produits transformés artisanaux</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Localizz Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Pourquoi choisir Localizz pour vos marchés publics ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-paca-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-paca-earth mb-2">150 producteurs partenaires</h3>
                  <p className="text-paca-stone text-sm">
                    Un réseau de producteurs audités et suivis par nos 3 ingénieurs agronomes.
                    Planification annuelle des cultures en fonction de vos volumes.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-paca-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-paca-earth mb-2">Conformité EGAlim</h3>
                  <p className="text-paca-stone text-sm">
                    Produits labellisés AOP, IGP, Bio, HVE, Label Rouge pour atteindre
                    vos 50% de produits durables et 20% de bio.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-paca-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-paca-earth mb-2">Flux tendu garanti</h3>
                  <p className="text-paca-stone text-sm">
                    Produits collectés chez les producteurs et livrés sans stock intermédiaire.
                    Fraîcheur et DLC longues garanties.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FileText className="w-6 h-6 text-paca-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-paca-earth mb-2">Interlocuteur unique</h3>
                  <p className="text-paca-stone text-sm">
                    Localizz est l'unique intermédiaire entre vous et les producteurs.
                    Une seule facture, une seule livraison multiproduits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-16 bg-paca-green/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-8">
              Couverture géographique
            </h2>
            <p className="text-center text-paca-stone mb-8 max-w-2xl mx-auto">
              Nous répondons aux appels d'offres et livrons les établissements publics
              des 6 départements de la région PACA.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {[
                'Bouches-du-Rhône (13)',
                'Var (83)',
                'Alpes-Maritimes (06)',
                'Vaucluse (84)',
                'Alpes-de-Haute-Provence (04)',
                'Hautes-Alpes (05)',
              ].map((dept) => (
                <span
                  key={dept}
                  className="bg-white px-4 py-2 rounded-full text-paca-earth font-medium shadow-sm"
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Questions fréquentes sur les marchés publics
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Quels types de marchés publics alimentaires pouvez-vous fournir ?
                </h3>
                <p className="text-paca-stone">
                  Localizz répond aux MAPA (Marchés à Procédure Adaptée), aux marchés formalisés
                  et aux accords-cadres alimentaires des collectivités de la région PACA.
                  Nous couvrons les lots fruits et légumes, viandes, crémerie et épicerie fine.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Fournissez-vous les justificatifs EGAlim pour les marchés publics ?
                </h3>
                <p className="text-paca-stone">
                  Oui, nous transmettons avec chaque livraison les justificatifs d'origine
                  exploitation par exploitation. Nous fournissons également des statistiques
                  d'achats EGAlim sur demande pour vous aider à piloter vos taux et préparer
                  vos bilans annuels.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Dans quels départements PACA répondez-vous aux appels d'offres ?
                </h3>
                <p className="text-paca-stone">
                  Nous répondons aux marchés publics alimentaires des 6 départements PACA :
                  Bouches-du-Rhône (13), Var (83), Alpes-Maritimes (06), Vaucluse (84),
                  Alpes-de-Haute-Provence (04) et Hautes-Alpes (05).
                </p>
              </div>
              <div className="pb-6">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Comment se déroule une réponse à un appel d'offres avec Localizz ?
                </h3>
                <p className="text-paca-stone">
                  Contactez-nous en amont de votre consultation ou transmettez-nous le cahier
                  des charges. Nous analysons les lots, vérifions la disponibilité auprès de
                  nos 150 producteurs partenaires, et construisons une offre conforme aux
                  exigences du marché.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-paca-earth">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Un marché public à venir ?
            </h2>
            <p className="text-paca-cream mb-8 max-w-xl mx-auto">
              Contactez-nous pour discuter de votre cahier des charges.
              Nous vous accompagnons dans la structuration de votre approvisionnement local.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AppelsOffres;
