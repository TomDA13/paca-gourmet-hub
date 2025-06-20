
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BannerSection from '@/components/BannerSection';

const Contact = () => {
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
              Contact
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              N'hésitez pas à nous contacter pour tous vos besoins d'approvisionnement local
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Light background */}
      <section className="relative py-20 bg-accent overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="relative z-10">
          <ContactSection />
        </div>
      </section>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Contact;
