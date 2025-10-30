import Header from "@/components/Header";
import PhoneBanner from "@/components/PhoneBanner";
import HeroSection from "@/components/HeroSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ServicesSection from "@/components/ServicesSection";
import PartnersSection from "@/components/PartnersSection";
import MissionSection from "@/components/MissionSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import TerrainDeJeuSection from "@/components/TerrainDeJeuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import WelcomePopup from "@/components/WelcomePopup";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Localizz - Relocalisez !"
        description="La solution clé en main d'approvisionnement 100% local en région SUD PACA pour la restauration collective. Produits frais, circuits courts, agriculture durable."
        keywords={[
          "approvisionnement local",
          "restauration collective",
          "paca",
          "produits locaux",
          "circuits courts",
          "agriculture durable",
          "livraison locale",
          "cantines",
          "collectivités",
          "localizz"
        ]}
        url="/"
      />
      <WelcomePopup />
      <Header />
      <PhoneBanner />
      <HeroSection />
      <TargetAudienceSection />
      <ServicesSection />
      <PartnersSection />
      <MissionSection />
      <CommitmentsSection />
      <TerrainDeJeuSection />
      <TestimonialsSection />
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Index;
