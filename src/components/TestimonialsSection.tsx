
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Avec Localizz, commander et recevoir nos produits n'a jamais été aussi facile, ce qui nous permet de nous concentrer sur l'essentiel : offrir une cuisine de qualité.",
      author: "Anthony Delama",
      position: "Chef de cuisine Elior"
    },
    {
      quote: "Travailler avec Localizz est un vrai plaisir ! Leurs produits locaux sont d'une qualité exceptionnelle et nous permettent de servir le meilleur de notre région dans nos assiettes.",
      author: "Philipe Therran",
      position: "Chef de cuisine Elior"
    },
    {
      quote: "Localizz simplifie notre approvisionnement tout en valorisant les producteurs locaux. Une collaboration où tout le monde y trouve son compte !",
      author: "Alexandre Martin",
      position: "Chef de cuisine Elior"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos partenaires disent de notre service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-accent rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                <svg className="w-8 h-8 text-secondary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
