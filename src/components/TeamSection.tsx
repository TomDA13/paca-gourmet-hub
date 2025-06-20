
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Olivier Da Rold",
      title: "le Gérant",
      description: "Fondateur de Localizz en 2013 avec son associé, il a tenu à créer une solution logistique fiable pour les producteurs et les restaurateurs afin de proposer des produits locaux PACA dans les assiettes de la région.\nFort de son expérience dans la restauration collective pendant plus de 20 ans, il a permis la création de Localizz et son succès aujourd'hui.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Géraldine",
      title: "",
      description: "Le bras droit d'Olivier ! Au quotidien, c'est elle qui gère tous les approvisionnements en fruits et légumes et de la gestion de la préparation de vos commandes.\nSensible depuis toujours aux produits de saison, sains et locaux, elle a à cœur au quotidien de vous assurer des produits de qualité à livraison.\n\nC'est également elle qui veille à ce que Localizz respecte ses missions en tant qu'Entreprise à Missions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Pauline",
      title: "",
      description: "Saisie de commande, gestion des factures dans Chorus, suivi de la facturation des producteurs, préparation de commande… Elle suit",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Maximilien",
      title: "",
      description: "Ingénieur agronome, il s'occupe de tous les approvisionnements des produits secs et frais, tout en étant votre interlocuteur au quotidien pour la prise des commandes. Il adore manger des bons produits et prend soin de vous les préparer !",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Rachel",
      title: "",
      description: "Saisie de commande, gestion des factures dans Chorus, suivi de la facturation des producteurs, préparation de commande… Elle veille au quotidien à ce que tout",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Noël, Johann et Larbi",
      title: "",
      description: "Nos 3 chauffeurs livreurs qui vous assurent les préparations de commandes et les livraisons chaque jour.\nSensibles à la qualité des produits, ce sont eux qui vont chercher les produits chez les producteurs et qui vous assurent des palettes multiproduits, vous pouvez compter sur eux !",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  return (
    <section className="py-12 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">L'équipe</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Une équipe passionnée et engagée au service de la qualité et des produits locaux
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-primary">
                      {member.name}
                      {member.title && <span className="text-secondary">, {member.title}</span>}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
