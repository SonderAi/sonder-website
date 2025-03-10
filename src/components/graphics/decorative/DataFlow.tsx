import React from 'react';

interface DataFlowProps {
  className?: string;
  color?: string;
  opacity?: number;
}

const DataFlow: React.FC<DataFlowProps> = ({ 
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
      {/* Background Gradient */}
      <defs>
        <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity={opacity/2} />
          <stop offset="100%" stopColor={color} stopOpacity={opacity/4} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#dataFlowGradient)" />

      {/* Data Flow Lines */}
      <g 
        stroke={color} 
        strokeOpacity={opacity} 
        strokeWidth="2"
      >
        {/* Curved Main Flow */}
        <path 
          d="M0 150 
             Q100 100, 200 150 
             T400 150" 
          strokeDasharray="8 6"
        />

        {/* Branching Flows */}
        <path 
          d="M50 50 
             Q150 100, 200 150 
             T350 250" 
          strokeDasharray="5 5"
          strokeOpacity={opacity * 0.7}
        />
        <path 
          d="M350 50 
             Q250 100, 200 150 
             T50 250" 
          strokeDasharray="5 5"
          strokeOpacity={opacity * 0.7}
        />

        {/* Perpendicular Connections */}
        <path 
          d="M100 50 
             L100 250" 
          strokeDasharray="3 3"
          strokeOpacity={opacity * 0.5}
        />
        <path 
          d="M300 50 
             L300 250" 
          strokeDasharray="3 3"
          strokeOpacity={opacity * 0.5}
        />
      </g>

      {/* Data Nodes */}
      <g fill={color} fillOpacity={opacity * 1.5}>
        {[
          { x: 50, y: 50 },
          { x: 200, y: 150 },
          { x: 350, y: 250 },
          { x: 100, y: 50 },
          { x: 100, y: 250 },
          { x: 300, y: 50 },
          { x: 300, y: 250 }
        ].map((point, index) => (
          <circle 
            key={index} 
            cx={point.x} 
            cy={point.y} 
            r="5" 
          />
        ))}
      </g>

      {/* Directional Flow Indicators */}
      <g 
        fill={color} 
        fillOpacity={opacity * 0.8}
      >
        <path 
          d="M190 140 L210 160 L200 150 Z" 
        />
        <path 
          d="M210 140 L190 160 L200 150 Z" 
        />
      </g>
    </svg>
  );
};

export default DataFlow;