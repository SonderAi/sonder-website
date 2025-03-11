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
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences',
      expandedDescription: 'Our mobile app development services help businesses reach customers on their preferred devices. We build responsive, feature-rich applications for iOS and Android that combine beautiful design with powerful functionality to engage users and drive business growth.',
      icon: 'DevicePhoneMobileIcon',
      color: 'secondary',
      illustration: 'mobile',
      benefits: [
        'Native and cross-platform solutions',
        'Intuitive user interfaces and experiences',
        'Offline functionality capabilities',
        'Seamless backend integration',
        'Push notification systems',
        'App store optimization and deployment'
      ],
      process: [
        {
          title: 'Discovery',
          description: 'Understanding your business goals, target audience, and key app requirements.'
        },
        {
          title: 'UX/UI Design',
          description: 'Creating engaging, intuitive interfaces optimized for mobile interaction patterns.'
        },
        {
          title: 'Development',
          description: 'Building your app using modern frameworks for optimal performance and user experience.'
        },
        {
          title: 'Testing',
          description: 'Comprehensive testing across multiple devices and platforms to ensure reliability.'
        },
        {
          title: 'Deployment & Support',
          description: 'Publishing to app stores and providing ongoing maintenance and feature updates.'
        }
      ]
    }
  ];