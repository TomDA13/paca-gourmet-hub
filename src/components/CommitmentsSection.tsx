
const CommitmentsSection = () => {
  return (
    <section id="commitments" className="relative py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full -translate-y-48 -translate-x-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 translate-x-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-white/15 to-secondary/20 backdrop-blur-sm rounded-2xl p-12 text-center shadow-xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4 drop-shadow-lg">200+</div>
              <p className="opacity-90 text-lg">Producteurs partenaires</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4 drop-shadow-lg">1500+</div>
              <p className="opacity-90 text-lg">Références de produits</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl">
              <div className="text-5xl font-bold text-secondary mb-4 drop-shadow-lg">850</div>
              <p className="opacity-90 text-lg">Tonnes livrées en 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-1 origin-bottom-right"></div>
    </section>
  );
};

export default CommitmentsSection;
