import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface AnalyticsDashboardProps {
  title?: string;
  dataPoints?: ChartData[];
  className?: string;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  title = 'Analytics Overview',
  dataPoints = [
    { label: 'Mon', value: 35, color: 'var(--primary)' },
    { label: 'Tue', value: 65, color: 'var(--primary)' },
    { label: 'Wed', value: 40, color: 'var(--primary)' },
    { label: 'Thu', value: 85, color: 'var(--primary)' },
    { label: 'Fri', value: 50, color: 'var(--primary)' },
    { label: 'Sat', value: 30, color: 'var(--primary)' },
    { label: 'Sun', value: 45, color: 'var(--primary)' }
  ],
  className = ''
}) => {
  // Find the max value for normalization
  const maxValue = Math.max(...dataPoints.map(point => point.value));

  return (
    <div className={`rounded-xl overflow-hidden bg-dark-surface border border-dark-border shadow-lg ${className}`}>
      {/* Dashboard header */}
      <div className="flex items-center justify-between bg-dark-surface/30 backdrop-blur-sm px-6 py-4 border-b border-dark-border">
        <div className="flex items-center">
          <div className="p-2 bg-primary/10 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
              <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <div className="flex space-x-2">
          <button className="p-1.5 text-text-secondary hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-6">
        {/* Chart */}
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
            <div className="text-text-secondary text-xs mb-1">Avg. Views</div>
            <div className="text-white font-medium">8.7k</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Conversion</div>
            <div className="text-white font-medium">4.5%</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Growth</div>
            <div className="text-accent font-medium">+12.8%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;