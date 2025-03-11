import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  WebAppIllustration, 
  AILightIllustration, 
  AutomationIllustration,
  CircuitLines,
  DataFlow,
  NeuralNetwork
} from '../graphics';
import FeatureIcon from '../ui/FeatureIcon';
import { ServicesData, ServiceData } from '../../data/services';

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ className = '' }) => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
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

  // Get illustration based on service type
  const getIllustration = (illustrationType: string) => {
    switch (illustrationType) {
      case 'ai':
        return <AILightIllustration className="w-full h-full" />;
      case 'web':
        return <WebAppIllustration className="w-full h-full" />;
      case 'automation':
        return <AutomationIllustration className="w-full h-full" />;
      case 'mobile':
        return <WebAppIllustration className="w-full h-full" />; // Add appropriate mobile illustration
      default:
        return <WebAppIllustration className="w-full h-full" />;
    }
  };
  
  // Get decorative background element
  const getBackgroundElement = (illustrationType: string, color: string) => {
    switch (illustrationType) {
      case 'ai':
        return <NeuralNetwork className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
      case 'web':
        return <CircuitLines className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
      case 'automation':
      case 'mobile':
        return <DataFlow className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
      default:
        return <CircuitLines className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
    }
  };

  // Handle service selection
  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
    
    // Scroll to the service if it's being expanded
    if (activeService !== serviceId && serviceRefs.current[serviceId]) {
      setTimeout(() => {
        serviceRefs.current[serviceId]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };

  // Get current service
  const getCurrentService = (serviceId: string) => {
    return ServicesData.find(service => service.id === serviceId) || ServicesData[0];
  };

  // For the visual display, only show the first 3 services
  const displayedServices = ServicesData.slice(0, 3);

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className={`py-24 relative overflow-hidden bg-dark ${className}`}
    >
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 20% 20%, var(--primary) 0%, transparent 30%),
                      radial-gradient(circle at 80% 80%, var(--accent) 0%, transparent 30%),
                      radial-gradient(circle at 50% 50%, var(--secondary) 0%, transparent 40%)`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            What We Offer
          </span>
          <h2 
            className={`text-3xl md:text-5xl font-bold mb-4 text-white ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <span className="inline-block relative">
              Our <span className="text-white">Services</span>
              <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary ${isVisible ? 'animate-grow-width w-full' : 'w-0'}`} style={{ transitionDelay: '0.6s' }}></span>
            </span>
          </h2>
          <p 
            className={`text-lg text-text-secondary max-w-2xl mx-auto mt-6 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            Leveraging cutting-edge technology to deliver solutions that drive business growth and efficiency
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="relative z-10 mb-12">
          {/* Services container */}
          <div className={`flex flex-col md:flex-row items-stretch justify-center gap-6 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            {displayedServices.map((service, index) => (
              <div 
                ref={(el) => { serviceRefs.current[service.id] = el; }}
                key={service.id}
                className={`flex-1 min-w-0 transition-all duration-500 ease-in-out
                  ${activeService === service.id ? 'md:flex-[2]' : 'md:flex-1'}`}
              >
                <div 
                  className={`relative bg-dark-surface/50 backdrop-blur-lg rounded-2xl border shadow-lg overflow-hidden
                    transition-all duration-500 ease-in-out cursor-pointer group
                    ${activeService === service.id 
                      ? 'border-2 h-auto' 
                      : hoveredService === service.id 
                        ? 'border-2 transform -translate-y-2 shadow-xl' 
                        : 'border-dark-border'}
                    ${hoveredService === service.id || activeService === service.id 
                      ? `border-${service.color}` 
                      : 'border-dark-border'}`}
                  style={{ 
                    minHeight: '280px',
                    borderColor: (hoveredService === service.id || activeService === service.id) 
                      ? `var(--${service.color})` 
                      : undefined
                  }}
                  onClick={() => handleServiceClick(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Background glow and pattern */}
                  <div className="absolute inset-0 opacity-50">
                    {getBackgroundElement(service.illustration, service.color)}
                  </div>
                  
                  {/* Circular glow behind icon */}
                  <div 
                    className="absolute top-6 left-6 w-16 h-16 rounded-full blur-xl transition-opacity duration-300"
                    style={{ 
                      backgroundColor: `var(--${service.color})`,
                      opacity: hoveredService === service.id || activeService === service.id ? 0.4 : 0.1
                    }}
                  ></div>
                  
                  <div className="relative z-10 p-6">
                    {/* Service icon */}
                    <div 
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4
                        transition-all duration-300 ease-in-out
                        ${hoveredService === service.id || activeService === service.id 
                          ? 'bg-gradient-to-br' 
                          : `bg-${service.color}/10`}`}
                      style={{ 
                        background: (hoveredService === service.id || activeService === service.id) 
                          ? `linear-gradient(135deg, var(--${service.color}) 0%, var(--secondary) 100%)` 
                          : `var(--${service.color})10`
                      }}
                    >
                      <FeatureIcon 
                        iconName={service.icon} 
                        color="white" 
                        className="w-7 h-7" 
                      />
                    </div>
                    
                    {/* Service title */}
                    <h3 className={`text-2xl font-bold mb-2
                      transition-all duration-300 ease-in-out
                      ${hoveredService === service.id || activeService === service.id 
                        ? 'text-white' 
                        : 'text-text-primary'}`}>
                      {service.title}
                    </h3>
                    
                    {/* Service short description */}
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Expandable content area */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out
                        ${activeService === service.id 
                          ? 'max-h-[500px] opacity-100' 
                          : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pt-4 mt-4 border-t border-dark-border">
                        {/* Benefits section */}
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2" style={{ color: `var(--${service.color})` }}>
                            <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          Key Benefits
                        </h4>
                        
                        <ul className="space-y-2 mb-4">
                          {service.benefits.slice(0, 4).map((benefit, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start p-2 rounded-lg transition-all duration-300 hover:bg-dark/30"
                            >
                              <div 
                                className="flex-shrink-0 p-1 mr-2 rounded-full"
                                style={{ backgroundColor: `var(--${service.color})20` }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: `var(--${service.color})` }}>
                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-text-secondary">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Read more link */}
                        <Link 
                          to="/services" 
                          className="inline-flex items-center group text-text-primary hover:text-white transition-colors duration-300"
                        >
                          <span style={{ color: `var(--${service.color})` }}>Learn more</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" style={{ color: `var(--${service.color})` }}>
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Animated indicators for expanded/collapsed state */}
                    <div 
                      className={`transition-all duration-300 ease-in-out absolute bottom-6 right-6
                        ${activeService === service.id ? 'opacity-0' : hoveredService === service.id 
                          ? 'opacity-100 transform translate-x-1' : 'opacity-60'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6" style={{ color: `var(--${service.color})` }}>
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out absolute bottom-6 right-6
                        ${activeService === service.id ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6" style={{ color: `var(--${service.color})` }}>
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Rest of the component remains the same... */}
        {/* Bottom showcase with large illustration */}
        <div 
          className={`mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.6s' }}
        >
          {/* Content side */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="h-1 w-10 mr-3 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Turn Challenges into Solutions
                </h3>
              </div>
              <p className="text-lg text-text-secondary mb-4">
                Our integrated approach combines cutting-edge technologies with deep industry expertise to deliver transformative results.
              </p>
              <p className="text-text-secondary">
                Whether you need a custom web application, an AI-powered solution, or streamlined business processes, our team designs and implements solutions that perfectly align with your business goals.
              </p>
            </div>
            
            {/* Highlighted features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-dark/30 rounded-xl p-4 border border-dark-border/50 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg mr-3 bg-primary/10 text-primary">
                    <FeatureIcon iconName="EyeIcon" color="primary" />
                  </div>
                  <h4 className="font-semibold text-white">Holistic Approach</h4>
                </div>
                <p className="text-text-secondary text-sm">End-to-end solutions that address both immediate needs and long-term goals</p>
              </div>
              
              <div className="bg-dark/30 rounded-xl p-4 border border-dark-border/50 group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg mr-3 bg-accent/10 text-accent">
                    <FeatureIcon iconName="AdjustmentsHorizontalIcon" color="accent" />
                  </div>
                  <h4 className="font-semibold text-white">Customization</h4>
                </div>
                <p className="text-text-secondary text-sm">Solutions tailored specifically to your unique business requirements</p>
              </div>
              
              <div className="bg-dark/30 rounded-xl p-4 border border-dark-border/50 group hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg mr-3 bg-secondary/10 text-secondary">
                    <FeatureIcon iconName="ChartPieIcon" color="secondary" />
                  </div>
                  <h4 className="font-semibold text-white">Data-Driven</h4>
                </div>
                <p className="text-text-secondary text-sm">Insights and analytics that help you make informed business decisions</p>
              </div>
              
              <div className="bg-dark/30 rounded-xl p-4 border border-dark-border/50 group hover:border-info/30 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg mr-3 bg-info/10 text-info">
                    <FeatureIcon iconName="ShieldCheckIcon" color="info" />
                  </div>
                  <h4 className="font-semibold text-white">Security Focus</h4>
                </div>
                <p className="text-text-secondary text-sm">Enterprise-grade security built into every solution we deliver</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <Link 
                to="/services" 
                className="relative inline-flex items-center gap-2 py-3 px-6 rounded-lg text-white overflow-hidden group"
              >
                {/* Button background with gradient */}
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                >
                </span>
                
                {/* Moving shine effect */}
                <span 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                >
                </span>
                
                {/* Button content */}
                <span className="relative z-10">View All Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Illustration goes here */}
          
          {/* Illustration side */}
          <div className="relative">
            {/* Main illustration with rotating elements */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/10 rounded-full blur-3xl opacity-70"></div>
              
              {/* Rotating outer ring */}
              <div className="absolute inset-0 border-[2px] border-dashed border-dark-border rounded-full animate-spin-slow opacity-40"></div>
              
              {/* Inner rotating hexagon */}
              <div className="absolute inset-[15%] flex items-center justify-center animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
                <div className="w-1/2 h-1/2 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="absolute top-[25%] right-0 translate-x-1/2 w-4 h-4 rounded-full bg-accent"></div>
                  <div className="absolute bottom-[25%] right-0 translate-x-1/2 w-4 h-4 rounded-full bg-secondary"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-info"></div>
                  <div className="absolute bottom-[25%] left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-success"></div>
                  <div className="absolute top-[25%] left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-warning"></div>
                </div>
              </div>
              
              {/* Central rotating icon */}
              <div className="absolute inset-[30%] bg-dark-surface rounded-2xl shadow-lg border border-dark-border p-4 flex items-center justify-center animate-float-medium overflow-hidden group">
                {/* Background pattern */}
                <NeuralNetwork className="absolute inset-0 opacity-10" color="var(--accent)" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent"></div>
                
                {/* Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                  <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Service mini-icons in orbit */}
              {ServicesData.map((service, index) => {
                // Calculate position along circle
                const angle = (2 * Math.PI / ServicesData.length) * index - Math.PI / 2;
                const radius = 40; // % of container
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <div 
                    key={service.id}
                    className={`absolute w-12 h-12 -mt-6 -ml-6 rounded-lg shadow-lg flex items-center justify-center
                      transition-all duration-500 ease-in-out
                      ${hoveredService === service.id || activeService === service.id 
                        ? 'scale-125 z-10' 
                        : 'scale-100 z-0'}`}
                    style={{ 
                      top: `${y}%`, 
                      left: `${x}%`,
                      background: `linear-gradient(135deg, var(--${service.color}) 0%, var(--secondary) 100%)`,
                      boxShadow: hoveredService === service.id || activeService === service.id 
                        ? `0 0 20px var(--${service.color})` 
                        : undefined
                    }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <FeatureIcon iconName={service.icon} color="white" className="w-6 h-6" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default ServicesOverview;