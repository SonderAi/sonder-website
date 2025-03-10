import React from 'react';

interface NeuralNetworkProps {
  className?: string;
  color?: string;
  opacity?: number;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ 
  className = '', 
  color = 'currentColor', 
  opacity = 0.1 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 300" 
      className={className}
      fill="none"
    >
      {/* Network Connections */}
      <g 
        stroke={color} 
        strokeOpacity={opacity} 
        strokeWidth="2"
      >
        {/* Layer Connections */}
        <g strokeDasharray="5 5">
          {/* First Layer */}
          <line x1="50" y1="50" x2="150" y2="150" />
          <line x1="50" y1="100" x2="150" y2="150" />
          <line x1="50" y1="150" x2="150" y2="150" />
          <line x1="50" y1="200" x2="150" y2="150" />
          <line x1="50" y1="250" x2="150" y2="150" />

          {/* Second Layer */}
          <line x1="150" y1="150" x2="250" y2="100" />
          <line x1="150" y1="150" x2="250" y2="150" />
          <line x1="150" y1="150" x2="250" y2="200" />

          {/* Third Layer */}
          <line x1="250" y1="100" x2="350" y2="50" />
          <line x1="250" y1="150" x2="350" y2="150" />
          <line x1="250" y1="200" x2="350" y2="250" />
        </g>
      </g>

      {/* Nodes */}
      <g fill={color} fillOpacity={opacity * 1.5}>
        {/* First Layer */}
        {[50, 100, 150, 200, 250].map((y, index) => (
          <circle 
            key={`first-${index}`}
            cx="50" 
            cy={y} 
            r="5" 
          />
        ))}

        {/* Second Layer */}
        {[100, 150, 200].map((y, index) => (
          <circle 
            key={`second-${index}`}
            cx="150" 
            cy={y} 
            r="5" 
          />
        ))}

        {/* Third Layer */}
        {[50, 150, 250].map((y, index) => (
          <circle 
            key={`third-${index}`}
            cx="250" 
            cy={y} 
            r="5" 
          />
        ))}

        {/* Final Layer */}
        {[50, 150, 250].map((y, index) => (
          <circle 
            key={`final-${index}`}
            cx="350" 
            cy={y} 
            r="5" 
          />
        ))}
      </g>

      {/* Pulse/Activity Indicators */}
      <g fill={color} fillOpacity={opacity * 0.6}>
        <circle cx="150" cy="150" r="10" opacity="0.4">
          <animate 
            attributeName="r" 
            values="10;15;10" 
            dur="2s" 
            repeatCount="indefinite" 
          />
        </circle>
        <circle cx="250" cy="150" r="8" opacity="0.3">
          <animate 
            attributeName="r" 
            values="8;12;8" 
            dur="2.5s" 
            repeatCount="indefinite" 
            begin="0.5s"
          />
        </circle>
      </g>
    </svg>
  );
};

export default NeuralNetwork;