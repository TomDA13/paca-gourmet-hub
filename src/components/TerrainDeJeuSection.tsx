
const TerrainDeJeuSection = () => {
  return (
    <section className="relative py-16 bg-accent overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-16 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-secondary/20 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-1/3 left-1/3 w-18 h-18 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Notre terrain de jeu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La région Sud PACA, notre territoire d'expertise pour un approvisionnement local de qualité
          </p>
        </div>

        {/* Image de la carte */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/aba4795a-6cbc-435a-8f20-472d8748ce98.png" 
            alt="Carte de la région PACA avec Localizz"
            className="w-full h-auto shadow-lg rounded-lg object-cover"
            style={{ aspectRatio: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default TerrainDeJeuSection;
