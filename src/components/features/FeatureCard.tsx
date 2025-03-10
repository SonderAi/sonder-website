import React from 'react';
import FeatureIcon from '../ui/FeatureIcon';
import { FeatureData } from '../../types/types';

interface FeatureCardProps {
  feature: FeatureData;
  className?: string;
  variant?: 'default' | 'compact' | 'highlight';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  feature, 
  className = '',
  variant = 'default'
}) => {
  const getCardStyle = () => {
    switch (variant) {
      case 'compact':
        return 'p-4';
      case 'highlight':
        return 'p-6 border-primary/30 bg-gradient-to-br from-dark-surface to-dark hover:shadow-lg hover:shadow-primary/10';
      default:
        return 'p-6 hover:-translate-y-1';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden group bg-dark-surface border border-dark-border rounded-xl transition-all duration-300 ${getCardStyle()} ${className}`}
    >
      {/* Icon */}
      <div 
        className="rounded-lg w-12 h-12 flex items-center justify-center mb-4"
        style={{ 
          backgroundColor: `var(--${feature.color || 'primary'})20`
        }}
      >
        <FeatureIcon iconName={feature.icon} color={feature.color} />
      </div>
      
      {/* Content */}
      <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-text-secondary">{feature.description}</p>
      
      {/* Hover effects - subtle glow */}
      <div 
        className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `var(--${feature.color || 'primary'})` }}
      ></div>
    </div>
  );
};

export default FeatureCard;