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

export type Solution = {
  title: string;
  category: string;
  description: string;
  variant: 'blue' | 'light' | 'warm';
};

export type Standard = {
  title: string;
  description: string;
};

export type ValuePoint = {
  title: string;
  description: string;
  icon: 'atom' | 'scale' | 'impact';
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    title: 'Business websites',
    description: '    Modern websites and landing pages designed to present your business clearly and generate new clients.',
    icon: 'window',
  },
  {
    title: 'Custom software',
    description: 'Systems tailored to improve workflows, organize operations and support the way your business runs.',
    icon: 'api',
  },
  {
    title: 'Automation & communication',
    description: 'Automations, WhatsApp bots and connected workflows that reduce manual work and improve response times.',
    icon: 'spark',
  },
  {
    title: 'Technical support & deployment',
    description: 'Reliable deployment, maintenance and technical support for long-term stability.',
    icon: 'cloud',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Understand your business',
    description: 'We learn how you operate and where things can improve.',
  },
  {
    title: 'Plan the right solution',
    description: 'We define the simplest system that solves your problem.',
  },
  {
    title: 'Build & test',
    description: 'We develop in clear steps, keeping everything organized and reliable.',
  },
  {
    title: 'Launch & evolve',
    description: 'We deploy, maintain and expand your system over time as new needs appear.',
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

export const solutions: Solution[] = [
  {
    title: 'Operational Systems',
    category: 'Business Operations',
    description: 'Custom software designed around the way your business works. Examples may include appointment flows, internal dashboards, request tracking or customer management tools.',
    variant: 'blue',
  },
  {
    title: 'Business Automations',
    category: 'Automation',
    description: 'Automated workflows that help businesses save time and stay organized. This may include WhatsApp flows, notifications, follow-ups and connected systems.',
    variant: 'light',
  },
  {
    title: 'Professional Websites',
    category: 'Web presence',
    description: 'Websites and landing pages designed to communicate services clearly and generate trust.',
    variant: 'warm',
  },
];

export const standards: Standard[] = [
  {
    title: 'Architecture First',
    description: 'We design systems around maintainability, reliability and future change from the start.',
  },
  {
    title: 'Transparent Delivery',
    description: 'Clear scope, visible progress and direct communication throughout the engagement.',
  },
  {
    title: 'Production Discipline',
    description: 'Version control, deployment workflows, documentation and practical quality checks.',
  },
  {
    title: 'Business Alignment',
    description: 'Technical decisions stay connected to launch goals, operations and measurable value.',
  },
];

export const valuePoints: ValuePoint[] = [
  {
    title: 'Enterprise Experience',
    description: 'Led by engineering experience from complex business systems and large organizations.',
    icon: 'atom',
  },
  {
    title: 'Agency Execution',
    description: 'A focused delivery model built for product launches, integrations and operational systems.',
    icon: 'scale',
  },
  {
    title: 'Built for Trust',
    description: 'Honest scope, careful implementation and software that can keep growing after launch.',
    icon: 'impact',
  },
];
