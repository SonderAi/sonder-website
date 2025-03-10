import React from 'react';

interface AutomationIllustrationProps {
  className?: string;
}

const AutomationIllustration: React.FC<AutomationIllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 300" 
      className={`text-secondary ${className}`}
      fill="currentColor"
    >
      {/* Background */}
      <defs>
        <linearGradient id="automationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#automationGradient)" />
      
      {/* Flow Diagram */}
      <g stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" fill="none">
        {/* Main Flow Line */}
        <path 
          d="M50 150 
             C100 100, 150 100, 200 150 
             S300 200, 350 150" 
          strokeDasharray="10 5"
        />
        
        {/* Nodes */}
        <circle cx="50" cy="150" r="15" fill="currentColor" fillOpacity="0.2" />
        <circle cx="200" cy="150" r="25" fill="currentColor" fillOpacity="0.2" />
        <circle cx="350" cy="150" r="15" fill="currentColor" fillOpacity="0.2" />
      </g>
      
      {/* Branching Automation Paths */}
      <g stroke="currentColor" strokeWidth="2" strokeOpacity="0.2">
        {/* Left Branch */}
        <path 
          d="M50 150 Q100 100, 75 50 
             T100 20" 
          fill="none" 
        />
        <circle cx="100" cy="20" r="10" fill="currentColor" fillOpacity="0.1" />
        
        {/* Right Branch */}
        <path 
          d="M350 150 Q300 200, 325 250 
             T300 280" 
          fill="none" 
        />
        <circle cx="300" cy="280" r="10" fill="currentColor" fillOpacity="0.1" />
      </g>
      
      {/* Central Processing Element */}
      <g transform="translate(200, 150)">
        <rect 
          x="-40" 
          y="-40" 
          width="80" 
          height="80" 
          rx="10" 
          fill="currentColor" 
          fillOpacity="0.1" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeOpacity="0.2"
        />
        <text 
          x="0" 
          y="10" 
          textAnchor="middle" 
          fill="currentColor" 
          fillOpacity="0.4" 
          fontSize="20"
        >
          AUTO
        </text>
      </g>
    </svg>
  );
};

export default AutomationIllustration;