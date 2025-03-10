import React from 'react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

interface FeatureCardGridProps {
  features?: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const FeatureCardGrid: React.FC<FeatureCardGridProps> = ({
  features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M16.5 7.5h-9v9h9v-9Z" />
          <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Machine Learning',
      description: 'Advanced algorithms that continuously improve over time',
      color: 'var(--primary)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      ),
      title: 'Personalization',
      description: 'Tailor experiences based on user behavior and preferences',
      color: 'var(--accent)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.667Zm-3.207.779a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm-3.22 8.818a.75.75 0 0 1 .441.97l-.5 1.5a.75.75 0 0 1-1.41-.47l.5-1.5a.75.75 0 0 1 .969-.44Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Automation',
      description: 'Streamline repetitive tasks for enhanced productivity',
      color: 'var(--secondary)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Integration',
      description: 'Seamlessly connect with your existing tools and systems',
      color: 'var(--info)'
    }
  ],
  columns = 2,
  className = ''
}) => {
  // Determine grid columns class based on prop
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`${className}`}>
      <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group" 
          >
            {/* Feature card */}
            <div className="bg-dark-surface border border-dark-border rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
              {/* Icon */}
              <div 
                className="rounded-lg w-12 h-12 flex items-center justify-center mb-4"
                style={{ 
                  backgroundColor: `${feature.color || 'var(--primary)'}20`, 
                  color: feature.color || 'var(--primary)'
                }}
              >
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
              
              {/* Hover effects - subtle glow */}
              <div 
                className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: feature.color || 'var(--primary)' }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCardGrid;