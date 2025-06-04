
const CommitmentsSection = () => {
  return (
    <section id="commitments" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Nos Engagements
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Notre démarche va au-delà de la simple distribution. Nous nous engageons pour un écosystème alimentaire durable et responsable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌿</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Durabilité</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Réduction de l'empreinte carbone grâce aux circuits courts et aux pratiques agricoles respectueuses
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Traçabilité</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Transparence totale sur l'origine des produits, du producteur à votre assiette
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Saisonnalité</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Respect des cycles naturels pour des produits au meilleur de leur saveur et qualité nutritionnelle
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fraîcheur</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Livraison rapide et chaîne du froid maîtrisée pour préserver toutes les qualités organoleptiques
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Notre Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">200+</div>
              <p className="opacity-90">Producteurs partenaires</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">150km</div>
              <p className="opacity-90">Rayon d'approvisionnement max</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">-40%</div>
              <p className="opacity-90">Réduction CO2 vs circuits longs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
