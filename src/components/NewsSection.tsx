
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
    <section id="news" className="relative py-20 bg-gradient-to-tr from-accent via-white to-accent/50 overflow-hidden">
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-right"></div>
      
      {/* Floating elements */}
      <div className="absolute top-32 left-20 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            <article key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-xs bg-gradient-to-r from-secondary to-secondary/80 text-white px-3 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-secondary font-medium text-sm hover:text-primary transition-colors duration-200 hover:underline">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Voir toutes les actualités
          </Button>
        </div>
      </div>

      {/* Diagonal transition */}
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-white via-accent/30 to-white transform -skew-y-1 origin-bottom-left"></div>
    </section>
  );
};

export default NewsSection;
