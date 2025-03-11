import React, { useState, useEffect } from 'react';
import FeatureIcon from '../../ui/FeatureIcon';

interface DigitalPuzzleProps {
  className?: string;
}

const DigitalPuzzle: React.FC<DigitalPuzzleProps> = ({ className = '' }) => {
  const [assembledState, setAssembledState] = useState(0); // 0: separated, 1: assembling, 2: assembled
  const [hoveredPiece, setHoveredPiece] = useState<string | null>(null);

  // Auto-assemble animation on mount
  useEffect(() => {
    const timer1 = setTimeout(() => setAssembledState(1), 1000);
    const timer2 = setTimeout(() => setAssembledState(2), 3000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Define puzzle pieces with their data
  const puzzlePieces = [
    {
      id: 'ui',
      name: 'UI/UX',
      icon: 'PaintBrushIcon',
      color: 'primary',
      description: 'Interface design',
      // Define puzzle piece path and positions
      initialPosition: { x: -120, y: -80 },
      finalPosition: { x: 0, y: 0 },
      path: 'M0,0 h100 v-20 h20 v40 h-20 v60 h-20 v20 h-60 v-20 h-20 v-40 h20 v-40 Z',
      transform: 'translate(100, 100)',
      features: ['Design Systems', 'User Flow', 'Interfaces']
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: 'CodeBracketIcon',
      color: 'accent',
      description: 'Client-side code',
      initialPosition: { x: 120, y: -60 },
      finalPosition: { x: 0, y: 0 },
      path: 'M0,0 h100 v60 h20 v20 h60 v-20 h20 v-40 h-20 v-20 h-100 v-20 h-20 v40 h-20 v-40 h-20 v20 h-20 Z',
      transform: 'translate(220, 100)',
      features: ['Components', 'State Mgmt', 'Frameworks']
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: 'ServerIcon',
      color: 'info',
      description: 'Server & data',
      initialPosition: { x: 80, y: 120 },
      finalPosition: { x: 0, y: 0 },
      path: 'M0,0 h60 v20 h20 v20 h20 v60 h-20 v20 h-40 v-20 h-20 v-40 h-20 v-40 h-20 v-20 Z',
      transform: 'translate(220, 180)',
      features: ['API', 'Database', 'Security']
    },
    {
      id: 'data',
      name: 'Data',
      icon: 'CircleStackIcon',
      color: 'success',
      description: 'Information architecture',
      initialPosition: { x: -100, y: 100 },
      finalPosition: { x: 0, y: 0 },
      path: 'M0,0 h80 v20 h20 v40 h-20 v20 h-60 v20 h-20 v-60 h-20 v-20 h20 Z',
      transform: 'translate(100, 180)',
      features: ['Structure', 'Relations', 'Storage']
    },
    {
      id: 'testing',
      name: 'Testing',
      icon: 'BeakerIcon',
      color: 'warning',
      description: 'Quality assurance',
      initialPosition: { x: 0, y: -140 },
      finalPosition: { x: 0, y: 0 },
      path: 'M0,0 h60 v-20 h20 v20 h20 v20 h-20 v60 h-60 v-20 h-20 v-40 h20 Z',
      transform: 'translate(160, 40)',
      features: ['Automation', 'QA', 'Performance']
    }
  ];

  // Calculate transition progress
  const getTransitionStyles = (piece: typeof puzzlePieces[0]) => {
    if (assembledState === 0) {
      return {
        transform: `translate(${piece.initialPosition.x}px, ${piece.initialPosition.y}px)`,
        opacity: 0.6
      };
    } else if (assembledState === 1) {
      // During assembly animation
      return {
        transform: `translate(${piece.initialPosition.x * 0.5}px, ${piece.initialPosition.y * 0.5}px)`,
        opacity: 0.8
      };
    } else {
      return {
        transform: `translate(${piece.finalPosition.x}px, ${piece.finalPosition.y}px)`,
        opacity: 1
      };
    }
  };

  return (
    <div className={`relative h-[500px] ${className}`}>
      <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-dark-surface/30 via-dark to-dark-surface/50 border border-dark-border shadow-xl">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Circuit board pattern */}
          <div className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: `
                  radial-gradient(circle at 25px 25px, var(--dark-border) 2px, transparent 0),
                  linear-gradient(to right, var(--dark-border) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--dark-border) 1px, transparent 1px)
                `, 
                backgroundSize: '50px 50px, 25px 25px, 25px 25px'
              }}>
          </div>
          
          {/* Abstract tech blobs */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-accent/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-info/5 to-success/10 blur-3xl"></div>
          
          {/* Digital particles */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-float"
              style={{ 
                width: `${2 + Math.random() * 4}px`, 
                height: `${2 + Math.random() * 4}px`,
                backgroundColor: `var(--${['primary', 'accent', 'info', 'success', 'warning'][Math.floor(Math.random() * 5)]})`,
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.4,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
          
          {/* Code-like elements */}
          {[...Array(8)].map((_, i) => {
            const width = 20 + Math.random() * 80;
            return (
              <div 
                key={`code-${i}`}
                className="absolute h-1.5 rounded-full opacity-20"
                style={{ 
                  width: `${width}px`,
                  background: `linear-gradient(to right, var(--${['primary', 'accent', 'info'][Math.floor(Math.random() * 3)]}) 70%, transparent)`,
                  top: `${10 + Math.random() * 80}%`, 
                  left: `${Math.random() * 30}%`,
                }}
              ></div>
            );
          })}
          
          {/* Binary/data dots grid pattern */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`data-${i}`}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{ 
                top: `${70 + Math.random() * 20}%`, 
                left: `${60 + Math.random() * 30}%`,
                opacity: Math.random() > 0.5 ? 0.3 : 0.1
              }}
            ></div>
          ))}
        </div>
        
        {/* Connection lines between pieces - shown when assembled */}
        <svg 
          className="absolute inset-0 z-10 w-full h-full"
          style={{ 
            opacity: assembledState === 2 ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Gradient for connection lines */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--info)" stopOpacity="0.5" />
            </linearGradient>
            
            {/* Data flow animation pattern */}
            <pattern id="dataFlow" width="20" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill="var(--primary)" opacity="0.8">
                <animate attributeName="cx" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          
          {/* Central connection circle */}
          <circle 
            cx="50%" 
            cy="50%" 
            r="15" 
            fill="none" 
            stroke="url(#connectionGradient)" 
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.7"
          />
          
          {/* Connection lines from center to each piece */}
          {puzzlePieces.map(piece => {
            // Calculate center point of each piece from its transform
            const transformParts = piece.transform.split(/[\s,()]+/);
            const centerX = parseInt(transformParts[1]) + 50;
            const centerY = parseInt(transformParts[2]) + 50;
            
            return (
              <React.Fragment key={`conn-${piece.id}`}>
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2={centerX} 
                  y2={centerY} 
                  stroke="url(#connectionGradient)" 
                  strokeWidth={hoveredPiece === piece.id ? 2 : 1}
                  strokeDasharray="3,3"
                  filter={hoveredPiece === piece.id ? "url(#glow)" : ""}
                />
                
                {/* Animated data flow on hover */}
                {hoveredPiece === piece.id && (
                  <line 
                    x1="50%" 
                    y1="50%" 
                    x2={centerX} 
                    y2={centerY} 
                    stroke="url(#dataFlow)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                )}
              </React.Fragment>
            );
          })}
        </svg>
        
        {/* Digital puzzle pieces */}
        <svg 
          className="absolute inset-0 z-20 w-full h-full"
          viewBox="0 0 400 300" 
          fill="none" 
          preserveAspectRatio="xMidYMid meet"
        >
          {puzzlePieces.map(piece => (
            <g 
              key={piece.id} 
              className="transition-all duration-1000 ease-in-out cursor-pointer"
              style={getTransitionStyles(piece)}
              onMouseEnter={() => assembledState === 2 && setHoveredPiece(piece.id)}
              onMouseLeave={() => setHoveredPiece(null)}
              onClick={() => assembledState === 2 && setHoveredPiece(hoveredPiece === piece.id ? null : piece.id)}
            >
              {/* Main puzzle piece shape */}
              <path 
                className={`transition-all duration-300`}
                d={piece.path} 
                transform={piece.transform}
                fill={`url(#gradient-${piece.id})`}
                stroke={hoveredPiece === piece.id ? `var(--${piece.color})` : 'var(--dark-border)'}
                strokeWidth={hoveredPiece === piece.id ? 2 : 1}
                filter={hoveredPiece === piece.id ? "url(#glow)" : ""}
              />
              
              {/* Define gradient for each piece */}
              <defs>
                <linearGradient id={`gradient-${piece.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={`var(--dark-surface)`} />
                  <stop offset="100%" stopColor={`var(--${piece.color})/15%`} />
                </linearGradient>
              </defs>
              
              {/* Circuit-like pattern inside each piece */}
              <g transform={piece.transform} opacity="0.3">
                <path 
                  d={`M20,20 h40 v20 h-20 v20 h30`} 
                  stroke={`var(--${piece.color})`} 
                  strokeWidth="1" 
                  fill="none"
                />
                <circle cx="70" cy="60" r="3" fill={`var(--${piece.color})`} opacity="0.5" />
              </g>
              
              {/* Center content of each piece */}
              <g 
                transform={`translate(${parseInt(piece.transform.split(/[\s,()]+/)[1]) + 50}, ${parseInt(piece.transform.split(/[\s,()]+/)[2]) + 50})`}
                className="transition-transform duration-300"
                style={{ transform: hoveredPiece === piece.id ? 'scale(1.1)' : 'scale(1)' }}
              >
                {/* Icon background */}
                <circle 
                  cx="0" 
                  cy="0" 
                  r={hoveredPiece === piece.id ? 20 : 15}
                  fill={`var(--${piece.color})/20%`}
                  className="transition-all duration-300"
                  style={{ 
                    fillOpacity: hoveredPiece === piece.id ? 0.3 : 0.2
                  }}
                />
                
                {/* Piece label (only show on hover or when fully assembled) */}
                <text 
                  x="0" 
                  y="30" 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="10"
                  fontWeight="bold"
                  opacity={hoveredPiece === piece.id || assembledState === 2 ? 1 : 0}
                  className="transition-opacity duration-300"
                >
                  {piece.name}
                </text>
                
                {/* Use a foreignObject to embed the FeatureIcon component */}
                <foreignObject x="-10" y="-10" width="20" height="20">
                  <div className="w-full h-full flex items-center justify-center">
                    <FeatureIcon 
                      iconName={piece.icon} 
                      color={piece.color} 
                      className="w-5 h-5" 
                    />
                  </div>
                </foreignObject>
              </g>
              
              {/* Feature highlights that appear on hover */}
              {hoveredPiece === piece.id && (
                <g>
                  {piece.features.map((feature, idx) => {
                    // Calculate position for feature badges around the piece
                    const angle = (idx * 2 * Math.PI / piece.features.length) + Math.PI/4;
                    const centerX = parseInt(piece.transform.split(/[\s,()]+/)[1]) + 50;
                    const centerY = parseInt(piece.transform.split(/[\s,()]+/)[2]) + 50;
                    const x = centerX + Math.cos(angle) * 45;
                    const y = centerY + Math.sin(angle) * 45;
                    
                    return (
                      <g
                        key={`${piece.id}-feature-${idx}`}
                        className="animate-fadeIn"
                        transform={`translate(${x}, ${y})`}
                      >
                        <rect
                          x="-30"
                          y="-10"
                          width="60"
                          height="20"
                          rx="5"
                          fill="var(--dark-surface)"
                          fillOpacity="0.8"
                          stroke={`var(--${piece.color})/50%`}
                          strokeWidth="1"
                        />
                        <text
                          x="0"
                          y="4"
                          textAnchor="middle"
                          fill="white"
                          fontSize="8"
                        >
                          {feature}
                        </text>
                      </g>
                    );
                  })}
                </g>
              )}
            </g>
          ))}
          
          {/* Central hub - only visible when assembled */}
          <g
            className="transition-all duration-1000"
            style={{
              opacity: assembledState === 2 ? 1 : 0,
              transform: assembledState === 2 ? 'scale(1)' : 'scale(0)',
              transformOrigin: 'center'
            }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="15"
              fill="var(--dark-surface)"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
            />
            <foreignObject x="50%" y="50%" width="20" height="20" transform="translate(-10, -10)">
              <div className="w-full h-full flex items-center justify-center">
                <FeatureIcon 
                  iconName="DevicePhoneMobileIcon" 
                  color="white" 
                  className="w-6 h-6" 
                />
              </div>
            </foreignObject>
            
            {/* Pulsing animation */}
            <circle
              cx="50%"
              cy="50%"
              r="15"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0"
              className="animate-ping-slow"
            />
          </g>
        </svg>
        
        {/* Info panel - appears when fully assembled */}
        <div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500" 
          style={{ 
            opacity: assembledState === 2 ? 1 : 0,
            transform: assembledState === 2 ? 'translate(-50%, 0)' : 'translate(-50%, 30px)'
          }}
        >
          <div className="bg-gradient-to-br from-dark/80 to-dark-surface/90 backdrop-blur-md px-6 py-3 rounded-xl border border-dark-border shadow-lg max-w-md">
            <div className="text-center">
              {hoveredPiece ? (
                <div className="flex flex-col items-center">
                  <div className={`p-2 rounded-full bg-${puzzlePieces.find(p => p.id === hoveredPiece)?.color}/20 mb-2`}>
                    <FeatureIcon 
                      iconName={puzzlePieces.find(p => p.id === hoveredPiece)?.icon || ''} 
                      color={puzzlePieces.find(p => p.id === hoveredPiece)?.color || 'white'} 
                      className="w-5 h-5" 
                    />
                  </div>
                  <h3 className="text-white font-bold">
                    {puzzlePieces.find(p => p.id === hoveredPiece)?.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {puzzlePieces.find(p => p.id === hoveredPiece)?.description}
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-white font-bold">Complete App Solution</h3>
                  <p className="text-sm text-text-secondary">Hover over puzzle pieces to explore app components</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPuzzle;