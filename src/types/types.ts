// src/types/project.ts
export interface ProjectDetails {
    id: number;
    title: string;
    category: string;
    client?: string;
    duration?: string;
    description: string;
    challenge?: string;
    solution?: string;
    results?: string;
    technologies: string[];
    features: string[];
    image: string;
    gallery?: string[];
    testimonial?: {
      quote: string;
      author: string;
      position: string;
    };
  }
  
  export interface ProjectDataManager {
    getAll: () => ProjectDetails[];
    getById: (id: number) => ProjectDetails | undefined;
    add: (project: ProjectDetails) => ProjectDetails;
    update: (id: number, updates: Partial<ProjectDetails>) => ProjectDetails | undefined;
    remove: (id: number) => boolean;
    saveToLocalStorage: () => void;
    loadFromLocalStorage: () => void;
    resetToDefault: () => void;
  }
  
  // Project categories
  export const projectCategories = ["All", "Artificial Intelligence", "Business Automation", "Mobile Development", "IoT & Cloud"];