import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../features';
import { featureData } from '../../data/features';

interface FeaturesOverviewProps {
  className?: string;
}

const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ className = '' }) => {
  // Get top features from different categories
  const getHighlightFeatures = () => {
    const highlights = [];
    
    // Get one feature from each category
    for (const category of featureData) {
      if (category.features && category.features.length > 0) {
        highlights.push(category.features[0]);
        
        // Stop at 4 features
        if (highlights.length >= 4) break;
      }
    }
    
    return highlights;
  };
  
  const highlightFeatures = getHighlightFeatures();
  
  return (
    <section id="features" className={`py-24 bg-dark ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Key Features</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Delivering high-quality solutions with these core capabilities that set us apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlightFeatures.map(feature => (
            <FeatureCard 
              key={feature.id} 
              feature={feature}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/features" className="btn btn-outline">
            Explore All Features
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;