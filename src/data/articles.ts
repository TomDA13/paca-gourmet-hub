
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: "partenariat-maraîchers-ventoux",
    title: "Nouveau partenariat avec les Maraîchers de Ventoux",
    excerpt: "Extension de notre gamme de légumes bio avec 15 nouveaux producteurs de la région du Mont Ventoux pour renforcer notre offre locale.",
    content: `
      <p>Nous sommes fiers d'annoncer un nouveau partenariat stratégique avec les Maraîchers de Ventoux, regroupant 15 producteurs locaux de la région emblématique du Mont Ventoux.</p>
      
      <h3>Un engagement renforcé pour le local</h3>
      <p>Ce partenariat s'inscrit dans notre démarche continue de développement des circuits courts et de soutien à l'agriculture locale. Les Maraîchers de Ventoux cultivent depuis des générations des légumes de qualité exceptionnelle, bénéficiant du terroir unique de cette région classée Réserve de Biosphère par l'UNESCO.</p>
      
      <h3>Une gamme élargie de produits bio</h3>
      <p>Grâce à cette collaboration, nous enrichissons notre catalogue avec plus de 30 nouvelles références de légumes biologiques : courgettes, aubergines, tomates anciennes, herbes aromatiques et bien d'autres spécialités provençales.</p>
      
      <h3>Un impact positif sur l'économie locale</h3>
      <p>Ce partenariat représente un chiffre d'affaires supplémentaire de 200 000€ pour les producteurs locaux et renforce notre engagement envers une économie circulaire et durable.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "15 Nov 2024",
    category: "Partenariats",
    readTime: "4 min",
    author: "Équipe Localizz"
  },
  {
    id: "certification-b-corp",
    title: "Localizz certifié B-Corp",
    excerpt: "Reconnaissance officielle de nos engagements sociaux et environnementaux par la certification B-Corporation internationale.",
    content: `
      <p>Nous avons l'honneur d'annoncer que Localizz a obtenu la certification B-Corporation, rejoignant ainsi une communauté mondiale d'entreprises engagées pour le bien commun.</p>
      
      <h3>Qu'est-ce que la certification B-Corp ?</h3>
      <p>La certification B-Corp est décernée aux entreprises qui répondent aux plus hauts standards de performance sociale et environnementale, de transparence publique et de responsabilité légale.</p>
      
      <h3>Notre score et nos engagements</h3>
      <p>Localizz a obtenu un score de 89.2 points sur 200, dépassant largement le seuil requis de 80 points. Cette note reflète nos pratiques exemplaires dans les domaines de la gouvernance, des collaborateurs, de la communauté, de l'environnement et des clients.</p>
      
      <h3>Un engagement pour l'avenir</h3>
      <p>Cette certification n'est pas une fin en soi, mais plutôt le début d'un engagement renforcé vers plus de durabilité et d'impact positif sur notre territoire.</p>
    `,
    image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
    date: "08 Nov 2024",
    category: "Entreprise",
    readTime: "3 min",
    author: "Olivier Da Rold"
  },
  {
    id: "nouvel-entrepot-marseille",
    title: "Ouverture d'un nouvel entrepôt à Marseille",
    excerpt: "Renforcement de notre capacité logistique pour mieux servir les Bouches-du-Rhône et le Var avec plus d'efficacité.",
    content: `
      <p>Dans le cadre de notre expansion régionale, Localizz inaugure son troisième entrepôt logistique à Marseille, dans la zone industrielle de la Capelette.</p>
      
      <h3>Une infrastructure moderne et écologique</h3>
      <p>Ce nouvel espace de 2 000 m² est équipé des dernières technologies de réfrigération écologique et de panneaux solaires couvrant 80% de ses besoins énergétiques.</p>
      
      <h3>Des emplois créés localement</h3>
      <p>Cette ouverture s'accompagne de la création de 12 emplois directs : préparateurs de commandes, chauffeurs-livreurs et responsables qualité, tous recrutés localement.</p>
      
      <h3>Un service renforcé</h3>
      <p>Grâce à cette nouvelle plateforme, nous réduisons de 30% nos délais de livraison dans les Bouches-du-Rhône et le Var, tout en diminuant notre empreinte carbone.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "02 Nov 2024",
    category: "Logistique",
    readTime: "5 min",
    author: "Équipe Localizz"
  },
  {
    id: "saison-primeurs-50-varietes",
    title: "Saison des primeurs : 50 nouvelles variétés",
    excerpt: "Découvrez notre nouvelle gamme de légumes primeurs en direct des producteurs provençaux pour le printemps.",
    content: `
      <p>Le printemps arrive et avec lui, notre nouvelle collection de légumes primeurs ! 50 nouvelles variétés viennent enrichir notre catalogue pour la saison 2024.</p>
      
      <h3>La richesse du terroir provençal</h3>
      <p>Radis roses de 18 jours, navets violets, petits pois mange-tout, fèves fraîches... Nos producteurs partenaires ont sélectionné pour vous les meilleures variétés précoces de la région.</p>
      
      <h3>Fraîcheur garantie</h3>
      <p>Tous nos légumes primeurs sont récoltés le matin même de la livraison, garantissant une fraîcheur optimale et des saveurs préservées.</p>
      
      <h3>Disponibilité et commandes</h3>
      <p>Ces nouvelles références sont d'ores et déjà disponibles sur notre plateforme de commande. Les premières livraisons débutent dès la semaine prochaine.</p>
    `,
    image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
    date: "25 Oct 2024",
    category: "Produits",
    readTime: "3 min",
    author: "Équipe Produits"
  },
  {
    id: "record-livraisons-octobre",
    title: "Record de livraisons en octobre",
    excerpt: "Plus de 120 tonnes de produits locaux livrés ce mois-ci, un record qui témoigne de la confiance de nos partenaires.",
    content: `
      <p>Le mois d'octobre 2024 restera dans les annales de Localizz : nous avons franchi pour la première fois la barre des 120 tonnes de produits locaux livrés en un seul mois !</p>
      
      <h3>Des chiffres qui parlent</h3>
      <p>120,3 tonnes exactement, soit une augmentation de 35% par rapport à octobre 2023. Ce record témoigne de la confiance croissante que nous accordent nos partenaires restaurateurs.</p>
      
      <h3>Une croissance maîtrisée</h3>
      <p>Cette performance exceptionnelle a été rendue possible grâce à l'optimisation de nos tournées de livraison et à l'engagement de toute notre équipe logistique.</p>
      
      <h3>Cap sur novembre</h3>
      <p>Fort de ce succès, nous préparons déjà novembre avec l'arrivée des produits d'automne et l'intégration de nouveaux producteurs partenaires.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "20 Oct 2024",
    category: "Performance",
    readTime: "2 min",
    author: "Direction"
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
  return articles.filter(article => article.id !== currentId).slice(0, limit);
};

export const getLatestArticles = (limit: number = 5): Article[] => {
  return articles.slice(0, limit);
};
