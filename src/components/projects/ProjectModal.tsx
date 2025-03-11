import React from 'react';
import { ProjectDetails } from '../../types/types';

interface ProjectModalProps {
  project: ProjectDetails | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-dark-surface border border-dark-border rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image/Gallery */}
          <div className="lg:w-2/5 h-72 md:h-[30rem] lg:h-auto relative bg-dark">
            <div 
              className={`w-full h-full ${project.image} bg-cover bg-center lg:h-full`}
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
              
              {/* Project title overlay on mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-3/5 p-6 md:p-8">
            {/* Project Header - Hidden on mobile (shown over image) */}
            <div className="hidden lg:block mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
                  {project.category}
                </span>
                {project.client && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-dark-hover text-text-secondary">
                    Client: {project.client}
                  </span>
                )}
                {project.duration && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-dark-hover text-text-secondary">
                    Duration: {project.duration}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            </div>
            
            {/* Description */}
            <div className="text-text-secondary mb-8">
              <p className="text-lg">{project.description}</p>
            </div>
            
            {/* Challenge, Solution, Results */}
            {project.challenge && (
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-primary mb-2">The Challenge</h3>
                <p className="text-text-secondary">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-primary mb-2">Our Solution</h3>
                <p className="text-text-secondary">{project.solution}</p>
              </div>
            )}
            
            {project.results && (
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-primary mb-2">The Results</h3>
                <p className="text-text-secondary">{project.results}</p>
              </div>
            )}
            
            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-medium text-text-primary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-primary">
                    <path d="M10 1a6 6 0 00-6 6v1.351A4 4 0 004 12h1V8a5 5 0 0110 0v4h1a4 4 0 000-8h-1V7a6 6 0 00-6-6zM6 7v4a1 1 0 001 1h6a1 1 0 001-1V7a4 4 0 10-8 0z" />
                  </svg>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
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
            )}
            
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-medium text-text-primary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-primary">
                    <path fillRule="evenodd" d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z" clipRule="evenodd" />
                  </svg>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg border border-primary/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Testimonial if available */}
            {project.testimonial && (
              <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border-l-4 border-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 text-primary/40 mb-4">
                  <path d="M10.5 3.75h2.25a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.25V14c0 .55.45 1 1 1h3.75a.75.75 0 010 1.5H8.25a.75.75 0 010-1.5h.75v-4.5H6.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h2.25V4C9 3.45 8.55 3 8 3H5.25a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v1.5zm8.03-1.5a.75.75 0 01-.53.22h-3.75a.75.75 0 010-1.5h3.75a.75.75 0 01.53 1.28zM13.5 9v1.5h-1.5V9h1.5zM12 12.75h1.5V12H12v.75zm1.5-6.75v1.5H12V6h1.5zm-9 6.75H6V12H4.5v.75zm1.5-6.75v1.5H4.5V6H6z" />
                </svg>
                <p className="text-text-primary italic mb-5 text-lg">{project.testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-text-primary font-medium">{project.testimonial.author}</p>
                    <p className="text-primary text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-4 border-t border-dark-border">
              <a 
                href="#contact" 
                className="btn btn-primary flex items-center justify-center"
                onClick={() => onClose()}
              >
                Contact About This Project
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </a>
              
              <button
                onClick={onClose}
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;