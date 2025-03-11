import { useEffect } from 'react'
import { FeaturedProjects, FeaturesOverview, ServicesOverview, HeroSection } from '../components/sections'

const HomePage = () => {
  // Add page title and description
  useEffect(() => {
    document.title = 'Sonder AI - Modern Web Applications & AI Solutions'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview Section */}
      <ServicesOverview />
      
      {/* Featured Projects Section */}
      <FeaturedProjects className="bg-dark" />

      {/* Features Overview Section */}
      <FeaturesOverview />
      
      {/* CTA Section */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-1/4 w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-secondary/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
              Ready to Innovate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transform your business with custom solutions designed for your specific needs. 
              Let's build something great together.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg opacity-70 group-hover:opacity-100 blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse-slow" style={{ transform: 'translateY(4px)' }}></div>
              
              <a 
                href="#contact" 
                className="relative btn btn-primary px-8 py-3 inline-flex items-center z-10 group-hover:translate-y-1 transition-transform duration-300"
              >
                <span className="mr-2">Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage