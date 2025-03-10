import { useEffect } from 'react'

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
              <div className="relative w-full max-w-md">
                {/* Placeholder for dashboard graphic or illustration */}
                <div 
                  className="rounded-2xl shadow-xl p-6 border backdrop-blur-md"
                  style={{ 
                    backgroundColor: 'var(--dark-surface)',
                    borderColor: 'var(--dark-border)'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-error"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                    <div className="text-text-secondary text-sm">Dashboard Preview</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      className="rounded-lg p-4 text-center"
                      style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
                    >
                      <div className="text-text-secondary">Analytics</div>
                      <div className="text-3xl font-bold text-primary mt-2">78%</div>
                    </div>
                    
                    <div 
                      className="rounded-lg p-4 text-center"
                      style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
                    >
                      <div className="text-text-secondary">Tasks</div>
                      <div className="text-3xl font-bold text-accent mt-2">12</div>
                    </div>
                    
                    <div 
                      className="col-span-2 rounded-lg p-4"
                      style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
                    >
                      <div className="text-text-secondary mb-2">Progress</div>
                      <div className="h-2 bg-dark-border rounded-full">
                        <div className="h-2 bg-secondary rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl" 
                  style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
                ></div>
                <div 
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-full" 
                  style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More sections will be added here */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              This is a placeholder section. Additional content will be added as we build out the site.
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