import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';

const NosEngagements = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos Engagements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos valeurs et notre engagement pour un approvisionnement local et responsable
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-700 text-lg">
                Contenu à venir pour la page Nos Engagements...
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default NosEngagements;
