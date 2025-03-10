// src/components/admin/ProjectAdminPanel.tsx
import { useState, useEffect } from 'react';
import { projectManager } from '../../utils/projectManager';
import { ProjectDetails, projectCategories } from '../../types/types';

const ProjectAdminPanel = () => {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  // Initial data load
  useEffect(() => {
    loadProjects();
  }, []);
  
  const loadProjects = () => {
    const data = projectManager.getAll();
    setProjects(data);
    setSelectedProject(null);
    setIsEditing(false);
  };
  
  // Handle item selection
  const selectProject = (id: number) => {
    const project = projectManager.getById(id);
    if (project) {
      setSelectedProject(project);
      setIsEditing(false);
    }
  };
  
  // Handle form submission for updates
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedProject) return;
    
    const formData = new FormData(e.currentTarget);
    const updates: Record<string, any> = {};
    
    // Convert form data to object
    formData.forEach((value, key) => {
      // Try to parse JSON for arrays and objects
      if (typeof value === 'string') {
        try {
          if (value.trim().startsWith('[') || value.trim().startsWith('{')) {
            updates[key] = JSON.parse(value);
            return;
          }
        } catch (e) {
          // If parsing fails, use the string value
        }
      }
      updates[key] = value;
    });
    
    // Update the project
    projectManager.update(selectedProject.id, updates);
    
    // Reload projects
    loadProjects();
    setIsEditing(false);
  };
  
  // Create a new project
  const createNewProject = () => {
    // Create a basic project template
    const newProject: ProjectDetails = {
      id: Date.now(),
      title: 'New Project',
      category: 'Artificial Intelligence',
      description: 'Project description',
      client: 'Client Name',
      duration: '3 months',
      image: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
      technologies: ['Technology 1', 'Technology 2'],
      features: ['Feature 1', 'Feature 2']
    };
    
    projectManager.add(newProject);
    loadProjects();
  };
  
  // Reset to default projects
  const resetProjects = () => {
    if (window.confirm('Are you sure? This will reset all projects to default values.')) {
      projectManager.resetToDefault();
      loadProjects();
    }
  };
  
  return (
    <div className="min-h-screen bg-dark text-text-primary p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Project Management</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              Back to Site
            </button>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Project List */}
          <div className="w-full lg:w-1/3 bg-dark-surface p-4 rounded-lg border border-dark-border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Projects</h2>
              <div className="flex gap-2">
                <button 
                  onClick={createNewProject}
                  className="btn btn-primary py-1 px-3 text-sm"
                >
                  Add New
                </button>
                <button 
                  onClick={resetProjects}
                  className="btn py-1 px-3 text-sm bg-error hover:bg-error/80"
                >
                  Reset All
                </button>
              </div>
            </div>
            
            <div className="h-[calc(100vh-240px)] overflow-y-auto custom-scrollbar space-y-2">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedProject?.id === project.id 
                      ? 'bg-primary/20 border border-primary/30' 
                      : 'bg-dark-hover border border-dark-border hover:border-primary/30'
                  }`}
                  onClick={() => selectProject(project.id)}
                >
                  <h3 className="font-medium">{project.title}</h3>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs py-0.5 px-2 rounded-full bg-dark-border text-text-secondary">
                      {project.category}
                    </span>
                    {project.client && (
                      <span className="text-xs py-0.5 px-2 rounded-full bg-dark-border text-text-secondary">
                        {project.client}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Project Details/Editor */}
          <div className="w-full lg:w-2/3 bg-dark-surface p-6 rounded-lg border border-dark-border">
            {selectedProject ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">
                    {isEditing ? 'Edit Project' : 'Project Details'}
                  </h2>
                  <div className="flex gap-2">
                    <button 
                      className={`btn ${isEditing ? 'btn-outline' : 'btn-primary'}`}
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                    {!isEditing && (
                      <button 
                        className="btn bg-error hover:bg-error/80"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this project?')) {
                            projectManager.remove(selectedProject.id);
                            loadProjects();
                          }
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
                
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4 h-[calc(100vh-240px)] overflow-y-auto custom-scrollbar pr-2">
                    {/* Basic Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Title</label>
                        <input
                          type="text"
                          name="title"
                          defaultValue={selectedProject.title}
                          className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Category</label>
                        <select
                          name="category"
                          defaultValue={selectedProject.category}
                          className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none"
                        >
                          {projectCategories.filter(c => c !== 'All').map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Client</label>
                        <input
                          type="text"
                          name="client"
                          defaultValue={selectedProject.client}
                          className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Duration</label>
                        <input
                          type="text"
                          name="duration"
                          defaultValue={selectedProject.duration}
                          className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Image</label>
                      <input
                        type="text"
                        name="image"
                        defaultValue={selectedProject.image}
                        className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none"
                        required
                      />
                      <p className="text-xs text-text-muted mt-1">
                        CSS class for background gradient, e.g., "bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Technologies</label>
                      <textarea
                        name="technologies"
                        defaultValue={JSON.stringify(selectedProject.technologies)}
                        rows={3}
                        className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none font-mono text-sm"
                        required
                      />
                      <p className="text-xs text-text-muted mt-1">
                        Enter as JSON array, e.g. ["React", "Node.js", "MongoDB"]
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Features</label>
                      <textarea
                        name="features"
                        defaultValue={JSON.stringify(selectedProject.features)}
                        rows={3}
                        className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none font-mono text-sm"
                        required
                      />
                      <p className="text-xs text-text-muted mt-1">
                        Enter as JSON array, e.g. ["Feature 1", "Feature 2"]
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Gallery</label>
                      <textarea
                        name="gallery"
                        defaultValue={JSON.stringify(selectedProject.gallery || [])}
                        rows={3}
                        className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none font-mono text-sm"
                      />
                      <p className="text-xs text-text-muted mt-1">
                        Enter as JSON array of CSS classes, e.g. ["bg-gradient-to-br from-indigo-600/20 to-purple-600/20"]
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Testimonial</label>
                      <textarea
                        name="testimonial"
                        defaultValue={JSON.stringify(selectedProject.testimonial || {})}
                        rows={3}
                        className="w-full bg-dark p-2 rounded border border-dark-border focus:border-primary focus:outline-none font-mono text-sm"
                      />
                      <p className="text-xs text-text-muted mt-1">
                        Enter as JSON object, e.g. {'{'}quote: "Great project", author: "John Doe", position: "CEO"{'}'}
                      </p>
                    </div>
                    
                    <div className="flex justify-end pt-4 border-t border-dark-border">
                      <button 
                        type="submit" 
                        className="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="h-[calc(100vh-240px)] overflow-y-auto custom-scrollbar pr-2">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-medium text-text-muted">Title</h3>
                        <p>{selectedProject.title}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-text-muted">Category</h3>
                        <p>{selectedProject.category}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-text-muted">Client</h3>
                        <p>{selectedProject.client || "—"}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium text-text-muted">Duration</h3>
                        <p>{selectedProject.duration || "—"}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-text-muted">Description</h3>
                      <p className="mt-1">{selectedProject.description}</p>
                    </div>
                    
                    {selectedProject.challenge && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-text-muted">Challenge</h3>
                        <p className="mt-1">{selectedProject.challenge}</p>
                      </div>
                    )}
                    
                    {selectedProject.solution && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-text-muted">Solution</h3>
                        <p className="mt-1">{selectedProject.solution}</p>
                      </div>
                    )}
                    
                    {selectedProject.results && (
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-text-muted">Results</h3>
                        <p className="mt-1">{selectedProject.results}</p>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-text-muted">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="bg-dark-hover px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-text-muted">Features</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedProject.testimonial && (
                      <div className="mb-6 bg-primary/10 p-4 rounded-lg border border-primary/20">
                        <h3 className="text-sm font-medium text-text-muted">Testimonial</h3>
                        <p className="italic mt-2">"{selectedProject.testimonial.quote}"</p>
                        <p className="text-sm mt-2">
                          — {selectedProject.testimonial.author}, {selectedProject.testimonial.position}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-[calc(100vh-240px)]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-dark-border mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p className="text-text-secondary">Select a project to view or edit its details</p>
                <button 
                  onClick={createNewProject}
                  className="btn btn-primary mt-4"
                >
                  Create New Project
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAdminPanel;