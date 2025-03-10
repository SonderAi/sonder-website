import React from 'react';
import FeatureCard from './FeatureCard';
import { FeatureCategory } from '../../types/types';

interface FeatureSectionProps {
  category: FeatureCategory;
  className?: string;
  darkBg?: boolean;
  reversed?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  category, 
  className = '',
  darkBg = false,
  reversed = false
}) => {
  return (
    <section className={`py-16 ${darkBg ? 'bg-dark' : 'bg-dark-surface'} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Section intro */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{category.title}</h2>
            <p className="text-lg text-text-secondary mb-6">{category.description}</p>
            
            {/* Optional section CTA */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Features grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.features.map(feature => (
                <FeatureCard 
                  key={feature.id} 
                  feature={feature}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;