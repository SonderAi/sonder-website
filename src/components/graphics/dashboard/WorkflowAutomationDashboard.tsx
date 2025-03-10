import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color?: string;
}

interface WorkflowAutomationDashboardProps {
  title?: string;
  dataPoints?: ChartData[];
  className?: string;
}

const WorkflowAutomationDashboard: React.FC<WorkflowAutomationDashboardProps> = ({
  title = 'Workflow Automation Stats',
  dataPoints = [
    { label: 'Emails Sent', value: 200, color: 'var(--secondary)' },
    { label: 'Tasks Done', value: 150, color: 'var(--secondary)' },
    { label: 'Processes Auto', value: 100, color: 'var(--secondary)' },
    { label: 'Errors', value: 20, color: 'var(--secondary)' }
  ],
  className = ''
}) => {
  // Calculate maximum value for the chart scaling
  const maxValue = Math.max(...dataPoints.map(point => point.value));

  return (
    <div className={`rounded-xl overflow-hidden bg-dark-surface border border-dark-border shadow-lg ${className}`}>
      {/* Dashboard header */}
      <div className="flex items-center justify-between bg-dark-surface/30 backdrop-blur-sm px-6 py-4 border-b border-dark-border">
        <div className="flex items-center">
          <div className="p-2 bg-secondary/10 rounded-lg mr-3">
            {/* Workflow automation icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15v-2H8v-2h3v-2h2v2h3v2h-3v2h-2z" />
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
                  backgroundColor: point.color || 'var(--secondary)',
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
            <div className="text-text-secondary text-xs mb-1">Avg. Response Time</div>
            <div className="text-white font-medium">450ms</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Automation Rate</div>
            <div className="text-white font-medium">75%</div>
          </div>
          <div className="p-3 rounded-lg bg-dark-surface/50">
            <div className="text-text-secondary text-xs mb-1">Error Rate</div>
            <div className="text-accent font-medium">2%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAutomationDashboard;
