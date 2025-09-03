import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Gift, Heart, Truck, Users, Building, Calendar } from 'lucide-react';

const CoffretsEntreprises = () => {
  const navigate = useNavigate();

  const handleDemandeDevis = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/733a6292-c8dd-407c-8dba-008f6a7f47b5.png"
            alt="Coffrets gourmands locaux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Des coffrets gourmands locaux, durables et solidaires
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Localizz conçoit, confectionne et livre des coffrets sur-mesure pour vos collaborateurs, clients ou bénéficiaires.
          </p>
        </div>
      </section>

      {/* Section 1 - La promesse */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Clé en main. Local. Responsable.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Sélection de produits locaux et artisanaux de Provence
              </h3>
              <p className="text-muted-foreground">
                Des produits authentiques sélectionnés avec soin chez nos producteurs partenaires de la région PACA.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Confection par des ESAT, pour donner du sens à vos cadeaux
              </h3>
              <p className="text-muted-foreground">
                Nos coffrets sont préparés par des Établissements et Services d'Aide par le Travail, créant de la valeur sociale.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Livraison directe sur vos sites, partout en région PACA
              </h3>
              <p className="text-muted-foreground">
                Une logistique optimisée pour livrer vos coffrets directement là où vous en avez besoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - À qui s'adressent nos coffrets ? */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              À qui s'adressent nos coffrets ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Entreprises
              </h3>
              <p className="text-muted-foreground text-center">
                Remerciez vos équipes et partenaires avec un cadeau porteur de sens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Collectivités
              </h3>
              <p className="text-muted-foreground text-center">
                Offrez aux habitants des coffrets locaux, responsables et festifs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                Événementiel & hôtellerie
              </h3>
              <p className="text-muted-foreground text-center">
                Surprenez vos invités avec une sélection de terroir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à offrir des coffrets qui ont du sens ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour concevoir ensemble vos coffrets sur-mesure
          </p>
          <Button 
            onClick={handleDemandeDevis}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 text-lg py-6 px-8 shadow-lg"
          >
            Demandez un devis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoffretsEntreprises;