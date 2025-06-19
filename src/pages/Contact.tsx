import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BannerSection from '@/components/BannerSection';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              N'hésitez pas à nous contacter pour tous vos besoins d'approvisionnement local
            </p>
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default Contact;
