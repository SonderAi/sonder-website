import React, { useState } from 'react';
import FeatureIcon from '../../ui/FeatureIcon';

interface MobileAppDemoProps {
  className?: string;
}

const MobileAppDemo: React.FC<MobileAppDemoProps> = ({ className = '' }) => {
  const [activeScreen, setActiveScreen] = useState('home');

  // App content based on active screen
  const getAppContent = () => {
    switch(activeScreen) {
      case 'home':
        return {
          title: 'Dashboard',
          header: 'Welcome back, Alex',
          subtitle: 'Your daily summary',
          stats: [
            { label: 'Tasks', value: '8', icon: 'CheckCircleIcon', color: 'primary' },
            { label: 'Messages', value: '12', icon: 'ChatBubbleLeftIcon', color: 'info' },
            { label: 'Goals', value: '75%', icon: 'ChartBarIcon', color: 'success' }
          ],
          mainContent: 'home',
        };
      case 'analytics':
        return {
          title: 'Analytics',
          header: 'Performance',
          subtitle: 'Last 30 days',
          stats: [
            { label: 'Growth', value: '+18%', icon: 'ArrowTrendingUpIcon', color: 'success' },
            { label: 'Revenue', value: '$2.4k', icon: 'CurrencyDollarIcon', color: 'primary' },
            { label: 'Users', value: '648', icon: 'UserGroupIcon', color: 'info' }
          ],
          mainContent: 'analytics',
        };
      case 'profile':
        return {
          title: 'Profile',
          header: 'Alex Morgan',
          subtitle: 'Premium Member',
          stats: [
            { label: 'Level', value: '24', icon: 'StarIcon', color: 'accent' },
            { label: 'Friends', value: '186', icon: 'UserCircleIcon', color: 'info' },
            { label: 'Posts', value: '42', icon: 'PhotoIcon', color: 'primary' }
          ],
          mainContent: 'profile',
        };
      case 'settings':
        return {
          title: 'Settings',
          header: 'App Settings',
          subtitle: 'Customize your experience',
          stats: [
            { label: 'Theme', value: 'Dark', icon: 'MoonIcon', color: 'primary' },
            { label: 'Alerts', value: 'On', icon: 'BellIcon', color: 'warning' },
            { label: 'Privacy', value: 'High', icon: 'ShieldCheckIcon', color: 'success' }
          ],
          mainContent: 'settings',
        };
      default:
        return {
          title: 'Dashboard',
          header: 'Welcome back, Alex',
          subtitle: 'Your daily summary',
          stats: [
            { label: 'Tasks', value: '8', icon: 'CheckCircleIcon', color: 'primary' },
            { label: 'Messages', value: '12', icon: 'ChatBubbleLeftIcon', color: 'info' },
            { label: 'Goals', value: '75%', icon: 'ChartBarIcon', color: 'success' }
          ],
          mainContent: 'home',
        };
    }
  };

  const appContent = getAppContent();
  
  return (
    <div className={`relative ${className}`}>
      {/* Mobile Phone Frame */}
      <div className="relative mx-auto w-[280px] h-[560px]">
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-950 rounded-[32px] shadow-xl overflow-hidden">
          {/* Phone Display with notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-dark rounded-b-xl z-20"></div>
          
          {/* Phone Screen */}
          <div className="absolute inset-0 m-2 rounded-[28px] overflow-hidden border border-dark-surface">
            {/* App Interface */}
            <div className="relative w-full h-full bg-gradient-to-br from-dark/80 via-dark-surface to-dark/90 overflow-hidden">
              {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Gradient blobs */}
                <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-xl"></div>
                <div className="absolute bottom-1/4 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-accent/10 to-secondary/5 blur-xl"></div>
                
                {/* Subtle grid pattern */}
                <div className="absolute inset-0 opacity-5" 
                    style={{ 
                      backgroundImage: `linear-gradient(var(--dark-border) 1px, transparent 1px), 
                                        linear-gradient(90deg, var(--dark-border) 1px, transparent 1px)`, 
                      backgroundSize: '20px 20px' 
                    }}>
                </div>
              </div>

              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 px-5 py-2 flex justify-between items-center text-[10px] text-white/90 z-20">
                <div>9:41</div>
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l-.53-.53Z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                  <div className="w-5 h-2 rounded-sm bg-white/90 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-success to-success" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* App Header */}
              <div className="absolute top-8 left-0 right-0 px-4 pt-2">
                <h1 className="text-sm font-semibold text-white">{appContent.title}</h1>
              </div>
              
              {/* Main Content Area */}
              <div className="absolute top-16 bottom-16 left-0 right-0 px-4 overflow-hidden">
                {/* Header Content */}
                <div className="mb-4">
                  <h2 className="text-base font-bold" style={{ color: `var(--${appContent.stats[0].color})` }}>
                    {appContent.header}
                  </h2>
                  <p className="text-xs text-text-secondary">{appContent.subtitle}</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {appContent.stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-2 border border-dark-border/50 transition-all duration-300"
                      style={{ 
                        boxShadow: `0 4px 12px rgba(var(--${stat.color}-rgb), 0.15)`,
                        borderImage: `linear-gradient(to bottom right, var(--${stat.color})/40%, transparent) 1`
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <FeatureIcon iconName={stat.icon} color={stat.color} className="w-5 h-5 mb-1" />
                        <div className="text-base font-bold" style={{ color: `var(--${stat.color})` }}>{stat.value}</div>
                        <div className="text-[8px] text-text-secondary mt-0.5">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                                {/* Screen-specific Content */}
                                <div className="mb-4">
                  {activeScreen === 'home' && (
                    <div className="space-y-3">
                      {/* Today's Tasks */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Today's Tasks</h3>
                        <div className="space-y-2">
                          {[
                            { text: 'Team meeting', complete: true, time: '10:00 AM' },
                            { text: 'Project proposal', complete: true, time: '12:30 PM' },
                            { text: 'Client call', complete: false, time: '3:00 PM' },
                            { text: 'Review designs', complete: false, time: '4:15 PM' }
                          ].map((task, idx) => (
                            <div key={idx} className="flex items-center justify-between text-[10px]">
                              <div className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded-full flex items-center justify-center ${task.complete ? 'bg-success' : 'border border-text-secondary'}`}>
                                  {task.complete && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2 h-2 text-white">
                                      <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                                <span className={`${task.complete ? 'line-through text-text-secondary' : 'text-white'}`}>{task.text}</span>
                              </div>
                              <span className="text-text-secondary">{task.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Recent Activity */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Recent Activity</h3>
                        <div className="space-y-2">
                          {[
                            { icon: 'DocumentTextIcon', text: 'Report generated', time: '2h ago', color: 'primary' },
                            { icon: 'UserPlusIcon', text: 'New team member', time: '5h ago', color: 'info' },
                            { icon: 'BellAlertIcon', text: 'Meeting reminder', time: '1d ago', color: 'warning' }
                          ].map((activity, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-[10px]">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center`} style={{ backgroundColor: `var(--${activity.color})/20%` }}>
                                <FeatureIcon iconName={activity.icon} color={activity.color} className="w-3 h-3" />
                              </div>
                              <span className="text-white flex-1">{activity.text}</span>
                              <span className="text-text-secondary">{activity.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeScreen === 'analytics' && (
                    <div className="space-y-3">
                      {/* Chart Visualization */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50 h-32">
                        <h3 className="text-xs font-semibold text-white mb-2">Growth Trend</h3>
                        {/* Simple Bar Chart */}
                        <div className="flex items-end h-16 space-x-1 mt-2">
                          {[35, 42, 58, 48, 62, 78, 65, 72, 85].map((value, idx) => (
                            <div key={idx} className="flex-1 relative group">
                              <div 
                                className="w-full bg-gradient-to-t from-success/80 to-accent/60 rounded-sm transition-all duration-300 group-hover:translate-y-[-2px]"
                                style={{ height: `${value}%` }}
                              ></div>
                              {/* Tooltip on hover */}
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-dark text-white text-[8px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {value}%
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-1 text-[8px] text-text-secondary">
                          <span>Jan</span>
                          <span>Sep</span>
                        </div>
                      </div>
                      
                      {/* Comparison Metrics */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Performance</h3>
                        <div className="space-y-2">
                          {[
                            { label: 'Conversion Rate', current: 4.8, previous: 3.2, unit: '%' },
                            { label: 'Avg. Session', current: 3.2, previous: 2.5, unit: 'min' },
                            { label: 'Bounce Rate', current: 24, previous: 38, unit: '%', inverted: true }
                          ].map((metric, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between items-center text-[10px]">
                                <span className="text-text-secondary">{metric.label}</span>
                                <div className="flex items-center space-x-1">
                                  <span className="text-white">{metric.current}{metric.unit}</span>
                                  <span className={`${metric.inverted 
                                    ? metric.current < metric.previous ? 'text-success' : 'text-error'
                                    : metric.current > metric.previous ? 'text-success' : 'text-error'}`}>
                                    {metric.inverted
                                      ? metric.current < metric.previous ? '↓' : '↑'
                                      : metric.current > metric.previous ? '↑' : '↓'}
                                    {Math.abs(((metric.current - metric.previous) / metric.previous) * 100).toFixed(1)}%
                                  </span>
                                </div>
                              </div>
                              <div className="w-full h-1 bg-dark-border rounded-full overflow-hidden">
                                <div 
                                  className="h-full rounded-full bg-gradient-to-r from-primary to-info" 
                                  style={{ width: `${(metric.current / (metric.inverted ? 100 : Math.max(metric.current, metric.previous) * 1.5)) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'profile' && (
                    <div className="space-y-3">
                      {/* Profile Card */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50 flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-lg font-bold mr-3">
                          A
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold text-white">Alex Morgan</h3>
                          <p className="text-[10px] text-text-secondary">Product Designer</p>
                          <div className="flex mt-1">
                            <div className="px-1.5 py-0.5 bg-accent/20 rounded-sm text-accent text-[8px] mr-1">Premium</div>
                            <div className="px-1.5 py-0.5 bg-success/20 rounded-sm text-success text-[8px]">Verified</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Achievement Badges */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Achievements</h3>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            { icon: 'TrophyIcon', name: 'Top Performer', active: true, color: 'warning' },
                            { icon: 'FireIcon', name: '30-Day Streak', active: true, color: 'error' },
                            { icon: 'StarIcon', name: 'Rising Star', active: true, color: 'accent' },
                            { icon: 'AcademicCapIcon', name: 'Expert', active: false, color: 'info' }
                          ].map((badge, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                              <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                                  ${badge.active ? `bg-${badge.color}/20` : 'bg-dark-border/20'}`}
                              >
                                <FeatureIcon 
                                  iconName={badge.icon} 
                                  color={badge.active ? badge.color : 'text-secondary'} 
                                  className="w-4 h-4" 
                                />
                              </div>
                              <span className={`text-[8px] ${badge.active ? 'text-white' : 'text-text-secondary'}`}>
                                {badge.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Activity Feed */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Recent Posts</h3>
                        <div className="space-y-2">
                          {[
                            { title: 'Design Systems 101', likes: 48, comments: 12, time: '2d' },
                            { title: 'UX Research Methods', likes: 32, comments: 8, time: '5d' }
                          ].map((post, idx) => (
                            <div key={idx} className="text-[10px] p-2 bg-dark/30 rounded-lg">
                              <div className="font-medium text-white mb-1">{post.title}</div>
                              <div className="flex justify-between text-text-secondary">
                                <div className="flex space-x-2">
                                  <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 mr-0.5">
                                      <path d="M2 6.342a3.375 3.375 0 0 1 1.825-2.997l.203-.107a4.87 4.87 0 0 1 1.803-.355h.169c.329 0 .644-.043.949-.121 1.031-.268 2.355-.268 3.386 0 .306.079.62.121.95.121h.168c.644 0 1.278.12 1.803.355l.203.107A3.375 3.375 0 0 1 14 6.342V10.5a3.375 3.375 0 0 1-3.375 3.375H5.375A3.375 3.375 0 0 1 2 10.5V6.342Z" />
                                      <path d="M8.5 8.737a1.5 1.5 0 1 1-1.5-2.474 1.5 1.5 0 0 1 1.5 2.474Z" />
                                    </svg>
                                    {post.likes}
                                  </div>
                                  <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 mr-0.5">
                                      <path fillRule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943l.653.09c.86.115 1.53.89 1.57 1.759A1.87 1.87 0 0 1 3.04 14.4l-.11.014c-.279.037-.517.234-.518.493 0 .45.095.442.532.442h8.578c1.515 0 2.75-1.235 2.75-2.75v-4.16c0-1.515-1.235-2.75-2.75-2.75h-.379l.467-.467a.75.75 0 1 0-1.06-1.06l-1.591 1.59a.75.75 0 0 0-.22.53v.25c0 .414.336.75.75.75h2.032c.69 0 1.25.56 1.25 1.25v4.25a1.25 1.25 0 0 1-1.25 1.25H7.774a.75.75 0 0 0-.75.75v.325c0 .414.336.75.75.75h.475a.75.75 0 0 0 0-1.5H7.75v-.075a.249.249 0 0 1 .25-.25h3.723a2.75 2.75 0 0 0 2.75-2.75v-4.04c0-1.515-1.235-2.75-2.75-2.75h-1.75V4.49a2.25 2.25 0 0 1 .659-1.591l.591-.591a.75.75 0 1 0-1.06-1.06l-1.591 1.59a2.25 2.25 0 0 0-.659 1.591v1.341h-3.92a2.75 2.75 0 0 0-2.72 2.78l-.002.1v.02Z" clipRule="evenodd" />
                                    </svg>
                                    {post.comments}
                                  </div>
                                </div>
                                <span>{post.time} ago</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'settings' && (
                    <div className="space-y-3">
                      {/* Settings Options */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">App Settings</h3>
                        <div className="space-y-2">
                          {[
                            { icon: 'SunIcon', label: 'Dark Mode', value: 'On', color: 'primary' },
                            { icon: 'BellIcon', label: 'Notifications', value: 'All', color: 'warning' },
                            { icon: 'GlobeAltIcon', label: 'Language', value: 'English', color: 'info' }
                          ].map((setting, idx) => (
                            <div key={idx} className="flex items-center justify-between text-[10px] p-1.5 hover:bg-white/5 rounded-md transition-colors">
                              <div className="flex items-center">
                                <div className="mr-2 p-1 rounded-md" style={{ backgroundColor: `var(--${setting.color})/10%` }}>
                                  <FeatureIcon iconName={setting.icon} color={setting.color} className="w-3 h-3" />
                                </div>
                                <span className="text-white">{setting.label}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="text-text-secondary mr-1">{setting.value}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 text-text-secondary">
                                  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Account Settings */}
                      <div className="bg-gradient-to-br from-dark/60 via-dark/40 to-dark/30 backdrop-blur-md rounded-lg p-3 border border-dark-border/50">
                        <h3 className="text-xs font-semibold text-white mb-2">Account</h3>
                        <div className="space-y-2">
                          {[
                            { icon: 'UserCircleIcon', label: 'Profile', color: 'accent' },
                            { icon: 'ShieldCheckIcon', label: 'Privacy', color: 'success' },
                            { icon: 'LockClosedIcon', label: 'Security', color: 'error' }
                          ].map((setting, idx) => (
                            <div key={idx} className="flex items-center justify-between text-[10px] p-1.5 hover:bg-white/5 rounded-md transition-colors">
                              <div className="flex items-center">
                                <div className="mr-2 p-1 rounded-md" style={{ backgroundColor: `var(--${setting.color})/10%` }}>
                                  <FeatureIcon iconName={setting.icon} color={setting.color} className="w-3 h-3" />
                                </div>
                                <span className="text-white">{setting.label}</span>
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 text-text-secondary">
                                <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Sign out button */}
                      <button className="w-full py-2 text-xs text-white bg-gradient-to-r from-error/80 to-error/60 rounded-md hover:opacity-90 transition-opacity">
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bottom Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-dark/90 via-dark-surface to-dark/90 backdrop-blur-md border-t border-dark-border flex justify-around items-center px-2">
                {[
                  { screen: 'home', icon: 'HomeIcon', label: 'Home' },
                  { screen: 'analytics', icon: 'ChartBarIcon', label: 'Analytics' },
                  { screen: 'profile', icon: 'UserIcon', label: 'Profile' },
                  { screen: 'settings', icon: 'Cog6ToothIcon', label: 'Settings' }
                ].map((nav) => (
                  <button 
                    key={nav.screen}
                    onClick={() => setActiveScreen(nav.screen)}
                    className={`flex flex-col items-center justify-center w-1/4 py-1 ${activeScreen === nav.screen ? 'text-white' : 'text-text-secondary'}`}
                  >
                    <div 
                      className={`p-1.5 rounded-full ${activeScreen === nav.screen ? 'bg-gradient-to-br from-primary/20 to-accent/10' : ''}`}
                    >
                      <FeatureIcon 
                        iconName={nav.icon} 
                        color={activeScreen === nav.screen ? 'primary' : 'text-secondary'} 
                        className="w-4 h-4" 
                      />
                    </div>
                    <span className="text-[8px] mt-1">{nav.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Button */}
          <div className="absolute -right-1 top-1/4 w-1 h-10 bg-gray-900 rounded-l-md"></div>
          <div className="absolute -left-1 top-1/6 w-1 h-8 bg-gray-900 rounded-r-md"></div>
          <div className="absolute -left-1 top-1/3 w-1 h-8 bg-gray-900 rounded-r-md"></div>
        </div>
        
        {/* Floating Notification */}
        <div className="absolute -top-4 -right-4 p-2 bg-gradient-to-br from-dark/80 to-dark-surface/95 backdrop-blur-md rounded-xl border border-dark-border shadow-lg z-30 max-w-[200px] transform transition-all duration-300 hover:scale-105">
          <div className="flex items-start gap-2">
            <div className="p-1.5 rounded-full bg-primary/20">
              <FeatureIcon iconName="BellIcon" color="primary" className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">New Message</div>
              <p className="text-[9px] text-text-secondary line-clamp-2">
                Sarah shared the latest design files with you.
              </p>
              <div className="mt-1 text-[8px] text-text-secondary">now</div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-5 -left-10 w-20 h-20 border border-primary/20 rounded-full"></div>
        <div className="absolute -bottom-8 -right-5 w-16 h-16 border border-accent/30 rounded-full"></div>
      </div>
      
      {/* Reflection/Shadow */}
      <div className="w-48 h-4 bg-gradient-to-t from-accent/10 to-transparent blur-xl rounded-full mx-auto mt-3"></div>
      
      {/* Decorative Background */}
      <div className="absolute -z-10 inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl"></div>
      </div>
    </div>
  );
};

export default MobileAppDemo;