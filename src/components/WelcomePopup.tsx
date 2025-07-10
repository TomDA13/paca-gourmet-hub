
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, X } from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur vient d'arriver sur le site (pas de navigation interne)
    const isDirectAccess = !document.referrer || !document.referrer.includes(window.location.hostname);
    
    if (isDirectAccess) {
      // Afficher la popup après 3 secondes seulement pour un accès direct
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleRedirect = () => {
    window.open('https://boutique.localizz.fr', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader className="text-center pb-4">
          {/* Logo Localizz */}
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/37f85174-2263-460a-bed5-95824557da6d.png" 
              alt="Localizz - Les vrais produits de nos régions" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
          
          <DialogTitle className="text-lg font-semibold text-primary mb-4">
            Bienvenue sur notre nouveau site pour les professionnels
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Si vous êtes un particulier et que vous souhaitez passer une commande de produits locaux, veuillez vous rendre sur le site boutique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button 
              onClick={handleRedirect}
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Aller à la boutique
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              <X className="w-4 h-4 mr-2" />
              Rester ici
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
