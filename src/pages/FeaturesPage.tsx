import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FeaturesHero } from '../components/features';
import { featureData } from '../data/features';
import { 
  AILightIllustration, 
  WebAppIllustration, 
  AutomationIllustration,
  CircuitLines,
  DataFlow,
  NeuralNetwork
} from '../components/graphics';
import FeatureIcon from '../components/ui/FeatureIcon';

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>(featureData[0].id);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  
  // Refs for intersection observers
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Page title effect
  useEffect(() => {
    document.title = 'Our Features - Sonder AI Solutions';
    
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
    
    const categoriesObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCategoriesVisible(true);
        categoriesObserver.disconnect();
      }
    }, observerOptions);
    
    const ctaObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsCtaVisible(true);
        ctaObserver.disconnect();
      }
    }, observerOptions);
    
    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (categoriesRef.current) categoriesObserver.observe(categoriesRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
    
    return () => {
      heroObserver.disconnect();
      categoriesObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  // Get current category details
  // const currentCategory = featureData.find(cat => cat.id === activeCategory) || featureData[0];
  
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
  
  // Get background element based on category ID
  const getBackgroundElement = (categoryId: string) => {
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
  
  // Get color theme based on category ID
  const getCategoryTheme = (categoryId: string) => {
    switch (categoryId) {
      case 'ai-innovation':
        return { 
          main: 'accent',
          secondary: 'primary',
          gradient: 'from-accent/30 via-accent/10 to-primary/5'
        };
      case 'technical':
        return { 
          main: 'secondary',
          secondary: 'info',
          gradient: 'from-secondary/30 via-secondary/10 to-info/5'
        };
      case 'process':
        return { 
          main: 'primary',
          secondary: 'accent',
          gradient: 'from-primary/30 via-primary/10 to-accent/5'
        };
      default:
        return { 
          main: 'primary',
          secondary: 'accent',
          gradient: 'from-primary/30 via-primary/10 to-accent/5'
        };
    }
  };

  const handleExpandFeature = (featureId: string) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef}>
        <FeaturesHero />
      </div>
      
      {/* Feature Categories Navigation */}
      <div className="bg-dark-surface py-6 sticky top-16 z-20 border-y border-dark-border shadow-md">
        <div className="container mx-auto px-4">
          <div className={`flex justify-center overflow-x-auto pb-2 ${isHeroVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="inline-flex p-1.5 rounded-xl shadow-xl bg-dark/60 backdrop-blur-md border border-dark-border">
              {featureData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center gap-2 py-2 px-4 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'text-text-secondary hover:text-white'
                  } overflow-hidden`}
                >
                  {/* Animated background for active tab */}
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeCategory === category.id ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, 
                        var(--${getCategoryTheme(category.id).main}) 0%, 
                        var(--${getCategoryTheme(category.id).secondary}) 100%)`
                    }}
                  ></span>
                  
                  {/* Glimmer effect on active */}
                  {activeCategory === category.id && (
                    <span className="absolute inset-0 bg-white/20 animate-pulse-subtle mix-blend-overlay"></span>
                  )}
                  
                  {/* Icon */}
                  <span className="relative z-10">
                    <FeatureIcon 
                      iconName={category.features[0].icon} 
                      color={getCategoryTheme(category.id).main} 
                      className="w-4 h-4 md:w-5 md:h-5" 
                    />
                  </span>
                  
                  <span className="relative z-10">{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Categories Content */}
      <div id="features" ref={categoriesRef} className="py-16">
        {featureData.map((category) => (
          <div 
            key={category.id}
            className={`transition-all duration-500 overflow-hidden ${
              activeCategory === category.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 hidden'
            }`}
          >
            <section className={`py-12 relative overflow-hidden`}>
              {/* Animated background gradients */}
              <div 
                className="absolute inset-0 transition-all duration-700 ease-in-out opacity-40"
                style={{
                  background: `radial-gradient(circle at 30% 30%, var(--${getCategoryTheme(category.id).main}) 0%, transparent 30%),
                              radial-gradient(circle at 70% 70%, var(--${getCategoryTheme(category.id).secondary}) 0%, transparent 30%)`,
                }}
              ></div>
              
              <div className="container mx-auto px-4 relative z-10">
                {/* Category Header with Illustration */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12">
                  {/* Alternate layout based on category ID */}
                  {category.id === 'technical' ? (
                    <>
                      {/* Content (Left) */}
                      <div className="col-span-1 lg:col-span-2">
                        <div className={`${isCategoriesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-10 mr-3 rounded-full" style={{ background: `var(--${getCategoryTheme(category.id).main})` }}></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                          </div>
                          <p className="text-xl text-text-secondary max-w-2xl">{category.description}</p>
                        </div>
                      </div>
                      
                      {/* Illustration (Right) */}
                      <div className={`col-span-1 ${isCategoriesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="relative w-full aspect-square transition-all duration-500 transform">
                          {/* Backdrop glow */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getCategoryTheme(category.id).gradient} blur-2xl opacity-70`}></div>
                          
                          {/* Decorative background */}
                          {getBackgroundElement(category.id)}
                          
                          {/* Main illustration */}
                          <div className="absolute inset-0 flex items-center justify-center animate-float-medium">
                            {getIllustration(category.id)}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Illustration (Left) */}
                      <div className={`col-span-1 ${isCategoriesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
                        <div className="relative w-full aspect-square transition-all duration-500 transform">
                          {/* Backdrop glow */}
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getCategoryTheme(category.id).gradient} blur-2xl opacity-70`}></div>
                          
                          {/* Decorative background */}
                          {getBackgroundElement(category.id)}
                          
                          {/* Main illustration */}
                          <div className="absolute inset-0 flex items-center justify-center animate-float-medium">
                            {getIllustration(category.id)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content (Right) */}
                      <div className="col-span-1 lg:col-span-2">
                        <div className={`${isCategoriesVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-10 mr-3 rounded-full" style={{ background: `var(--${getCategoryTheme(category.id).main})` }}></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                          </div>
                          <p className="text-xl text-text-secondary max-w-2xl">{category.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Features List */}
                <div className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.features.map((feature, idx) => (
                      <div 
                        key={feature.id}
                        className={`group rounded-xl transition-all duration-500 ${
                          expandedFeature === feature.id ? 'md:col-span-2 bg-dark-surface/70' : 'bg-dark/40'
                        } backdrop-blur-md border border-dark-border hover:border-opacity-50 shadow-lg overflow-hidden cursor-pointer ${
                          isCategoriesVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: `${0.3 + (idx * 0.1)}s` }}
                        onClick={() => handleExpandFeature(feature.id)}
                      >
                        <div className="p-6">
                          {/* Feature Header */}
                          <div className="flex items-start mb-4">
                            {/* Icon with glow effect */}
                            <div className="relative mr-4 mt-1">
                              <div 
                                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 blur-md"
                                style={{ background: `var(--${feature.color || getCategoryTheme(category.id).main})` }}
                              ></div>
                              <div 
                                className="relative rounded-full w-12 h-12 flex items-center justify-center z-10 group-hover:scale-110 transition-all duration-300"
                                style={{ background: `var(--${feature.color || getCategoryTheme(category.id).main})20` }}
                              >
                                <FeatureIcon iconName={feature.icon} color={feature.color || getCategoryTheme(category.id).main} />
                              </div>
                            </div>
                            
                            {/* Title and expand/collapse indicator */}
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                                <button className="text-text-secondary group-hover:text-white transition-colors duration-300">
                                  <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor" 
                                    className={`w-5 h-5 transition-transform duration-300 ${expandedFeature === feature.id ? 'rotate-180' : ''}`}
                                  >
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                  </svg>
                                </button>
                              </div>
                              
                              {/* Feature description */}
                              <p className={`text-text-secondary mt-1 ${
                                expandedFeature === feature.id ? '' : 'line-clamp-2'
                              } group-hover:text-text-primary transition-colors duration-300`}>
                                {feature.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Expanded content */}
                          {expandedFeature === feature.id && (
                            <div className="mt-6 pt-6 border-t border-dark-border/30 animate-fade-in">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Additional details - Example content */}
                                <div className="bg-dark/30 rounded-lg p-5 border border-dark-border/20">
                                  <h4 className="text-white font-semibold mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                    </svg>
                                    Key Benefits
                                  </h4>
                                  <ul className="space-y-2 text-text-secondary">
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                      </svg>
                                      Improved efficiency and productivity
                                    </li>
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                      </svg>
                                      Reduced operational costs and overhead
                                    </li>
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                      </svg>
                                      Enhanced decision-making capabilities
                                    </li>
                                  </ul>
                                </div>
                                
                                <div className="bg-dark/30 rounded-lg p-5 border border-dark-border/20">
                                  <h4 className="text-white font-semibold mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                                    </svg>
                                    Real-World Applications
                                  </h4>
                                  <ul className="space-y-2 text-text-secondary">
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                                      </svg>
                                      Finance & Banking
                                    </li>
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                                      </svg>
                                      Healthcare & Medical Research
                                    </li>
                                    <li className="flex items-start">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: `var(--${feature.color || getCategoryTheme(category.id).main})` }}>
                                        <path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
                                      </svg>
                                      E-commerce & Retail Optimization
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              
                              <div className="mt-6 flex justify-center">
                                <Link 
                                  to="/contact" 
                                  className="btn px-6 py-2 text-white transition-all duration-300 rounded-full"
                                  style={{ background: `var(--${feature.color || getCategoryTheme(category.id).main})` }}
                                >
                                  <span className="mr-2">Learn More</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      
      {/* Enhanced CTA Section */}
      <section 
        ref={ctaRef}
        className="py-24 relative overflow-hidden" 
        style={{ 
          background: 'linear-gradient(to bottom, var(--dark-surface), var(--dark))' 
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Neural network background */}
        <div className="absolute inset-0 opacity-20">
          <NeuralNetwork color="var(--primary)" className="w-full h-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Animated content */}
            <div className={`text-center space-y-8 ${isCtaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <span className="inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
                Ready to Elevate Your Business
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Transform Your Business with <br />
                <span className="relative inline-block">
                  Custom Solutions
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary"></span>
                </span>
              </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how our features and capabilities can address your specific business challenges and help you achieve your goals.
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
              <div className={`mt-16 ${isCtaVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
                <div className="bg-dark-surface border border-dark-border rounded-lg p-6 max-w-2xl mx-auto relative">
                  {/* Quote mark */}
                  <div className="absolute -top-5 -left-5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path d="M10 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-8 8a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-2.69l-3.97 3.97a.75.75 0 01-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75z" />
                    </svg>
                  </div>
                  
                  <p className="text-text-primary italic mb-4">
                    The team at Sonder AI transformed our business with their incredible technical solutions. Their approach to understanding our needs and delivering customized features was unmatched. The results speak for themselves.
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

export default FeaturesPage;