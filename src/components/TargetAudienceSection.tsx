import { Card, CardContent } from '@/components/ui/card';
import { 
  ChefHat, 
  Building2, 
  GraduationCap,
  HeartHandshake,
  Users,
  Hotel
} from 'lucide-react';

const TargetAudienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent via-accent to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            À qui s'adresse notre offre ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Restaurants */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <ChefHat className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Restaurants</h3>
            </CardContent>
          </Card>

          {/* Collectivités */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Building2 className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Collectivités</h3>
            </CardContent>
          </Card>

          {/* Établissements scolaires */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-green-500">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <GraduationCap className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-green-500 mb-2">Établissements scolaires</h3>
            </CardContent>
          </Card>

          {/* Associations */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-amber-500">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <HeartHandshake className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold text-amber-500 mb-2">Associations</h3>
            </CardContent>
          </Card>

          {/* Traiteurs et Événementiel */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-500">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Users className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-purple-500 mb-2">Traiteurs et Événementiel</h3>
            </CardContent>
          </Card>

          {/* Hôtellerie */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-500">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Hotel className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-blue-500 mb-2">Hôtellerie</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
