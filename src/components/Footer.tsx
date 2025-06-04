
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
              Les vrais produits de nos régions PACA. Approvisionnement direct pour professionnels 
              de la restauration collective et commerciale.
            </p>
            <div className="flex space-x-4">
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
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Viandes & Charcuteries</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fruits & Légumes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Poissons & Fruits de Mer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Épicerie Fine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livraison Express</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions Générales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RGPD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plan du Site</a></li>
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
