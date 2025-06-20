
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
    id: "localizz-solutions-locales-marseille",
    title: "Localizz : Des solutions locales et durables pour l'agriculture et l'alimentation à Marseille",
    excerpt: "Rencontre entre Localizz et la municipalité de Marseille pour soutenir l'approvisionnement local, l'accessibilité alimentaire et l'agriculture urbaine dans le cadre du Projet Agri-Alimentaire Marseillais.",
    content: `
      <p>Nous avons récemment eu le plaisir de recevoir les équipes de SIF Aïcha, adjointe au Maire de Marseille, pour échanger autour des grands enjeux actuels de l'alimentation durable sur le territoire marseillais. Cette rencontre, organisée dans le cadre du Projet Agri-Alimentaire Marseillais (PAAM), a permis de mettre en avant l'expertise de <a href="/notre-offre" class="text-primary hover:underline">Localizz en matière d'approvisionnement en produits locaux</a> issus de circuits courts et de développement durable.</p>
      
      <h3>Trois axes majeurs ont guidé nos discussions :</h3>
      
      <p><strong>Des solutions opérationnelles d'approvisionnement local :</strong> nous avons abordé les besoins de la municipalité en matière de volumes et d'offres pour garantir une alimentation saine et durable dans la restauration collective à Marseille.</p>
      
      <p><strong>L'accessibilité alimentaire :</strong> nous avons présenté des pistes concrètes pour améliorer l'accès à une alimentation de qualité pour les personnes en difficulté, en privilégiant systématiquement l'origine locale des produits.</p>
      
      <p><strong>Le développement de l'agriculture urbaine :</strong> enfin, nous avons évoqué des stratégies pour encourager l'agriculture urbaine, au service aussi bien de la restauration collective que des particuliers.</p>
      
      <p>Cet échange constructif nous a permis de présenter des solutions déjà éprouvées auprès de nombreuses collectivités de la région Sud, et qui répondent pleinement aux attentes de la Ville de Marseille. <a href="/nos-engagements" class="text-primary hover:underline">Découvrez nos engagements</a> pour une alimentation durable et locale.</p>
      
      <p>Un grand merci à SIF Aïcha, Ludovic Mille, Sophie Laroche, Géraldine Lassarat, la Ville de Marseille et Monsieur le maire Benoît PAYAN pour la qualité de ces échanges et leur confiance.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "20 Déc 2024",
    category: "Partenariats",
    readTime: "4 min",
    author: "Équipe Localizz"
  },
  {
    id: "juste-remuneration-producteurs-salon-agriculture",
    title: "Pour une juste rémunération des producteurs locaux : plaidoyer au Salon International de l'Agriculture",
    excerpt: "Table ronde sur la rémunération équitable des agriculteurs dans la commande publique, organisée au Salon de l'Agriculture avec la Ville de Nice, Max Havelaar France et plusieurs acteurs institutionnels.",
    content: `
      <p>Nous sommes très fiers d'avoir participé à une table ronde essentielle sur la question de la juste rémunération des producteurs, organisée lors du Salon International de l'Agriculture. Cet événement a permis de mettre en lumière un enjeu fondamental : aujourd'hui, les collectivités n'ont que très rarement de visibilité sur la façon dont les agriculteurs et agricultrices sont rémunérés à travers la commande publique.</p>
      
      <p>Depuis un an, Localizz mène avec la Ville de Nice et Max Havelaar France une étude approfondie sur ce sujet, afin d'apporter des réponses concrètes en restauration collective grâce à un partenariat durable.</p>
      
      <h3>Lors de cette table ronde, plusieurs constats importants ont émergé :</h3>
      
      <p>La commande publique alimentaire, qui représente au moins 10 % du marché, ne garantit pas encore que les producteurs locaux bénéficient d'une rémunération juste et transparente.</p>
      
      <p>Ce constat inédit engage désormais un véritable plaidoyer : il est temps que la commande publique joue pleinement son rôle de moteur en matière de durabilité et de justice sociale, en protégeant mieux la rémunération des premiers acteurs de la chaîne : les agriculteurs.</p>
      
      <h3>Plusieurs intervenants ont partagé leur expertise :</h3>
      
      <p><strong>Bruno Gilet</strong>, directeur de la restauration de la Ville de Nice, a présenté l'initiative pionnière menée avec Max Havelaar France : un diagnostic précis de la rémunération des agriculteurs fournisseurs de fruits et légumes pour la cuisine centrale. Il a souligné le manque de lisibilité actuel, tout en appelant à généraliser ce type de diagnostic au niveau national.</p>
      
      <p><strong>Frederika Lhuissier</strong>, du Ministère de l'Agriculture et de la Souveraineté alimentaire, a rappelé l'engagement de l'État en faveur d'une alimentation durable, tout en reconnaissant les limites actuelles des outils à disposition des collectivités.</p>
      
      <p><strong>Gérard Leseul</strong>, député, a relevé les lacunes des lois EGALIM pour sécuriser les revenus agricoles et a encouragé de nouvelles propositions législatives ambitieuses.</p>
      
      <p><strong>Anne-Marie Denis</strong>, agricultrice et membre de la FNSEA, a insisté sur l'importance de la commande publique pour soutenir une agriculture plus vertueuse. Elle a aussi alerté sur la difficulté de maintenir les jeunes agriculteurs bio si le bio n'est pas mieux intégré dans la consommation courante et si la rémunération n'est pas à la hauteur.</p>
      
      <p>Ce débat a permis de rappeler que le prix d'un repas juste et équilibré est supérieur à ce que l'on imagine, mais qu'il est essentiel pour assurer une alimentation de qualité et soutenir durablement nos producteurs locaux, avec l'appui indispensable de la commande publique. <a href="/qui-sommes-nous" class="text-primary hover:underline">En savoir plus sur notre mission</a>.</p>
    `,
    image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
    date: "15 Déc 2024",
    category: "Événements",
    readTime: "6 min",
    author: "Équipe Localizz"
  },
  {
    id: "partenariat-loubatas-ecologique",
    title: "Le Loubatas et Localizz : un partenariat écologique pour une alimentation durable et locale",
    excerpt: "Collaboration entre Le Loubatas et Localizz pour sensibiliser les jeunes à l'alimentation responsable à travers des ateliers de jardin et de cuisine, tout en soutenant les circuits courts et les producteurs locaux.",
    content: `
      <p>Le Loubatas est fier de renforcer sa collaboration avec Localizz, un fournisseur et mécène engagé en faveur d'une alimentation durable et locale. Grâce à ce partenariat, nous proposons régulièrement aux jeunes des ateliers de sensibilisation à l'alimentation : chaque soir, des activités de jardinage et de cuisine sont organisées au Loubatas, créant ainsi un véritable lien entre la terre et l'assiette.</p>
      
      <p>Ces ateliers offrent aux enfants l'occasion de découvrir d'où viennent leurs aliments, de saisir l'importance des produits locaux, et de s'initier de manière concrète à une alimentation à la fois équilibrée et respectueuse de l'environnement.</p>
      
      <h3>Les bénéfices de notre partenariat avec Localizz sont multiples :</h3>
      
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Soutien aux circuits courts</strong>, pour limiter l'empreinte carbone et privilégier la proximité.</li>
        <li><strong>Offre de produits frais et de qualité</strong> lors de nos séjours éducatifs.</li>
        <li><strong>Valorisation de l'économie régionale</strong>, en accompagnant les producteurs locaux.</li>
        <li><strong>Préservation des saveurs authentiques de la Provence</strong>, pour une alimentation riche de sens et de goût.</li>
      </ul>
      
      <p>Un grand merci à Localizz pour leur soutien précieux et leur engagement quotidien pour une alimentation plus responsable. Ensemble, nous œuvrons pour un avenir où l'écologie et la santé sont au cœur de l'éducation et des pratiques alimentaires. <a href="/nos-engagements" class="text-primary hover:underline">Découvrez nos engagements environnementaux</a>.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "10 Déc 2024",
    category: "Éducation",
    readTime: "3 min",
    author: "Le Loubatas"
  },
  {
    id: "localizz-education-alimentation-loubatas",
    title: "Localizz : agir pour l'éducation à une alimentation saine et durable avec Le Loubatas",
    excerpt: "Localizz s'engage en tant que mécène aux côtés du Loubatas pour sensibiliser petits et grands à une alimentation locale, saine et responsable à travers des ateliers pratiques de jardin et de cuisine.",
    content: `
      <p>Chez Localizz, l'éducation à l'alimentation est au cœur de nos valeurs. Nous sommes convaincus que la transition vers une alimentation saine, locale et durable commence par la sensibilisation, dès le plus jeune âge, aux bienfaits de nouveaux modes de consommation.</p>
      
      <p>C'est dans cette démarche que nous soutenons fièrement Le Loubatas, qui anime régulièrement des ateliers éducatifs auprès des jeunes générations. Grâce à ces ateliers de jardin et de cuisine organisés chaque soir de séjour, les enfants découvrent concrètement l'origine de leurs aliments et participent activement à la préparation des repas. Par petits groupes, ils passent une heure au jardin ou en cuisine avec un animateur ou une animatrice, ce qui les aide à mieux comprendre ce qu'ils consomment et à s'approprier leur alimentation.</p>
      
      <p>En tant que mécène, <a href="/qui-sommes-nous" class="text-primary hover:underline">Localizz contribue à rendre possible</a> ces journées et ateliers de sensibilisation, qui abordent notamment l'importance de la saisonnalité des produits et les bénéfices d'une alimentation équilibrée. Nous sommes heureux de jouer notre rôle pour encourager, à tous les âges, des habitudes alimentaires plus responsables et durables.</p>
      
      <p>Ces initiatives s'inscrivent parfaitement dans <a href="/nos-engagements" class="text-primary hover:underline">notre mission d'entreprise à missions</a>, où l'éducation et la sensibilisation sont des piliers essentiels de notre action.</p>
    `,
    image: "/lovable-uploads/ab303051-df5e-4115-89b0-3d254f762a71.png",
    date: "05 Déc 2024",
    category: "Éducation",
    readTime: "3 min",
    author: "Équipe Localizz"
  },
  {
    id: "localizz-limite-gaspillage-alimentaire",
    title: "Comment Localizz limite le gaspillage alimentaire dans la région Sud : un modèle d'approvisionnement ultra-frais et responsable",
    excerpt: "Les méthodes innovantes de Localizz pour réduire drastiquement les déchets alimentaires dans la livraison de produits locaux aux restaurants de la région Sud PACA.",
    content: `
      <p>Chez Localizz, la lutte contre le gaspillage alimentaire fait partie intégrante de notre démarche. En 2023, sur les 720 tonnes de produits locaux que nous avons livrés dans les restaurants de la région SUD PACA, nous avons généré moins de déchets alimentaires qu'un foyer de deux personnes : soit moins de 300 kg par an !</p>
      
      <h3>Notre secret ?</h3>
      
      <p><strong>Une logistique en flux tendu :</strong> Nous planifions précisément chaque commande et chaque livraison pour éviter les surplus ou les pertes. Cette organisation nous permet de garantir des produits ultra-frais sans jamais avoir à constituer de stocks inutiles.</p>
      
      <p><strong>Des produits livrés à maturité :</strong> Les fruits et légumes sont choisis selon vos jours de consommation, ce qui assure une fraîcheur optimale et une consommation totale par vos convives : aucun gaspillage dans l'assiette !</p>
      
      <p><strong>Des produits laitiers et des viandes produits à la demande :</strong> <a href="/notre-offre" class="text-primary hover:underline">Nos producteurs partenaires</a> n'élaborent ces produits qu'en fonction des commandes reçues, vous garantissant ainsi la durée de vie la plus longue possible (DLC).</p>
      
      <p><strong>La valorisation de toute la production :</strong> Nous proposons également des fruits et légumes "moches", hors calibre ou de forme atypique, tout aussi savoureux et qui permettent de ne rien perdre des récoltes.</p>
      
      <p><strong>Le don des produits abîmés :</strong> Enfin, les rares fruits et légumes abîmés sont offerts à la ferme pédagogique des Pennes-Mirabeau, où ils servent à nourrir les animaux.</p>
      
      <p>Au final, si nos poubelles sont presque vides, c'est simplement parce qu'elles servent très peu : chaque produit compte et chaque geste vise à préserver la planète tout en valorisant le travail de nos producteurs locaux. Cette approche s'inscrit pleinement dans <a href="/nos-engagements" class="text-primary hover:underline">nos engagements environnementaux et sociaux</a>.</p>
    `,
    image: "/lovable-uploads/397eff38-3549-4d6d-ac27-5b15135db085.png",
    date: "01 Déc 2024",
    category: "Environnement",
    readTime: "4 min",
    author: "Équipe Localizz"
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
