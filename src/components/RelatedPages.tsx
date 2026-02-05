import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedPage {
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface RelatedPagesProps {
  title?: string;
  pages: RelatedPage[];
  className?: string;
}

/**
 * Internal linking component for SEO
 * Displays related pages to improve site structure and user navigation
 */
const RelatedPages = ({
  title = 'Pages associées',
  pages,
  className = '',
}: RelatedPagesProps) => {
  if (pages.length === 0) return null;

  return (
    <section className={`py-12 bg-accent/30 ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-primary mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.href}
              className="group bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/20"
              onClick={() => window.scrollTo(0, 0)}
            >
              {page.category && (
                <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                  {page.category}
                </span>
              )}
              <h3 className="text-lg font-semibold text-primary mt-1 mb-2 group-hover:text-secondary transition-colors">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {page.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                En savoir plus
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pre-defined page collections for easy reuse
export const RELATED_PAGES = {
  products: [
    {
      title: 'Fruits et Légumes',
      description: 'Récoltés à juste maturité, de saison, 1ère et 4ème gamme',
      href: '/nos-produits/fruits-et-legumes',
      category: 'Produits',
    },
    {
      title: 'Viandes',
      description: 'Taureau de Camargue AOP, agneau du Lubéron, boeuf HVE',
      href: '/nos-produits/viandes',
      category: 'Produits',
    },
    {
      title: 'Crémerie et Oeufs',
      description: 'Yaourts bio des Alpes, Banon AOP, oeufs plein air',
      href: '/nos-produits/cremeries',
      category: 'Produits',
    },
    {
      title: 'Épicerie',
      description: 'Riz de Camargue IGP, miel de Provence, légumineuses',
      href: '/nos-produits/epicerie',
      category: 'Produits',
    },
  ],
  cities: [
    {
      title: 'Fournisseur Marseille',
      description: 'Restauration collective dans les Bouches-du-Rhône',
      href: '/fournisseur-restauration-collective-marseille',
      category: 'Par ville',
    },
    {
      title: 'Fournisseur Aix-en-Provence',
      description: 'Livraison produits locaux Pays d\'Aix',
      href: '/fournisseur-restauration-collective-aix-en-provence',
      category: 'Par ville',
    },
    {
      title: 'Fournisseur Nice',
      description: 'Approvisionnement local Alpes-Maritimes',
      href: '/fournisseur-restauration-collective-nice',
      category: 'Par ville',
    },
    {
      title: 'Fournisseur Toulon',
      description: 'Produits locaux pour le Var',
      href: '/fournisseur-restauration-collective-toulon',
      category: 'Par ville',
    },
    {
      title: 'Fournisseur Avignon',
      description: 'Circuit court Vaucluse',
      href: '/fournisseur-restauration-collective-avignon',
      category: 'Par ville',
    },
  ],
  services: [
    {
      title: 'Notre Offre',
      description: 'Plus de 700 références de produits locaux PACA',
      href: '/notre-offre',
      category: 'Services',
    },
    {
      title: 'Appels d\'offres PACA',
      description: 'MAPA et marchés publics alimentaires',
      href: '/appels-offres-marches-publics-paca',
      category: 'Services',
    },
    {
      title: 'Nos Producteurs',
      description: '150 producteurs partenaires en région Sud',
      href: '/nos-producteurs-paca',
      category: 'Services',
    },
    {
      title: 'Loi EGAlim',
      description: 'Conformité et accompagnement EGAlim',
      href: '/loi-egalim',
      category: 'Services',
    },
  ],
  about: [
    {
      title: 'Qui sommes-nous',
      description: 'L\'histoire de Localizz depuis 2013',
      href: '/qui-sommes-nous',
      category: 'À propos',
    },
    {
      title: 'Nos Engagements',
      description: 'Juste rémunération, qualité, traçabilité',
      href: '/nos-engagements',
      category: 'À propos',
    },
    {
      title: 'Actualités',
      description: 'Les dernières nouvelles de Localizz',
      href: '/actualites',
      category: 'À propos',
    },
    {
      title: 'Contact',
      description: 'Demandez un devis ou contactez-nous',
      href: '/contact',
      category: 'À propos',
    },
  ],
};

export default RelatedPages;
