import React from 'react';

interface CircuitLinesProps {
  className?: string;
  color?: string;
  opacity?: number;
}

const CircuitLines: React.FC<CircuitLinesProps> = ({ 
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
      {/* Interconnected Circuit-like Lines */}
      <g stroke={color} strokeOpacity={opacity} strokeWidth="2">
        {/* Horizontal Lines */}
        <path 
          d="M0 50 
             Q100 30, 200 50 
             T400 50" 
          strokeDasharray="5 5"
        />
        <path 
          d="M0 150 
             Q100 130, 200 150 
             T400 150" 
          strokeDasharray="5 10"
        />
        <path 
          d="M0 250 
             Q100 230, 200 250 
             T400 250" 
          strokeDasharray="10 5"
        />

        {/* Vertical Connections */}
        <path 
          d="M100 50 
             Q120 100, 100 150 
             T100 250" 
          strokeDasharray="7 7"
        />
        <path 
          d="M300 50 
             Q280 100, 300 150 
             T300 250" 
          strokeDasharray="7 7"
        />

        {/* Diagonal Connections */}
        <path 
          d="M50 25 
             Q150 75, 200 150 
             T350 275" 
          strokeDasharray="6 6"
        />
        <path 
          d="M350 25 
             Q250 75, 200 150 
             T50 275" 
          strokeDasharray="6 6"
        />
      </g>

      {/* Nodes/Connection Points */}
      <g fill={color} fillOpacity={opacity * 1.5}>
        <circle cx="200" cy="50" r="5" />
        <circle cx="100" cy="150" r="5" />
        <circle cx="300" cy="150" r="5" />
        <circle cx="200" cy="250" r="5" />
        <circle cx="50" cy="25" r="4" />
        <circle cx="350" cy="25" r="4" />
        <circle cx="50" cy="275" r="4" />
        <circle cx="350" cy="275" r="4" />
      </g>
    </svg>
  );
};

export default CircuitLines;