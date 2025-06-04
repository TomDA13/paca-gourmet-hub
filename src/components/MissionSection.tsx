
const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Notre Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Nous connectons les producteurs locaux de Provence-Alpes-Côte d'Azur avec les professionnels de la restauration, 
            garantissant une chaîne d'approvisionnement éthique, durable et traçable. Chaque produit raconte l'histoire 
            de nos terroirs et de nos artisans passionnés.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Local & Durable</h3>
              <p className="text-gray-600">
                100% des produits sourçés dans un rayon de 150km autour de nos entrepôts
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Partenariats Directs</h3>
              <p className="text-gray-600">
                Relations privilégiées avec plus de 200 producteurs régionaux
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
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
    </section>
  );
};

export default MissionSection;
