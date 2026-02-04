import CityLandingPage, { CityLandingData } from '@/components/CityLandingPage';

const data: CityLandingData = {
  slug: 'fournisseur-restauration-collective-toulon',
  cityName: 'Toulon',
  department: 'Var',
  departmentNumber: '83',
  seo: {
    title: 'Fournisseur restauration collective Toulon - Produits locaux PACA',
    description: 'Localizz, fournisseur de produits locaux pour la restauration collective à Toulon et dans le Var. Fruits, légumes, viandes, crémerie sourcés en PACA. Livraison quotidienne, conformité EGAlim.',
    keywords: [
      'fournisseur restauration collective toulon',
      'grossiste produits locaux toulon',
      'fournisseur cantine scolaire toulon var',
      'grossiste alimentaire toulon 83',
      'produits locaux cuisine centrale toulon',
      'fournisseur ehpad toulon',
      'circuit court restauration toulon var',
      'livraison produits frais restauration toulon',
      'fournisseur egalim var',
      'approvisionnement local restauration var 83',
    ],
  },
  hero: {
    headline: 'Fournisseur de produits locaux pour la restauration collective à Toulon',
    subheadline: 'Produits 100% PACA livrés quotidiennement aux établissements de restauration collective de Toulon, Hyères, Fréjus, Draguignan et tout le Var.',
  },
  intro: 'Le Var est le troisième département de la région PACA en population, avec des villes comme Toulon, Hyères, Fréjus et Draguignan qui concentrent une demande importante en restauration collective. Localizz approvisionne les établissements varois en produits locaux sourcés exclusivement en région Sud — des fruits et légumes du Vaucluse aux viandes des Alpes et de la Crau, en passant par les fromages fermiers des alpages.',
  clients: {
    title: 'À qui nous livrons dans le Var',
    items: [
      'Cuisines centrales et cantines de la métropole Toulon-Provence-Méditerranée',
      'Cantines scolaires des collèges et lycées du Var',
      'EHPAD et centres de gérontologie du département',
      'Restaurants d\'entreprise et sociétés de restauration sous contrat sur le bassin toulonnais',
      'Restauration commerciale et hôtellerie de Toulon, Hyères, Bandol et la côte varoise',
      'Bases militaires et institutions du bassin de Toulon (sur marché public)',
    ],
  },
  products: {
    intro: 'Le Var bénéficie d\'une position centrale en PACA : nos producteurs partenaires du Vaucluse, des Bouches-du-Rhône et des Alpes du Sud sont tous à portée de livraison quotidienne.',
    highlights: [
      'Fruits et légumes de saison : maraîchers du Vaucluse, de la Crau et du Var, récoltés à maturité',
      'Viandes locales traçables : boeuf HVE, porc plein air, agneau du Lubéron, volaille fermière Label Rouge',
      'Crémerie des Alpes du Sud : fromages fermiers, yaourts bio du Champsaur, oeufs plein air certifiés',
      'Épicerie provençale : riz de Camargue IGP, miels du Var et de Provence, confitures artisanales',
    ],
  },
  logistics: {
    intro: 'Notre logistique couvre l\'intégralité du département du Var, du littoral à l\'arrière-pays.',
    points: [
      'Livraison quotidienne sur Toulon, Hyères, La Seyne-sur-Mer, Fréjus, Draguignan, Brignoles',
      'Palettes multiproduits : une seule livraison combine fruits, légumes, viandes, crémerie et épicerie',
      'Flux tendu : pas de stock intermédiaire, produits collectés chez les producteurs et livrés sous 24-48h',
      'Chaîne du froid maîtrisée : nos camions réfrigérés garantissent la qualité jusqu\'à votre quai',
      'Agréage systématique : triple contrôle qualité (producteur, plateforme, avant livraison)',
      'Commande la veille, livraison le lendemain : réactivité adaptée aux besoins de la restauration collective',
    ],
  },
  egalim: {
    intro: 'Les collectivités du Var accélèrent leur mise en conformité EGAlim. Localizz fournit les produits labellisés et la traçabilité nécessaires.',
    points: [
      '50% de produits durables : AOP Taureau de Camargue, IGP Riz de Camargue, Bio, HVE, Label Rouge dans notre catalogue',
      '20% de produits bio : fruits, légumes, crémerie et viandes bio disponibles toute l\'année',
      'Justificatifs d\'origine transmis à chaque livraison pour vos audits et reporting',
      'Statistiques d\'achats EGAlim sur demande pour piloter vos approvisionnements',
      'Réponse aux MAPA et marchés publics alimentaires des collectivités du Var',
    ],
  },
  faqItems: [
    {
      question: 'Couvrez-vous tout le département du Var ?',
      answer: 'Oui, nous livrons quotidiennement Toulon et l\'ensemble du Var : Hyères, La Seyne-sur-Mer, Fréjus, Saint-Raphaël, Draguignan, Brignoles, Bandol, Six-Fours et toutes les communes du 83.',
    },
    {
      question: 'Pouvez-vous fournir les bases militaires de Toulon ?',
      answer: 'Oui, nous répondons aux marchés publics alimentaires et pouvons fournir les institutions et bases du bassin de Toulon dans le cadre de procédures de marché formalisées.',
    },
    {
      question: 'Quel est le volume minimum de commande ?',
      answer: 'Nous travaillons avec des établissements de toutes tailles, de la petite cantine scolaire à la cuisine centrale de plusieurs milliers de couverts. Contactez-nous pour un devis adapté à vos volumes.',
    },
    {
      question: 'Comment passez-vous du conventionnel au local dans nos menus ?',
      answer: 'Nous vous accompagnons étape par étape : diagnostic de vos achats actuels, proposition de substitutions locales, planification saisonnière des menus, puis montée en charge progressive. Le tout avec un suivi de vos indicateurs EGAlim.',
    },
  ],
};

const FournisseurToulon = () => <CityLandingPage data={data} />;
export default FournisseurToulon;
