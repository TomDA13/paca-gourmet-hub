import { SitemapStream } from 'sitemap';
import { createWriteStream, existsSync, mkdirSync } from 'node:fs';

const SITE_URL = 'https://www.localizz.fr';
const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Trailing slash ON (conseillé). Mets les URLs exactement comme servies en prod.
const ROUTES = [
  { path: '/', lastmod: TODAY, changefreq: 'weekly', priority: 1.0 },
  { path: '/notre-offre/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.9 },
  { path: '/nos-engagements/', lastmod: '2025-01-15', changefreq: 'monthly', priority: 0.6 },
  { path: '/qui-sommes-nous/', lastmod: '2025-01-15', changefreq: 'monthly', priority: 0.6 },
  { path: '/actualites/', lastmod: TODAY, changefreq: 'weekly', priority: 0.8 },
  { path: '/contact/', lastmod: '2025-01-01', changefreq: 'monthly', priority: 0.7 },
  { path: '/nos-produits/fruits-et-legumes/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/nos-produits/viandes/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/nos-produits/cremeries/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/nos-produits/epicerie/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/nos-coffrets-entreprises/', lastmod: '2025-01-01', changefreq: 'monthly', priority: 0.6 },
  { path: '/loi-egalim/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/taureaux-de-camargue-aop/', lastmod: '2025-02-01', changefreq: 'monthly', priority: 0.8 },
];

// Pages SEO thématiques
const THEMATIC_PAGES = [
  { path: '/appels-offres-marches-publics-paca/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { path: '/nos-producteurs-paca/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
];

// Landing pages SEO géographiques
const LANDING_PAGES = [
  { path: '/fournisseur-restauration-collective-marseille/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { path: '/fournisseur-restauration-collective-aix-en-provence/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { path: '/fournisseur-restauration-collective-nice/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { path: '/fournisseur-restauration-collective-toulon/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { path: '/fournisseur-restauration-collective-avignon/', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
];

// Articles avec dates de publication
const ARTICLES = [
  { slug: 'filiere-taureau-camargue-aop-paca', lastmod: '2025-01-20' },
  { slug: 'loi-egalim-restauration-collective-paca-2025', lastmod: '2025-01-15' },
  { slug: 'localizz-solutions-locales-marseille', lastmod: '2024-12-10' },
  { slug: 'juste-remuneration-producteurs-salon-agriculture', lastmod: '2024-03-01' },
  { slug: 'partenariat-loubatas-ecologique', lastmod: '2024-06-15' },
  { slug: 'localizz-education-alimentation-loubatas', lastmod: '2024-07-01' },
  { slug: 'localizz-limite-gaspillage-alimentaire', lastmod: '2024-09-01' },
];

// Construit la liste finale
const allUrls = [
  ...ROUTES,
  ...THEMATIC_PAGES,
  ...LANDING_PAGES,
  ...ARTICLES.map((article) => ({
    path: `/actualites/${article.slug}/`,
    lastmod: article.lastmod,
    changefreq: 'monthly',
    priority: 0.7,
  })),
];

// Génération
if (!existsSync('public')) mkdirSync('public', { recursive: true });

const sm = new SitemapStream({ hostname: SITE_URL });
const ws = createWriteStream('public/sitemap.xml');
sm.pipe(ws);

for (const item of allUrls) {
  sm.write({
    url: item.path,
    lastmod: item.lastmod,
    changefreq: item.changefreq,
    priority: item.priority,
  });
}

sm.end();
ws.on('finish', () => console.log('✅ sitemap.xml généré dans /public avec lastmod'));
