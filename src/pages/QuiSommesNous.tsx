
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import Timeline from '@/components/Timeline';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Qui Sommes Nous
            </h1>
          </div>

          {/* Notre histoire Section */}
          <section id="notre-histoire" className="mb-20">
            <Timeline />
          </section>

          {/* L'équipe Section */}
          <section id="equipe" className="mb-20">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-primary mb-6">L'équipe</h2>
              <p className="text-gray-700 text-lg">
                Contenu à venir pour la section L'équipe...
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
