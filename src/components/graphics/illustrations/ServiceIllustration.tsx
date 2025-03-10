import React from 'react';

interface ServiceIllustrationProps {
  title?: string;
  details?: string;
  className?: string;
}

const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({
  title = "Our Services",
  details = "We offer a range of services from design to development.",
  className = ""
}) => {
  return (
    <div className={`relative p-8 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 ${className}`}>
      {/* Animated decorative element */}
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8">
        <svg className="w-24 h-24 text-white opacity-30 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" strokeWidth="4" stroke="currentColor" fill="none"></rect>
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">{title}</h2>
        <p className="text-white text-lg animate-fade-in-up">{details}</p>
      </div>
    </div>
  );
};

export default ServiceIllustration;
