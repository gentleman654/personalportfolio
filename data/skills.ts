// data/skills.ts
export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'AI/ML' | 'DevOps';
  icon: {
    type: 'devicon' | 'svg';
    value: string; // For devicon: class name, for svg: path data
  };
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages', icon: { type: 'devicon', value: 'devicon-python-plain colored' } },
  { name: 'JavaScript', category: 'Languages', icon: { type: 'devicon', value: 'devicon-javascript-plain colored' } },
  { name: 'TypeScript', category: 'Languages', icon: { type: 'devicon', value: 'devicon-typescript-plain colored' } },
  { name: 'C++', category: 'Languages', icon: { type: 'devicon', value: 'devicon-cplusplus-plain colored' } },
  { name: 'C', category: 'Languages', icon: { type: 'devicon', value: 'devicon-c-plain colored' } },
  
  // Frontend
  { name: 'React', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-react-original colored' } },
  { name: 'Next.js', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-nextjs-plain' } },
  { name: 'HTML5', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-html5-plain colored' } },
  { name: 'CSS3', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-css3-plain colored' } },
  { name: 'Tailwind', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-tailwindcss-plain colored' } },
  { name: 'Bootstrap', category: 'Frontend', icon: { type: 'devicon', value: 'devicon-bootstrap-plain colored' } },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: { type: 'devicon', value: 'devicon-nodejs-plain colored' } },
  { name: 'FastAPI', category: 'Backend', icon: { type: 'devicon', value: 'devicon-fastapi-plain colored' } },
  { name: 'GraphQL', category: 'Backend', icon: { type: 'devicon', value: 'devicon-graphql-plain colored' } },
  { 
    name: 'REST API', 
    category: 'Backend', 
    icon: { 
      type: 'svg', 
      value: 'M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z' 
    } 
  },
  
  // Databases
  { name: 'MongoDB', category: 'Databases', icon: { type: 'devicon', value: 'devicon-mongodb-plain colored' } },
  { name: 'PostgreSQL', category: 'Databases', icon: { type: 'devicon', value: 'devicon-postgresql-plain colored' } },
  { name: 'SQL', category: 'Databases', icon: { type: 'devicon', value: 'devicon-mysql-plain colored' } },
  { name: 'Redis', category: 'Databases', icon: { type: 'devicon', value: 'devicon-redis-plain colored' } },
  
  // AI/ML
  { 
    name: 'Vector Embeddings', 
    category: 'AI/ML', 
    icon: { 
      type: 'svg', 
      value: 'M2 2h4v4H2V2zm7 0h4v4H9V2zm7 0h4v4h-4V2zM2 9h4v4H2V9zm7 0h4v4H9V9zm7 0h4v4h-4V9zM2 16h4v4H2v-4zm7 0h4v4H9v-4zm7 0h4v4h-4v-4z' 
    } 
  },
  { 
    name: 'RAG', 
    category: 'AI/ML', 
    icon: { 
      type: 'svg', 
      value: 'M21 11h-3.17l2.54-2.54c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L15 11h-2V9l3.95-3.96c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L13 6.17V3c0-.55-.45-1-1-1s-1 .45-1 1v3.17L8.46 3.63c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L11 9v2H9L5.04 7.04c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L6.17 11H3c-.55 0-1 .45-1 1s.45 1 1 1h3.17l-2.54 2.54c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9 13h2v2l-3.95 3.95c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 17.83V21c0 .55.45 1 1 1s1-.45 1-1v-3.17l2.54 2.54c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13 15v-2h2l3.96 3.96c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L17.83 13H21c.55 0 1-.45 1-1s-.45-1-1-1z' 
    } 
  },
  
  // DevOps
  { name: 'Docker', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-docker-plain colored' } },
  { name: 'Kubernetes', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-kubernetes-plain colored' } },
  { name: 'Git', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-git-plain colored' } },
  { name: 'GitHub', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-github-original' } },
  { name: 'Postman', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-postman-plain colored' } },
  { name: 'VS Code', category: 'DevOps', icon: { type: 'devicon', value: 'devicon-vscode-plain colored' } },
];
