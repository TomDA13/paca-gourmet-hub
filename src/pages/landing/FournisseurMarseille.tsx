import CityLandingPage, { CityLandingData } from '@/components/CityLandingPage';

const data: CityLandingData = {
  slug: 'fournisseur-restauration-collective-marseille',
  cityName: 'Marseille',
  department: 'Bouches-du-Rhône',
  departmentNumber: '13',
  seo: {
    title: 'Fournisseur restauration collective Marseille - Produits locaux PACA',
    description: 'Localizz, fournisseur de produits locaux pour la restauration collective à Marseille et dans les Bouches-du-Rhône. Fruits, légumes, viandes, crémerie, épicerie. Circuit court, conformité EGAlim, livraison quotidienne.',
    keywords: [
      'fournisseur restauration collective marseille',
      'grossiste produits locaux marseille',
      'livraison fruits légumes restauration marseille',
      'fournisseur cantine scolaire marseille',
      'grossiste alimentaire marseille bouches du rhone',
      'produits locaux cuisine centrale marseille',
      'fournisseur ehpad marseille',
      'approvisionnement local restauration marseille',
      'circuit court restauration collective 13',
      'fournisseur egalim marseille',
    ],
  },
  hero: {
    headline: 'Fournisseur de produits locaux pour la restauration collective à Marseille',
    subheadline: 'Plus de 700 références de produits 100% PACA livrés quotidiennement aux cuisines centrales, cantines scolaires, EHPAD et restaurants d\'entreprise de Marseille et des Bouches-du-Rhône.',
  },
  intro: 'Marseille est le premier bassin de consommation de la région PACA. Avec ses centaines de cantines scolaires, ses cuisines centrales municipales, ses EHPAD et ses restaurants d\'entreprise, la demande en produits locaux de qualité est forte — et les obligations de la loi EGAlim rendent cet approvisionnement incontournable. Localizz livre quotidiennement les établissements de restauration collective marseillais en produits sourcés exclusivement auprès de producteurs de la région Sud.',
  clients: {
    title: 'À qui s\'adresse notre offre à Marseille ?',
    items: [
      'Cuisines centrales municipales et métropolitaines de Marseille',
      'Cantines scolaires : écoles, collèges, lycées de la ville et de la métropole Aix-Marseille',
      'EHPAD et établissements de santé des Bouches-du-Rhône',
      'Restaurants d\'entreprise et sociétés de restauration collective (Elior, Compass, Sodexo) implantées à Marseille',
      'Restaurants commerciaux et CHR du Vieux-Port, du Panier et de la métropole',
      'Structures d\'accueil : crèches, centres de loisirs, foyers',
    ],
  },
  products: {
    intro: 'Tous nos produits sont sourcés auprès de producteurs de la région Sud, à moins de 200 km de Marseille. Pas d\'import, pas d\'intermédiaire superflu : un circuit court maîtrisé du champ à votre cuisine.',
    highlights: [
      'Fruits et légumes de la plaine de la Crau et du Vaucluse, récoltés à juste maturité selon vos jours de consommation',
      'Viandes locales : boeuf HVE, agneau du Lubéron, porc plein air de la Crau, taureau de Camargue AOP',
      'Crémerie des Alpes du Sud : yaourts bio du Champsaur, fromages fermiers, Banon AOP, oeufs plein air',
      'Épicerie artisanale : riz de Camargue IGP, légumineuses équitables, miel de Provence, calissons d\'Aix',
    ],
  },
  logistics: {
    intro: 'Notre plateforme est implantée à proximité de Marseille. Nous assurons la collecte chez les producteurs et la livraison directe dans vos cuisines.',
    points: [
      'Livraison quotidienne sur Marseille et toute la métropole Aix-Marseille-Provence',
      'Palettes multiproduits : une seule livraison pour l\'ensemble de vos gammes (fruits, viandes, crémerie, épicerie)',
      'Flux tendu : produits collectés chez les producteurs et livrés rapidement, sans stock intermédiaire',
      'Chaîne du froid respectée de bout en bout, agréage à réception et avant livraison',
      'Récupération des cagettes pour les ramener aux producteurs : économie circulaire',
      'Périmètre de livraison complet : Marseille, Aubagne, Martigues, Istres, Salon, Étang de Berre',
    ],
  },
  egalim: {
    intro: 'Les établissements de restauration collective de Marseille sont soumis aux objectifs de la loi EGAlim. Localizz vous accompagne pour atteindre et dépasser ces obligations.',
    points: [
      '50% de produits durables et de qualité dans vos menus : nos produits labellisés (AOP, IGP, Bio, HVE, Label Rouge) comptent directement',
      '20% de produits bio : notre gamme bio couvre les fruits, légumes, crémerie et viandes',
      'Traçabilité complète : justificatifs d\'origine transmis pour chaque livraison, exploitation par exploitation',
      'Statistiques d\'achats EGAlim : reporting sur demande pour piloter vos taux et préparer vos bilans',
      'Accompagnement appels d\'offres : nous répondons aux MAPA et marchés publics alimentaires des collectivités des Bouches-du-Rhône',
    ],
  },
  faqItems: [
    {
      question: 'Quels types d\'établissements livrez-vous à Marseille ?',
      answer: 'Nous livrons les cuisines centrales, cantines scolaires, EHPAD, restaurants d\'entreprise, sociétés de restauration collective (Elior, Compass, Sodexo) et restaurants commerciaux sur Marseille et toute la métropole Aix-Marseille-Provence.',
    },
    {
      question: 'Pouvez-vous répondre aux appels d\'offres de la Ville de Marseille ?',
      answer: 'Oui, Localizz répond régulièrement aux MAPA et appels d\'offres alimentaires des collectivités des Bouches-du-Rhône. Nous fournissons tous les documents de traçabilité et les justificatifs EGAlim nécessaires.',
    },
    {
      question: 'Quel est le délai de livraison sur Marseille ?',
      answer: 'Nous livrons quotidiennement. Les commandes passées la veille sont livrées le lendemain matin dans vos cuisines. Les fruits et légumes sont récoltés au plus proche de votre jour de consommation.',
    },
    {
      question: 'Vos produits sont-ils conformes à la loi EGAlim ?',
      answer: 'Oui, l\'ensemble de notre gamme est sourcée localement et comporte des produits labellisés (AOP, IGP, Bio, HVE, Label Rouge) qui comptent directement dans les 50% de produits durables exigés par la loi.',
    },
  ],
};

const FournisseurMarseille = () => <CityLandingPage data={data} />;
export default FournisseurMarseille;
