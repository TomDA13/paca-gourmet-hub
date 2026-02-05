import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className="bg-accent/30 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
                {isLast ? (
                  <span className="text-primary font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {isFirst && <Home className="w-4 h-4" />}
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
