export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: 'window' | 'api' | 'spark' | 'cloud';
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Technology = {
  name: string;
  shortName: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  variant: 'blue' | 'light' | 'warm';
};

export type ValuePoint = {
  title: string;
  description: string;
  icon: 'atom' | 'scale' | 'impact';
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    title: 'Web Applications',
    description: 'Custom web apps built for performance, clarity and scalability.',
    icon: 'window',
  },
  {
    title: 'API & Backend',
    description: 'Robust backend systems and APIs that power your product.',
    icon: 'api',
  },
  {
    title: 'Frontend Experiences',
    description: 'Modern, responsive interfaces that users love to use.',
    icon: 'spark',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Reliable deployments and infrastructure that scale.',
    icon: 'cloud',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'We understand your needs and define the right solution.',
  },
  {
    title: 'Design',
    description: 'We plan, prototype and shape the system architecture.',
  },
  {
    title: 'Develop',
    description: 'We build clean, efficient and scalable code.',
  },
  {
    title: 'Deploy & Support',
    description: 'We deploy, monitor and continuously improve.',
  },
];

export const technologies: Technology[] = [
  { name: 'React', shortName: 'Re' },
  { name: 'Next.js', shortName: 'Nx' },
  { name: 'TypeScript', shortName: 'Ts' },
  { name: 'Node.js', shortName: 'Nd' },
  { name: 'PostgreSQL', shortName: 'Pg' },
  { name: 'AWS', shortName: 'Aw' },
];

export const projects: Project[] = [
  {
    title: 'SaaS Dashboard',
    category: 'Analytics',
    description: 'Analytics platform for business metrics, reporting and team visibility.',
    variant: 'blue',
  },
  {
    title: 'TaskFlow',
    category: 'Web App',
    description: 'Project management experience shaped around operational clarity.',
    variant: 'light',
  },
  {
    title: 'E-Commerce Platform',
    category: 'UX + Build',
    description: 'Scalable online store with a modern conversion-focused interface.',
    variant: 'warm',
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: 'Clean & Maintainable',
    description: 'Codebases that stay clear, stable and easy to evolve.',
    icon: 'atom',
  },
  {
    title: 'Scalable Architecture',
    description: 'Systems designed around growth, reliability and change.',
    icon: 'scale',
  },
  {
    title: 'Focused on Impact',
    description: 'Product decisions tied to real user and business value.',
    icon: 'impact',
  },
];
