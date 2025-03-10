// src/types/types.ts
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
  featured?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface ProjectDataManager {
  getAll: () => ProjectDetails[];
  getById: (id: number) => ProjectDetails | undefined;
  getFeatured: (limit?: number) => ProjectDetails[];
  setFeatured: (id: number, featured: boolean) => ProjectDetails | undefined;
  add: (project: ProjectDetails) => ProjectDetails;
  update: (id: number, updates: Partial<ProjectDetails>) => ProjectDetails | undefined;
  remove: (id: number) => boolean;
  saveToLocalStorage: () => void;
  loadFromLocalStorage: () => void;
  resetToDefault: () => void;
}

// Project categories
export const projectCategories = ["All", "Artificial Intelligence", "Business Automation", "Mobile Development", "IoT & Cloud"];

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
  description: string;
  features: FeatureData[];
}