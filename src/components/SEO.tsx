import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  faqItems?: FAQItem[];
  breadcrumbs?: BreadcrumbItem[];
}

const SEO = ({
  title,
  description,
  keywords = [],
  image = 'https://localizz.fr/affichesite.png',
  url = 'https://localizz.fr',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  canonicalUrl,
  faqItems,
  breadcrumbs,
}: SEOProps) => {
  const fullTitle = title.includes('Localizz') ? title : `${title} | Localizz`;
  const siteUrl = url.startsWith('http') ? url : `https://localizz.fr${url}`;
  const imageUrl = image.startsWith('http') ? image : `https://localizz.fr${image}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Localizz",
    "url": "https://localizz.fr",
    "logo": "https://localizz.fr/affichesite.png",
    "description": "La solution clé en main d'approvisionnement 100% local en région SUD PACA pour la restauration",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "PACA",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33782352127",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/localizz"
    ]
  };

  // Article Schema (if type is article)
  const articleSchema = type === 'article' && publishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "author": {
      "@type": author === "Équipe Localizz" ? "Organization" : "Person",
      "name": author || "Localizz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Localizz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://localizz.fr/affichesite.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteUrl
    }
  } : null;

  // FAQ Schema
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://localizz.fr${item.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author || "Localizz"} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Localizz" />
      <meta property="og:locale" content="fr_FR" />
      
      {type === 'article' && publishedTime && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Actualités" />
          {keywords.map(keyword => (
            <meta key={keyword} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@Localizz" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
