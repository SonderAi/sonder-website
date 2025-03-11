import React, { useState, useEffect } from 'react';
import FeatureIcon from '../../ui/FeatureIcon';

interface AbstractCollaborationProps {
  className?: string;
}

const AbstractCollaboration: React.FC<AbstractCollaborationProps> = ({ className = '' }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  // Auto-cycle through nodes for ambient animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => {
        if (prev === null || prev >= 4) return 0;
        return prev + 1;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Cycle through animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  // Node data - simplified to just visual elements
  const nodes = [
    {
      icon: 'SparklesIcon',
      color: 'primary',
      size: 'lg',
      position: { top: '25%', left: '22%' }
    },
    {
      icon: 'PuzzlePieceIcon',
      color: 'info',
      size: 'md',
      position: { top: '18%', left: '65%' }
    },
    {
      icon: 'LightBulbIcon',
      color: 'accent',
      size: 'xl',
      position: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    },
    {
      icon: 'BeakerIcon',
      color: 'warning', 
      size: 'md',
      position: { top: '72%', left: '28%' }
    },
    {
      icon: 'RocketLaunchIcon',
      color: 'success',
      size: 'lg',
      position: { top: '68%', left: '70%' }
    }
  ];
  
  // Connection paths between nodes - these will be used for SVG paths and animations
  const connections = [
    { from: 0, to: 2, curve: 0.3 },
    { from: 1, to: 2, curve: -0.4 },
    { from: 2, to: 3, curve: 0.3 },
    { from: 2, to: 4, curve: -0.2 },
    { from: 0, to: 1, curve: 0.5 },
    { from: 3, to: 4, curve: 0.4 }
  ];

  // Helper functions
  const getNodeSizeClass = (size: string) => {
    switch(size) {
      case 'sm': return 'w-10 h-10';
      case 'md': return 'w-14 h-14';
      case 'lg': return 'w-16 h-16';
      case 'xl': return 'w-20 h-20';
      default: return 'w-14 h-14';
    }
  };
  
  const getIconSizeClass = (size: string) => {
    switch(size) {
      case 'sm': return 'w-4 h-4';
      case 'md': return 'w-6 h-6';
      case 'lg': return 'w-7 h-7';
      case 'xl': return 'w-8 h-8';
      default: return 'w-6 h-6';
    }
  };
  
  // Generate bezier curve path between two nodes
  const getBezierPath = (fromNode: any, toNode: any, curve: number): string => {
    const fromX = parseInt(fromNode.position.left) || 0;
    const fromY = parseInt(fromNode.position.top) || 0;
    const toX = parseInt(toNode.position.left) || 0;
    const toY = parseInt(toNode.position.top) || 0;
    
    // Calculate control point for the curve
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2 - curve * 100; // Adjust curve height
    
    return `M${fromX} ${fromY} Q${midX} ${midY} ${toX} ${toY}`;
  };
  
  // Generate shapes for the pattern
  const shapes = [];
  for (let i = 0; i < 20; i++) {
    const shape = {
      type: Math.random() > 0.7 ? 'circle' : Math.random() > 0.5 ? 'square' : 'triangle',
      size: 4 + Math.random() * 8,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.2,
      rotation: Math.random() * 360,
      animationDuration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      color: ['primary', 'secondary', 'accent', 'info', 'success', 'warning'][Math.floor(Math.random() * 6)]
    };
    shapes.push(shape);
  }

  return (
    <div className={`relative h-[500px] ${className}`}>
      {/* Abstract visualization canvas */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-dark-surface/20 via-dark to-dark-surface/50 border border-dark-border shadow-xl">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0" 
              style={{ 
                backgroundImage: `radial-gradient(circle at 30% 20%, var(--primary-rgb, 0 0 0)/5% 1px, transparent 1px), 
                                  radial-gradient(circle at 70% 65%, var(--accent-rgb, 0 0 0)/5% 1px, transparent 1px),
                                  radial-gradient(circle at 20% 80%, var(--info-rgb, 0 0 0)/5% 2px, transparent 2px)`, 
                backgroundSize: '60px 60px, 80px 80px, 40px 40px',
                backgroundPosition: '0 0, 30px 30px, 15px 15px'
              }}>
          </div>
        </div>
        
        {/* Ambient floating shapes */}
        {shapes.map((shape, idx) => (
          <div 
            key={idx} 
            className={`absolute z-0 opacity-${Math.floor(shape.opacity * 100)} animate-float`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              transform: `rotate(${shape.rotation}deg)`,
              animationDuration: `${shape.animationDuration}s`,
              animationDelay: `${shape.delay}s`,
              background: shape.type === 'circle' 
                ? `radial-gradient(circle, var(--${shape.color})/30% 0%, transparent 70%)` 
                : 'none',
              border: shape.type === 'square' 
                ? `1px solid var(--${shape.color})/40%` 
                : 'none',
              clipPath: shape.type === 'triangle' 
                ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                : 'none',
              backgroundColor: shape.type === 'triangle' 
                ? `var(--${shape.color})/20%` 
                : 'transparent',
              borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '2px' : '0'
            }}
          ></div>
        ))}
        
        {/* Dynamic gradient background based on active node */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ 
            background: activeNode !== null ? 
              `radial-gradient(circle at ${nodes[activeNode].position.left} ${nodes[activeNode].position.top}, var(--${nodes[activeNode].color})/10% 0%, transparent 60%)` : 
              'none',
            opacity: activeNode !== null ? 1 : 0
          }}
        ></div>
        
        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 z-10 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--info)" stopOpacity="0.2" />
            </linearGradient>
            
            <filter id="glowFilter">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Animated dash pattern */}
            <pattern id="flowPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
              <line x1="0" y1="10" x2="20" y2="10" stroke="url(#connectionGradient)" strokeWidth="20" strokeDasharray="1 9" strokeLinecap="round">
                <animate attributeName="stroke-dashoffset" from="20" to="0" dur="40s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          
          {/* Draw connections between nodes */}
          {connections.map((connection, idx) => {
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];
            const isActive = activeNode === connection.from || activeNode === connection.to;
            
            return (
              <g key={idx}>
                <path 
                  className="transition-all duration-500"
                  d={getBezierPath(fromNode, toNode, connection.curve)}
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth={isActive ? "3" : "1.5"}
                  strokeOpacity={isActive ? "1" : "0.6"}
                  strokeDasharray={isActive ? "0" : "6,4"}
                  filter={isActive ? "url(#glowFilter)" : ""}
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                />
                
                {/* Animated particles along active connections */}
                {isActive && (
                  <circle r="3" fill={`var(--${isActive ? (activeNode === connection.from ? fromNode.color : toNode.color) : 'primary'})`}>
                    <animateMotion
                      path={getBezierPath(fromNode, toNode, connection.curve)}
                      dur={`${2 + Math.random()}s`}
                      repeatCount="indefinite"
                      rotate="auto"
                    />
                  </circle>
                )}
              </g>
            );
          })}
          
          {/* Phase-specific visual elements */}
          {animationPhase === 0 && (
            <g>
              <circle cx="50%" cy="50%" r="35%" fill="none" stroke="url(#connectionGradient)" strokeWidth="0.5" strokeDasharray="3,5">
                <animate attributeName="r" values="35%;37%;35%" dur="8s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="8s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
          
          {animationPhase === 1 && (
            <g>
              {[...Array(5)].map((_, i) => (
                <path 
                  key={i}
                  d={`M50,50 ${50 + 40 * Math.cos(i * Math.PI * 2 / 5)},${50 + 40 * Math.sin(i * Math.PI * 2 / 5)}`} 
                  stroke="url(#connectionGradient)" 
                  strokeWidth="0.5" 
                  fill="none"
                >
                  <animate attributeName="stroke-dasharray" values="0,100;100,100" dur="2s" begin={`${i * 0.4}s`} fill="freeze" />
                </path>
              ))}
            </g>
          )}
        </svg>
        
        {/* Main nodes */}
        {nodes.map((node, idx) => {
          const isActive = activeNode === idx;
          const sizeClass = getNodeSizeClass(node.size);
          const iconSizeClass = getIconSizeClass(node.size);
          
          return (
            <div 
              key={idx}
              className={`absolute z-20 transition-all duration-500 ease-in-out cursor-pointer
                ${isActive ? 'scale-125' : 'scale-100 hover:scale-110'}`}
              style={{
                ...node.position as any,
                filter: isActive ? `drop-shadow(0 0 8px var(--${node.color}))` : 'none'
              }}
              onClick={() => setActiveNode(isActive ? null : idx)}
            >
              <div className={`${sizeClass} relative flex items-center justify-center`}>
                {/* Pulsing background */}
                <div 
                  className={`absolute inset-0 rounded-full bg-${node.color}/20 transition-transform duration-700
                    ${isActive ? 'scale-[1.6] animate-pulse-slow' : 'scale-100'}`}
                ></div>
                
                {/* Main circle */}
                <div 
                  className={`absolute inset-0 rounded-full bg-gradient-to-br from-dark/50 to-dark-surface/70 
                    backdrop-blur-sm border transition-all duration-300
                    ${isActive 
                      ? `border-${node.color}/50 shadow-lg shadow-${node.color}/20` 
                      : 'border-dark-border hover:border-white/20'}`}
                ></div>
                
                {/* Decorative ring */}
                <div 
                  className={`absolute inset-[2px] rounded-full border-2 border-dashed transition-all duration-300
                    ${isActive ? `border-${node.color}/30` : 'border-white/10'}`}
                  style={{ 
                    animation: isActive ? `spin 10s linear infinite` : 'none' 
                  }}
                ></div>
                
                {/* Icon */}
                <div className={`relative z-10 transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                  <FeatureIcon 
                    iconName={node.icon} 
                    color={isActive ? node.color : 'white'} 
                    className={iconSizeClass}
                  />
                </div>
              </div>
              
              {/* Satellite elements that only appear when node is active */}
              {isActive && [0, 1, 2].map(i => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-dark-surface/60 backdrop-blur-md border border-dark-border/50 shadow-lg"
                  style={{
                    width: `${12 - i*2}px`,
                    height: `${12 - i*2}px`,
                    top: `calc(50% + ${Math.sin(i * Math.PI * 2/3) * 35}px)`,
                    left: `calc(50% + ${Math.cos(i * Math.PI * 2/3) * 35}px)`,
                    transform: 'translate(-50%, -50%)',
                    animation: `floatInPlace 3s ease-in-out ${i * 0.3}s infinite alternate`
                  }}
                >
                  <div 
                    className="absolute inset-[2px] rounded-full"
                    style={{ backgroundColor: `var(--${node.color})/50%` }}
                  ></div>
                </div>
              ))}
            </div>
          );
        })}
        
        {/* Central floating shape according to animation phase */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out z-0"
          style={{
            opacity: activeNode === null ? 1 : 0.2,
            filter: 'blur(1px)'
          }}
        >
          {animationPhase === 0 && (
            <div className="relative w-40 h-40">
              {[0, 1, 2, 3, 4].map(i => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    border: `1px solid var(--${['primary', 'info', 'accent', 'warning', 'success'][i]})`,
                    animation: `spin ${10 + i * 5}s linear infinite ${i * 0.2}s`,
                    transform: `scale(${0.6 + i * 0.1})`
                  }}
                ></div>
              ))}
            </div>
          )}
          
          {animationPhase === 1 && (
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="relative">
                {[0, 1, 2, 3, 4].map(i => {
                  const angle = (i * Math.PI * 2 / 5);
                  return (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 shadow-glow"
                      style={{
                        transform: `translate(${Math.cos(angle) * 60}px, ${Math.sin(angle) * 60}px)`,
                        animation: `pulse 2s ease-in-out ${i * 0.4}s infinite alternate`
                      }}
                    ></div>
                  );
                })}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-dark-surface/60 to-dark-surface/30 backdrop-blur-md border border-white/10"></div>
              </div>
            </div>
          )}
          
          {animationPhase === 2 && (
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 rounded-full border border-white/5">
                <div className="absolute inset-[30%] rounded-full border border-white/10"></div>
              </div>
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                {[0, 1, 2].map(ring => (
                  <circle 
                    key={ring}
                    cx="50"
                    cy="50"
                    r={20 + ring * 15}
                    fill="none"
                    stroke={`var(--${['primary', 'accent', 'info'][ring]})`}
                    strokeWidth="0.5"
                    strokeDasharray="1,5"
                    opacity="0.3"
                  >
                    <animateTransform 
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 50 50"
                      to="360 50 50"
                      dur={`${20 + ring * 10}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AbstractCollaboration;