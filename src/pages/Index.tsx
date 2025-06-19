
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
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Index;
