
import { useState } from 'react';

interface CommitmentContent {
  subtitle: string;
  description?: string;
  subtitle2?: string;
  points: string[];
}

interface CommitmentCardProps {
  title: string;
  image: string;
  content: CommitmentContent;
}

const CommitmentCard = ({ title, image, content }: CommitmentCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Déterminer si c'est l'image ESS pour appliquer un style différent
  const isESSImage = image.includes('e343e47b-a78a-4c1a-b332-f1567b2d2156');

  return (
    <div className="relative h-96 perspective-1000">
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={title}
              className={`w-full h-full ${isESSImage ? 'object-contain bg-white' : 'object-cover'}`}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-6 w-full">
                <h3 className="text-xl font-bold text-white leading-tight">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 h-full overflow-y-auto">
            <h3 className="text-lg font-bold text-primary mb-4 leading-tight">
              {content.subtitle}
            </h3>
            
            {content.description && (
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {content.description}
              </p>
            )}
            
            {content.subtitle2 && (
              <p className="text-sm font-semibold text-gray-800 mb-3">
                {content.subtitle2}
              </p>
            )}
            
            <ul className="space-y-2">
              {content.points.map((point, index) => (
                <li key={index} className="text-sm text-gray-700 leading-relaxed">
                  <span className="inline-block w-2 h-2 bg-secondary rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentCard;
