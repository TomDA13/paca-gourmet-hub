
const MissionSection = () => {
  return (
    <section id="mission" className="relative py-20 bg-gradient-to-br from-accent to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
            Notre Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed animate-fade-in">
            Nous connectons les producteurs locaux de Provence-Alpes-Côte d'Azur avec les professionnels de la restauration, 
            garantissant une chaîne d'approvisionnement éthique, durable et traçable. Chaque produit raconte l'histoire 
            de nos terroirs et de nos artisans passionnés.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Local & Durable</h3>
              <p className="text-gray-600">
                100% des produits sourçés dans un rayon de 150km autour de nos entrepôts
              </p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Partenariats Directs</h3>
              <p className="text-gray-600">
                Relations privilégiées avec plus de 200 producteurs régionaux
              </p>
            </div>
            
            <div className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Livraison Optimisée</h3>
              <p className="text-gray-600">
                Logistique respectueuse de la chaîne du froid et des délais
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-bottom-right"></div>
    </section>
  );
};

export default MissionSection;
