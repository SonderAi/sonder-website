// src/components/sections/HeroSection.tsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NeuralNetwork, TechDiagram } from '../graphics';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Setup intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-[90vh] flex items-center ${className}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark"></div>
        <div className="absolute inset-0 opacity-20">
          <NeuralNetwork color="var(--primary)" />
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-accent/30 to-secondary/20 blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Side */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* Animated subtitle */}
            <div 
              className={`inline-flex items-center rounded-full px-4 py-1.5 mb-6 bg-dark-surface/70 backdrop-blur-sm border border-dark-border ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></div>
              <span className="text-text-secondary text-sm">Innovative Technology Solutions</span>
            </div>
            
            {/* Main Heading */}
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-text-primary block">Transforming Ideas</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Into Reality</span>
            </h1>
            
            {/* Description */}
            <p 
              className={`text-xl text-text-secondary mb-8 max-w-lg ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              We build high-performance technologies that help businesses streamline operations and drive efficiency in the digital age.
            </p>
            
            {/* Call to Action Button */}
            <div 
              className={`${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              {/* Primary button with animated glow effect */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg opacity-70 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse-slow" style={{ transform: 'translateY(4px)' }}></div>
                
                <Link 
                  to="/contact" 
                  className="relative btn btn-primary px-6 py-3 inline-flex items-center z-10 group-hover:translate-y-1 transition-transform duration-300"
                >
                  <span className="mr-2">Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Visual Side - Interactive Tech Diagram */}
          <div className="lg:w-1/2 flex justify-center">
            <div 
              className={`relative max-w-lg w-full ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              {/* TechDiagram Component */}
              <TechDiagram />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 relative block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18.17 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" 
            opacity=".25" 
            fill="var(--dark-surface)"
          />
          <path 
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" 
            opacity=".5" 
            fill="var(--dark-surface)"
          />
          <path 
            d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" 
            fill="var(--dark-surface)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;