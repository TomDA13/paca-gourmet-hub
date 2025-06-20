
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getLatestArticles } from '@/data/articles';
import { useNavigate } from 'react-router-dom';

const NewsSection = () => {
  const navigate = useNavigate();
  const newsItems = getLatestArticles(5);

  const handleArticleClick = (articleId: string) => {
    navigate(`/actualites/${articleId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="relative py-16 bg-accent overflow-hidden">
      {/* Floating elements - same as before */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-18 h-18 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre actu
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {newsItems.map((article) => (
                <CarouselItem key={article.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <article 
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full cursor-pointer hover:scale-105 transform transition-transform"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
