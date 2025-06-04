
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import MissionSection from '@/components/MissionSection';
import ServicesSection from '@/components/ServicesSection';
import CommitmentsSection from '@/components/CommitmentsSection';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <MissionSection />
      <ServicesSection />
      <CommitmentsSection />
      <AboutSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
