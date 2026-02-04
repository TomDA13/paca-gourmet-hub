import CityLandingPage, { CityLandingData } from '@/components/CityLandingPage';

const data: CityLandingData = {
  slug: 'fournisseur-restauration-collective-avignon',
  cityName: 'Avignon',
  department: 'Vaucluse',
  departmentNumber: '84',
  seo: {
    title: 'Fournisseur restauration collective Avignon - Produits locaux PACA',
    description: 'Localizz, fournisseur de produits locaux pour la restauration collective à Avignon et dans le Vaucluse. Fruits, légumes, viandes, crémerie du terroir. Livraison quotidienne, conformité EGAlim.',
    keywords: [
      'fournisseur restauration collective avignon',
      'grossiste produits locaux avignon',
      'fournisseur cantine scolaire avignon vaucluse',
      'grossiste alimentaire avignon 84',
      'produits locaux cuisine centrale avignon',
      'fournisseur ehpad avignon',
      'circuit court restauration avignon vaucluse',
      'grossiste fruits légumes avignon',
      'fournisseur egalim vaucluse',
      'approvisionnement local restauration vaucluse 84',
    ],
  },
  hero: {
    headline: 'Fournisseur de produits locaux pour la restauration collective à Avignon',
    subheadline: 'Produits 100% PACA livrés quotidiennement aux cuisines centrales, cantines, EHPAD et restaurants d\'entreprise d\'Avignon, Carpentras, Orange et du Vaucluse.',
  },
  intro: 'Le Vaucluse est l\'un des plus grands bassins de production agricole de France : maraîchage de la plaine du Comtat, vergers du Ventoux, vignobles des Côtes du Rhône. Pourtant, les établissements de restauration collective du département peinent parfois à s\'approvisionner localement, faute de logistique adaptée. Localizz fait le lien entre les producteurs vauclusiens (et de toute la région Sud) et les cuisines professionnelles d\'Avignon et du Vaucluse.',
  clients: {
    title: 'Les établissements que nous approvisionnons dans le Vaucluse',
    items: [
      'Cuisines centrales de la communauté d\'agglomération du Grand Avignon',
      'Cantines scolaires : écoles, collèges et lycées du Vaucluse',
      'EHPAD et établissements de santé du département',
      'Restaurants d\'entreprise et sociétés de restauration collective sur le bassin avignonnais',
      'Restauration commerciale et hôtellerie d\'Avignon, Carpentras, Orange, L\'Isle-sur-la-Sorgue',
      'Cantines d\'administrations et structures publiques du Vaucluse',
    ],
  },
  products: {
    intro: 'Le Vaucluse est au coeur de notre réseau de producteurs. Beaucoup de nos fruits et légumes sont récoltés à quelques dizaines de kilomètres d\'Avignon, pour une fraîcheur inégalée.',
    highlights: [
      'Fruits et légumes du Comtat Venaissin et du Ventoux : tomates, melons, cerises, courgettes, aubergines, selon la saison',
      'Viandes locales : boeuf HVE, agneau du Lubéron (élevé à moins de 50 km d\'Avignon), porc plein air de la Crau',
      'Fromages fermiers : chèvres du Lubéron, Banon AOP, tommes des Alpes, yaourts bio des Hautes-Alpes',
      'Épicerie du terroir : riz de Camargue IGP, miel de lavande du Ventoux, légumineuses équitables, confitures de fruits provençaux',
    ],
  },
  logistics: {
    intro: 'Notre plateforme est à proximité du Vaucluse. La livraison sur Avignon et tout le département est quotidienne et rapide.',
    points: [
      'Livraison quotidienne sur Avignon, Carpentras, Orange, Cavaillon, L\'Isle-sur-la-Sorgue, Apt et tout le 84',
      'Palettes multiproduits : fruits, légumes, viandes, crémerie, épicerie en une seule livraison',
      'Proximité des producteurs vauclusiens : beaucoup de nos fruits et légumes parcourent moins de 50 km',
      'Flux tendu et juste maturité : les fruits sont récoltés en fonction de vos jours de consommation',
      'Viandes et crémerie produites à la demande : DLC longues garanties',
      'Triple agréage : contrôle qualité chez le producteur, à la plateforme et avant livraison',
    ],
  },
  egalim: {
    intro: 'Le Vaucluse, avec sa richesse agricole, est un terrain idéal pour atteindre les objectifs EGAlim. Localizz vous donne accès à cette production locale de manière structurée.',
    points: [
      '50% de produits durables : la proximité des producteurs vauclusiens facilite l\'atteinte de cet objectif avec des produits AOP, IGP, Bio, HVE et Label Rouge',
      '20% de produits bio : fruits et légumes bio du Ventoux et du Lubéron, crémerie bio des Alpes, viandes bio certifiées',
      'Traçabilité exploitation par exploitation : chaque livraison est accompagnée de justificatifs d\'origine',
      'Reporting EGAlim : statistiques de vos achats pour piloter vos taux et préparer vos bilans annuels',
      'Réponse aux marchés publics alimentaires du Grand Avignon et des collectivités du Vaucluse',
    ],
  },
  faqItems: [
    {
      question: 'Le Vaucluse étant un bassin de production, pourquoi passer par Localizz ?',
      answer: 'Même si les producteurs sont proches, la restauration collective a besoin d\'un intermédiaire qui gère la logistique multiproduits, la traçabilité, la facturation unique et la régularité d\'approvisionnement toute l\'année. Localizz fait ce lien entre producteurs vauclusiens et vos cuisines.',
    },
    {
      question: 'Livrez-vous les communes rurales du Vaucluse ou uniquement les grandes villes ?',
      answer: 'Nous livrons tout le département du Vaucluse : Avignon, Carpentras, Orange, Cavaillon, L\'Isle-sur-la-Sorgue, Apt, Pertuis, Bollène, Vaison-la-Romaine et les communes environnantes.',
    },
    {
      question: 'Comment garantissez-vous l\'approvisionnement en hiver quand la production locale baisse ?',
      answer: 'Nous travaillons avec un réseau large de producteurs sur les 6 départements PACA. L\'hiver, nous mobilisons les productions de la Crau, des serres du Vaucluse et les gammes longue conservation (épicerie, fromages affinés, viandes). Pas de produits importés : 100% région Sud toute l\'année.',
    },
    {
      question: 'Quels sont les délais pour démarrer un approvisionnement ?',
      answer: 'Après un premier échange pour comprendre vos besoins et volumes, nous pouvons mettre en place les premières livraisons sous 1 à 2 semaines. Contactez-nous pour un devis personnalisé.',
    },
  ],
};

const FournisseurAvignon = () => <CityLandingPage data={data} />;
export default FournisseurAvignon;
