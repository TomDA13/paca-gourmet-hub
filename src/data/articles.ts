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
    showInList?: boolean;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      keywords?: string[];
      canonicalUrl?: string;
      faqItems?: Array<{
        question: string;
        answer: string;
      }>;
    };
  }

export const articles: Article[] = [
  {
    id: "filiere-taureau-camargue-aop-paca",
    title: "Filière Taureau de Camargue AOP : des manades à la restauration collective",
    excerpt: "Élevage extensif en manades, traçabilité maîtrisée et transformation locale : la filière AOP Taureau de Camargue incarne un modèle durable qui relie patrimoine, biodiversité et alimentation de proximité pour la restauration collective et commerciale en région PACA.",
    showInList: false,
    seo: {
      metaTitle: "Filière Taureau de Camargue AOP : des manades à la restauration collective",
      metaDescription: "Élevage extensif en manades, traçabilité et transformation locale : la filière AOP Taureau de Camargue relie patrimoine, biodiversité et alimentation de proximité pour la restauration collective et commerciale en région PACA.",
      keywords: [
        "taureau de camargue",
        "aop taureau",
        "manades camargue",
        "viande locale paca",
        "restauration collective",
        "élevage extensif",
        "raço di biòu",
        "filière courte",
        "loi egalim",
        "localizz"
      ],
      canonicalUrl: "https://www.localizz.fr/actualites/filiere-taureau-camargue-aop-paca"
    },
    content: `
      <div class="space-y-6">
        <figure class="mb-8">
        
          <figcaption class="text-center text-muted-foreground mt-2">
            Taureau de Camargue (Raço di Biòu) élevé en manade, au cœur des zones humides du delta du Rhône.
          </figcaption>
        </figure>

        <div class="bg-accent/30 p-6 rounded-lg border-l-4 border-primary">
          <p class="text-lg leading-relaxed">
            Élevage extensif en manades, traçabilité maîtrisée et transformation locale : la filière
            <strong>AOP Taureau de Camargue</strong> incarne un modèle durable qui relie patrimoine, biodiversité
            et alimentation de proximité pour la restauration collective et commerciale en région PACA.
          </p>
        </div>

        <h2 class="text-2xl font-bold mt-8 mb-4">Un élevage extensif unique en Europe</h2>
        <p>
          Entre Arles et les Saintes-Maries-de-la-Mer s'étend le berceau d'un élevage singulier : celui du
          <strong>taureau de Camargue</strong>, de race <strong>Raço di Biòu</strong>. Les animaux vivent en
          liberté dans les <em>manades</em>, pâturant naturellement herbes salées, roseaux et saladelles
          sur plus de 90 000 hectares de zones humides. Ce rythme de vie extensif forge une viande
          <strong>maigre</strong>, <strong>riche en fer</strong>, à la <strong>couleur rouge profonde</strong> et au
          goût affirmé, recherchée par les cuisines centrales et les chefs attachés au terroir.
        </p>
        <p>
          Pour découvrir les références disponibles et les conditionnements professionnels, consultez notre page
          <a href="/taureaux-de-camargue-aop" class="text-primary hover:text-secondary underline font-semibold">Viande de taureau de Camargue AOP</a>.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Les manades, gardiennes d'un patrimoine vivant</h2>
        <p>
          Les <strong>manadiers</strong> perpétuent un savoir-faire ancestral où le respect de l'animal et
          l'équilibre écologique priment. Le pâturage extensif entretient les prairies naturelles, limite
          l'enfrichement et contribue à la <strong>préservation de la biodiversité</strong>. Chaque manade est un
          maillon de l'économie locale : elle valorise une agriculture extensive résiliente et transmet une culture
          régionale singulière.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">La filière AOP : traçabilité et qualité contrôlée</h2>
        <p>
          L'<strong>Appellation d'Origine Protégée "Taureau de Camargue"</strong> encadre strictement la filière :
          naissance et élevage au sein de la zone Camargue (Bouches-du-Rhône, Gard, Hérault), pâturage libre en zone
          humide au moins six mois par an, et transformation locale au sein du périmètre certifié (notamment Tarascon).
          Les races éligibles sont la <em>Raço di Biòu</em> et, selon usages, la race dite "de combat". Des contrôles
          indépendants garantissent <strong>origine</strong>, <strong>conformité</strong> et <strong>sécurité
          sanitaire</strong> à chaque étape.
        </p>
        <p>
          En partenariat avec la filière d'abattage de <strong>Tarascon</strong>, Localizz assure un
          <strong>approvisionnement professionnel traçable</strong> en <a href="/taureaux-de-camargue-aop" class="text-primary hover:text-secondary underline font-semibold">viande AOP
          Taureau de Camargue</a> pour les collectivités, cuisines centrales et CHR.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Une viande locale alignée avec la loi EGAlim</h2>
        <p>
          La demande en produits locaux et durables s'accélère, notamment avec la
          <a href="/actualites/loi-egalim-restauration-collective-paca-2025" class="text-primary hover:text-secondary underline font-semibold">loi EGAlim</a> (50 % de produits
          durables, transparence, lutte contre le gaspillage). La <strong>viande de taureau AOP</strong> répond à ces
          exigences : ancrage territorial, traçabilité, qualité nutritionnelle et filière courte.
        </p>
        <p>
          Pour vos menus, elle se décline en <strong>gardianne</strong>, <strong>bourguignon</strong>,
          <strong>pavé grillé</strong> ou <strong>côte</strong> — des usages qui conjuguent identité culinaire et
          régularité d'approvisionnement.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Préserver un patrimoine, nourrir durablement</h2>
        <p>
          Choisir cette filière, c'est soutenir un <strong>modèle agro-écologique</strong> complet : élevage respectueux
          des milieux, transformation locale, <strong>juste rémunération</strong> des éleveurs et
          <strong>circuits courts</strong> vers la restauration collective. Grâce à l'organisation logistique de Localizz,
          les établissements peuvent intégrer une viande d'exception à leurs cartes tout en renforçant leur démarche
          durable.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion : une filière d'identité au service du territoire</h2>
        <p>
          Le <strong>Taureau de Camargue AOP</strong> n'est pas qu'un symbole : c'est un écosystème où le terroir,
          la culture et l'alimentation responsable se rejoignent. En PACA, Localizz relie les manades camarguaises et
          les cuisines professionnelles pour faire vivre, au quotidien, une filière <strong>locale</strong>,
          <strong>maîtrisée</strong> et <strong>durable</strong>.
        </p>
        <p>
          👉 En savoir plus sur nos références : <a href="/taureaux-de-camargue-aop" class="text-primary hover:text-secondary underline font-semibold">Viande de taureau de Camargue AOP</a> ·
          Guide réglementaire : <a href="/actualites/loi-egalim-restauration-collective-paca-2025" class="text-primary hover:text-secondary underline font-semibold">Loi EGAlim en PACA</a>.
        </p>
      </div>
    `,
    image: "/lovable-uploads/taureau-camargue.png",
    date: "2025-01-15",
    category: "Filières locales",
    readTime: "8 min",
    author: "Équipe Localizz"
  },
  {
    id: "loi-egalim-restauration-collective-paca-2025",
      title: "Loi EGAlim : guide complet pour les cantines et collectivités en PACA (2025)",
      excerpt:
        "Découvrez comment appliquer concrètement la loi EGAlim dans votre restauration collective : obligations, étapes pratiques, bénéfices et solutions locales en région PACA.",
      showInList: false,
      seo: {
        metaTitle: "Loi EGAlim : guide complet cantines et collectivités PACA 2025",
        metaDescription: "Guide pratique loi EGAlim : obligations 50% produits durables, menu végétarien, lutte gaspillage. Solutions locales pour cantines en région PACA. Application concrète.",
        keywords: [
          "loi egalim",
          "restauration collective",
          "cantines",
          "paca",
          "produits locaux",
          "circuits courts",
          "agriculture durable",
          "50% produits durables",
          "menu végétarien",
          "approvisionnement local",
          "collectivités",
          "région sud",
          "localizz"
        ],
        canonicalUrl: "https://localizz.fr/actualites/loi-egalim-restauration-collective-paca-2025",
        faqItems: [
          {
            question: "Où trouver le texte officiel de la loi EGAlim ?",
            answer: "Le texte officiel de la loi EGAlim est disponible sur legifrance.gouv.fr dans la rubrique alimentation et agriculture, ainsi que sur le site du Ministère de l'Agriculture."
          },
          {
            question: "Le repas végétarien est-il obligatoire dans toutes les cantines ?",
            answer: "Oui, la loi EGAlim impose un repas végétarien obligatoire au moins une fois par semaine dans les établissements scolaires publics depuis 2019."
          },
          {
            question: "La loi EGAlim concerne-t-elle aussi le secteur privé ?",
            answer: "Oui, depuis 2024, la loi s'applique progressivement aux entreprises de restauration privée, incluant les cantines d'entreprises et la restauration sous contrat, avec les mêmes objectifs de durabilité."
          },
          {
            question: "Comment prouver la conformité à la loi EGAlim ?",
            answer: "La conformité se prouve par la tenue d'un registre de traçabilité, les factures des produits achetés, et l'affichage public des taux de produits durables et biologiques dans les menus."
          },
          {
            question: "Existe-t-il des aides pour appliquer la loi EGAlim en PACA ?",
            answer: "Oui, certaines régions et départements PACA proposent des subventions pour les diagnostics alimentaires et la formation des personnels de restauration collective."
          }
        ]
      },
      content: `
        <div class="space-y-6">
          <div class="bg-accent/30 p-6 rounded-lg border-l-4 border-primary">
            <p class="text-lg leading-relaxed">Depuis 2018, la loi EGAlim (Équilibre des relations commerciales dans le secteur agricole et alimentaire) bouleverse la manière dont les cantines, hôpitaux, EHPAD ou entreprises s'approvisionnent. Au-delà d'un texte réglementaire, c'est une transformation profonde du modèle alimentaire français : plus durable, plus local, plus transparent.</p>
          </div>

          <p>En région PACA, cette loi résonne tout particulièrement : la diversité agricole et la richesse des productions locales en font un terrain idéal pour réussir cette transition. Mais comment s'y conformer concrètement ? Quelles obligations réelles pour la restauration collective ? Et comment s'organiser localement ?</p>

          <h2 class="text-2xl font-bold mt-8 mb-4">1. Qu'est-ce que la loi EGAlim ?</h2>
          
          <p>Adoptée le 30 octobre 2018, la loi EGAlim vise à « promouvoir une alimentation saine, durable et accessible à tous ». Elle touche toute la chaîne : producteurs, transformateurs, distributeurs et acteurs de la restauration collective publique et privée.</p>

          <h3 class="text-xl font-semibold mt-6 mb-3">Ses objectifs principaux :</h3>
          
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Garantir un revenu plus juste aux agriculteurs</li>
            <li>Encourager les circuits courts et la production locale</li>
            <li>Améliorer la qualité nutritionnelle des repas servis</li>
            <li>Réduire le gaspillage et les déchets</li>
            <li>Renforcer la transparence pour les convives</li>
          </ul>

          <h2 class="text-2xl font-bold mt-8 mb-4">2. Les principales obligations pour la restauration collective</h2>

          <h3 class="text-xl font-semibold mt-6 mb-3">a) 50 % de produits durables et de qualité</h3>
          
          <p>Depuis le 1ᵉʳ janvier 2022, tous les restaurants collectifs publics doivent proposer au moins <strong>50 % de produits durables</strong>, dont <strong>20 % issus de l'agriculture biologique</strong>.</p>
          
          <p class="mt-3">Sont comptés :</p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Produits labellisés (Label Rouge, AOP, IGP, HVE…)</li>
            <li>Produits issus des circuits courts</li>
            <li>Ou d'entreprises respectant des critères environnementaux stricts</li>
          </ul>

          <h3 class="text-xl font-semibold mt-6 mb-3">b) Un menu végétarien hebdomadaire</h3>
          
          <p>La loi impose également un <strong>repas végétarien obligatoire au moins une fois par semaine</strong> dans les cantines scolaires. Objectif : diversification des protéines et sensibilisation à l'alimentation durable.</p>

          <h3 class="text-xl font-semibold mt-6 mb-3">c) Lutte contre le gaspillage alimentaire</h3>
          
          <p>Les établissements doivent mettre en place :</p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Un diagnostic annuel des pertes</li>
            <li>Des actions de sensibilisation</li>
            <li>La valorisation des invendus via dons alimentaires</li>
          </ul>

          <p class="mt-3">Découvrez comment <a href="/actualites/localizz-limite-gaspillage-alimentaire" class="text-primary hover:underline font-medium">Localizz limite le gaspillage alimentaire en région Sud</a>.</p>

          <h3 class="text-xl font-semibold mt-6 mb-3">d) Information et traçabilité</h3>
          
          <p>Les convives doivent être informés de la provenance et de la qualité des produits servis. Les menus doivent afficher la part de produits bio et durables, ainsi que les démarches environnementales engagées.</p>

          <h3 class="text-xl font-semibold mt-6 mb-3">e) Extension au secteur privé</h3>
          
          <p>Depuis 2024, la loi s'applique progressivement aux entreprises de restauration privée (cantines d'entreprises, établissements de santé, restauration sous contrat). Les objectifs et indicateurs sont identiques : qualité, durabilité, transparence.</p>

          <h2 class="text-2xl font-bold mt-8 mb-4">3. Pourquoi c'est un défi majeur pour les collectivités</h2>
          
          <p>Pour de nombreuses communes, collèges ou hôpitaux, appliquer la loi EGAlim n'est pas seulement une question de volonté : c'est aussi un défi logistique et budgétaire.</p>

          <h3 class="text-xl font-semibold mt-6 mb-3">Les principaux freins :</h3>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Manque de fournisseurs référencés localement</li>
            <li>Contraintes de marchés publics</li>
            <li>Coût perçu du bio et du local</li>
            <li>Gestion des volumes et de la régularité</li>
          </ul>

          <p class="mt-4">Pourtant, les retours d'expérience en PACA montrent que la transition est possible, surtout lorsqu'elle s'appuie sur des partenaires spécialisés dans la livraison en circuits courts.</p>

          <h2 class="text-2xl font-bold mt-8 mb-4">4. Comment appliquer la loi EGAlim étape par étape</h2>

          <div class="bg-secondary/10 p-6 rounded-lg space-y-4 mt-4">
            <div class="border-l-4 border-primary pl-4">
              <h3 class="text-lg font-semibold mb-2">Étape 1 : Faire un état des lieux</h3>
              <p>Identifier la part actuelle de produits durables, les contrats existants, et les possibilités d'évolution.</p>
            </div>

            <div class="border-l-4 border-primary pl-4">
              <h3 class="text-lg font-semibold mb-2">Étape 2 : Définir une stratégie d'approvisionnement</h3>
              <p>Travailler sur un plan :</p>
              <ul class="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Prioriser les produits faciles à relocaliser (fruits, légumes, œufs, pain)</li>
                <li>Mutualiser les commandes entre établissements</li>
                <li>Planifier la saisonnalité</li>
              </ul>
            </div>

            <div class="border-l-4 border-primary pl-4">
              <h3 class="text-lg font-semibold mb-2">Étape 3 : Rechercher des partenaires locaux</h3>
              <p>C'est ici que des acteurs comme <a href="/notre-offre" class="text-primary hover:underline font-medium">Localizz, plateforme d'approvisionnement en produits locaux</a> pour la restauration collective en région PACA, peuvent simplifier la mise en relation entre producteurs et cuisines centrales. Localizz accompagne déjà plusieurs collectivités de la région (Martigues, La Roque d'Anthéron, etc.) dans la mise en œuvre pratique d'EGAlim.</p>
            </div>

            <div class="border-l-4 border-primary pl-4">
              <h3 class="text-lg font-semibold mb-2">Étape 4 : Ajuster les menus et la communication</h3>
              <p>Impliquer les cuisiniers, former les équipes, informer les convives. Un bon affichage et des menus valorisant l'origine locale créent une fierté collective.</p>
            </div>

            <div class="border-l-4 border-primary pl-4">
              <h3 class="text-lg font-semibold mb-2">Étape 5 : Mesurer et valoriser les résultats</h3>
              <p>Suivre les indicateurs : part de produits locaux, taux de bio, satisfaction, réduction du gaspillage. Ces chiffres renforcent la crédibilité des démarches auprès des élus et citoyens.</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold mt-8 mb-4">5. Les bénéfices concrets pour les acteurs publics et privés</h2>

          <div class="grid md:grid-cols-2 gap-4 mt-4">
            <div class="bg-accent/20 p-4 rounded-lg">
              <p><strong>Qualité des repas améliorée</strong> : ingrédients plus frais, goût valorisé.</p>
            </div>
            <div class="bg-accent/20 p-4 rounded-lg">
              <p><strong>Impact environnemental réduit</strong> : baisse des transports, des déchets, meilleure saisonnalité.</p>
            </div>
            <div class="bg-accent/20 p-4 rounded-lg">
              <p><strong>Économie locale dynamisée</strong> : les producteurs régionaux gagnent en stabilité et visibilité.</p>
            </div>
            <div class="bg-accent/20 p-4 rounded-lg">
              <p><strong>Image renforcée</strong> : une collectivité conforme à EGAlim devient vitrine de la transition alimentaire durable.</p>
            </div>
          </div>

          <p class="mt-4">En PACA, la richesse agricole (Bouches-du-Rhône, Vaucluse, Var) offre un potentiel unique. Des structures comme Localizz démontrent qu'un modèle logistique adapté permet de concilier exigence réglementaire et ancrage territorial. En savoir plus sur <a href="/actualites/juste-remuneration-producteurs-salon-agriculture" class="text-primary hover:underline font-medium">la juste rémunération des producteurs</a>.</p>

          <h2 class="text-2xl font-bold mt-8 mb-4">6. Questions fréquentes (FAQ)</h2>

          <div class="space-y-4 mt-4">
            <div class="border-l-4 border-secondary pl-4 py-2">
              <h3 class="font-semibold mb-2">Où trouver le texte officiel de la loi EGAlim ?</h3>
              <p>Sur legifrance.gouv.fr – rubrique alimentation et agriculture.</p>
            </div>

            <div class="border-l-4 border-secondary pl-4 py-2">
              <h3 class="font-semibold mb-2">Le repas végétarien est-il obligatoire dans toutes les cantines ?</h3>
              <p>Oui, au moins une fois par semaine dans les établissements scolaires publics.</p>
            </div>

            <div class="border-l-4 border-secondary pl-4 py-2">
              <h3 class="font-semibold mb-2">La loi EGAlim concerne-t-elle aussi le privé ?</h3>
              <p>Oui, progressivement les entreprises de restauration sous contrat doivent respecter les mêmes objectifs de durabilité.</p>
            </div>

            <div class="border-l-4 border-secondary pl-4 py-2">
              <h3 class="font-semibold mb-2">Comment prouver la conformité ?</h3>
              <p>Par la tenue d'un registre de traçabilité, les factures produits, et l'affichage public des taux de produits durables et bio.</p>
            </div>

            <div class="border-l-4 border-secondary pl-4 py-2">
              <h3 class="font-semibold mb-2">Existe-t-il des aides ?</h3>
              <p>Certaines régions et départements PACA subventionnent les diagnostics alimentaires et la formation des personnels.</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold mt-8 mb-4">7. Ressources utiles</h2>

          <ul class="list-disc list-inside space-y-2 ml-4">
            <li><a href="https://agriculture.gouv.fr/tout-comprendre-de-la-loi-egalim-2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">Guide officiel EGAlim – Ministère de l'Agriculture</a></li>
            <li>Textes de référence sur Légifrance</li>
            <li>Agence de la transition écologique (ADEME)</li>
            <li><a href="/nos-engagements" class="text-primary hover:underline font-medium">Nos engagements pour une alimentation durable</a></li>
          </ul>

          <div class="bg-primary/10 p-6 rounded-lg border-l-4 border-primary mt-8">
            <h2 class="text-2xl font-bold mb-4">Conclusion</h2>
            <p>La loi EGAlim n'est pas une contrainte mais une opportunité : celle de réinventer la restauration collective autour du bon sens, de la proximité et du respect de la terre. En région PACA, où les circuits courts et la qualité des produits sont déjà ancrés dans la culture, la réussite dépend désormais de la coordination entre acteurs : producteurs, collectivités, sociétés de restauration et logisticiens.</p>
            
            <p class="mt-4">Des entreprises locales comme <a href="/qui-sommes-nous" class="text-primary hover:underline font-medium">Localizz</a> prouvent chaque jour qu'il est possible d'allier efficacité, durabilité et ancrage territorial. L'important n'est plus seulement de respecter la loi, mais d'en faire un levier de transformation alimentaire durable pour tous.</p>
            
            <p class="mt-4"><a href="/contact" class="text-primary hover:underline font-medium">Contactez-nous</a> pour découvrir comment nous pouvons vous accompagner dans votre démarche EGAlim.</p>
          </div>
        </div>
      `,
      image: "/lovable-uploads/cantine.jpg",
      date: "15 Jan 2025",
      category: "Réglementation",
      readTime: "8 min",
      author: "Équipe Localizz",
    },
    {
      id: "localizz-solutions-locales-marseille",
      title: "Localizz : Des solutions locales et durables pour l'agriculture et l'alimentation à Marseille",
      excerpt:
        "Rencontre entre Localizz et la municipalité de Marseille pour soutenir l'approvisionnement local, l'accessibilité alimentaire et l'agriculture urbaine dans le cadre du Projet Agri-Alimentaire Marseillais.",
      content: `
        <p>Nous avons récemment eu le plaisir de recevoir les équipes de SIF Aïcha, adjointe au Maire de Marseille, pour échanger autour des grands enjeux actuels de l'alimentation durable sur le territoire marseillais. Cette rencontre, organisée dans le cadre du Projet Agri-Alimentaire Marseillais (PAAM), a permis de mettre en avant l'expertise de <a href="/notre-offre" class="text-primary hover:underline">Localizz en matière d'approvisionnement en produits locaux</a> issus de circuits courts et de développement durable.</p>
        
        <h3>Trois axes majeurs ont guidé nos discussions :</h3>
        
        <p><strong>Des solutions opérationnelles d'approvisionnement local :</strong> nous avons abordé les besoins de la municipalité en matière de volumes et d'offres pour garantir une alimentation saine et durable dans la restauration collective à Marseille.</p>
        
        <p><strong>L'accessibilité alimentaire :</strong> nous avons présenté des pistes concrètes pour améliorer l'accès à une alimentation de qualité pour les personnes en difficulté, en privilégiant systématiquement l'origine locale des produits.</p>
        
        <p><strong>Le développement de l'agriculture urbaine :</strong> enfin, nous avons évoqué des stratégies pour encourager l'agriculture urbaine, au service aussi bien de la restauration collective que des particuliers.</p>
        
        <p>Cet échange constructif nous a permis de présenter des solutions déjà éprouvées auprès de nombreuses collectivités de la région Sud, et qui répondent pleinement aux attentes de la Ville de Marseille. <a href="/nos-engagements" class="text-primary hover:underline">Découvrez nos engagements</a> pour une alimentation durable et locale.</p>
        
        <p>Un grand merci à SIF Aïcha, Ludovic Mille, Sophie Laroche, Géraldine Lassarat, la Ville de Marseille et Monsieur le maire Benoît PAYAN pour la qualité de ces échanges et leur confiance.</p>
      `,
      image: "/lovable-uploads/f140422d-b9aa-4a8e-a5d8-76c58d50305b.png",
      date: "20 Déc 2024",
      category: "Partenariats",
      readTime: "4 min",
      author: "Équipe Localizz",
    },
    {
      id: "juste-remuneration-producteurs-salon-agriculture",
      title: "Pour une juste rémunération des producteurs locaux : plaidoyer au Salon International de l'Agriculture",
      excerpt:
        "Table ronde sur la rémunération équitable des agriculteurs dans la commande publique, organisée au Salon de l'Agriculture avec la Ville de Nice, Max Havelaar France et plusieurs acteurs institutionnels.",
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
      image: "/lovable-uploads/a766770d-1877-4b41-9e5a-ff2a6424de30.png",
      date: "15 Déc 2024",
      category: "Événements",
      readTime: "6 min",
      author: "Équipe Localizz",
    },
    {
      id: "partenariat-loubatas-ecologique",
      title: "Le Loubatas et Localizz : un partenariat écologique pour une alimentation durable et locale",
      excerpt:
        "Collaboration entre Le Loubatas et Localizz pour sensibiliser les jeunes à l'alimentation responsable à travers des ateliers de jardin et de cuisine, tout en soutenant les circuits courts et les producteurs locaux.",
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
      image: "/lovable-uploads/49b57210-23d2-4260-a44c-004a093e3ab0.png",
      date: "10 Déc 2024",
      category: "Éducation",
      readTime: "3 min",
      author: "Le Loubatas",
    },
    {
      id: "localizz-education-alimentation-loubatas",
      title: "Localizz : agir pour l'éducation à une alimentation saine et durable avec Le Loubatas",
      excerpt:
        "Localizz s'engage en tant que mécène aux côtés du Loubatas pour sensibiliser petits et grands à une alimentation locale, saine et responsable à travers des ateliers pratiques de jardin et de cuisine.",
      content: `
        <p>Chez Localizz, l'éducation à l'alimentation est au cœur de nos valeurs. Nous sommes convaincus que la transition vers une alimentation saine, locale et durable commence par la sensibilisation, dès le plus jeune âge, aux bienfaits de nouveaux modes de consommation.</p>
        
        <p>C'est dans cette démarche que nous soutenons fièrement Le Loubatas, qui anime régulièrement des ateliers éducatifs auprès des jeunes générations. Grâce à ces ateliers de jardin et de cuisine organisés chaque soir de séjour, les enfants découvrent concrètement l'origine de leurs aliments et participent activement à la préparation des repas. Par petits groupes, ils passent une heure au jardin ou en cuisine avec un animateur ou une animatrice, ce qui les aide à mieux comprendre ce qu'ils consomment et à s'approprier leur alimentation.</p>
        
        <p>En tant que mécène, <a href="/qui-sommes-nous" class="text-primary hover:underline">Localizz contribue à rendre possible</a> ces journées et ateliers de sensibilisation, qui abordent notamment l'importance de la saisonnalité des produits et les bénéfices d'une alimentation équilibrée. Nous sommes heureux de jouer notre rôle pour encourager, à tous les âges, des habitudes alimentaires plus responsables et durables.</p>
        
        <p>Ces initiatives s'inscrivent parfaitement dans <a href="/nos-engagements" class="text-primary hover:underline">notre mission d'entreprise à missions</a>, où l'éducation et la sensibilisation sont des piliers essentiels de notre action.</p>
      `,
      image: "/lovable-uploads/9da6c3d0-b5d9-42d8-99a8-7e5519209cf4.png",
      date: "05 Déc 2024",
      category: "Éducation",
      readTime: "3 min",
      author: "Équipe Localizz",
    },
    {
      id: "localizz-limite-gaspillage-alimentaire",
      title:
        "Comment Localizz limite le gaspillage alimentaire dans la région Sud : un modèle d'approvisionnement ultra-frais et responsable",
      excerpt:
        "Les méthodes innovantes de Localizz pour réduire drastiquement les déchets alimentaires dans la livraison de produits locaux aux restaurants de la région Sud PACA.",
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
      image: "/lovable-uploads/60e1a5d6-971d-4812-9859-a8d339093648.png",
      date: "01 Déc 2024",
      category: "Environnement",
      readTime: "4 min",
      author: "Équipe Localizz",
    },
  ];

  export const getArticleById = (id: string): Article | undefined => {
    return articles.find((article) => article.id === id);
  };

  export const getRelatedArticles = (currentId: string, limit: number = 3): Article[] => {
    return articles.filter((article) => article.id !== currentId).slice(0, limit);
  };

  export const getLatestArticles = (limit: number = 5): Article[] => {
    return articles.slice(0, limit);
  };
