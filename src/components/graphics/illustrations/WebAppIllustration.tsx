import React from 'react';

interface WebAppIllustrationProps {
  className?: string;
}

const WebAppIllustration: React.FC<WebAppIllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 300" 
      className={`text-primary ${className}`}
      fill="currentColor"
    >
      {/* Background */}
      <rect width="400" height="300" fill="currentColor" fillOpacity="0.05" />
      
      {/* Device Frame */}
      <rect 
        x="50" 
        y="40" 
        width="300" 
        height="220" 
        rx="15" 
        ry="15" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeOpacity="0.3"
      />
      
      {/* Screen Content Representation */}
      <rect 
        x="70" 
        y="70" 
        width="260" 
        height="160" 
        fill="currentColor" 
        fillOpacity="0.1"
      />
      
      {/* UI Elements */}
      <rect x="90" y="90" width="200" height="10" fill="currentColor" fillOpacity="0.3" rx="5" />
      <rect x="90" y="110" width="160" height="6" fill="currentColor" fillOpacity="0.2" rx="3" />
      
      {/* Blocks representing components */}
      <rect x="90" y="130" width="100" height="40" fill="currentColor" fillOpacity="0.2" rx="5" />
      <rect x="200" y="130" width="100" height="40" fill="currentColor" fillOpacity="0.2" rx="5" />
      
      <rect x="90" y="180" width="210" height="30" fill="currentColor" fillOpacity="0.2" rx="5" />
      
      {/* Decorative Lines */}
      <path 
        d="M50 60 Q200 30 350 60" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeOpacity="0.1"
      />
      <path 
        d="M50 240 Q200 270 350 240" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeOpacity="0.1"
      />
    </svg>
  );
};

export default WebAppIllustration;