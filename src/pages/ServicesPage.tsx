import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CircuitLines,
  NeuralNetwork,
  SimpleMetrics,
  AnalyticsDashboard,
} from '../components/graphics';
import FeatureIcon from '../components/ui/FeatureIcon';
import { ServicesData } from '../data/services';
import { MobileApp } from '../components/graphics/mobileapp';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  // Refs for intersection observers
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Set page title effect
  useEffect(() => {
    document.title = 'Our Services - Sonder AI Solutions';
    
    // Set up intersection observers for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const heroObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsHeroVisible(true);
        heroObserver.disconnect();
      }
    }, observerOptions);
    
    const contentObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsContentVisible(true);
        contentObserver.disconnect();
      }
    }, observerOptions);
    
    const processObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsProcessVisible(true);
        processObserver.disconnect();
      }
    }, observerOptions);
    
    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCtaVisible(true);
        ctaObserver.disconnect();
      }
    }, observerOptions);
    
    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);
    if (processRef.current) processObserver.observe(processRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    
    return () => {
      heroObserver.disconnect();
      contentObserver.disconnect();
      processObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  // Handle service selection
  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
    
    // Scroll to the service section if it's being expanded
    if (activeService !== serviceId && serviceRefs.current[serviceId]) {
      setTimeout(() => {
        serviceRefs.current[serviceId]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };
  
  // Get decorative background element
  const getBackgroundElement = (illustrationType: string, color: string) => {
    switch (illustrationType) {
      case 'ai':
        return <NeuralNetwork className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
      case 'web':
        return <CircuitLines className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
      case 'mobile':
        return <CircuitLines className="absolute inset-0 opacity-20" />;
      default:
        return <CircuitLines className="absolute inset-0 opacity-20" color={`var(--${color})`} />;
    }
  };

  // Get dashboard component based on service ID
  const getDashboardComponent = (serviceId: string) => {
    switch (serviceId) {
      case 'web-apps':
        return <AnalyticsDashboard className="w-full shadow-lg transform hover:-translate-y-2 transition-all duration-300" />;
      case 'ai-solutions':
        return <SimpleMetrics 
          primaryMetric={{ label: 'AI Accuracy', value: '96%', color: 'var(--accent)' }}
          secondaryMetric={{ label: 'Processing', value: '2.4ms', color: 'var(--accent)' }}
          progressMetric={{ label: 'Training', value: 78, color: 'var(--accent)' }}
          className="transform hover:-translate-y-2 transition-all duration-300"
        />;
      case 'mobile':
        return <MobileApp className="w-full shadow-lg transform hover:-translate-y-2 transition-all duration-300" />;
      default:
        return <AnalyticsDashboard className="w-full shadow-lg transform hover:-translate-y-2 transition-all duration-300" />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-dark">
      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-16">
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-3xl"></div>
            <div className="absolute top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-secondary/10 blur-3xl"></div>
          </div>
          
          <div className="absolute inset-0 opacity-20">
            <CircuitLines color="var(--primary)" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span 
                className={`inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3 ${isHeroVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.1s' }}
              >
                Expert Solutions for Modern Businesses
              </span>
              <h1 
                className={`text-4xl md:text-6xl font-bold mb-6 text-white ${isHeroVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
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
                >Our Services</span>
                  <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary ${isHeroVisible ? 'animate-grow-width w-full' : 'w-0'}`} style={{ transitionDelay: '0.6s' }}></span>
                </span>
              </h1>
              <p 
                className={`text-xl text-text-secondary mb-12 ${isHeroVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.3s' }}
              >
                Transformative solutions tailored to your unique business needs, leveraging cutting-edge technology to drive innovation and efficiency.
              </p>
              
              <div 
                className={`flex flex-wrap justify-center gap-4 ${isHeroVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '0.4s' }}
              >
                <a 
                  href="#services-cards" 
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <span>Explore Services</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
                <Link 
                  to="/contact" 
                  className="btn btn-outline inline-flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Service Cards Section */}
      <div id="services-cards" ref={contentRef} className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isContentVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Service Offerings</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We provide a range of specialized services designed to help your business thrive in the digital landscape
            </p>
          </div>
          
          {/* Service cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isContentVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            {ServicesData.map((service, index) => (
              <div 
                key={service.id}
                ref={(el) => { serviceRefs.current[service.id] = el; }}
                className={`relative bg-dark-surface/70 backdrop-blur-lg rounded-xl border shadow-lg overflow-hidden
                  transition-all duration-500 ease-in-out cursor-pointer group
                  ${hoveredService === service.id 
                    ? 'border-2 transform -translate-y-2 shadow-xl' 
                    : 'border-dark-border'}
                  ${hoveredService === service.id 
                    ? `border-${service.color}` 
                    : 'border-dark-border'}`}
                style={{ 
                  borderColor: hoveredService === service.id ? `var(--${service.color})` : undefined,
                  transitionDelay: `${0.3 + index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service.id)}
              >
                {/* Background glow and pattern */}
                <div className="absolute inset-0 opacity-50">
                  {getBackgroundElement(service.illustration, service.color)}
                </div>
                
                {/* Service content */}
                <div className="relative z-10 p-6">
                  {/* Service icon */}
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4
                      transition-all duration-300 ease-in-out
                      ${hoveredService === service.id 
                        ? 'bg-gradient-to-br' 
                        : `bg-${service.color}/10`}`}
                    style={{ 
                      background: hoveredService === service.id
                        ? `linear-gradient(135deg, var(--${service.color}) 0%, var(--secondary) 100%)` 
                        : `var(--${service.color})10`
                    }}
                  >
                    <FeatureIcon 
                      iconName={service.icon} 
                      color={hoveredService === service.id ? "white" : service.color} 
                      className="w-7 h-7" 
                    />
                  </div>
                  
                  {/* Service title */}
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  
                  {/* Service short description */}
                  <p className="text-text-secondary mb-6">{service.description}</p>
                  
                  {/* Service features list */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2" style={{ color: `var(--${service.color})` }}>
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Key Features
                    </h4>
                    
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start rounded-lg transition-all duration-300 hover:bg-dark/30 p-2 group/item"
                        >
                          <div 
                            className="flex-shrink-0 p-1 mr-2 rounded-full"
                            style={{ backgroundColor: `var(--${service.color})20` }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" style={{ color: `var(--${service.color})` }}>
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-text-secondary group-hover/item:text-text-primary transition-colors duration-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Service CTA */}
                  <button 
                    className="inline-flex items-center group text-sm font-medium transition-colors duration-300"
                    style={{ color: `var(--${service.color})` }}
                  >
                    <span>Learn more about {service.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Service Detail Sections */}
      {ServicesData.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-dark' : 'bg-dark-surface/30'} relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-20">
            {getBackgroundElement(service.illustration, service.color)}
          </div>
          
          <div 
            className={`absolute inset-0 opacity-30`}
            style={{
              background: `radial-gradient(circle at 30% 30%, var(--${service.color}) 0%, transparent 40%)`
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isContentVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${0.4 + index * 0.1}s` }}>
              {/* Content First on Even Indexes, Second on Odd */}
              {index % 2 === 0 ? (
                <>
                  {/* Content Side */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div 
                          className="h-1 w-10 mr-3 rounded-full"
                          style={{ background: `var(--${service.color})` }}
                        ></div>
                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-lg text-text-secondary mb-6">{service.description}</p>
                      
                      <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-dark-border/50 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <FeatureIcon iconName="ChartPieIcon" color={service.color} className="w-5 h-5 mr-2" />
                          Why Choose Our {service.title}
                        </h3>
                        <p className="text-text-secondary">
                          {service.expandedDescription}
                        </p>
                      </div>
                    </div>
                    
                    {/* Process/Approach */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FeatureIcon iconName="ArrowPathIcon" color={service.color} className="w-5 h-5 mr-2" />
                        Our Approach
                      </h3>
                      
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start bg-dark/30 rounded-lg p-4 border border-dark-border/50 transition-all duration-300 hover:border-opacity-100 hover:shadow-lg hover:shadow-[var(--${service.color})/5]"
                            style={{ borderColor: `var(--${service.color})30` }}
                          >
                            <div 
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4"
                              style={{ background: `var(--${service.color})` }}
                            >
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-white mb-1">{step.title}</h4>
                              <p className="text-text-secondary text-sm">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual/Illustration Side */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-lg aspect-square transition-all duration-500 transform">
                      {/* Backdrop glow */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-${service.color}/30 via-${service.color}/10 to-secondary/5 blur-2xl opacity-70`}></div>
                      
                      {/* Rotating ring */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-full h-full border-4 border-dashed rounded-full animate-spin-slow"
                          style={{ 
                            borderColor: `var(--${service.color})`,
                            opacity: 0.2
                          }}
                        ></div>
                      </div>
                      
                      {/* Dashboard Preview */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {getDashboardComponent(service.id)}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Visual/Illustration Side */}
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-lg aspect-square transition-all duration-500 transform">
                      {/* Backdrop glow */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-${service.color}/30 via-${service.color}/10 to-secondary/5 blur-2xl opacity-70`}></div>
                      
                      {/* Rotating ring */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-full h-full border-4 border-dashed rounded-full animate-spin-slow"
                          style={{ 
                            borderColor: `var(--${service.color})`,
                            opacity: 0.2
                          }}
                        ></div>
                      </div>
                      
                      {/* Dashboard Preview */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {getDashboardComponent(service.id)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div 
                          className="h-1 w-10 mr-3 rounded-full"
                          style={{ background: `var(--${service.color})` }}
                        ></div>
                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-lg text-text-secondary mb-6">{service.description}</p>
                      
                      <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-dark-border/50 mb-6">
                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                          <FeatureIcon iconName="ChartPieIcon" color={service.color} className="w-5 h-5 mr-2" />
                          Why Choose Our {service.title}
                        </h3>
                        <p className="text-text-secondary">
                          {service.expandedDescription}
                        </p>
                      </div>
                    </div>
                    
                    {/* Process/Approach */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <FeatureIcon iconName="ArrowPathIcon" color={service.color} className="w-5 h-5 mr-2" />
                        Our Approach
                      </h3>
                      
                      <div className="space-y-4">
                        {service.process.map((step, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start bg-dark/30 rounded-lg p-4 border border-dark-border/50 transition-all duration-300 hover:border-opacity-100 hover:shadow-lg hover:shadow-[var(--${service.color})/5]"
                            style={{ borderColor: `var(--${service.color})30` }}
                          >
                            <div 
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-4"
                              style={{ background: `var(--${service.color})` }}
                            >
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="font-medium text-white mb-1">{step.title}</h4>
                              <p className="text-text-secondary text-sm">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
      
      {/* Our Process Section */}
      <section ref={processRef} className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <CircuitLines color="var(--primary)" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 ${isProcessVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Service Delivery Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We follow a structured approach to ensure every project delivers maximum value
            </p>
          </div>
          
          <div className={`relative max-w-4xl mx-auto ${isProcessVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
            {/* Connecting line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
            
            {/* Process steps */}
            <div className="space-y-12">
              {[
                { 
                  icon: "UserGroupIcon", 
                  color: "primary",
                  title: "Discovery & Planning", 
                  description: "We begin by understanding your business goals, challenges, and requirements. Our team collaborates with you to define the scope, timeline, and success criteria for your project." 
                },
                { 
                  icon: "AdjustmentsHorizontalIcon", 
                  color: "accent",
                  title: "Solution Design", 
                  description: "Our experts design a tailored solution architecture that addresses your specific needs. We create detailed specifications, wireframes, and a development roadmap that aligns with your business objectives." 
                },
                { 
                  icon: "CpuChipIcon", 
                  color: "secondary",
                  title: "Development & Implementation", 
                  description: "We build your solution using agile methodologies, with regular check-ins and iterative development cycles. This ensures continuous alignment with your expectations and allows for flexibility as needs evolve." 
                },
                { 
                  icon: "ChartBarIcon", 
                  color: "info",
                  title: "Testing & Quality Assurance", 
                  description: "Rigorous testing is conducted throughout the development process to ensure your solution is robust, secure, and performs optimally under all conditions." 
                },
                { 
                  icon: "BoltIcon", 
                  color: "success",
                  title: "Deployment & Integration", 
                  description: "We carefully deploy your solution to production environments and integrate it with your existing systems, ensuring a smooth transition with minimal disruption." 
                },
                { 
                  icon: "ArrowPathIcon", 
                  color: "primary",
                  title: "Ongoing Support & Optimization", 
                  description: "Our relationship doesn't end at deployment. We provide continued support, maintenance, and optimization to ensure your solution evolves with your business needs." 
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start relative">
                  {/* Step indicator */}
                  <div className="flex-shrink-0 w-12 h-12 border-4 border-dark bg-dark-surface rounded-full flex items-center justify-center relative z-10 mr-4 shadow-lg" style={{ borderColor: `var(--${step.color})` }}>
                    <FeatureIcon iconName={step.icon} color={step.color} className="w-5 h-5" />
                  </div>
                  
                  {/* Step content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Technologies We Use Section */}
        <section className="py-16 bg-dark-surface/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <NeuralNetwork color="var(--accent)" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center mb-16 ${isProcessVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                We leverage the latest technologies to build robust, scalable, and future-proof solutions
              </p>
            </div>
            
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${isProcessVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              {[
                { name: "React", icon: "react.svg", color: "primary" },
                { name: "Node.js", icon: "node.svg", color: "success" },
                { name: "Python", icon: "python.svg", color: "info" },
                { name: "TensorFlow", icon: "tensorflow.svg", color: "accent" },
                { name: "AWS", icon: "aws.svg", color: "warning" },
                { name: "MongoDB", icon: "mongodb.svg", color: "success" },
                { name: "GraphQL", icon: "graphql.svg", color: "accent" },
                { name: "Docker", icon: "docker.svg", color: "info" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="bg-dark/40 backdrop-blur-sm border border-dark-border rounded-xl p-4 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `var(--${tech.color})20` }}
                  >
                    <FeatureIcon iconName="CpuChipIcon" color={tech.color} className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-medium text-white">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section ref={ctaRef} className="py-24 bg-dark relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/5 blur-3xl"></div>
            <div className="absolute top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-br from-accent/10 to-secondary/5 blur-3xl"></div>
          </div>
          
          <div className="absolute inset-0 opacity-20">
            <NeuralNetwork color="var(--primary)" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-3xl mx-auto ${isCtaVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="text-center space-y-8">
                <span className="inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
                  Ready to Get Started
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                  Transform Your Business with <br />
                  <span className="relative inline-block">
                    Custom Solutions
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary"></span>
                  </span>
                </h2>
                <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can address your specific business challenges and help you achieve your goals.
                </p>
                
                {/* Call to action buttons with animated glow effect */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <div className="relative group">
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl opacity-70 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse-slow" style={{ transform: 'translateY(4px)' }}></div>
                    
                    <Link 
                      to="/contact" 
                      className="relative btn btn-primary px-8 py-3 rounded-xl inline-flex items-center group-hover:translate-y-1 transition-transform duration-300"
                    >
                      <span className="mr-2">Start Your Project</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                  
                  <Link 
                    to="/projects" 
                    className="btn btn-outline inline-flex items-center"
                  >
                    <span className="mr-2">View Our Work</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                      <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                
                {/* Testimonial Float-in */}
                <div className="mt-16">
                  <div className="bg-dark-surface border border-dark-border rounded-lg p-6 max-w-2xl mx-auto relative">
                    {/* Quote mark */}
                    <div className="absolute -top-5 -left-5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M10 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-8 8a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75z" />
                      </svg>
                    </div>
                    
                    <p className="text-text-primary italic mb-4">
                      The team at Sonder AI transformed our business with their incredible technical solutions. Their approach to understanding our needs and delivering customized services was unmatched. The results speak for themselves.
                    </p>
                    
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div className="ml-3">
                        <p className="text-white font-medium">John Doe</p>
                        <p className="text-primary text-sm">CTO, TechVision Inc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ServicesPage