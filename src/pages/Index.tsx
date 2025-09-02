
import Header from '@/components/Header';
import PhoneBanner from '@/components/PhoneBanner';
import HeroSection from '@/components/HeroSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import MissionSection from '@/components/MissionSection';
import CommitmentsSection from '@/components/CommitmentsSection';
import TerrainDeJeuSection from '@/components/TerrainDeJeuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import BannerSection from '@/components/BannerSection';
import Footer from '@/components/Footer';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <WelcomePopup />
      <Header />
      <PhoneBanner />
      <HeroSection />
      <TargetAudienceSection />
      <FeaturedProductsSection />
      <ServicesSection />
      <PartnersSection />
      <MissionSection />
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
