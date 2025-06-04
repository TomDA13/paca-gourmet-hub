import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/1b5b3d5d-d99b-4720-ac02-f36e48c49406.png" 
              alt="Localizz" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              La solution clé en main d'approvisionnement 100% local en région Sud PACA pour les restaurateurs, depuis plus de 10 ans
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
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
              <li><a href="#notre-offre" className="hover:text-white transition-colors">Notre Offre</a></li>
              <li><a href="#nos-engagements" className="hover:text-white transition-colors">Nos Engagements</a></li>
              <li><a href="#qui-sommes-nous" className="hover:text-white transition-colors">Qui Sommes Nous</a></li>
              <li><a href="#actualites" className="hover:text-white transition-colors">Actualités</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Média</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Localizz. Tous droits réservés.
          </p>
          <p className="text-gray-300 text-sm mt-4 md:mt-0">
            Made with ❤️ in Provence-Alpes-Côte d'Azur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
