import CityLandingPage, { CityLandingData } from '@/components/CityLandingPage';

const data: CityLandingData = {
  slug: 'fournisseur-restauration-collective-aix-en-provence',
  cityName: 'Aix-en-Provence',
  department: 'Bouches-du-Rhône',
  departmentNumber: '13',
  seo: {
    title: 'Fournisseur restauration collective Aix-en-Provence - Produits locaux PACA',
    description: 'Localizz, fournisseur de produits locaux pour la restauration collective à Aix-en-Provence. Fruits, légumes, viandes, crémerie, épicerie. Livraison quotidienne, conformité EGAlim, circuit court garanti.',
    keywords: [
      'fournisseur restauration collective aix en provence',
      'grossiste produits locaux aix en provence',
      'fournisseur cantine scolaire aix en provence',
      'grossiste alimentaire aix en provence 13',
      'produits locaux cuisine centrale aix',
      'fournisseur ehpad aix en provence',
      'circuit court restauration aix en provence',
      'livraison fruits légumes restauration aix',
      'fournisseur egalim aix en provence',
      'approvisionnement local pays aix',
    ],
  },
  hero: {
    headline: 'Fournisseur de produits locaux pour la restauration collective à Aix-en-Provence',
    subheadline: 'Approvisionnement quotidien en produits 100% PACA pour les cuisines centrales, cantines, EHPAD et restaurants d\'entreprise du Pays d\'Aix.',
  },
  intro: 'Aix-en-Provence et sa communauté d\'agglomération concentrent de nombreux établissements de restauration collective : les cantines des écoles et universités, les cuisines centrales du Pays d\'Aix, les EHPAD du secteur et les restaurants d\'entreprise de la zone d\'activités des Milles. Localizz approvisionne ces établissements en produits sourcés exclusivement dans la région Sud, en circuit court et en conformité avec la loi EGAlim.',
  clients: {
    title: 'Nos clients dans le Pays d\'Aix',
    items: [
      'Cuisines centrales et cantines de la communauté d\'agglomération du Pays d\'Aix',
      'Cantines scolaires : écoles primaires, collèges, lycées et restaurants universitaires',
      'EHPAD et établissements médico-sociaux du bassin aixois',
      'Restaurants d\'entreprise de la zone des Milles, du Technopôle de l\'Arbois et du centre-ville',
      'Sociétés de restauration collective sous contrat (Elior, Compass, Sodexo) sur le secteur',
      'Restauration commerciale et traiteurs du Pays d\'Aix',
    ],
  },
  products: {
    intro: 'Nos producteurs partenaires sont implantés dans un rayon de 150 km autour d\'Aix-en-Provence : plaine de la Crau, Lubéron, Vaucluse, Alpes du Sud. Un approvisionnement ultra-local pour vos menus.',
    highlights: [
      'Fruits et légumes du Vaucluse et de la Durance, livrés le lendemain de la récolte',
      'Agneau du Lubéron et de la Plaine de la Crau, élevé en plein air HVE et Bio',
      'Fromages fermiers des Alpes du Sud : chèvre artisanal, Banon AOP, tommes de montagne',
      'Calissons d\'Aix artisanaux et confiseries provençales pour vos événements et coffrets',
    ],
  },
  logistics: {
    intro: 'La proximité de notre plateforme avec le Pays d\'Aix nous permet une livraison rapide et fiable dans toute la communauté d\'agglomération.',
    points: [
      'Livraison quotidienne sur Aix-en-Provence, Les Milles, Pertuis, Gardanne, Trets et le Pays d\'Aix',
      'Palettes multiproduits : fruits, légumes, viandes, crémerie et épicerie en une seule livraison',
      'Fruits et légumes récoltés à juste maturité selon vos jours de consommation',
      'Viandes, crémerie et épicerie produites à la demande pour des DLC longues',
      'Agréage triple : chez le producteur, à réception plateforme, et avant livraison',
      'Économie circulaire : récupération des cagettes à chaque passage',
    ],
  },
  egalim: {
    intro: 'Le Pays d\'Aix s\'est engagé dans une dynamique d\'alimentation durable. Localizz vous aide à concrétiser les objectifs EGAlim dans vos cuisines.',
    points: [
      '50% de produits durables : notre catalogue comporte des produits AOP (Taureau de Camargue, Banon), IGP (Riz de Camargue), Bio, HVE et Label Rouge',
      '20% de produits bio : gamme bio disponible sur les fruits, légumes, crémerie et viandes',
      'Justificatifs d\'origine par exploitation transmis avec chaque livraison',
      'Reporting EGAlim : statistiques d\'achats pour vos bilans et audits de conformité',
      'Accompagnement MAPA : nous répondons aux marchés alimentaires des collectivités du Pays d\'Aix',
    ],
  },
  faqItems: [
    {
      question: 'Livrez-vous les communes autour d\'Aix-en-Provence ?',
      answer: 'Oui, nous livrons quotidiennement Aix-en-Provence et toute la communauté d\'agglomération du Pays d\'Aix : Pertuis, Gardanne, Trets, Venelles, Les Milles, Peynier, La Roque d\'Anthéron et les communes environnantes.',
    },
    {
      question: 'Proposez-vous des produits adaptés aux menus végétariens obligatoires ?',
      answer: 'Oui, notre gamme de légumineuses équitables, oeufs plein air, fromages fermiers et épicerie locale permet de composer des menus végétariens variés conformes aux obligations EGAlim.',
    },
    {
      question: 'Comment fonctionnent les commandes pour un restaurant d\'entreprise ?',
      answer: 'Nous travaillons aussi bien en direct avec les restaurants d\'entreprise qu\'avec les sociétés de restauration collective sous contrat. La commande peut être passée la veille pour une livraison le lendemain.',
    },
    {
      question: 'Quels labels de qualité portent vos produits ?',
      answer: 'Nos produits portent les labels AOP (Taureau de Camargue, Banon), IGP (Riz de Camargue), Agriculture Biologique, HVE (Haute Valeur Environnementale) et Label Rouge. Tous sont conformes aux critères de la loi EGAlim.',
    },
  ],
};

const FournisseurAix = () => <CityLandingPage data={data} />;
export default FournisseurAix;
