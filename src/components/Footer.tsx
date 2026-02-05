
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 lg:col-span-2">
            <img 
              src="/lovable-uploads/1b5b3d5d-d99b-4720-ac02-f36e48c49406.png" 
              alt="Localizz" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              La solution clé en main d'approvisionnement 100% local en région Sud PACA pour les restaurateurs, depuis plus de 10 ans
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/localizz" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className="text-gray-300 space-y-1">
              <p>07 82 35 21 27</p>
              <p>contact@localizz.fr</p>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/notre-offre" className="hover:text-white transition-colors">Notre Offre</a></li>
              <li><a href="/nos-engagements" className="hover:text-white transition-colors">Nos Engagements</a></li>
              <li><a href="/qui-sommes-nous" className="hover:text-white transition-colors">Qui Sommes Nous</a></li>
              <li><a href="/nos-producteurs-paca" className="hover:text-white transition-colors">Nos Producteurs</a></li>
              <li><a href="/actualites" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services B2B */}
          <div>
            <h4 className="font-semibold mb-4">Services B2B</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/loi-egalim" className="hover:text-white transition-colors">Guide EGAlim PACA 2025</a></li>
              <li><a href="/appels-offres-marches-publics-paca" className="hover:text-white transition-colors">Appels d'offres PACA</a></li>
              <li><a href="/nos-coffrets-entreprises" className="hover:text-white transition-colors">Coffrets Entreprises</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
            </ul>
          </div>

          {/* Zones de livraison */}
          <div>
            <h4 className="font-semibold mb-4">Zones de livraison</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/fournisseur-produits-locaux-marseille" className="hover:text-white transition-colors">Marseille (13)</a></li>
              <li><a href="/fournisseur-produits-locaux-aix-en-provence" className="hover:text-white transition-colors">Aix-en-Provence (13)</a></li>
              <li><a href="/fournisseur-produits-locaux-nice" className="hover:text-white transition-colors">Nice (06)</a></li>
              <li><a href="/fournisseur-produits-locaux-toulon" className="hover:text-white transition-colors">Toulon (83)</a></li>
              <li><a href="/fournisseur-produits-locaux-avignon" className="hover:text-white transition-colors">Avignon (84)</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <p className="text-gray-300 text-sm text-center">
            © 2025 Localizz. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
