
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import Timeline from '@/components/Timeline';
import TeamSection from '@/components/TeamSection';

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
            <TeamSection />
          </section>
        </div>
      </main>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
