import { SitemapStream } from 'sitemap';
import { createWriteStream, existsSync, mkdirSync } from 'node:fs';

const SITE_URL = 'https://www.localizz.fr';

// Trailing slash ON (conseillé). Mets les URLs exactement comme servies en prod.
const ROUTES = [
  '/', 
  '/notre-offre/',
  '/nos-engagements/',
  '/qui-sommes-nous/',
  '/actualites/',
  '/contact/',
  '/nos-produits/fruits-et-legumes/',
  '/nos-produits/viandes/',
  '/nos-produits/cremeries/',
  '/nos-produits/epicerie/',
  '/nos-coffrets-entreprises/',
];

// Renseigne ici les slugs d’articles (remplace et ajoute)
const ARTICLES = [
  'loi-egalim-restauration-collective-paca-2025',
  'localizz-solutions-locales-marseille',
  'juste-remuneration-producteurs-salon-agriculture',
  'partenariat-loubatas-ecologique',
  'localizz-education-alimentation-loubatas',
  'localizz-limite-gaspillage-alimentaire',
];

// Construit la liste finale
const allUrls = [
  ...ROUTES,
  ...ARTICLES.map((slug) => `/actualites/${slug}/`),
];

// Génération
if (!existsSync('public')) mkdirSync('public', { recursive: true });

const sm = new SitemapStream({ hostname: SITE_URL });
const ws = createWriteStream('public/sitemap.xml');
sm.pipe(ws);

for (const path of Array.from(new Set(allUrls))) {
  sm.write({
    url: path,
    changefreq: path === '/' ? 'weekly' : path === '/actualites/' ? 'weekly' : 'monthly',
    priority:
      path === '/' ? 1.0 :
      path === '/actualites/' ? 0.8 :
      path.startsWith('/actualites/') ? 0.7 :
      0.6,
  });
}

sm.end();
ws.on('finish', () => console.log('✅ sitemap.xml généré dans /public'));
