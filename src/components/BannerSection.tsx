
const BannerSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/1c0f7a3f-8d50-4114-8fa1-f64d6a5d8893.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Commencez dès maintenant à Relocaliser !
        </h2>
        
        <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors hover:shadow-lg">
          Découvrir nos produits
        </button>
      </div>
    </section>
  );
};

export default BannerSection;
