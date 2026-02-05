import CityLandingPage, { CityLandingData } from '@/components/CityLandingPage';

const data: CityLandingData = {
  slug: 'fournisseur-restauration-collective-nice',
  cityName: 'Nice',
  department: 'Alpes-Maritimes',
  departmentNumber: '06',
  seo: {
    title: 'Fournisseur restauration collective Nice - Produits locaux PACA',
    description: 'Localizz, fournisseur de produits locaux pour la restauration collective à Nice et dans les Alpes-Maritimes. Circuit court PACA, livraison quotidienne, conformité EGAlim. Demandez un devis.',
    keywords: [
      'fournisseur restauration collective nice',
      'grossiste produits locaux nice',
      'fournisseur cantine scolaire nice',
      'grossiste alimentaire nice alpes maritimes',
      'produits locaux cuisine centrale nice',
      'fournisseur ehpad nice',
      'circuit court restauration nice 06',
      'livraison produits frais restauration nice',
      'fournisseur egalim alpes maritimes',
      'approvisionnement local restauration nice',
    ],
  },
  hero: {
    headline: 'Fournisseur de produits locaux pour la restauration collective à Nice',
    subheadline: 'Des produits 100% PACA livrés quotidiennement dans les cantines, cuisines centrales, EHPAD et restaurants d\'entreprise de Nice et des Alpes-Maritimes.',
  },
  intro: 'Nice est la deuxième ville de la région PACA et un bassin majeur de restauration collective. La Ville de Nice a été pionnière dans la réflexion sur la juste rémunération des producteurs locaux via la commande publique — un travail mené en partenariat avec Max Havelaar France auquel Localizz a participé. Nous livrons quotidiennement les établissements niçois en produits sourcés dans la région Sud, du Vaucluse aux Alpes du Sud.',
  clients: {
    title: 'Les établissements que nous servons à Nice et dans le 06',
    items: [
      'Cuisine centrale de la Ville de Nice et cantines scolaires de la métropole Nice Côte d\'Azur',
      'EHPAD et établissements de santé des Alpes-Maritimes',
      'Restaurants d\'entreprise et sociétés de restauration collective sur Nice',
      'Restauration commerciale et hôtellerie dans les Alpes-Maritimes',
      'Cantines de collèges et lycées du département des Alpes-Maritimes',
      'Structures médico-sociales : crèches, centres de rééducation, foyers',
    ],
  },
  products: {
    intro: 'Malgré la distance avec les zones de production du Rhône et de la Crau, notre logistique permet une livraison quotidienne de produits ultra-frais à Nice depuis l\'ensemble de la région PACA.',
    highlights: [
      'Fruits et légumes de saison du Vaucluse et des vallées de la Durance, livrés en circuit court',
      'Taureau de Camargue AOP : une viande d\'exception pour différencier vos menus niçois',
      'Porc plein air de la Crau et boeuf HVE des Alpes : viandes locales traçables',
      'Riz de Camargue IGP, huiles d\'olive de Provence et miels mono-floraux pour vos recettes méditerranéennes',
    ],
  },
  logistics: {
    intro: 'Notre réseau logistique couvre l\'intégralité des Alpes-Maritimes, de Menton à Cannes en passant par Nice, Antibes et Grasse.',
    points: [
      'Livraison quotidienne sur Nice, Cannes, Antibes, Grasse, Menton et tout le département 06',
      'Palettes multiproduits en chambre froide : une seule livraison pour toutes vos gammes',
      'Tournée optimisée : collecte chez les producteurs PACA puis livraison directe dans vos cuisines',
      'Chaîne du froid garantie sur tout le trajet, même en période estivale',
      'Agréage avant livraison : contrôle qualité systématique par nos ingénieurs agronomes',
      'Commandes passées la veille, livrées le lendemain matin',
    ],
  },
  egalim: {
    intro: 'La Ville de Nice est engagée dans une démarche ambitieuse de rémunération juste des producteurs et de conformité EGAlim. Localizz accompagne cette dynamique.',
    points: [
      '50% de produits durables : nos produits labellisés (AOP, IGP, Bio, HVE, Label Rouge) répondent directement aux critères EGAlim',
      'Traçabilité par exploitation : vous savez exactement d\'où vient chaque produit servi dans vos assiettes',
      'Juste rémunération des producteurs : notre modèle garantit un prix basé sur les coûts de production réels',
      'Reporting et statistiques d\'achats pour vos bilans EGAlim annuels',
      'Réponse aux appels d\'offres : nous intervenons sur les MAPA alimentaires des collectivités des Alpes-Maritimes',
    ],
  },
  faqItems: [
    {
      question: 'Livrez-vous dans toutes les Alpes-Maritimes ou uniquement à Nice ?',
      answer: 'Nous livrons quotidiennement Nice et l\'ensemble des Alpes-Maritimes : Cannes, Antibes, Grasse, Menton, Cagnes-sur-Mer, Sophia Antipolis, et toutes les communes du département 06.',
    },
    {
      question: 'Les produits sont-ils vraiment locaux malgré la distance avec les zones de production ?',
      answer: 'Oui, tous nos produits sont sourcés en région PACA (Bouches-du-Rhône, Vaucluse, Var, Alpes du Sud). Notre logistique en flux tendu assure une livraison rapide avec une fraîcheur optimale, même jusqu\'à Nice.',
    },
    {
      question: 'Travaillez-vous avec les sociétés de restauration collective à Nice ?',
      answer: 'Oui, nous sommes référencés auprès de sociétés de restauration collective et livrons leurs sites niçois. Ces sociétés doivent respecter un quota de produits locaux et durables : notre gamme leur permet d\'atteindre ces objectifs.',
    },
    {
      question: 'Comment garantissez-vous la juste rémunération des producteurs ?',
      answer: 'Localizz est l\'unique intermédiaire entre les producteurs et votre cuisine. Nous fixons les prix en fonction des coûts de production réels, garantissant une rémunération juste. Ce modèle a été étudié avec la Ville de Nice et Max Havelaar France.',
    },
  ],
};

const FournisseurNice = () => <CityLandingPage data={data} />;
export default FournisseurNice;
