// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  metrics: string[]; // Impact numbers that recruiters love
  stack: string[]; // Tech stack chips
  links?: {
    demo?: string;
    code?: string;
  };
  cover?: string; // Project image
  featured?: boolean; // Show on homepage
};

export const projects: Project[] = [
  {
    slug: 'expense-tracker',
    title: 'Smart Expense Tracker',
    oneLiner:
      'AI-powered expense categorization with real-time analytics dashboard.',
    metrics: [
      '87% categorization accuracy',
      '3x faster than manual entry',
      '500+ users',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
    links: {
      demo: 'https://expense-demo.vercel.app',
      code: 'https://github.com/manasgandy/expense-tracker',
    },
    cover: '/images/expense-tracker.jpg',
    featured: true,
  },
  {
    slug: 'portfolio-builder',
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
      demo: 'https://dev-portfolios.com',
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
