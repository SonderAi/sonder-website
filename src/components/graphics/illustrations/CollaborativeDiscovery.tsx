import React, { useState } from 'react';
import FeatureIcon from '../../ui/FeatureIcon';

interface CollaborativeDiscoveryProps {
  className?: string;
}

const CollaborativeDiscovery: React.FC<CollaborativeDiscoveryProps> = ({ className = '' }) => {
  const [activeStage, setActiveStage] = useState('ideate');
  
  // Data for each stage of the collaborative process
  const stageData = {
    discover: {
      title: 'Discover',
      description: 'Exploring possibilities and understanding needs',
      icon: 'MagnifyingGlassIcon',
      color: 'primary',
      connections: ['ideate', 'analyze'],
      elements: [
        { icon: 'QuestionMarkCircleIcon', label: 'Research', color: 'primary' },
        { icon: 'LightBulbIcon', label: 'Insights', color: 'accent' },
        { icon: 'ChatBubbleLeftRightIcon', label: 'Interviews', color: 'info' }
      ]
    },
    analyze: {
      title: 'Analyze',
      description: 'Making sense of collected data',
      icon: 'ChartBarIcon',
      color: 'info',
      connections: ['discover', 'ideate', 'prototype'],
      elements: [
        { icon: 'DocumentChartBarIcon', label: 'Data Points', color: 'info' },
        { icon: 'ArrowPathIcon', label: 'Patterns', color: 'warning' },
        { icon: 'PresentationChartLineIcon', label: 'Metrics', color: 'primary' }
      ]
    },
    ideate: {
      title: 'Ideate',
      description: 'Generating creative solutions',
      icon: 'LightBulbIcon',
      color: 'accent',
      connections: ['discover', 'analyze', 'prototype'],
      elements: [
        { icon: 'SparklesIcon', label: 'Ideas', color: 'accent' },
        { icon: 'PuzzlePieceIcon', label: 'Solutions', color: 'success' },
        { icon: 'RocketLaunchIcon', label: 'Innovation', color: 'error' }
      ]
    },
    prototype: {
      title: 'Prototype',
      description: 'Building and testing iterative models',
      icon: 'CubeIcon',
      color: 'warning',
      connections: ['analyze', 'ideate', 'implement'],
      elements: [
        { icon: 'BeakerIcon', label: 'Testing', color: 'warning' },
        { icon: 'AdjustmentsHorizontalIcon', label: 'Iteration', color: 'info' },
        { icon: 'CursorArrowRippleIcon', label: 'Feedback', color: 'success' }
      ]
    },
    implement: {
      title: 'Implement',
      description: 'Delivering personalized solutions',
      icon: 'RocketLaunchIcon',
      color: 'success',
      connections: ['prototype'],
      elements: [
        { icon: 'CodeBracketIcon', label: 'Development', color: 'primary' },
        { icon: 'ShieldCheckIcon', label: 'Quality', color: 'success' },
        { icon: 'TrophyIcon', label: 'Delivery', color: 'warning' }
      ]
    }
  };

  // Calculate positions for each stage in a circle
  const stagePositions = {
    discover: { top: '15%', left: '25%' },
    analyze: { top: '30%', left: '70%' },
    ideate: { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    prototype: { top: '70%', left: '30%' },
    implement: { top: '80%', left: '75%' }
  };

  return (
    <div className={`relative h-[600px] ${className}`}>
      {/* Central visualization area */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-dark/30 via-dark to-dark-surface/80 border border-dark-border shadow-xl">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" 
              style={{ 
                backgroundImage: `linear-gradient(var(--dark-border) 1px, transparent 1px), 
                                  linear-gradient(90deg, var(--dark-border) 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
              }}>
          </div>
          
          {/* Decorative blobs */}
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-accent/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-info/5 to-success/10 blur-3xl"></div>
          
          {/* Particles - small circles scattered around */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20 animate-pulse"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Connection lines between nodes */}
        <svg className="absolute inset-0 z-10 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Draw connections between nodes */}
          {Object.keys(stageData).map(stageKey => {
            const stage = stageData[stageKey as keyof typeof stageData];
            return stage.connections.map((connectionKey, idx) => {
              // Only show connections to/from active stage with higher opacity
              const isActiveConnection = activeStage === stageKey || activeStage === connectionKey;
              
              return (
                <line 
                  key={`${stageKey}-${connectionKey}-${idx}`}
                  className={`transition-opacity duration-500 ${isActiveConnection ? 'opacity-100' : 'opacity-20'}`}
                  x1={`${parseInt(stagePositions[stageKey as keyof typeof stagePositions].left as string) + (stageKey === 'ideate' ? 50 : 0)}%`}
                  y1={`${parseInt(stagePositions[stageKey as keyof typeof stagePositions].top as string) + (stageKey === 'ideate' ? 50 : 0)}%`}
                  x2={`${parseInt(stagePositions[connectionKey as keyof typeof stagePositions].left as string) + (connectionKey === 'ideate' ? 50 : 0)}%`}
                  y2={`${parseInt(stagePositions[connectionKey as keyof typeof stagePositions].top as string) + (connectionKey === 'ideate' ? 50 : 0)}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray={isActiveConnection ? "0" : "4,4"}
                  filter={isActiveConnection ? "url(#glow)" : ""}
                />
              );
            });
          })}
          
          {/* Data flow animation along active connections */}
          {Object.keys(stageData).map(stageKey => {
            const stage = stageData[stageKey as keyof typeof stageData];
            return stage.connections.map((connectionKey, idx) => {
              // Only animate connections to/from active stage
              if (activeStage === stageKey || activeStage === connectionKey) {
                return (
                  <circle 
                    key={`flow-${stageKey}-${connectionKey}-${idx}`}
                    r="3"
                    fill={`var(--${activeStage === stageKey ? stage.color : stageData[connectionKey as keyof typeof stageData].color})`}
                    filter="url(#glow)"
                    opacity="0.8"
                  >
                    <animateMotion 
                      path={`M${parseInt(stagePositions[stageKey as keyof typeof stagePositions].left as string) + (stageKey === 'ideate' ? 50 : 0)},${parseInt(stagePositions[stageKey as keyof typeof stagePositions].top as string) + (stageKey === 'ideate' ? 50 : 0)} L${parseInt(stagePositions[connectionKey as keyof typeof stagePositions].left as string) + (connectionKey === 'ideate' ? 50 : 0)},${parseInt(stagePositions[connectionKey as keyof typeof stagePositions].top as string) + (connectionKey === 'ideate' ? 50 : 0)}`}
                      dur="3s"
                      repeatCount="indefinite"
                      begin={`${idx * 0.5}s`}
                    />
                  </circle>
                );
              }
              return null;
            }).filter(Boolean);
          })}
        </svg>
        
        {/* Nodes for each stage */}
        {Object.keys(stageData).map(stageKey => {
          const stage = stageData[stageKey as keyof typeof stageData];
          const position = stagePositions[stageKey as keyof typeof stagePositions];
          const isActive = activeStage === stageKey;
          
          return (
            <div 
              key={stageKey}
              className={`absolute z-20 transition-all duration-500 ease-in-out cursor-pointer ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}`}
              style={{ 
                ...position as any,
                filter: isActive ? 'drop-shadow(0 0 8px var(--primary))' : 'none'
              }}
              onClick={() => setActiveStage(stageKey)}
            >
              <div 
                className={`flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-md border transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-br from-${stage.color}/30 to-${stage.color}/10 border-${stage.color}/40` 
                    : 'bg-gradient-to-br from-dark/60 to-dark-surface/40 border-dark-border hover:border-white/20'}`}
                style={{ width: stageKey === 'ideate' ? '160px' : '130px', height: stageKey === 'ideate' ? '160px' : '130px' }}
              >
                <div className={`p-3 rounded-full bg-${stage.color}/20 mb-2`}>
                  <FeatureIcon iconName={stage.icon} color={stage.color} className={`w-7 h-7`} />
                </div>
                <h3 className="text-white text-sm font-bold">{stage.title}</h3>
                {isActive && (
                  <p className="text-xs text-text-secondary mt-1 text-center opacity-80">{stage.description}</p>
                )}
              </div>
              
              {/* Stage elements that appear when active */}
              <div className="absolute top-0 left-0 mt-2">
                {isActive && stage.elements.map((element, idx) => (
                  <div 
                    key={idx}
                    className={`absolute flex items-center transition-all duration-500 delay-${idx}00`}
                    style={{
                      transform: `rotate(${120 + idx * 120}deg) translateX(110px) rotate(-${120 + idx * 120}deg)`,
                      opacity: 1,
                      animation: `fadeInRotate 0.5s ease-out ${idx * 0.1}s forwards`
                    }}
                  >
                    <div className="flex items-center p-2 rounded-lg bg-gradient-to-br from-dark/80 to-dark-surface/90 border border-dark-border/50 shadow-lg backdrop-blur-sm">
                      <div className={`p-1.5 rounded-full bg-${element.color}/20 mr-2`}>
                        <FeatureIcon iconName={element.icon} color={element.color} className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-white whitespace-nowrap">{element.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        
        {/* Floating info panels */}
        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${activeStage ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-dark/90 to-dark-surface/95 backdrop-blur-md px-6 py-4 rounded-xl border border-dark-border/50 shadow-lg max-w-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-${stageData[activeStage as keyof typeof stageData].color}/20`}>
                  <FeatureIcon 
                    iconName={stageData[activeStage as keyof typeof stageData].icon} 
                    color={stageData[activeStage as keyof typeof stageData].color} 
                    className="w-5 h-5" 
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold">{stageData[activeStage as keyof typeof stageData].title}</h3>
                  <p className="text-sm text-text-secondary">{stageData[activeStage as keyof typeof stageData].description}</p>
                </div>
              </div>
              
              <div className={`px-3 py-1.5 rounded-md bg-${stageData[activeStage as keyof typeof stageData].color}/20 border border-${stageData[activeStage as keyof typeof stageData].color}/30`}>
                <span className={`text-xs font-medium text-${stageData[activeStage as keyof typeof stageData].color}`}>
                  Stage {Object.keys(stageData).indexOf(activeStage) + 1}/{Object.keys(stageData).length}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-8 w-24 h-24 border border-primary/20 rounded-full"></div>
        <div className="absolute -bottom-10 -right-6 w-20 h-20 border border-accent/30 rounded-full"></div>
      </div>
      
      {/* Title */}
      <div className="text-center my-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-info bg-clip-text text-transparent">Collaborative Discovery Process</h2>
        <p className="text-sm text-text-secondary mt-1">Click on each stage to explore our journey toward personalized solutions</p>
      </div>
    </div>
  );
};

export default CollaborativeDiscovery;