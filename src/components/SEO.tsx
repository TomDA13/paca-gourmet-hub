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

const SITE_BASE = 'https://www.localizz.fr';

const SEO = ({
  title,
  description,
  keywords = [],
  image = `${SITE_BASE}/affichesite.png`,
  url = SITE_BASE,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  canonicalUrl,
  faqItems,
  breadcrumbs,
}: SEOProps) => {
  const fullTitle = title.includes('Localizz') ? title : `${title} | Localizz`;
  const siteUrl = url.startsWith('http') ? url : `${SITE_BASE}${url}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_BASE}${image}`;
  const canonical = canonicalUrl || siteUrl;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Localizz",
    "url": SITE_BASE,
    "logo": `${SITE_BASE}/affichesite.png`,
    "description": "La solution clé en main d'approvisionnement 100% local en région SUD PACA pour la restauration collective et commerciale",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33782352127",
      "contactType": "Customer Service",
      "areaServed": "FR-PAC",
      "availableLanguage": "French"
    },
    "sameAs": [
      "https://www.linkedin.com/company/localizz"
    ]
  };

  // LocalBusiness Schema (enhanced for food industry)
  const localBusinessSchema = type !== 'article' ? {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": `${SITE_BASE}/#organization`,
    "name": "Localizz",
    "alternateName": "Localizz PACA",
    "description": "Approvisionnement en produits locaux 100% PACA pour la restauration collective et commerciale. Fruits, légumes, viandes, crémerie, épicerie. Fournisseur EGAlim pour cantines, cuisines centrales, EHPAD.",
    "url": SITE_BASE,
    "telephone": "+33782352127",
    "email": "contact@localizz.fr",
    "foundingDate": "2013",
    "founder": {
      "@type": "Person",
      "name": "Olivier Da Rold"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Région PACA",
      "addressLocality": "Marseille",
      "postalCode": "13000",
      "addressRegion": "Provence-Alpes-Côte d'Azur",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.2965,
      "longitude": 5.3698
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Bouches-du-Rhône",
        "sameAs": "https://fr.wikipedia.org/wiki/Bouches-du-Rh%C3%B4ne"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Var"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Vaucluse"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alpes-de-Haute-Provence"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Hautes-Alpes"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Alpes-Maritimes"
      }
    ],
    "priceRange": "$$",
    "image": `${SITE_BASE}/affichesite.png`,
    "sameAs": [
      "https://www.linkedin.com/company/localizz"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Produits locaux PACA",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Fruits et Légumes",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Fruits et légumes de saison PACA",
                "description": "Récoltés à juste maturité, 1ère et 4ème gamme"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Viandes",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Taureau de Camargue AOP"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Agneau du Lubéron"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Boeuf HVE région Sud"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Crémerie",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Banon AOP"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Yaourts bio des Alpes du Sud"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Épicerie",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Riz de Camargue IGP"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Miel de Provence"
              }
            }
          ]
        }
      ]
    },
    "knowsAbout": [
      "Approvisionnement local",
      "Circuit court",
      "Restauration collective",
      "Loi EGAlim",
      "Produits locaux PACA",
      "Marchés publics alimentaires",
      "MAPA restauration"
    ],
    "slogan": "L'unique intermédiaire entre vous et les producteurs"
  } : null;

  // FoodService Schema (B2B food supply)
  const foodServiceSchema = type !== 'article' ? {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "name": "Localizz - Service de fourniture alimentaire",
    "description": "Service de livraison de produits alimentaires locaux pour la restauration collective : cantines scolaires, cuisines centrales, EHPAD, restaurants d'entreprise",
    "provider": {
      "@type": "Organization",
      "name": "Localizz",
      "@id": `${SITE_BASE}/#organization`
    },
    "areaServed": {
      "@type": "State",
      "name": "Provence-Alpes-Côte d'Azur"
    },
    "serviceType": [
      "Livraison produits locaux",
      "Approvisionnement restauration collective",
      "Réponse appels d'offres MAPA",
      "Fourniture EGAlim"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Localizz",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Livraison multiproduits",
          "description": "Une seule livraison pour fruits, légumes, viandes, crémerie et épicerie"
        },
        {
          "@type": "Offer",
          "name": "Reporting EGAlim",
          "description": "Statistiques d'achats pour piloter vos taux de produits durables"
        },
        {
          "@type": "Offer",
          "name": "Traçabilité complète",
          "description": "Justificatifs d'origine transmis à chaque livraison"
        }
      ]
    }
  } : null;

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
        "url": `${SITE_BASE}/affichesite.png`
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
      "item": item.url.startsWith('http') ? item.url : `${SITE_BASE}${item.url}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content={author || "Localizz"} />
      <link rel="canonical" href={canonical} />

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

      {localBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      )}

      {foodServiceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(foodServiceSchema)}
        </script>
      )}

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
