// src/components/graphics/TechDiagram.tsx
import React, { useState } from 'react';
import FeatureIcon from '../ui/FeatureIcon';

interface TechDiagramProps {
  className?: string;
}

const TechDiagram: React.FC<TechDiagramProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState('analytics');

  // Dashboard metrics based on active tab
  const getDashboardContent = () => {
    switch(activeTab) {
      case 'analytics':
        return {
          title: 'Business Analytics',
          metrics: [
            { label: 'Conversion', value: '12.8%', change: '+2.6%', color: 'primary' },
            { label: 'Revenue', value: '$48.5k', change: '+8.2%', color: 'accent' },
            { label: 'Users', value: '2,845', change: '+12.3%', color: 'secondary' }
          ],
          chart: [35, 45, 60, 52, 75, 85, 68, 78]
        };
      case 'automation':
        return {
          title: 'Workflow Automation',
          metrics: [
            { label: 'Tasks', value: '124', change: '-8.4%', color: 'success' },
            { label: 'Time Saved', value: '36hrs', change: '+24.2%', color: 'info' },
            { label: 'Efficiency', value: '94.2%', change: '+5.7%', color: 'accent' }
          ],
          chart: [45, 65, 72, 85, 80, 95, 85, 92]
        };
      case 'ai':
        return {
          title: 'AI Performance',
          metrics: [
            { label: 'Accuracy', value: '96.8%', change: '+1.2%', color: 'accent' },
            { label: 'Predictions', value: '4,256', change: '+18.7%', color: 'primary' },
            { label: 'Processing', value: '2.4ms', change: '-12.5%', color: 'success' }
          ],
          chart: [78, 65, 82, 75, 85, 92, 88, 95]
        };
      case 'integration':
        return {
          title: 'System Integration',
          metrics: [
            { label: 'Uptime', value: '99.9%', change: '+0.2%', color: 'info' },
            { label: 'API Calls', value: '853k', change: '+32.5%', color: 'secondary' },
            { label: 'Response', value: '42ms', change: '-18.6%', color: 'primary' }
          ],
          chart: [88, 75, 92, 85, 76, 90, 95, 98]
        };
      default:
        return {
          title: 'Business Analytics',
          metrics: [
            { label: 'Conversion', value: '12.8%', change: '+2.6%', color: 'primary' },
            { label: 'Revenue', value: '$48.5k', change: '+8.2%', color: 'accent' },
            { label: 'Users', value: '2,845', change: '+12.3%', color: 'secondary' }
          ],
          chart: [35, 45, 60, 52, 75, 85, 68, 78]
        };
    }
  };

  const dashboardContent = getDashboardContent();
  
  // Calculate max value for chart
  const maxChartValue = Math.max(...dashboardContent.chart);

  return (
    <div className={`relative ${className}`}>
      {/* Animated spinning circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border-2 border-dashed border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute w-3/4 h-3/4 border-2 border-dashed border-accent/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}></div>
      </div>
      
      {/* Interactive Dashboard */}
      <div className="w-full relative z-10 bg-dark-surface/90 backdrop-blur-md border border-dark-border rounded-xl shadow-xl overflow-hidden">
        {/* Background gradients and shapes for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient blobs */}
          <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-xl"></div>
          <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-secondary/10 blur-xl"></div>
          
          {/* Decorative shapes - only visible on hover */}
          <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-primary/30 rounded-lg rotate-12 opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border border-accent/30 rounded-full opacity-40"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{ 
                 backgroundImage: `linear-gradient(var(--dark-border) 1px, transparent 1px), 
                                   linear-gradient(90deg, var(--dark-border) 1px, transparent 1px)`, 
                 backgroundSize: '20px 20px' 
               }}>
          </div>
        </div>
        
        {/* Dashboard Header */}
        <div className="bg-gradient-to-r from-dark-surface/90 via-primary/10 to-dark/80 px-4 py-3 border-b border-dark-border flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-primary to-accent rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white">{dashboardContent.title}</h3>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-error rounded-full"></div>
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <div className="w-3 h-3 bg-success rounded-full"></div>
          </div>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex bg-gradient-to-r from-dark/60 via-primary/5 to-dark/40 p-1 mx-3 mt-3 rounded-lg border border-dark-border/40 relative z-10">
          <button 
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs rounded-md transition-all ${activeTab === 'analytics' ? 'bg-gradient-to-br from-primary/20 to-dark-surface/80 text-white shadow-md' : 'text-text-secondary hover:text-white'}`}
            onClick={() => setActiveTab('analytics')}
          >
            <FeatureIcon iconName="ChartBarIcon" color={activeTab === 'analytics' ? 'primary' : 'text-secondary'} className="w-4 h-4" />
            <span className="hidden md:inline">Analytics</span>
          </button>
          <button 
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs rounded-md transition-all ${activeTab === 'automation' ? 'bg-gradient-to-br from-success/20 to-dark-surface/80 text-white shadow-md' : 'text-text-secondary hover:text-white'}`}
            onClick={() => setActiveTab('automation')}
          >
            <FeatureIcon iconName="ArrowPathIcon" color={activeTab === 'automation' ? 'success' : 'text-secondary'} className="w-4 h-4" />
            <span className="hidden md:inline">Automation</span>
          </button>
          <button 
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs rounded-md transition-all ${activeTab === 'ai' ? 'bg-gradient-to-br from-accent/20 to-dark-surface/80 text-white shadow-md' : 'text-text-secondary hover:text-white'}`}
            onClick={() => setActiveTab('ai')}
          >
            <FeatureIcon iconName="CpuChipIcon" color={activeTab === 'ai' ? 'accent' : 'text-secondary'} className="w-4 h-4" />
            <span className="hidden md:inline">AI</span>
          </button>
          <button 
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs rounded-md transition-all ${activeTab === 'integration' ? 'bg-gradient-to-br from-info/20 to-dark-surface/80 text-white shadow-md' : 'text-text-secondary hover:text-white'}`}
            onClick={() => setActiveTab('integration')}
          >
            <FeatureIcon iconName="ArrowsPointingInIcon" color={activeTab === 'integration' ? 'info' : 'text-secondary'} className="w-4 h-4" />
            <span className="hidden md:inline">Integration</span>
          </button>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-3 p-3 relative z-10">
          {dashboardContent.metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden"
              style={{ 
                boxShadow: `0 4px 12px rgba(var(--${metric.color}-rgb), 0.15)`,
                borderImage: `linear-gradient(to bottom right, var(--${metric.color})/40%, transparent) 1`
              }}
            >
              {/* Add more color with a background accent */}
              <div 
                className="absolute -right-6 -bottom-6 w-12 h-12 rounded-full opacity-20"
                style={{ background: `var(--${metric.color})` }}
              ></div>
              
              <div className="text-xs text-text-secondary mb-1">{metric.label}</div>
              <div className="text-lg font-bold" style={{ color: `var(--${metric.color})` }}>{metric.value}</div>
              <div className={`text-xs mt-1 ${metric.change.startsWith('+') ? 'text-success' : 'text-error'} font-medium`}>
                {metric.change}
              </div>
            </div>
          ))}
        </div>
        
        {/* Chart */}
        <div className="px-3 pb-3 relative z-10">
          <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            {/* Colorful background accent */}
            <div 
              className="absolute -top-10 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl"
              style={{ background: `var(--${dashboardContent.metrics[0].color})` }}
            ></div>
            
            {/* Chart title and subtitle with more color */}
            <div className="mb-1 flex justify-between items-center">
              <h4 className="text-xs font-medium" style={{ color: `var(--${dashboardContent.metrics[0].color})` }}>Performance</h4>
              <div className="text-[10px] text-text-secondary">Last 8 days</div>
            </div>
            
            <div className="flex items-end h-28 space-x-1">
              {dashboardContent.chart.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center group">
                  <div 
                    className="w-full rounded-t-sm hover:opacity-90 transition-all duration-300 relative overflow-hidden group-hover:shadow-lg"
                    style={{ 
                      height: `${(value / maxChartValue) * 100}%`,
                      background: `linear-gradient(to top, var(--${dashboardContent.metrics[0].color}), var(--${dashboardContent.metrics[0].color})/60%)`,
                      maxWidth: '30px'
                    }}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-[8px] text-text-secondary mt-1">D{index+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom status bar */}
        <div className="bg-gradient-to-r from-dark-surface/90 via-accent/5 to-dark/80 px-4 py-2 border-t border-dark-border flex justify-between items-center text-xs text-text-secondary relative z-10">
          <div>Status: Active</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Connected</span>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 border-2 border-accent rounded-lg opacity-50 hidden md:block"></div>
      <div className="absolute -top-2 -left-2 w-12 h-12 border-2 border-primary rounded-lg opacity-50 hidden md:block"></div>
    </div>
  );
};

export default TechDiagram;