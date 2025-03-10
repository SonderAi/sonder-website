// src/data/features.ts
import { FeatureData, FeatureCategory } from '../types/types';

export const featureData: FeatureCategory[] = [
  {
    id: 'process',
    title: 'Our Process',
    description: 'A tailored approach that ensures success from concept to deployment',
    features: [
      {
        id: 'collaborative-discovery',
        title: 'Collaborative Discovery',
        description: 'We work closely with your team to understand your business needs, goals, and challenges. Our discovery process combines workshops, interviews, and research to build a solid foundation for your project.',
        icon: 'UserGroupIcon',
        color: 'primary'
      },
      {
        id: 'personalized-solutions',
        title: 'Personalized Solutions',
        description: 'Every business has unique challenges that require custom solutions. We tailor our approach to your specific needs rather than forcing you into a one-size-fits-all product.',
        icon: 'AdjustmentsHorizontalIcon',
        color: 'accent'
      },
      {
        id: 'business-impact',
        title: 'Real-World Business Impact',
        description: 'We focus on solutions that deliver tangible results. Our work directly addresses your business challenges and creates measurable improvements in efficiency, revenue, or customer experience.',
        icon: 'ChartBarIcon',
        color: 'secondary'
      },
      {
        id: 'iterative-delivery',
        title: 'Iterative Delivery',
        description: 'Our agile approach ensures you see progress throughout the development cycle. Regular updates and feedback sessions keep the project aligned with your expectations.',
        icon: 'ArrowPathIcon',
        color: 'success'
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical Excellence',
    description: 'Solutions built to perform, scale, and adapt to your changing needs',
    features: [
      {
        id: 'scalable-architecture',
        title: 'Scalable Architecture',
        description: 'Our solutions are designed to grow with your business. We build systems that can handle increasing loads, additional features, and evolving requirements without requiring a complete rebuild.',
        icon: 'ServerStackIcon',
        color: 'primary'
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'Speed matters. We optimize every aspect of our solutions to ensure lightning-fast performance, from database queries to front-end rendering and network requests.',
        icon: 'BoltIcon',
        color: 'accent'
      },
      {
        id: 'security-compliance',
        title: 'Security & Compliance',
        description: 'Security is built into every layer of our solutions. We adhere to industry best practices and can adjust our approach to meet your specific compliance requirements.',
        icon: 'ShieldCheckIcon',
        color: 'success'
      },
      {
        id: 'integration-capability',
        title: 'Integration Capability',
        description: 'Our solutions play well with others. We design with interoperability in mind, ensuring seamless connections with your existing systems and third-party services.',
        icon: 'ArrowsPointingInIcon',
        color: 'secondary'
      }
    ]
  },
  {
    id: 'ai-innovation',
    title: 'AI Innovation',
    description: 'Cutting-edge artificial intelligence solutions that drive efficiency and insights',
    features: [
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'Transform your data into foresight. Our predictive models help you anticipate trends, customer behavior, and potential issues before they occur.',
        icon: 'ChartPieIcon',
        color: 'primary'
      },
      {
        id: 'natural-language',
        title: 'Natural Language Processing',
        description: 'Enable your systems to understand, interpret, and generate human language. From chatbots to content analysis, we bring language capabilities to your applications.',
        icon: 'ChatBubbleLeftRightIcon',
        color: 'accent'
      },
      {
        id: 'computer-vision',
        title: 'Computer Vision',
        description: 'Give your applications the ability to see and interpret visual information. Our computer vision solutions can automate visual inspections, enhance security, and create immersive experiences.',
        icon: 'EyeIcon',
        color: 'info'
      },
      {
        id: 'automation',
        title: 'Intelligent Automation',
        description: 'Eliminate repetitive tasks and streamline workflows with AI-powered automation. We build systems that learn and improve over time, continuously increasing efficiency.',
        icon: 'CpuChipIcon',
        color: 'secondary'
      }
    ]
  }
];