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
        title="Localizz - Approvisionnement 100% local en région PACA pour la restauration"
        description="Localizz, la solution clé en main d'approvisionnement 100% local en région SUD PACA. Fruits, légumes, viandes, crémerie et épicerie pour la restauration collective et commerciale. Circuit court garanti."
        keywords={[
          "approvisionnement local paca",
          "fournisseur restauration collective paca",
          "produits locaux paca",
          "circuits courts restauration",
          "livraison produits locaux",
          "fruits légumes locaux marseille",
          "viande locale paca",
          "cantines produits locaux",
          "collectivités approvisionnement local",
          "egalim paca",
          "localizz"
        ]}
        url="/"
        canonicalUrl="https://www.localizz.fr/"
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
