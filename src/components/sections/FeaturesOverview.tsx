import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FeatureIcon from '../ui/FeatureIcon';
import { featureData } from '../../data/features';
import { 
  AILightIllustration, 
  WebAppIllustration, 
  AutomationIllustration 
} from '../graphics/illustrations';
import { 
  CircuitLines, 
  DataFlow, 
  NeuralNetwork 
} from '../graphics/decorative';

interface FeaturesOverviewProps {
  className?: string;
}

const FeaturesOverview: React.FC<FeaturesOverviewProps> = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState<string>(featureData[0].id);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const userInteractedRef = useRef(false);
  const rotationCompletedRef = useRef(false);
  
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('features');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  // Auto-rotate categories only if the user hasn't interacted and rotation not completed
  useEffect(() => {
    if (!userInteractedRef.current && !rotationCompletedRef.current && isVisible) {
      const timer = setTimeout(() => {
        const currentIndex = featureData.findIndex(c => c.id === activeCategory);
        const nextIndex = (currentIndex + 1) % featureData.length;
        
        if (currentIndex === featureData.length - 1) {
          // We've shown all categories once, don't rotate anymore
          rotationCompletedRef.current = true;
        } else {
          setActiveCategory(featureData[nextIndex].id);
        }
      }, 8000); // Increased to 8 seconds for better readability
      
      return () => clearTimeout(timer);
    }
  }, [activeCategory, isVisible]);
  
  // Handle manual category selection
  const handleCategorySelect = (categoryId: string) => {
    userInteractedRef.current = true;
    setActiveCategory(categoryId);
  };
  
  // Get current category
  const currentCategory = featureData.find(category => category.id === activeCategory) || featureData[0];
  
  // Get color theme based on category ID
  const getCategoryTheme = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-innovation':
        return { 
          main: 'accent',
          secondary: 'primary',
          gradient: 'from-accent via-accent/70 to-primary/40'
        };
      case 'technical':
        return { 
          main: 'secondary',
          secondary: 'info',
          gradient: 'from-secondary via-secondary/70 to-info/40'
        };
      case 'process':
        return { 
          main: 'primary',
          secondary: 'accent',
          gradient: 'from-primary via-primary/70 to-accent/40'
        };
      default:
        return { 
          main: 'primary',
          secondary: 'accent',
          gradient: 'from-primary via-primary/70 to-accent/40'
        };
    }
  };
  
  const theme = getCategoryTheme(activeCategory);
  
  // Get illustration based on category ID
  const getIllustration = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-innovation':
        return <AILightIllustration className="w-full h-full" />;
      case 'technical':
        return <WebAppIllustration className="w-full h-full" />;
      case 'process':
        return <AutomationIllustration className="w-full h-full" />;
      default:
        return <AILightIllustration className="w-full h-full" />;
    }
  };
  
  // Get decorative element based on category ID
  const getDecorativeElement = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-innovation':
        return <NeuralNetwork className="absolute inset-0 opacity-20" color="var(--accent)" />;
      case 'technical':
        return <CircuitLines className="absolute inset-0 opacity-20" color="var(--secondary)" />;
      case 'process':
        return <DataFlow className="absolute inset-0 opacity-20" color="var(--primary)" />;
      default:
        return <CircuitLines className="absolute inset-0 opacity-20" color="var(--primary)" />;
    }
  };

  // Helper to create staggered animation classes
  const getEntranceAnimation = (_index: number) => {
    // Use index for staggered animations
    return isVisible ? `animate-fade-in-up opacity-100 translate-y-0` : `opacity-0 translate-y-10`;
  };
  
  // Create illustration component to avoid duplication
  const IllustrationComponent = () => (
    <div className="relative w-full max-w-sm aspect-square transition-all duration-500 transform">
      {/* Glowing backdrop for the illustration */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${theme.gradient} blur-2xl opacity-30`}></div>
      
      {/* Rotating ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-full h-full border-4 border-dashed rounded-full animate-spin-slow"
          style={{ 
            borderColor: `var(--${theme.main})`,
            opacity: 0.2
          }}
        ></div>
      </div>
      
      {/* Add animated decorative background element */}
      {getDecorativeElement(activeCategory)}
      
      {/* Main illustration with animation */}
      <div className="absolute inset-0 flex items-center justify-center animate-float-medium transition-all duration-500">
        {getIllustration(activeCategory)}
      </div>
      
      {/* Pulsing dots */}
      <div className="absolute w-full h-full">
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const x = 50 + 45 * Math.cos(angle);
          const y = 50 + 45 * Math.sin(angle);
          
          return (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse-slow"
              style={{ 
                left: `${x}%`, 
                top: `${y}%`,
                backgroundColor: `var(--${theme.main})`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
  
  // Create features header component to avoid duplication
  const FeatureHeader = () => (
    <div 
      className={`mb-8 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '0.6s' }}
    >
      <div className="flex items-center mb-3">
        <div 
          className="h-1 w-10 mr-3 rounded-full"
          style={{ 
            background: `var(--${theme.main})` 
          }}
        ></div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          {currentCategory.title}
        </h3>
      </div>
      <p className="text-lg text-text-secondary">
        {currentCategory.description}
      </p>
    </div>
  );
  
  return (
    <section id="features" className={`py-24 relative overflow-hidden ${className}`}>
      {/* Animated background gradient that transitions with category changes */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-in-out opacity-40"
        style={{
          background: `radial-gradient(circle at 30% 30%, var(--${theme.main}) 0%, transparent 30%),
                      radial-gradient(circle at 70% 70%, var(--${theme.secondary}) 0%, transparent 30%)`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Powerful Solutions
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-4 text-white ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="inline-block relative">
              Our <span className="text-white">Core Capabilities</span>
              <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary ${isVisible ? 'animate-grow-width w-full' : 'w-0'}`} style={{ transitionDelay: '0.6s' }}></span>
            </span>
          </h2>
          <p 
            className={`text-lg text-text-secondary max-w-2xl mx-auto mt-6 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            Delivering exceptional solutions with innovative features that drive real business results
          </p>
        </div>
        
        {/* Category Selection Tabs */}
        <div 
          className={`flex justify-center mb-12 overflow-x-auto pb-2 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="inline-flex p-1.5 rounded-xl shadow-xl bg-dark-surface/70 backdrop-blur-md border border-dark-border">
            {featureData.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`relative flex items-center gap-2 py-2.5 px-5 rounded-lg text-sm md:text-base font-medium transition-all duration-500 overflow-hidden ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg z-10'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {/* Progress bar indicator showing auto-rotation timing */}
                {activeCategory === category.id && !userInteractedRef.current && !rotationCompletedRef.current && (
                  <div className="absolute bottom-0 left-0 h-0.5 bg-white/30 w-full">
                    <div 
                      className="h-full bg-white" 
                      style={{ 
                        width: '0%', 
                        animation: hoverIndex === null ? 'progress-grow 8s linear forwards' : 'none' 
                      }}
                    ></div>
                  </div>
                )}
                
                {/* Animated gradient background for active or hovered tab */}
                <span
                  className={`absolute inset-0 transition-all duration-500 ${
                    activeCategory === category.id
                      ? 'opacity-100'
                      : hoverIndex === index ? 'opacity-70' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, 
                      var(--${getCategoryTheme(category.id).main}) 0%, 
                      var(--${getCategoryTheme(category.id).secondary}) 100%)`
                  }}
                ></span>
                
                {/* Animated highlight effect */}
                {(activeCategory === category.id || hoverIndex === index) && (
                  <span className="absolute inset-0 bg-white/20 animate-pulse-subtle mix-blend-overlay"></span>
                )}
                
                {/* Category Icon */}
                <span className="relative z-10">
                  <FeatureIcon 
                    iconName={category.features[0].icon} 
                    color={getCategoryTheme(category.id).main} 
                    className="w-4 h-4 md:w-5 md:h-5 inline-block mr-1"
                  />
                </span>
                
                <span className="relative z-10">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12">
          {/* Alternate layout based on category */}
          {activeCategory === 'technical' ? (
            <>
              {/* Features (Left for technical) */}
              <div className="order-1 col-span-1 lg:col-span-2">
                <FeatureHeader />
                <div className="space-y-5">
                  {currentCategory.features.map((feature, idx) => (
                    <div 
                      key={feature.id}
                      className={`group bg-dark-surface/70 backdrop-blur-md border-l-4 border border-dark-border hover:border-l-[12px] rounded-lg transition-all duration-300 relative overflow-hidden ${getEntranceAnimation(idx)}`}
                      style={{
                        borderLeftColor: `var(--${feature.color || theme.main})`,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transitionDelay: `${0.7 + idx * 0.1}s`
                      }}
                    >
                      {/* Feature content with modern list layout */}
                      <div className="flex items-start p-5 gap-4 relative">
                        {/* Icon with glowing effect */}
                        <div className="relative">
                          {/* Glowing backdrop */}
                          <div 
                            className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 blur-md"
                            style={{ background: `var(--${feature.color || theme.main})` }}
                          ></div>
                          
                          {/* Icon */}
                          <div 
                            className="relative rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10"
                            style={{ 
                              background: `var(--${feature.color || theme.main})20`
                            }}
                          >
                            <FeatureIcon iconName={feature.icon} color={feature.color || theme.main} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-white flex items-center">
                            {feature.title}
                            <span 
                              className="ml-2 h-px w-0 group-hover:w-16 transition-all duration-500 opacity-0 group-hover:opacity-100"
                              style={{ background: `var(--${feature.color || theme.main})` }}
                            ></span>
                          </h4>
                          <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Animated arrow indicator */}
                        <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            style={{ color: `var(--${feature.color || theme.main})` }}
                          >
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Subtle progress indicator dots */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 flex">
                        {Array.from({ length: currentCategory.features.length }).map((_, dotIdx) => (
                          <div 
                            key={dotIdx} 
                            className={`flex-1 transition-all duration-500 ${dotIdx === idx ? 'bg-gradient-to-r' : 'bg-dark-border/20'}`}
                            style={{
                              backgroundImage: dotIdx === idx ? 
                                `linear-gradient(to right, var(--${feature.color || theme.main}), transparent)` : 
                                'none'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Illustration (Right for technical) */}
              <div 
                className={`order-2 col-span-1 flex justify-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.5s' }}
              >
                <IllustrationComponent />
              </div>
            </>
          ) : (
            <>
              {/* Illustration (Left for other categories) */}
              <div 
                className={`order-2 lg:order-1 col-span-1 flex justify-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.5s' }}
              >
                <IllustrationComponent />
              </div>
              
              {/* Features (Right for other categories) */}
              <div className="order-1 lg:order-2 col-span-1 lg:col-span-2">
                <FeatureHeader />
                <div className="space-y-5">
                  {currentCategory.features.map((feature, idx) => (
                    <div 
                      key={feature.id}
                      className={`group bg-dark-surface/70 backdrop-blur-md border-l-4 border border-dark-border hover:border-l-[12px] rounded-lg transition-all duration-300 relative overflow-hidden ${getEntranceAnimation(idx)}`}
                      style={{
                        borderLeftColor: `var(--${feature.color || theme.main})`,
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        transitionDelay: `${0.7 + idx * 0.1}s`
                      }}
                    >
                      {/* Feature content with modern list layout */}
                      <div className="flex items-start p-5 gap-4 relative">
                        {/* Icon with glowing effect */}
                        <div className="relative">
                          {/* Glowing backdrop */}
                          <div 
                            className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500 blur-md"
                            style={{ background: `var(--${feature.color || theme.main})` }}
                          ></div>
                          
                          {/* Icon */}
                          <div 
                            className="relative rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10"
                            style={{ 
                              background: `var(--${feature.color || theme.main})20`
                            }}
                          >
                            <FeatureIcon iconName={feature.icon} color={feature.color || theme.main} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold mb-1 text-white flex items-center">
                            {feature.title}
                            <span 
                              className="ml-2 h-px w-0 group-hover:w-16 transition-all duration-500 opacity-0 group-hover:opacity-100"
                              style={{ background: `var(--${feature.color || theme.main})` }}
                            ></span>
                          </h4>
                          <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Animated arrow indicator */}
                        <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pr-2">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            style={{ color: `var(--${feature.color || theme.main})` }}
                          >
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Subtle progress indicator dots */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 flex">
                        {Array.from({ length: currentCategory.features.length }).map((_, dotIdx) => (
                          <div 
                            key={dotIdx} 
                            className={`flex-1 transition-all duration-500 ${dotIdx === idx ? 'bg-gradient-to-r' : 'bg-dark-border/20'}`}
                            style={{
                              backgroundImage: dotIdx === idx ? 
                                `linear-gradient(to right, var(--${feature.color || theme.main}), transparent)` : 
                                'none'
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* CTA */}
        <div 
          className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <div className="inline-block relative group">
            {/* Animated glow effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl opacity-70 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse-slow"
              style={{ transform: 'translateY(4px)' }}
            ></div>
            
            <Link 
              to="/about" 
              className="relative btn bg-dark-surface/80 backdrop-blur-md border-0 hover:bg-dark-surface/50 text-white px-8 py-3 rounded-xl inline-flex items-center group-hover:translate-y-1 transition-transform duration-300"
            >
              <span className="mr-2 relative">
                Explore All Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;