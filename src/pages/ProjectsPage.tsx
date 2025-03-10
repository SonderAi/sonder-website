// src/pages/ProjectsPage.tsx
import { useState, useEffect } from 'react';
import { projectManager } from '../utils/projectManager';
import { ProjectDetails, projectCategories } from '../types/types';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  useEffect(() => {
    // Set page title
    document.title = 'Projects - Sonder AI';
    
    // Load projects
    const loadedProjects = projectManager.getAll();
    setProjects(loadedProjects);
  }, []);

  // Get filtered projects based on the active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Helper function to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Artificial Intelligence":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M16.5 7.5h-9v9h9v-9Z" />
            <path
              fillRule="evenodd"
              d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "Business Automation":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
          </svg>
        );
      case "Mobile Development":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
          </svg>
        );
      case "IoT & Cloud":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section id="projects" className="py-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Our Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-text-secondary">
            Innovative solutions that deliver real-world results for our clients
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex overflow-x-auto custom-scrollbar pb-2 justify-center">
            <div className="inline-flex p-1.5 rounded-xl shadow-xl bg-dark-surface">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  className={`relative flex items-center gap-2 py-2.5 px-5 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-text-primary bg-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-hover'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">No projects found in this category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div 
                  className="card h-full transition-all duration-500"
                >
                  <div className={`p-8 ${project.image} backdrop-blur-sm relative`}>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--dark) 100%)'
                      }}
                    ></div>
                    
                    <div className="flex justify-between items-start relative z-10">
                      <div className="bg-dark-surface/80 backdrop-blur-sm p-4 rounded-lg flex items-center justify-center text-white"
                          style={{ 
                            backgroundColor: hoveredProjectId === project.id ? 'var(--primary)' : 'var(--dark-surface)', 
                            color: hoveredProjectId === project.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                            transition: 'var(--transition-normal)'
                          }}>
                        {getCategoryIcon(project.category)}
                      </div>
                      
                      <span className="bg-dark-surface/80 backdrop-blur-sm py-1 px-4 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: hoveredProjectId === project.id ? 'var(--primary)' : 'var(--dark-surface)',
                            color: hoveredProjectId === project.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                            transition: 'var(--transition-normal)'
                          }}>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 filter blur-xl group-hover:opacity-80 transition-opacity"></div>
                  </div>
                  
                  <div className="p-6">
                    {/* Client & Duration if available */}
                    {(project.client || project.duration) && (
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-text-muted">
                        {project.client && (
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-primary">
                              <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 0 0 2 4.25v11.5A2.25 2.25 0 0 0 4.25 18h11.5A2.25 2.25 0 0 0 18 15.75V4.25A2.25 2.25 0 0 0 15.75 2H4.25ZM15 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Zm-8.5 6a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5ZM8.584 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm3.58-1.25a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clipRule="evenodd" />
                            </svg>
                            Client: {project.client}
                          </div>
                        )}
                        
                        {project.duration && (
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1 text-primary">
                              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
                            </svg>
                            Duration: {project.duration}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3 text-text-primary">
                      {project.title}
                    </h3>
                    
                    <p className="mb-6 text-text-secondary line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index} 
                            className="py-1 px-3 rounded-full text-xs font-medium bg-dark-hover text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="py-1 px-3 rounded-full text-xs font-medium bg-dark-hover text-primary">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center text-sm font-medium text-primary"
                    >
                      <span>View Project Details</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div 
              className="bg-dark-surface border border-dark-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Image/Gallery */}
                <div className="lg:w-2/5 h-64 md:h-96 lg:h-auto relative bg-dark">
                  <div 
                    className={`w-full h-full ${selectedProject.image} bg-cover bg-center lg:h-full`}
                  >
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                    
                    {/* Project title overlay on mobile */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white mb-2">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="lg:w-3/5 p-6 md:p-8">
                  {/* Project Header - Hidden on mobile (shown over image) */}
                  <div className="hidden lg:block mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
                        {selectedProject.category}
                      </span>
                      {selectedProject.client && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-dark-hover text-text-secondary">
                          Client: {selectedProject.client}
                        </span>
                      )}
                      {selectedProject.duration && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-dark-hover text-text-secondary">
                          Duration: {selectedProject.duration}
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  </div>
                  
                  {/* Description */}
                  <div className="text-text-secondary mb-8">
                    <p className="text-lg">{selectedProject.description}</p>
                  </div>
                  
                  {/* Challenge, Solution, Results */}
                  {selectedProject.challenge && (
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-text-primary mb-2">The Challenge</h3>
                      <p className="text-text-secondary">{selectedProject.challenge}</p>
                    </div>
                  )}
                  
                  {selectedProject.solution && (
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-text-primary mb-2">Our Solution</h3>
                      <p className="text-text-secondary">{selectedProject.solution}</p>
                    </div>
                  )}
                  
                  {selectedProject.results && (
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-text-primary mb-2">The Results</h3>
                      <p className="text-text-secondary">{selectedProject.results}</p>
                    </div>
                  )}
                  
                  {/* Key Features */}
                  <div className="mb-10">
                    <h3 className="text-xl font-medium text-text-primary mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path d="M10 1a6 6 0 00-6 6v1.351A4 4 0 004 12h1V8a5 5 0 0110 0v4h1a4 4 0 000-8h-1V7a6 6 0 00-6-6zM6 7v4a1 1 0 001 1h6a1 1 0 001-1V7a4 4 0 10-8 0z" />
                      </svg>
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-start p-3 rounded-lg bg-dark/50 border border-dark-border">
                          <div className="flex-shrink-0 bg-primary/20 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-3 text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-text-primary mb-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-primary">
                        <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                      </svg>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Testimonial if available */}
                  {selectedProject.testimonial && (
                    <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-l-4 border-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary/40 mb-4">
                        <path d="M10.5 3.75h2.25a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.25V14c0 .55.45 1 1 1h3.75a.75.75 0 010 1.5H8.25a.75.75 0 010-1.5h.75v-4.5H6.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h2.25V4C9 3.45 8.55 3 8 3H5.25a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v1.5zm8.03-1.5a.75.75 0 01-.53.22h-3.75a.75.75 0 010-1.5h3.75a.75.75 0 01.53 1.28zM13.5 9v1.5h-1.5V9h1.5zM12 12.75h1.5V12H12v.75zm1.5-6.75v1.5H12V6h1.5zm-9 6.75H6V12H4.5v.75zm1.5-6.75v1.5H4.5V6H6z" />
                      </svg>
                      <p className="text-text-primary italic mb-5 text-lg">{selectedProject.testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                          {selectedProject.testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <p className="text-text-primary font-medium">{selectedProject.testimonial.author}</p>
                          <p className="text-primary text-sm">{selectedProject.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Close button */}
                  <div className="flex justify-between mt-8 pt-4 border-t border-dark-border">
                    <a 
                      href="#contact" 
                      className="btn btn-primary flex items-center"
                    >
                      Contact About This Project
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                      </svg>
                    </a>
                    
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="btn btn-outline"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="btn btn-accent inline-flex items-center px-8 py-3"
          >
            <span className="mr-2">Start Your Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;