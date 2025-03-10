import React from 'react';

interface AILightProps {
  className?: string;
}

const AILightIllustration: React.FC<AILightProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 300" 
      className={`text-accent ${className}`}
      fill="currentColor"
    >
      {/* Brain-like Network Background */}
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#aiGradient)" />
      
      {/* Neural Network Connections */}
      <g stroke="currentColor" strokeOpacity="0.2" strokeWidth="2">
        <line x1="50" y1="100" x2="150" y2="200" />
        <line x1="150" y1="200" x2="250" y2="100" />
        <line x1="250" y1="100" x2="350" y2="200" />
        
        <line x1="100" y1="50" x2="200" y2="150" />
        <line x1="200" y1="150" x2="300" y2="50" />
        
        <line x1="75" y1="250" x2="175" y2="150" />
        <line x1="175" y1="150" x2="275" y2="250" />
      </g>
      
      {/* Nodes/Neurons */}
      <g fill="currentColor">
        {[
          { x: 50, y: 100 },
          { x: 150, y: 200 },
          { x: 250, y: 100 },
          { x: 350, y: 200 },
          { x: 100, y: 50 },
          { x: 200, y: 150 },
          { x: 300, y: 50 },
          { x: 75, y: 250 },
          { x: 175, y: 150 },
          { x: 275, y: 250 }
        ].map((point, index) => (
          <circle 
            key={index} 
            cx={point.x} 
            cy={point.y} 
            r="8" 
            fillOpacity="0.3"
          />
        ))}
      </g>
      
      {/* Central Processing Icon */}
      <g transform="translate(150, 100) scale(0.7)">
        <path 
          d="M100 50 
             C150 0, 250 0, 300 50 
             C350 100, 350 200, 300 250 
             C250 300, 150 300, 100 250 
             C50 200, 50 100, 100 50" 
          fill="currentColor" 
          fillOpacity="0.1" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeOpacity="0.2"
        />
        <circle 
          cx="200" 
          cy="150" 
          r="50" 
          fill="currentColor" 
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
};

export default AILightIllustration;