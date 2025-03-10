import { useEffect } from 'react'
import { SimpleMetrics } from '../components/graphics'
import { FeaturedProjects, FeaturesOverview } from '../components/sections'

const HomePage = () => {
  // Add page title and description
  useEffect(() => {
    document.title = 'Sonder AI - Modern Web Applications & AI Solutions'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 -z-10" 
          style={{ 
            background: 'var(--gradient-dark)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Accent Circle */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full -z-5 opacity-20" 
          style={{ 
            backgroundColor: 'var(--accent)',
            filter: 'blur(80px)'
          }}
        ></div>
        
        {/* Primary Circle */}
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full -z-5 opacity-20" 
          style={{ 
            backgroundColor: 'var(--primary)',
            filter: 'blur(80px)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="block">Custom Web Apps</span>
                <span className="block" style={{ color: 'var(--accent)' }}>& AI Solutions</span>
              </h1>
              
              <p 
                className="text-lg sm:text-xl mb-8 max-w-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                We build high-performance technologies that help businesses streamline operations and drive efficiency in the digital age.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="btn btn-primary"
                >
                  Get Started
                </a>
                
                <a 
                  href="#projects" 
                  className="btn btn-outline"
                >
                  Our Projects
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              {/* Use the SimpleMetrics component */}
              <SimpleMetrics 
                primaryMetric={{ label: 'Analytics', value: '78%' }}
                secondaryMetric={{ label: 'Tasks', value: '12' }}
                progressMetric={{ label: 'Progress', value: 65 }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <FeaturedProjects className="bg-dark" />

      {/* Features Overview Section */}
      <FeaturesOverview />
      
      {/* CTA Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transform your business with custom solutions designed for your specific needs. 
              Let's build something great together.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage