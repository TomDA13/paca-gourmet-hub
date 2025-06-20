
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ArticleCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime?: string;
}

const ArticleCard = ({ id, image, title, excerpt, date, category, readTime = "3 min" }: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/actualites/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{readTime} de lecture</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleReadMore}
            className="group-hover:bg-primary group-hover:text-white transition-colors"
          >
            Lire la suite
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
