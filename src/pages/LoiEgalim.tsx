import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import SEO from '@/components/SEO';
import PhoneBanner from '@/components/PhoneBanner';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const LoiEgalim = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "À qui s'applique la loi EGAlim ?",
      answer: "Aux structures de restauration collective publique, et progressivement à des structures privées de restauration sous contrat. Les établissements scolaires sont concernés, ainsi que d'autres établissements publics (santé, médico-social, etc.)."
    },
    {
      question: "Comment calculer la part de produits durables ?",
      answer: "Le calcul se fait sur le montant annuel HT des achats de denrées. L'objectif est d'atteindre au moins 50 % de produits durables et de qualité, dont au moins 20 % issus de l'agriculture biologique."
    },
    {
      question: "Le menu végétarien est-il obligatoire ?",
      answer: "Oui. Un repas végétarien hebdomadaire est requis dans les cantines scolaires publiques, avec un objectif de diversification des protéines et de sensibilisation à l'alimentation durable."
    },
    {
      question: "Quelles sont les attentes en matière de gaspillage alimentaire ?",
      answer: "Les établissements doivent réaliser un diagnostic régulier des pertes, mener des actions de réduction et suivre des indicateurs. La valorisation des invendus (ex. dons) est encouragée."
    },
    {
      question: "Existe-t-il des aides en région PACA ?",
      answer: "Oui. Certaines aides régionales ou nationales (ex. FEADER, ADEME, Région Sud) peuvent financer diagnostics, formations et actions de transition alimentaire."
    }
  ];

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Ressources', url: '/actualites' },
    { name: 'Loi EGAlim PACA', url: '/loi-egalim' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Loi EGAlim PACA (2025) — Obligations, guide complet et solutions locales"
        description="Comprendre et appliquer la loi EGAlim en région PACA : 50 % de produits durables, 20 % bio, menu végétarien, gaspillage, marchés publics. Guide pratique pour cantines et collectivités. Rôle facilitateur de Localizz pour l'approvisionnement local."
        keywords={['loi egalim', 'paca', 'restauration collective', 'produits bio', 'alimentation durable', 'cantines', 'approvisionnement local']}
        url="/loi-egalim"
        type="article"
        author="Localizz"
        publishedTime="2025-01-15T09:00:00+01:00"
        modifiedTime="2025-11-02T09:00:00+01:00"
        canonicalUrl="https://www.localizz.fr/loi-egalim"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
        image="/lovable-uploads/cantine.jpg"
      />
      <PhoneBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
          Ressources · Restauration collective
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Loi EGAlim PACA (2025) : obligations, guide complet et solutions locales
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Mis à jour le 2 novembre 2025 · Lecture 8–10 min
        </p>

        <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
          En région PACA, la loi EGAlim est une opportunité de rapprocher cantines, producteurs et citoyens autour d'une alimentation locale, durable et transparente. 
          Cette page synthétise l'essentiel et renvoie vers le{' '}
          <a href="/actualites/loi-egalim-restauration-collective-paca-2025" className="text-secondary hover:underline font-semibold">
            guide détaillé "Loi EGAlim PACA 2025"
          </a>{' '}
          pour approfondir.
          <strong> Localizz</strong> n'est pas un cabinet de conformité EGAlim : rôle <strong>facilitateur</strong> pour l'approvisionnement local et la logistique.
        </p>

        <nav className="bg-accent border border-border rounded-lg p-6 mb-8" aria-label="Sommaire">
          <strong className="text-lg mb-3 block">Sommaire</strong>
          <ul className="space-y-2">
            <li><a href="#comprendre" className="text-secondary hover:underline">Comprendre la loi EGAlim</a></li>
            <li><a href="#obligations" className="text-secondary hover:underline">Obligations pour la restauration collective</a></li>
            <li><a href="#paca" className="text-secondary hover:underline">Défis et spécificités en PACA</a></li>
            <li><a href="#appliquer" className="text-secondary hover:underline">Comment appliquer EGAlim : les 5 étapes</a></li>
            <li><a href="#localizz" className="text-secondary hover:underline">Le rôle de Localizz : facilitateur d'approvisionnement</a></li>
            <li><a href="#aides" className="text-secondary hover:underline">Aides et financements</a></li>
            <li><a href="#ressources" className="text-secondary hover:underline">Ressources officielles</a></li>
            <li><a href="#faq" className="text-secondary hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <section id="comprendre" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Comprendre la loi EGAlim et ses objectifs</h2>
          <h3 className="text-xl font-semibold mb-3 text-primary/90">Définition et finalités</h3>
          <p className="mb-4 leading-relaxed">
            Promulguée en 2018, la loi EGAlim vise une alimentation plus saine et durable, une meilleure rémunération des agriculteurs et un renforcement des circuits courts. 
            Elle concerne producteurs, transformateurs, distributeurs et structures de restauration collective publiques et privées.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-primary/90">Évolutions récentes</h3>
          <p className="mb-4 leading-relaxed">
            Les évolutions récentes renforcent la transparence, la traçabilité, la lutte contre le gaspillage et étendent progressivement certaines obligations à des structures privées de restauration sous contrat.
            Pour le pas-à-pas détaillé en PACA, consultez le{' '}
            <a href="/actualites/loi-egalim-restauration-collective-paca-2025" className="text-secondary hover:underline font-semibold">
              guide complet Localizz
            </a>.
          </p>
        </section>

        <section id="obligations" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Obligations principales pour la restauration collective</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Au moins 50 % de produits durables et de qualité</strong>, dont <strong>≥ 20 % issus de l'agriculture biologique</strong>.</li>
            <li><strong>Un repas végétarien hebdomadaire</strong> dans les cantines scolaires publiques.</li>
            <li><strong>Diagnostic et plan d'actions</strong> contre le gaspillage alimentaire, avec suivi d'indicateurs.</li>
            <li><strong>Information et traçabilité</strong> : affichage des taux bio/durables et mention de l'origine.</li>
          </ul>
        </section>

        <section id="paca" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Défis et spécificités en région PACA</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary/90">Contraintes opérationnelles</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Disponibilité/volumes réguliers à l'échelle collective</li>
                  <li>Marchés publics et critères environnementaux</li>
                  <li>Logistique et saisonnalité</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary/90">Atouts régionaux</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Filières locales variées et qualitatives</li>
                  <li>Réseaux de producteurs déjà structurés</li>
                  <li>Culture des circuits courts bien ancrée</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
            <p className="leading-relaxed">
              <strong>Conseil :</strong> formalisez une <em>stratégie d'approvisionnement</em> par familles de produits, en tenant compte des saisons et des capacités locales.
            </p>
          </div>
        </section>

        <section id="appliquer" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Comment appliquer EGAlim : les 5 étapes</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong>État des lieux</strong> : achats annuels HT, part durable/bio, fournisseurs, contraintes.</li>
            <li><strong>Stratégie d'approvisionnement</strong> : saisonnalité, mutualisation, familles prioritaires.</li>
            <li><strong>Partenariats locaux</strong> : identification des producteurs et plateformes régionales.</li>
            <li><strong>Formation et communication</strong> : équipes cuisine, information convives, affichage.</li>
            <li><strong>Suivi et valorisation</strong> : indicateurs, retours convives, communication publique.</li>
          </ol>
          <p className="mt-4 leading-relaxed">
            Pour un déroulé terrain plus détaillé, lire le{' '}
            <a href="/actualites/loi-egalim-restauration-collective-paca-2025" className="text-secondary hover:underline font-semibold">
              guide Localizz EGAlim PACA
            </a>.
          </p>
        </section>

        <section id="localizz" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Le rôle de Localizz : facilitateur d'approvisionnement</h2>
          <p className="mb-6 leading-relaxed">
            Localizz n'assure pas une prestation de "mise en conformité EGAlim". 
            Notre rôle est de <strong>faciliter l'accès à des produits locaux et durables</strong> adaptés à la restauration collective en PACA, en simplifiant la relation producteurs ↔ établissements et en fluidifiant la logistique.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary/90">Ce que Localizz facilite</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Repérage et mise en relation avec des producteurs locaux</li>
                  <li>Organisation des flux et de la logistique</li>
                  <li>Traçabilité fournisseurs et justificatifs d'origine</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-primary/90">Ce que Localizz n'est pas</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pas de cabinet d'audit EGAlim</li>
                  <li>Pas de prestation juridique marchés publics</li>
                  <li>Pas de garantie de conformité</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-6 leading-relaxed">
            Découvrir notre approche :{' '}
            <a href="/notre-offre" className="text-secondary hover:underline font-semibold">notre offre</a>
            {' · '}
            <a href="/qui-sommes-nous" className="text-secondary hover:underline font-semibold">qui sommes-nous</a>
          </p>
        </section>

        <section id="aides" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Aides et financements</h2>
          <p className="leading-relaxed">
            Selon les cas, des soutiens existent pour diagnostics, formations et actions de transition alimentaire : dispositifs européens (ex. FEADER), nationaux (ex. ADEME) et aides <strong>Région Sud</strong>.
          </p>
        </section>

        <section id="ressources" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Ressources officielles</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://agriculture.gouv.fr/tout-comprendre-de-la-loi-egalim-2" 
                 className="text-secondary hover:underline" 
                 rel="nofollow noopener" 
                 target="_blank">
                Ministère de l'Agriculture : EGAlim
              </a>
            </li>
            <li>
              <a href="https://www.legifrance.gouv.fr/" 
                 className="text-secondary hover:underline" 
                 rel="nofollow noopener" 
                 target="_blank">
                Textes officiels sur Légifrance
              </a>
            </li>
            <li>
              <a href="https://www.ademe.fr/" 
                 className="text-secondary hover:underline" 
                 rel="nofollow noopener" 
                 target="_blank">
                ADEME : restauration collective durable
              </a>
            </li>
            <li>
              <a href="/actualites/loi-egalim-restauration-collective-paca-2025" 
                 className="text-secondary hover:underline font-semibold">
                Guide détaillé "Loi EGAlim PACA 2025"
              </a>
            </li>
            <li>
              <a href="/nos-engagements" className="text-secondary hover:underline">
                Nos engagements
              </a>
            </li>
          </ul>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-primary">FAQ EGAlim PACA</h2>
          <dl className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-l-2 border-secondary/30 pl-4">
                <dt className="font-semibold text-lg mb-2">{item.question}</dt>
                <dd className="text-foreground/80 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-label="CTA" className="mb-10">
          <Card className="bg-accent">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-primary">Passez au local à votre rythme</h2>
              <p className="mb-6 leading-relaxed">
                Parlez-nous de vos besoins, de vos contraintes et de vos priorités. 
                Localizz facilite l'approvisionnement local adapté à vos volumes et à votre organisation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Nous contacter
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => { navigate('/notre-offre'); window.scrollTo(0, 0); }}
                  className="border-secondary text-secondary hover:bg-secondary/10"
                >
                  Voir notre approche
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <BannerSection />
      <Footer />
    </div>
  );
};

export default LoiEgalim;
