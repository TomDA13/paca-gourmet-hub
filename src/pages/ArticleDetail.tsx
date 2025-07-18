
import { useParams, useNavigate } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '@/data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import BannerSection from '@/components/BannerSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = id ? getArticleById(id) : null;
  const relatedArticles = id ? getRelatedArticles(id, 3) : [];

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <Button onClick={() => navigate('/actualites')}>
            Retour aux actualités
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <section className="py-8 bg-accent/30">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/actualites')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux actualités
          </Button>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span>{article.readTime} de lecture</span>
              <span>Par {article.author}</span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              {article.title}
            </h1>

            {/* Article Image */}
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                Articles similaires
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    id={relatedArticle.id}
                    image={relatedArticle.image}
                    title={relatedArticle.title}
                    excerpt={relatedArticle.excerpt}
                    date={relatedArticle.date}
                    category={relatedArticle.category}
                    readTime={relatedArticle.readTime}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default ArticleDetail;
