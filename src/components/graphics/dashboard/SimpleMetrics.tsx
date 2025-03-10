import React from 'react';

interface SimpleMetricsProps {
  primaryMetric?: {
    label: string;
    value: string | number;
    color?: string; // Default to primary
  };
  secondaryMetric?: {
    label: string;
    value: string | number;
    color?: string; // Default to accent
  };
  progressMetric?: {
    label: string;
    value: number; // 0-100
    color?: string; // Default to secondary
  };
  className?: string;
}

const SimpleMetrics: React.FC<SimpleMetricsProps> = ({
  primaryMetric = { label: 'Analytics', value: '78%' },
  secondaryMetric = { label: 'Tasks', value: '12' },
  progressMetric = { label: 'Progress', value: 65 },
  className = ''
}) => {
  // Destructure with defaults for colors
  const { 
    color: primaryColor = 'var(--primary)' 
  } = primaryMetric;
  const { 
    color: secondaryColor = 'var(--accent)' 
  } = secondaryMetric;
  const { 
    color: progressColor = 'var(--secondary)' 
  } = progressMetric;

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <div 
        className="rounded-2xl shadow-xl p-6 border backdrop-blur-md"
        style={{ 
          backgroundColor: 'var(--dark-surface)',
          borderColor: 'var(--dark-border)'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div className="text-text-secondary text-sm">Dashboard Preview</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div 
            className="rounded-lg p-4 text-center"
            style={{ backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
          >
            <div className="text-text-secondary">{primaryMetric.label}</div>
            <div className="text-3xl font-bold mt-2" style={{ color: primaryColor }}>
              {primaryMetric.value}
            </div>
          </div>
          
          <div 
            className="rounded-lg p-4 text-center"
            style={{ backgroundColor: 'rgba(236, 72, 153, 0.1)' }}
          >
            <div className="text-text-secondary">{secondaryMetric.label}</div>
            <div className="text-3xl font-bold mt-2" style={{ color: secondaryColor }}>
              {secondaryMetric.value}
            </div>
          </div>
          
          <div 
            className="col-span-2 rounded-lg p-4"
            style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
          >
            <div className="text-text-secondary mb-2">{progressMetric.label}</div>
            <div className="h-2 bg-dark-border rounded-full">
              <div 
                className="h-2 rounded-full" 
                style={{ 
                  width: `${progressMetric.value}%`,
                  backgroundColor: progressColor 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div 
        className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl" 
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
      ></div>
      <div 
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full" 
        style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }}
      ></div>
    </div>
  );
};

export default SimpleMetrics;