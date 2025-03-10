import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface EcommerceDashboardProps {
  title?: string;
  dataPoints?: ChartData[];
  className?: string;
}

const EcommerceDashboard: React.FC<EcommerceDashboardProps> = ({
  title = 'Ecommerce Sales Overview',
  dataPoints = [
    { label: 'Electronics', value: 120, color: 'var(--primary)' },
    { label: 'Fashion', value: 85, color: 'var(--primary)' },
    { label: 'Home', value: 95, color: 'var(--primary)' },
    { label: 'Sports', value: 70, color: 'var(--primary)' },
    { label: 'Books', value: 50, color: 'var(--primary)' }
  ],
  className = ''
}) => {
  // Normalize bar heights based on the maximum value
  const maxValue = Math.max(...dataPoints.map(point => point.value));

  return (
    <div className={`rounded-xl overflow-hidden bg-dark-surface border border-dark-border shadow-lg ${className}`}>
      {/* Dashboard header */}
      <div className="flex items-center justify-between bg-dark-surface/30 backdrop-blur-sm px-6 py-4 border-b border-dark-border">
        <div className="flex items-center">
          <div className="p-2 bg-primary/10 rounded-lg mr-3">
            {/* Ecommerce icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13L17 13M7 13h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-6">
        {/* Bar Chart */}
        <div className="flex h-48 items-end space-x-2">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full rounded-t-sm hover:opacity-90 transition-all duration-300"
                style={{ 
                  height: `${(point.value / maxValue) * 150}px`,
                  backgroundColor: point.color || 'var(--primary)',
                  maxWidth: '30px'
                }}
              ></div>
              <span className="text-xs text-text-secondary mt-2">{point.label}</span>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Total Sales</div>
            <div className="text-white font-medium">$24.5k</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Conversion Rate</div>
            <div className="text-white font-medium">3.8%</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Avg. Order Value</div>
            <div className="text-accent font-medium">$56</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
