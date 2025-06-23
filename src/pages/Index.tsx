
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import PartnersSection from '@/components/PartnersSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import CommitmentsSection from '@/components/CommitmentsSection';
import TerrainDeJeuSection from '@/components/TerrainDeJeuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import BannerSection from '@/components/BannerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TargetAudienceSection />
      <PartnersSection />
      <MissionSection />
      <ServicesSection />
      <CommitmentsSection />
      <TerrainDeJeuSection />
      <TestimonialsSection />
      <NewsSection />
      
      {/* Logo Région Sud */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/2d046682-fe20-4ed7-96ec-488b4b4414cc.png" 
              alt="Logo 100 Valeurs du Sud - Région Sud" 
              className="w-32 h-32 md:w-40 md:h-40 opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Index;
