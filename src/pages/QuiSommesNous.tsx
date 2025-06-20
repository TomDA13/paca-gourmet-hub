
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import Timeline from '@/components/Timeline';
import TeamSection from '@/components/TeamSection';

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Dark background */}
      <section className="relative py-20 bg-primary overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-16 right-12 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-12 w-20 h-20 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qui Sommes Nous
            </h1>
          </div>
        </div>
      </section>

      {/* Notre histoire Section - Light background */}
      <section id="notre-histoire" className="relative py-20 bg-accent overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative z-10">
          <Timeline />
        </div>
      </section>

      {/* L'équipe Section - White background */}
      <section id="equipe" className="relative py-20 bg-white overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-16 right-10 w-28 h-28 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10">
          <TeamSection />
        </div>
      </section>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default QuiSommesNous;
