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
    slug: 'cli-demo',
    title: 'Developer Portfolio Builder',
    oneLiner:
      'No-code portfolio generator for developers with GitHub integration.',
    metrics: [
      '< 2min setup time',
      '1200+ portfolios created',
      '95% mobile score',
    ],
    stack: ['Next.js', 'GitHub API', 'Tailwind', 'Vercel'],
    links: {
      
      code: 'https://github.com/manasgandy/portfolio-builder',
    },
    cover: '/images/portfolio-builder.jpg',
    featured: true,
  },
  {
    slug: 'crypto-tracker',
    title: 'Crypto Price Alert System',
    oneLiner:
      'Real-time cryptocurrency tracking with smart alerts and portfolio management.',
    metrics: ['99.9% uptime', '50ms avg response', '10K+ price alerts sent'],
    stack: ['Python', 'FastAPI', 'Redis', 'WebSocket', 'Docker'],
    links: {
      demo: 'https://crypto-alerts.com',
      code: 'https://github.com/manasgandy/crypto-tracker',
    },
    cover: '/images/crypto-tracker.jpg',
    featured: true,
  },
];
