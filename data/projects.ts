// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  metrics: string[];
  stack: string[];
  links?: {
    demo?: string;
    code?: string;
  };
  cover?: string;
  featured?: boolean;
  hideDetails?: boolean; // Hide metrics and case study button
};

export const projects: Project[] = [
  {
    slug: 'exhibit-explorer',
    title: 'Exhibit Explorer',
    oneLiner:
      'Fetches cultural exhibit data from a public API with save-to-favorites support.',
    metrics: [
      '99 Performance, 100 Accessibility (Lighthouse)',
      '98 Best Practices, 82 SEO',
      'Fetches exhibit data in ~180ms via public API',
      'Supports 500+ exhibits with local favorites',
    ],
    stack: ['Next.js', 'Node.js', 'REST API', 'Bootstrap'],
    links: {
      demo: 'https://exhibit-explorer.vercel.app/',
      code: 'https://github.com/gentleman654/exhibitExplorer',
    },
    cover: '/images/exhibit.png',
    featured: true,
  },
  {
    slug: 'Library-Management-System',
    title: 'Library Management System',
    oneLiner:
      'A C++ console application for managing library operations.',
    metrics: [
    'Menu-driven interface with 5+ operations',
    'Persistent file storage for library records',
    'Organized into multiple classes for scalability',
  ],
    stack: ['C++', 'C'],
    links: {
      code: 'https://github.com/gentleman654/Lib-Organiser',
    },
    cover: '/images/c++.png',
    featured: true,
  },
  {
    slug: 'crypto-tracker',
    title: 'Crypto Price Alert System',
    oneLiner:
      'Real-time cryptocurrency tracking with smart alerts and portfolio management.',
    metrics: [],
    stack: ['Python', 'FastAPI', 'Redis', 'WebSocket', 'Docker'],
    cover: '/images/coming-soon.svg',
    featured: true,
    hideDetails: true,
  },
];
