// src/components/graphics/TechDiagram.tsx
import React, { useState } from 'react';
import FeatureIcon from '../../ui/FeatureIcon';

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
        
        {/* Chart/Visualization Area - Replacing performance chart with a more interesting visual */}
        <div className="px-3 pb-3 relative z-10">
          <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            {/* Colorful background accent */}
            <div 
              className="absolute -top-10 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl"
              style={{ background: `var(--${dashboardContent.metrics[0].color})` }}
            ></div>
            
            {/* Section title with more color */}
            <div className="mb-3 flex justify-between items-center">
              <h4 className="text-xs font-medium" style={{ color: `var(--${dashboardContent.metrics[0].color})` }}>
                {activeTab === 'analytics' ? 'Business Impact' : 
                 activeTab === 'automation' ? 'Process Automation' : 
                 activeTab === 'ai' ? 'AI Performance' : 'System Integration'}
              </h4>
              <div className="text-[10px] text-text-secondary">Real-time data</div>
            </div>
            
            {/* Different visualization based on active tab */}
            {activeTab === 'analytics' && (
              <div className="h-28 flex items-center justify-center relative">
                {/* Circular progress indicator */}
                <div className="relative w-24 h-24">
                  {/* Background circle */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="transparent" stroke="var(--dark-border)" strokeWidth="8" />
                    {/* Colored progress arc - 78% complete */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="transparent" 
                      stroke={`var(--${dashboardContent.metrics[0].color})`}
                      strokeWidth="8"
                      strokeDasharray="283"
                      strokeDashoffset="62"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold" style={{ color: `var(--${dashboardContent.metrics[0].color})` }}>78%</span>
                    <span className="text-[10px] text-text-secondary">Growth</span>
                  </div>
                </div>
                
                {/* Metric highlights */}
                <div className="ml-4 flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-text-secondary">Revenue</span>
                    <div className="w-2/3 h-1.5 bg-dark-border/50 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '84%', backgroundColor: `var(--${dashboardContent.metrics[0].color})` }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-text-secondary">Users</span>
                    <div className="w-2/3 h-1.5 bg-dark-border/50 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '67%', backgroundColor: `var(--${dashboardContent.metrics[1].color})` }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-text-secondary">Retention</span>
                    <div className="w-2/3 h-1.5 bg-dark-border/50 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '92%', backgroundColor: `var(--${dashboardContent.metrics[2].color})` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'automation' && (
              <div className="h-28 relative">
                {/* Workflow visualization */}
                <div className="flex items-center justify-between h-full px-2">
                  {/* Process steps with connections */}
                  <div className="flex items-center justify-between w-full relative">
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-dark-border/70"></div>
                    
                    {/* Progress indicator */}
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-success to-success/20" style={{ width: '75%' }}></div>
                    
                    {/* Process nodes */}
                    {["Input", "Process", "Review", "Approve", "Complete"].map((step, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                          idx <= 2 ? 'bg-success text-white' : 
                          idx === 3 ? 'bg-success/20 border border-success text-success' : 
                          'bg-dark-surface border border-dark-border text-text-secondary'
                        }`}>
                          {idx <= 2 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          ) : (
                            <span className="text-[8px]">{idx + 1}</span>
                          )}
                        </div>
                        <span className="text-[8px] mt-1 text-text-secondary">{step}</span>
                        
                        {/* Tasks counter badge - only for active step */}
                        {idx === 3 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-warning text-white flex items-center justify-center text-[8px] font-bold">
                            3
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Status updates */}
                <div className="absolute bottom-0 left-0 right-0 text-[8px] px-2 flex justify-between">
                  <span className="text-success">8 tasks completed</span>
                  <span className="text-warning">3 awaiting approval</span>
                </div>
              </div>
            )}
            
            {activeTab === 'ai' && (
              <div className="h-28 relative p-1">
                {/* AI Model visualization */}
                <div className="h-full flex items-center">
                  {/* Neural network nodes */}
                  <div className="flex-1 h-full relative">
                    {/* Input layer */}
                    {[0.2, 0.5, 0.8, 0.4].map((pos, i) => (
                      <div 
                        key={`in-${i}`} 
                        className="absolute w-3 h-3 rounded-full bg-accent/80"
                        style={{ left: '10%', top: `${pos * 100}%` }}
                      ></div>
                    ))}
                    
                    {/* Hidden layers - connection lines are drawn dynamically with SVG */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      {/* Sample connections */}
                      <line x1="10%" y1="20%" x2="40%" y2="30%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="20%" x2="40%" y2="70%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="50%" x2="40%" y2="30%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="50%" x2="40%" y2="70%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="80%" x2="40%" y2="30%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="80%" x2="40%" y2="70%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="40%" x2="40%" y2="30%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="10%" y1="40%" x2="40%" y2="70%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      
                      {/* Second layer to third */}
                      <line x1="40%" y1="30%" x2="70%" y2="40%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="40%" y1="30%" x2="70%" y2="60%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="40%" y1="70%" x2="70%" y2="40%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="40%" y1="70%" x2="70%" y2="60%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      
                      {/* Output layer */}
                      <line x1="70%" y1="40%" x2="90%" y2="35%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="70%" y1="40%" x2="90%" y2="65%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="70%" y1="60%" x2="90%" y2="35%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      <line x1="70%" y1="60%" x2="90%" y2="65%" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.3" />
                      
                      {/* Animated data particle */}
                      <circle r="1.5" fill="var(--accent)">
                        <animateMotion 
                          path="M 30,60 L 120,40 L 210,50 L 270,35" 
                          dur="1.5s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                    </svg>
                    
                    {/* Hidden layer */}
                    {[0.3, 0.7].map((pos, i) => (
                      <div 
                        key={`h1-${i}`} 
                        className="absolute w-3 h-3 rounded-full bg-accent/80"
                        style={{ left: '40%', top: `${pos * 100}%` }}
                      ></div>
                    ))}
                    
                    {/* Hidden layer 2 */}
                    {[0.4, 0.6].map((pos, i) => (
                      <div 
                        key={`h2-${i}`} 
                        className="absolute w-3 h-3 rounded-full bg-accent/80"
                        style={{ left: '70%', top: `${pos * 100}%` }}
                      ></div>
                    ))}
                    
                    {/* Output layer */}
                    {[0.35, 0.65].map((pos, i) => (
                      <div 
                        key={`out-${i}`} 
                        className="absolute w-3 h-3 rounded-full bg-accent/80"
                        style={{ left: '90%', top: `${pos * 100}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Confidence score */}
                  <div className="ml-2 h-full flex flex-col justify-center">
                    <div className="text-[8px] text-text-secondary mb-1">Confidence</div>
                    <div className="text-lg font-bold" style={{ color: `var(--${dashboardContent.metrics[0].color})` }}>96.8%</div>
                    <div className="text-[8px] text-success mt-1">+1.2%</div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'integration' && (
              <div className="h-28 relative">
                {/* System integration visualization */}
                <div className="h-full flex items-center justify-center">
                  {/* Central system with connections to other systems */}
                  <div className="relative w-full h-full">
                    {/* Central system */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-xl bg-info/20 border border-info flex items-center justify-center">
                      <FeatureIcon iconName="ServerStackIcon" color="info" className="w-6 h-6" />
                    </div>
                    
                    {/* Connected systems */}
                    <div className="absolute left-1/6 top-1/4 w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                    </div>
                    
                    <div className="absolute right-1/6 top-1/4 w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                      </svg>
                    </div>
                    
                    <div className="absolute left-1/4 bottom-1/6 w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    
                    <div className="absolute right-1/4 bottom-1/6 w-10 h-10 rounded-lg bg-dark-surface border border-dark-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </div>
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      <line x1="50%" y1="50%" x2="17%" y2="25%" stroke="var(--info)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3,2" />
                      <line x1="50%" y1="50%" x2="83%" y2="25%" stroke="var(--info)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3,2" />
                      <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="var(--info)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3,2" />
                      <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="var(--info)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3,2" />
                      
                      {/* Animated data particles */}
                      <circle r="1.5" fill="var(--info)">
                        <animateMotion 
                          path="M 100,100 L 35,50" 
                          dur="1.2s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                      <circle r="1.5" fill="var(--info)">
                        <animateMotion 
                          path="M 100,100 L 165,50" 
                          dur="1.4s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                      <circle r="1.5" fill="var(--info)">
                        <animateMotion 
                          path="M 50,50 L 100,100" 
                          dur="1.3s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                      <circle r="1.5" fill="var(--info)">
                        <animateMotion 
                          path="M 150,150 L 100,100" 
                          dur="1.5s" 
                          repeatCount="indefinite" 
                        />
                      </circle>
                    </svg>
                  </div>
                </div>
                
                {/* Stats at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 py-1">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                    <span className="text-[8px] text-text-secondary">4 Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-info rounded-full"></div>
                    <span className="text-[8px] text-text-secondary">853k API Calls</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                    <span className="text-[8px] text-text-secondary">42ms Response</span>
                  </div>
                </div>
              </div>
            )}
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