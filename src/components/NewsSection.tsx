
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const newsItems = [
    {
      date: "15 Nov 2024",
      title: "Nouveau partenariat avec les Maraîchers de Ventoux",
      excerpt: "Extension de notre gamme de légumes bio avec 15 nouveaux producteurs de la région du Mont Ventoux.",
      category: "Partenariats"
    },
    {
      date: "08 Nov 2024",
      title: "Localizz certifié B-Corp",
      excerpt: "Reconnaissance officielle de nos engagements sociaux et environnementaux par la certification B-Corporation.",
      category: "Engagements"
    },
    {
      date: "02 Nov 2024",
      title: "Ouverture d'un nouvel entrepôt à Marseille",
      excerpt: "Renforcement de notre capacité logistique pour mieux servir les Bouches-du-Rhône et le Var.",
      category: "Développement"
    }
  ];

  return (
    <section id="news" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Actualités
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Suivez l'évolution de Localizz et découvrez les dernières nouvelles de nos producteurs partenaires
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-secondary font-medium text-sm hover:underline">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
