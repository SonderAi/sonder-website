import React from 'react';
import FeatureIcon from '../ui/FeatureIcon';

interface FeaturesHeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const FeaturesHero: React.FC<FeaturesHeroProps> = ({ 
  title = "What Makes Us Different",
  subtitle = "Modern solutions built for real-world business impact",
  className = ''
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-dark-surface to-dark"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 bg-primary/5 rounded-full -top-20 -right-20 blur-3xl"></div>
      <div className="absolute w-96 h-96 bg-accent/5 rounded-full -bottom-20 -left-20 blur-3xl"></div>
      
      {/* Floating icons */}
      <div className="absolute top-1/4 left-10 animate-float-slow hidden lg:block">
        <div className="bg-dark-surface/80 backdrop-blur-sm p-4 rounded-lg border border-dark-border shadow-lg">
          <FeatureIcon iconName="ServerStackIcon" color="primary" className="w-8 h-8" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-10 animate-float-slow-reverse hidden lg:block">
        <div className="bg-dark-surface/80 backdrop-blur-sm p-4 rounded-lg border border-dark-border shadow-lg">
          <FeatureIcon iconName="CpuChipIcon" color="accent" className="w-8 h-8" />
        </div>
      </div>
      
      <div className="absolute top-1/2 right-1/4 animate-float-medium hidden lg:block">
        <div className="bg-dark-surface/80 backdrop-blur-sm p-4 rounded-lg border border-dark-border shadow-lg">
          <FeatureIcon iconName="ChartBarIcon" color="secondary" className="w-8 h-8" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl text-text-secondary mb-10">{subtitle}</p>
          
          <a href="#features" className="btn btn-primary">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;