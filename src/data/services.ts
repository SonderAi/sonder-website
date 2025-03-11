// src/data/services.ts

export interface ServiceProcess {
    title: string;
    description: string;
  }
  
  export interface ServiceData {
    id: string;
    title: string;
    description: string;
    expandedDescription: string;
    icon: string;
    color: string;
    illustration: string;
    benefits: string[];
    process: ServiceProcess[];
  }
  
  export const ServicesData: ServiceData[] = [
    {
      id: 'web-apps',
      title: 'Custom Web Applications',
      description: 'Tailored web solutions designed to address specific business challenges and goals',
      expandedDescription: 'Our custom web applications are built from the ground up to meet your unique business requirements. We focus on creating intuitive user experiences backed by robust, scalable architectures that can grow with your business.',
      icon: 'ServerStackIcon',
      color: 'primary',
      illustration: 'web',
      benefits: [
        'Intuitive, user-friendly interfaces',
        'Scalable architecture for growing businesses',
        'Secure, reliable performance',
        'Seamless integration with existing systems',
        'Responsive design for all devices',
        'Comprehensive analytics and reporting'
      ],
      process: [
        {
          title: 'Requirements Analysis',
          description: 'We work closely with you to understand your specific needs, workflows, and business objectives.'
        },
        {
          title: 'UX/UI Design',
          description: 'Creating intuitive interfaces that balance aesthetics with functionality for optimal user experience.'
        },
        {
          title: 'Development',
          description: 'Building your application using modern frameworks and best practices for performance and security.'
        },
        {
          title: 'Testing & QA',
          description: 'Rigorous testing across devices and use cases to ensure reliability and optimal performance.'
        },
        {
          title: 'Deployment & Integration',
          description: 'Smooth deployment and integration with your existing systems and data sources.'
        }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI-Powered Solutions',
      description: 'Intelligent tools that leverage AI to automate processes and drive insights',
      expandedDescription: 'Our AI solutions help businesses unlock the power of their data. From predictive analytics to natural language processing, we implement cutting-edge AI technologies that provide actionable insights and automate complex processes.',
      icon: 'CpuChipIcon',
      color: 'accent',
      illustration: 'ai',
      benefits: [
        'Machine learning models for predictive analytics',
        'Natural language processing capabilities',
        'Automated data analysis and visualization',
        'Continuous improvement through learning',
        'Real-time decision support systems',
        'Computer vision applications'
      ],
      process: [
        {
          title: 'Data Assessment',
          description: 'Analyzing your available data sources and identifying opportunities for AI application.'
        },
        {
          title: 'Algorithm Selection',
          description: 'Choosing the optimal algorithms and models based on your specific business needs.'
        },
        {
          title: 'Model Development',
          description: 'Building and training custom AI models using your data to achieve specific objectives.'
        },
        {
          title: 'Integration',
          description: 'Seamlessly integrating AI capabilities into your existing systems and workflows.'
        },
        {
          title: 'Monitoring & Refinement',
          description: 'Continuous monitoring and improvement of models to ensure optimal performance.'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Business Process Automation',
      description: 'Streamline operations by automating repetitive tasks and optimizing workflows',
      expandedDescription: 'Our business process automation solutions eliminate manual, repetitive tasks and streamline complex workflows. By digitizing and automating key processes, we help you increase efficiency, reduce errors, and free up your team to focus on high-value activities.',
      icon: 'ArrowPathIcon',
      color: 'secondary',
      illustration: 'automation',
      benefits: [
        'Reduced operational costs',
        'Minimized human error',
        'Increased efficiency and productivity',
        'Better resource allocation',
        'Improved process visibility and tracking',
        'Enhanced compliance and reporting'
      ],
      process: [
        {
          title: 'Process Mapping',
          description: 'Documenting and analyzing your current workflows to identify automation opportunities.'
        },
        {
          title: 'Solution Design',
          description: 'Creating a custom automation solution tailored to your specific business processes.'
        },
        {
          title: 'Development',
          description: 'Building the automation tools and integrations needed to streamline your workflows.'
        },
        {
          title: 'Testing',
          description: 'Thorough testing to ensure reliability, accuracy, and performance of automated processes.'
        },
        {
          title: 'Implementation & Training',
          description: 'Smooth deployment and comprehensive training for your team to maximize adoption.'
        }
      ]
    }
  ];