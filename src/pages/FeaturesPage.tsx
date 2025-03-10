import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FeaturesHero, FeatureSection } from '../components/features';
import { featureData } from '../data/features';

const FeaturesPage = () => {
  // Add page title and description
  useEffect(() => {
    document.title = 'Our Features - Sonder AI Solutions';
  }, []);

  return (
    <div id="features-page" className="min-h-screen">
      {/* Hero Section */}
      <FeaturesHero />
      
      {/* Feature Categories */}
      <div id="features">
        {featureData.map((category, index) => (
          <FeatureSection
            key={category.id}
            category={category}
            darkBg={index % 2 === 0}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
      
      {/* CTA Section */}
      <section className="py-24 bg-dark-surface relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-text-secondary mb-10">
              Let's discuss how our features and capabilities can address your specific business challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;