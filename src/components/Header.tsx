
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src="/lovable-uploads/1b5b3d5d-d99b-4720-ac02-f36e48c49406.png" 
                alt="Localizz" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#notre-offre" className="text-gray-700 hover:text-primary transition-colors">
              Notre Offre
            </a>
            <a href="#nos-engagements" className="text-gray-700 hover:text-primary transition-colors">
              Nos Engagements
            </a>
            <a href="#qui-sommes-nous" className="text-gray-700 hover:text-primary transition-colors">
              Qui Sommes Nous
            </a>
            <a href="#actualites" className="text-gray-700 hover:text-primary transition-colors">
              Actualités
            </a>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Contact
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#notre-offre" className="text-gray-700 hover:text-primary transition-colors">
                Notre Offre
              </a>
              <a href="#nos-engagements" className="text-gray-700 hover:text-primary transition-colors">
                Nos Engagements
              </a>
              <a href="#qui-sommes-nous" className="text-gray-700 hover:text-primary transition-colors">
                Qui Sommes Nous
              </a>
              <a href="#actualites" className="text-gray-700 hover:text-primary transition-colors">
                Actualités
              </a>
              <Button className="bg-secondary hover:bg-secondary/90 text-white w-fit">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
