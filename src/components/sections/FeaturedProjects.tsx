import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectManager } from '../../utils/projectManager';
import { ProjectDetails } from '../../types/types';

interface FeaturedProjectsProps {
  limit?: number;
  className?: string;
  showFeaturedOnly?: boolean;
}

const FeaturedProjects = ({ 
  limit = 3, 
  className = '',
  showFeaturedOnly = true
}: FeaturedProjectsProps) => {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let featuredProjects: ProjectDetails[] = [];
    
    if (showFeaturedOnly) {
      // Get featured projects using the new method
      featuredProjects = projectManager.getFeatured(limit);
      
      // If there aren't enough featured projects, fill with the newest ones
      if (featuredProjects.length < limit) {
        const allProjects = projectManager.getAll();
        const nonFeaturedProjects = allProjects
          .filter(p => !p.featured)
          .sort((a, b) => b.id - a.id) // Sort by ID (newest first)
          .slice(0, limit - featuredProjects.length);
        
        featuredProjects = [...featuredProjects, ...nonFeaturedProjects];
      }
    } else {
      // If not showing featured only, just get the newest projects
      const allProjects = projectManager.getAll();
      featuredProjects = [...allProjects]
        .sort((a, b) => b.id - a.id) // Sort by ID (newest first)
        .slice(0, limit);
    }
    
    setProjects(featuredProjects);
    setLoading(false);
  }, [limit, showFeaturedOnly]);

  // Get category icon based on project category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Artificial Intelligence":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
          </svg>
        );
      case "Mobile Development":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
          </svg>
        );
      case "IoT & Cloud":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  if (loading) {
    return (
      <div className={`${className} py-8`}>
        <div className="text-center">
          <div className="animate-pulse bg-dark-surface w-48 h-8 mx-auto rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(limit)].map((_, i) => (
              <div key={i} className="animate-pulse bg-dark-surface rounded-lg h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className={`${className} py-16`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped our clients achieve their goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <Link to={`/projects`} className="block">
                <div className="card h-full transition-all duration-500">
                  <div className={`p-6 ${project.image} backdrop-blur-sm relative min-h-[200px]`}>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, var(--dark) 100%)'
                      }}
                    ></div>
                    
                    <div className="flex justify-between items-start relative z-10">
                      <div className="bg-dark-surface/80 backdrop-blur-sm p-3 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'var(--dark-surface)', 
                            color: 'var(--text-secondary)'
                          }}>
                        {getCategoryIcon(project.category)}
                      </div>
                      
                      <span className="bg-dark-surface/80 backdrop-blur-sm py-1 px-3 rounded-full text-sm font-medium transition-colors duration-300"
                          style={{ 
                            backgroundColor: 'var(--dark-surface)',
                            color: 'var(--text-secondary)'
                          }}>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 filter blur-xl group-hover:opacity-80 transition-opacity"></div>
                  </div>
                  
                  <div className="p-6">
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
                    
                    <div className="flex items-center text-sm font-medium text-primary">
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
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects" className="btn btn-outline inline-flex items-center">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;