import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSection from '@/components/BannerSection';
import CommitmentCard from '@/components/CommitmentCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NosEngagements = () => {
  const navigate = useNavigate();

  const commitments = [
    {
      id: 1,
      title: "Des produits locaux garantis toute l'année",
      image: "/lovable-uploads/428a8813-d5e6-4afc-acf6-082451d73f53.png",
      content: {
        subtitle: "Des produits locaux garantis toute l'année, sans rupture et en toute transparence",
        points: [
          "Planification : des cultures planifiées avec nos producteurs à l'année en fonction de vos volumes",
          "Sécurité d'approvisionnement : via notre réseau de producteurs locaux multi-terroirs",
          "Des produits éligibles EGALIM : HVE, BIO, IGP ou équitables garantis toute l'année",
          "Une origine 100% Sud PACA garantie : aucun produit d'import ne vous sera livré",
          "100% valeurs du Sud : Nous portons cette certification pour vous assurer une traçabilité régionale"
        ]
      }
    },
    {
      id: 2,
      title: "L'ADN de Localizz certifiée par notre statut ESS",
      image: "/lovable-uploads/e343e47b-a78a-4c1a-b332-f1567b2d2156.png",
      content: {
        subtitle: "L'ADN de Localizz certifiée par notre statut ESS d'entreprise à missions",
        description: "Depuis 2022 nous sommes une entreprise à missions. Concrètement, c'est désormais l'ADN de la société qui se retrouve dans ses statuts : Faciliter l'accès à une alimentation saine et durable à travers une économie circulaire, sociale et solidaire",
        subtitle2: "L'équipe Localizz vous garantit ainsi le respect et l'engagement de nos valeurs autour de 3 points clés :",
        points: [
          "Ancrage de notre activité dans une économie circulaire",
          "Être facilitateur d'une alimentation saine et durable",
          "Initier et soutenir les démarches solidaires liées à notre activité"
        ]
      }
    },
    {
      id: 3,
      title: "Une qualité de sourcing, de produits et de suivi",
      image: "/lovable-uploads/183b426c-4420-48a1-882c-f9875a78accd.png",
      content: {
        subtitle: "Une qualité de sourcing, de produits et de suivi",
        points: [
          "Qualité des produits : Producteurs audités et suivis par nos 3 ingénieurs agronomes",
          "Démarche HACCP : validée et auditée par des organismes tiers depuis 2017",
          "Livraisons de palettes mixte BIO/non BIO : certification BIO depuis 2021",
          "Traçabilité et transparence : complète et immédiate de chaque produit livré chez vous"
        ]
      }
    },
    {
      id: 4,
      title: "Une relocalisation de vos approvisionnements",
      image: "/lovable-uploads/d95f018f-6105-4119-a1fc-988490ac60fb.png",
      content: {
        subtitle: "Une relocalisation de vos approvisionnements",
        points: [
          "Planification de vos menus : accompagnement quotidien pour intégrer des produits locaux et de saison",
          "Sourcing: Accompagnement en amont pour répondre à la commande publique",
          "Régie agricole : Mise en place d'une organisation tripartite pour valoriser du local et de l'ultra local",
          "D'une pierre deux coups : des produits locaux et EGALIM livrés toute l'année"
        ]
      }
    }
  ];

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
              Nos Engagements
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Découvrez nos valeurs et notre engagement pour un approvisionnement local et responsable. Notre démarche s'inscrit pleinement dans le cadre de la <button onClick={() => { navigate('/actualites/loi-egalim-restauration-collective-sud-paca'); window.scrollTo(0, 0); }} className="underline hover:text-accent transition-colors font-semibold">loi EGAlim</button>.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Light background */}
      <section className="relative py-20 bg-accent overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {commitments.map((commitment) => (
              <CommitmentCard
                key={commitment.id}
                title={commitment.title}
                image={commitment.image}
                content={commitment.content}
              />
            ))}
          </div>
          
          {/* Section supplémentaire avec lien vers l'article EGAlim */}
          <div className="max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-primary mb-4 text-center">
              Notre engagement EGAlim en restauration collective
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-center">
              Localizz accompagne les professionnels de la restauration collective dans leur mise en conformité avec la loi EGAlim. Découvrez comment nous vous aidons à atteindre les objectifs de 50% de produits durables et de qualité, dont 20% de produits biologiques.
            </p>
            <div className="text-center">
              <Button
                onClick={() => { navigate('/actualites/loi-egalim-restauration-collective-sud-paca'); window.scrollTo(0, 0); }}
                className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                En savoir plus sur la loi EGAlim
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <BannerSection />
      <Footer />
    </div>
  );
};

export default NosEngagements;
