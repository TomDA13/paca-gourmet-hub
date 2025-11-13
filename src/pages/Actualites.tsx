
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import ArticleCard from '@/components/ArticleCard';
import SEO from '@/components/SEO';
import { articles } from '@/data/articles';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Actualites = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', ...Array.from(new Set(articles.map(article => article.category)))];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
    const showInList = article.showInList !== false;
    return matchesSearch && matchesCategory && showInList;
  });

  return (
    <div className="min-h-screen">
      <SEO
        title="Actualités Localizz - Partenariats et nouveautés locales PACA"
        description="Découvrez nos actualités, partenariats avec les collectivités, événements et nouveautés pour l'approvisionnement local en région PACA. Cantines, loi EGAlim, producteurs."
        keywords={[
          "actualités localizz",
          "partenariats collectivités",
          "approvisionnement local",
          "paca",
          "restauration collective",
          "loi egalim",
          "producteurs locaux",
          "agriculture durable"
        ]}
        url="/actualites"
        breadcrumbs={[
          { name: 'Accueil', url: '/' },
          { name: 'Actualités', url: '/actualites' }
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute top-16 right-12 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-12 w-20 h-20 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Actualités
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Découvrez toutes nos actualités, partenariats et nouveautés
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                image={article.image}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                readTime={article.readTime}
              />
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
            </div>
          )}
        </div>
      </section>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Actualites;
