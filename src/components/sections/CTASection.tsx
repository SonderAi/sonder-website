import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CircuitLines } from '../graphics/decorative';
import FeatureIcon from '../ui/FeatureIcon';

interface CTASectionProps {
  className?: string;
  title?: string;
  tagline?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  className = '',
  title = "Ready to Get Started",
  tagline = "Ready to Innovate",
  description = "Transform your business with custom solutions designed for your specific needs. Let's build something great together.",
  buttonText = "Contact Us",
  buttonLink = "/contact"
}) => {
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
      className={`py-24 bg-dark relative overflow-hidden ${className}`}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <CircuitLines color="var(--primary)" />
      </div>
      
      {/* Improved background gradients with better positioning */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-gradient-to-r from-secondary/20 to-transparent blur-3xl opacity-20"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[15%] animate-float-slow hidden lg:block">
        <div className="bg-dark-surface/80 backdrop-blur-sm p-3 rounded-lg border border-dark-border shadow-lg">
          <FeatureIcon iconName="SparklesIcon" color="primary" className="w-6 h-6" />
        </div>
      </div>
      
      <div className="absolute bottom-1/4 right-[15%] animate-float-medium hidden lg:block">
        <div className="bg-dark-surface/80 backdrop-blur-sm p-3 rounded-lg border border-dark-border shadow-lg">
          <FeatureIcon iconName="RocketLaunchIcon" color="accent" className="w-6 h-6" />
        </div>
      </div>

      {/* Main content with improved layout */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Content with enhanced styling */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span 
              className={`inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-4 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              {tagline}
            </span>
            
            <h2 
              className={`text-4xl md:text-5xl font-bold mb-6 text-white ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="inline-block relative">
                <span 
                  className="inline-block"
                  style={{ 
                    background: 'linear-gradient(to right, var(--primary), var(--accent), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {title}
                </span>
                <span className={`absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary ${isVisible ? 'animate-grow-width w-full' : 'w-0'}`} style={{ transitionDelay: '0.6s' }}></span>
              </span>
            </h2>
            
            <p 
              className={`text-xl text-text-secondary max-w-3xl mx-auto mt-6 mb-10 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '0.3s' }}
            >
              {description}
            </p>
          </div>
          
          {/* Enhanced CTA button with better animation */}
          <div 
            className={`flex justify-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative group">
              {/* Improved animated glow effect */}
              <div 
                className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl opacity-60 group-hover:opacity-100 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"
              ></div>
              
              {/* Button with better styling */}
              <Link 
                to={buttonLink} 
                className="relative px-8 py-4 bg-dark-surface border border-dark-border/30 rounded-xl text-white font-bold inline-flex items-center z-10 group-hover:bg-dark-surface/80 transition-all duration-300 shadow-lg"
              >
                {/* Moving shine effect */}
                <span className="absolute inset-0 w-full h-full rounded-xl overflow-hidden">
                  <span 
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"
                  ></span>
                </span>
                
                <span className="mr-3 relative z-10">{buttonText}</span>
                
                {/* Arrow with enhanced animation */}
                <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 transition-transform duration-300 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Additional subtle elements - decorative geometric shapes */}
        <div className="absolute -bottom-10 left-1/4 w-20 h-20 border-2 border-primary/30 rounded-lg opacity-30 animate-spin-slow"></div>
        <div className="absolute -top-10 right-1/4 w-20 h-20 border-2 border-accent/30 rounded-lg opacity-30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
      </div>
    </section>
  );
};

export default CTASection;