import React from 'react';

interface ProjectShowcaseProps {
  title?: string;
  description?: string;
  className?: string;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title = "Our Latest Project",
  description = "Innovative solutions that transform your business.",
  className = ""
}) => {
  return (
    <div className={`relative p-8 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-cyan-500 ${className}`}>
      {/* Animated decorative element */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8">
        <svg className="w-20 h-20 text-white opacity-30 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="4"></circle>
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">{title}</h2>
        <p className="text-white text-lg animate-fade-in-up">{description}</p>
      </div>
    </div>
  );
};

export default ProjectShowcase;
