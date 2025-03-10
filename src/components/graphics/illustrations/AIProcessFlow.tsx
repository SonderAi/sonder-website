import React from 'react';

interface AIProcessFlowProps {
  className?: string;
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const AIProcessFlow: React.FC<AIProcessFlowProps> = ({
  className = '',
  steps = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
          <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
          <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
          <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
        </svg>
      ),
      title: 'Data Collection',
      description: 'Gather and organize raw data from multiple sources'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 5.886 8.03c-.047.643-.085 1.29-.108 1.939L4.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c.023-.65.06-1.296.108-1.939a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c-.023.65-.06 1.296-.108 1.939a3.256 3.256 0 0 1-3.01 3.01 48.657 48.657 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 48.656 48.656 0 0 1 0-7.21 3.256 3.256 0 0 1 3.01-3.01c.632-.047 1.27-.084 1.912-.108l-1.751 1.751a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 1.06l1.751 1.751c-.642-.023-1.28-.06-1.912-.108a4.756 4.756 0 0 0-4.392 4.392 49.903 49.903 0 0 0 0 7.862 4.756 4.756 0 0 0 4.392 4.392c2.909.22 5.811.22 8.72 0a4.756 4.756 0 0 0 4.392-4.392c.057-.78.097-1.569.12-2.361L19.03 14.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.752-1.751c-.023.65-.06 1.296-.108 1.939a3.256 3.256 0 0 1-3.01 3.01 48.657 48.657 0 0 1-7.21 0 4.727 4.727 0 0 1-.088-.01zm13.82-2.5c.072.612.123 1.228.152 1.846a.75.75 0 1 1-1.499.085c-.028-.572-.074-1.143-.141-1.71a.75.75 0 0 1 1.487-.221Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Processing & Analysis',
      description: 'Clean the data and apply AI algorithms for deep insights'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Implementation',
      description: 'Integrate insights into your existing workflows and systems'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Optimization',
      description: 'Continuously refine and improve the AI model over time'
    }
  ]
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Container for the entire process flow */}
      <div className="bg-dark-surface border border-dark-border rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-8 text-center">AI Implementation Process</h3>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 z-0"></div>
          
          {/* Process steps */}
          <div className="relative z-10 space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Timeline node */}
                <div className="flex-shrink-0 relative">
                  <div className="absolute left-0 top-1/2 w-8 h-0.5 bg-primary/20"></div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white ${
                    index % 2 === 0 ? 'bg-primary' : 'bg-accent'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="absolute right-0 top-1/2 w-8 h-0.5 bg-primary/20"></div>
                </div>
                
                {/* Step content */}
                <div className="ml-6 bg-dark-surface/50 p-4 rounded-lg border border-dark-border/50 flex-1">
                  <h4 className="text-lg font-medium text-white mb-1">{step.title}</h4>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      </div>
    </div>
  );
};

export default AIProcessFlow;