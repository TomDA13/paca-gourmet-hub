
const Timeline = () => {
  const timelineData = [
    {
      year: "2013",
      title: "Naissance de Localizz",
      description: "à Aix-en-Provence",
      image: "/lovable-uploads/0cb8b301-fb4d-433e-82e0-721cf0a64d9c.png",
      position: "left"
    },
    {
      year: "2015",
      title: "Investissement dans le premier entrepôt et le premier camion",
      description: "grâce à une campagne de crowdfunding\n\nLe concept Localizz élu Talent du Groupement des Entreprises du Pays d'Aix et Lauréat du Réseau Entreprendre Provence",
      image: "/lovable-uploads/70e474d5-ebdd-4abc-8ba1-a2b80e971d5a.png",
      position: "right"
    },
    {
      year: "2017",
      title: "Déménagement et agrandissement",
      description: "En 2017, Localizz se sentant un peu à l'étroit, déménage dans de nouveaux locaux 5 fois plus grands et se dote d'une chambre froide de plus de 200m2.\n\nCet agrandissement permet la mise en place du système de qualité HACCP. Par la suite Localizz décroche son premier contrat avec les cantines de la ville d'Aix-en-Provence.",
      image: "/lovable-uploads/b4d51488-674e-44af-b366-3871a45785bb.png",
      position: "left"
    },
    {
      year: "2020",
      title: "COVID-19 et solidarité",
      description: "16 mars 2020, Le COVID-19 marque l'arrêt net de l'activité en restauration collective et commerciale avec une perte de plus de 80% de l'activité du jour au lendemain et une chute de volumes pour les producteurs partenaires depuis des années.\n\nPour garantir nos volumes à nos producteurs, toute l'équipe s'est mobilisée et nous avons fait des milliers de paniers solidaires pour le Secours Populaire !",
      image: "/lovable-uploads/64d9ac62-2c30-4ca1-bd7b-22b4593c88ba.png",
      position: "right"
    },
    {
      year: "2022",
      title: "Entreprise à missions",
      description: "En 2022, Localizz devient une entreprise à missions. Une étape plus que significative pour nous car l'ADN de la société se retrouve désormais dans ses statuts.",
      image: "/lovable-uploads/26bc8792-94be-455e-ae70-7fc968a75259.png",
      position: "left"
    },
    {
      year: "2023",
      title: "700 tonnes et mécénat",
      description: "En 2023, nous passons le cap des 700 tonnes de produits locaux annuels livrés en restauration, une réelle fierté ! Nous décidons également de devenir mécènes du Loubatas, association d'éducation à l'environnement, qui complète parfaitement nos actions au quotidien",
      image: "/lovable-uploads/a4f256bf-c9c7-49d5-ac4e-208a081b1336.png",
      position: "right"
    },
    {
      year: "Aujourd'hui...",
      title: "Croissance continue",
      description: "c'est près de 150 producteurs partenaires, une équipe de 9 personnes engagées dans la consommation locale, une logistique en circuit court bien rodée. Nous continuons de porter de nombreux projets comme la juste rémunération des producteurs avec une étude portée conjointement avec Max Havelaar.",
      image: "/lovable-uploads/3bd1004b-52d8-4cc6-94f1-7cb44b81d01e.png",
      position: "left"
    }
  ];

  return (
    <div className="bg-accent py-12 px-8 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Notre histoire</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Tout part de la volonté d'Olivier Da Rold de monter une plateforme d'approvisionnement en produits locaux qui puisse répondre aux besoins des professionnels et des particuliers
        </p>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secondary h-full"></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-16 ${item.position === 'left' ? 'flex-row-reverse' : ''}`}>
            {/* Content side - always left aligned text */}
            <div className={`w-5/12 ${item.position === 'left' ? 'pr-8' : 'pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-secondary mb-2 text-left">{item.year}</div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-left">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-left">{item.description}</p>
              </div>
            </div>
            
            {/* Central year marker */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg z-10"></div>
            
            {/* Image side */}
            <div className={`w-5/12 ${item.position === 'left' ? 'pl-8' : 'pr-8'}`}>
              <div className="flex justify-center">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-full border-4 border-secondary shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
