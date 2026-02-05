import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, MapPin, Award, Handshake, Leaf, TrendingUp } from 'lucide-react';

const NosProducteurs = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Combien de producteurs partenaires travaillent avec Localizz ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Localizz travaille avec près de 150 producteurs partenaires répartis sur les 6 départements de la région PACA. Ce réseau couvre les filières fruits et légumes, viandes, crémerie et épicerie.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment Localizz sélectionne-t-il ses producteurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nos 3 ingénieurs agronomes auditent et suivent chaque producteur partenaire. Nous vérifions les pratiques agricoles, la qualité des produits et la capacité à répondre aux volumes de la restauration collective.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment est assurée la juste rémunération des producteurs ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Localizz s\'engage pour une juste rémunération de ses producteurs partenaires. Nous avons mené une étude conjointement avec Max Havelaar sur ce sujet. Les prix sont négociés en direct et les volumes planifiés à l\'année pour sécuriser les revenus des agriculteurs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on devenir producteur partenaire de Localizz ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si vous êtes producteur en région PACA (fruits et légumes, viandes, crémerie, épicerie), contactez-nous. Nous étudions les partenariats avec les agriculteurs, coopératives et PME agroalimentaires de la région Sud.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Nos producteurs locaux PACA - Réseau de 150 partenaires - Localizz"
        description="Localizz travaille avec près de 150 producteurs partenaires en région PACA. Fruits, légumes, viandes, crémerie, épicerie : découvrez notre réseau de sourcing local et notre engagement pour une juste rémunération."
        keywords={[
          'producteurs locaux paca',
          'sourcing local restauration collective',
          'circuit court paca',
          'producteurs fruits légumes paca',
          'filière courte région sud',
          'producteurs partenaires restauration',
          'agriculteurs paca',
          'réseau producteurs locaux',
          'approvisionnement local paca',
          'producteurs bio paca',
        ]}
        canonicalUrl="https://www.localizz.fr/nos-producteurs-paca"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-paca-olive/10 to-paca-green/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-paca-earth mb-6">
                Nos producteurs partenaires en région PACA
              </h1>
              <p className="text-lg md:text-xl text-paca-stone mb-8">
                Près de 150 producteurs partenaires sur les 6 départements de la région Sud.
                Agriculteurs, coopératives et PME agroalimentaires : un réseau audité et suivi
                par nos ingénieurs agronomes.
              </p>
              <Button asChild size="lg" className="bg-paca-green hover:bg-paca-olive">
                <Link to="/contact">Découvrir nos produits</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Figures Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-paca-green mb-2">~150</div>
                <p className="text-paca-stone">producteurs partenaires</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-paca-green mb-2">6</div>
                <p className="text-paca-stone">départements PACA couverts</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-paca-green mb-2">3</div>
                <p className="text-paca-stone">ingénieurs agronomes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-paca-cream/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-8">
                Notre philosophie : l'unique intermédiaire
              </h2>
              <p className="text-paca-stone text-center mb-12 max-w-2xl mx-auto">
                Localizz est l'unique intermédiaire entre vous et les producteurs.
                Pas de grossiste, pas de centrale d'achat : un lien direct qui garantit
                la traçabilité et une juste rémunération des agriculteurs.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Handshake className="w-6 h-6 text-paca-green" />
                    <h3 className="text-lg font-semibold text-paca-earth">Juste rémunération</h3>
                  </div>
                  <p className="text-paca-stone text-sm">
                    Nous nous engageons pour une juste rémunération de nos producteurs partenaires.
                    Une étude menée conjointement avec Max Havelaar guide notre politique tarifaire.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-paca-green" />
                    <h3 className="text-lg font-semibold text-paca-earth">Volumes garantis</h3>
                  </div>
                  <p className="text-paca-stone text-sm">
                    Planification annuelle des cultures en fonction de vos volumes.
                    Les producteurs peuvent anticiper leur production et sécuriser leurs revenus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Producer Types Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Nos partenaires producteurs
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 border border-gray-100 rounded-lg">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">Agriculteurs</h3>
                <p className="text-paca-stone text-sm">
                  Producteurs de fruits et légumes, BOF (beurre, oeufs, fromages),
                  épicerie et produits carnés de la région Sud.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">Coopératives</h3>
                <p className="text-paca-stone text-sm">
                  Coopératives agricoles qui souhaitent valoriser leurs produits
                  auprès de la restauration collective.
                </p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-lg">
                <div className="w-16 h-16 bg-paca-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-paca-green" />
                </div>
                <h3 className="text-xl font-semibold text-paca-earth mb-3">PME agroalimentaires</h3>
                <p className="text-paca-stone text-sm">
                  Transformateurs locaux et PME qui proposent le meilleur
                  de notre région : conserves, condiments, produits transformés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Coverage Section */}
        <section className="py-16 bg-paca-green/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-4">
              Nos terroirs de sourcing
            </h2>
            <p className="text-center text-paca-stone mb-12 max-w-2xl mx-auto">
              Nos producteurs partenaires sont répartis sur l'ensemble de la région PACA,
              à moins de 200 km de nos points de livraison.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Vaucluse</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Maraîchage du Comtat Venaissin, fruits du Ventoux, miel de lavande.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Bouches-du-Rhône</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Légumes de la Crau, riz de Camargue IGP, taureau de Camargue AOP.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Alpes-de-Haute-Provence</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Agneau du Lubéron, fromages fermiers, Banon AOP.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Hautes-Alpes</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Yaourts bio du Champsaur, fromages des alpages, crémerie fermière.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Var</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Miels de Provence, huile d'olive, produits du terroir varois.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-paca-green" />
                  <h3 className="font-semibold text-paca-earth">Alpes-Maritimes</h3>
                </div>
                <p className="text-paca-stone text-sm">
                  Agrumes de Menton, huile d'olive de Nice, produits de l'arrière-pays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Notre démarche qualité producteurs
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-paca-green text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-paca-earth mb-2">Audit initial</h3>
                    <p className="text-paca-stone text-sm">
                      Nos ingénieurs agronomes visitent chaque exploitation candidate
                      pour évaluer les pratiques agricoles et la qualité des produits.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-paca-green text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-paca-earth mb-2">Suivi régulier</h3>
                    <p className="text-paca-stone text-sm">
                      Les producteurs partenaires sont suivis tout au long de l'année
                      par notre équipe technique.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-paca-green text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-paca-earth mb-2">Planification annuelle</h3>
                    <p className="text-paca-stone text-sm">
                      Les cultures sont planifiées avec les producteurs en fonction
                      de vos volumes prévisionnels sur l'année.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-paca-green text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-paca-earth mb-2">Triple agréage</h3>
                    <p className="text-paca-stone text-sm">
                      Contrôle qualité chez le producteur, à la plateforme
                      et avant livraison dans vos cuisines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-paca-cream/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-paca-earth text-center mb-12">
              Questions sur nos producteurs
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Combien de producteurs partenaires travaillent avec Localizz ?
                </h3>
                <p className="text-paca-stone">
                  Localizz travaille avec près de 150 producteurs partenaires répartis sur les
                  6 départements de la région PACA. Ce réseau couvre les filières fruits et légumes,
                  viandes, crémerie et épicerie.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Comment Localizz sélectionne-t-il ses producteurs ?
                </h3>
                <p className="text-paca-stone">
                  Nos 3 ingénieurs agronomes auditent et suivent chaque producteur partenaire.
                  Nous vérifions les pratiques agricoles, la qualité des produits et la capacité
                  à répondre aux volumes de la restauration collective.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Comment est assurée la juste rémunération des producteurs ?
                </h3>
                <p className="text-paca-stone">
                  Localizz s'engage pour une juste rémunération de ses producteurs partenaires.
                  Nous avons mené une étude conjointement avec Max Havelaar sur ce sujet.
                  Les prix sont négociés en direct et les volumes planifiés à l'année pour
                  sécuriser les revenus des agriculteurs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-paca-earth mb-2">
                  Peut-on devenir producteur partenaire de Localizz ?
                </h3>
                <p className="text-paca-stone">
                  Si vous êtes producteur en région PACA (fruits et légumes, viandes, crémerie,
                  épicerie), contactez-nous. Nous étudions les partenariats avec les agriculteurs,
                  coopératives et PME agroalimentaires de la région Sud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-paca-earth">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous êtes producteur en région PACA ?
            </h2>
            <p className="text-paca-cream mb-8 max-w-xl mx-auto">
              Agriculteur, coopérative ou PME agroalimentaire : rejoignez notre réseau
              et valorisez vos produits auprès de la restauration collective.
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

export default NosProducteurs;
