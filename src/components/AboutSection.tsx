
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              À Propos de Localizz
            </h2>
            <p className="text-lg text-gray-700">
              Une équipe passionnée au service de l'excellence culinaire régionale
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Notre Histoire</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Fondée en 2020 par une équipe d'experts de l'agroalimentaire et de la restauration, 
                Localizz est née d'une conviction simple : nos territoires regorgent de producteurs 
                exceptionnels qui méritent d'être mis en lumière.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Basés au cœur de la région PACA, nous avons développé un réseau de confiance avec 
                les acteurs locaux pour offrir aux professionnels de la restauration une alternative 
                qualitative aux circuits de distribution traditionnels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">15 ans d'expérience moyenne de l'équipe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">Présence sur tout le territoire PACA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">Équipe commerciale dédiée aux professionnels</span>
                </div>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-6">L'Équipe Dirigeante</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    ML
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Marie-Laure Dubois</h4>
                    <p className="text-sm text-gray-600 mb-2">Co-fondatrice & Directrice Générale</p>
                    <p className="text-sm text-gray-700">
                      Ancienne responsable achats en restauration collective, experte des circuits courts
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    PB
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Pierre Bertrand</h4>
                    <p className="text-sm text-gray-600 mb-2">Co-fondateur & Directeur Commercial</p>
                    <p className="text-sm text-gray-700">
                      20 ans dans l'agroalimentaire, spécialiste des partenariats producteurs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Sophie Martin</h4>
                    <p className="text-sm text-gray-600 mb-2">Responsable Logistique</p>
                    <p className="text-sm text-gray-700">
                      Experte en supply chain, garante de la qualité de nos livraisons
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
