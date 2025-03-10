// src/utils/projectManager.ts
import { ProjectDetails, ProjectDataManager } from '../types/types';
import { defaultProjects } from '../data/projects';

class ProjectManager implements ProjectDataManager {
  private projects: ProjectDetails[] = [];
  private initialized = false;
  private localStorageKey = 'sonder_projects_data';

  constructor() {
    this.initializeProjects();
  }

  private initializeProjects() {
    // First try to load from localStorage
    this.loadFromLocalStorage();

    // If we don't have projects in localStorage or something failed, use the default data
    if (!this.initialized) {
      this.projects = JSON.parse(JSON.stringify(defaultProjects)); // Deep clone to avoid reference issues
      this.initialized = true;
      
      // Save to localStorage for future use
      this.saveToLocalStorage();
    }
  }

  // Get all projects
  getAll(): ProjectDetails[] {
    return this.projects;
  }

  // Get a specific project by ID
  getById(id: number): ProjectDetails | undefined {
    return this.projects.find(project => project.id === id);
  }

  // Add a new project
  add(project: ProjectDetails): ProjectDetails {
    // Generate a new ID if not provided
    if (!project.id) {
      const maxId = this.projects.reduce((max, p) => Math.max(max, p.id), 0);
      project.id = maxId + 1;
    }
    
    this.projects.push(project);
    this.saveToLocalStorage();
    return project;
  }

  // Update an existing project
  update(id: number, updates: Partial<ProjectDetails>): ProjectDetails | undefined {
    const index = this.projects.findIndex(project => project.id === id);
    
    if (index < 0) return undefined;
    
    const updatedProject = { ...this.projects[index], ...updates };
    this.projects[index] = updatedProject;
    
    this.saveToLocalStorage();
    return updatedProject;
  }

  // Remove a project
  remove(id: number): boolean {
    const index = this.projects.findIndex(project => project.id === id);
    
    if (index < 0) return false;
    
    this.projects.splice(index, 1);
    this.saveToLocalStorage();
    return true;
  }

  // Save to localStorage
  saveToLocalStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.projects));
        console.log('Projects saved to localStorage');
      } catch (error) {
        console.error('Error saving projects to localStorage:', error);
      }
    }
  }

  // Load from localStorage
  loadFromLocalStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        const savedData = localStorage.getItem(this.localStorageKey);
        if (savedData) {
          this.projects = JSON.parse(savedData);
          this.initialized = true;
          console.log('Projects loaded from localStorage');
        }
      } catch (error) {
        console.error('Error loading projects from localStorage:', error);
        this.initialized = false;
      }
    }
  }

  // Reset to default projects
  resetToDefault(): void {
    this.projects = JSON.parse(JSON.stringify(defaultProjects));
    this.saveToLocalStorage();
    console.log('Projects reset to defaults');
  }

  // Get projects by category
  getProjectsByCategory(category: string): ProjectDetails[] {
    if (category === "All") return this.projects;
    return this.projects.filter(project => project.category === category);
  }
}

// Create a singleton instance
export const projectManager = new ProjectManager();