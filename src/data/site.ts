export const defaultLocale = 'es';
export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: 'browser' | 'operations' | 'workflow' | 'support';
};

export type ProcessStep = {
  title: string;
  description: string;
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
  icon: 'experience' | 'focus' | 'trust';
};

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  navItems: NavItem[];
  header: {
    ariaLabel: string;
    logoAriaLabel: string;
    mainMenuAriaLabel: string;
    mobileMenuAriaLabel: string;
    menuLabel: string;
    contactLabel: string;
  };
  hero: {
    eyebrow: string;
    description: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: Service[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    items: Solution[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ProcessStep[];
  };
  standards: {
    eyebrow: string;
    title: string;
    items: Standard[];
  };
  why: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    points: ValuePoint[];
  };
  cta: {
    title: string;
    description: string;
    contactLabel: string;
  };
  contact: {
    menuLabel: string;
    emailTitle: string;
    emailDescription: string;
    whatsappText: string;
    whatsappTitle: string;
    whatsappDescription: string;
  };
  footer: {
    navAriaLabel: string;
    description: string;
    navHeading: string;
    servicesHeading: string;
    resourcesHeading: string;
    languageHeading: string;
    switchLabel: string;
    copyright: string;
  };
  scrollToTopLabel: string;
  notFound: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    body: string;
    homeLabel: string;
    homeAriaLabel: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    locale: 'es',
    meta: {
      title: 'Solwave | Build. Flow. Scale.',
      description: 'Sitios web, sistemas y automatizaciones para negocios modernos. Cotiza tu proyecto y recibe una propuesta clara.',
    },
    navItems: [
      { label: 'Inicio', href: '#home' },
      { label: 'Servicios', href: '#services' },
      { label: 'Soluciones', href: '#solutions' },
      { label: 'Acerca de', href: '#about' },
      { label: 'Contacto', href: '#contact' },
    ],
    header: {
      ariaLabel: 'Navegación principal',
      logoAriaLabel: 'Inicio de Solwave',
      mainMenuAriaLabel: 'Menú principal',
      mobileMenuAriaLabel: 'Menú móvil',
      menuLabel: 'Menú',
      contactLabel: 'Cotizar',
    },
    hero: {
      eyebrow: 'SOLUCIONES DIGITALES PARA NEGOCIOS MODERNOS',
      description: 'Diseñamos sitios web, sistemas y automatizaciones que ayudan a los negocios a organizar sus operaciones y crecer.',
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Lo que construimos para tu negocio.',
      items: [
        {
          title: 'Sitios web empresariales',
          description: 'Sitios web y landing pages modernos, diseñados para presentar tu negocio con claridad y generar nuevos clientes.',
          icon: 'browser',
        },
        {
          title: 'Software personalizado',
          description: 'Sistemas hechos a la medida para mejorar flujos de trabajo, organizar operaciones y adaptarse a la forma en que trabaja tu negocio.',
          icon: 'operations',
        },
        {
          title: 'Automatización y comunicación',
          description: 'Automatizaciones, bots de WhatsApp y flujos conectados que reducen trabajo manual y mejoran tiempos de respuesta.',
          icon: 'workflow',
        },
        {
          title: 'Implementación y soporte técnico',
          description: 'Lanzamiento, mantenimiento y soporte técnico confiable para estabilidad a largo plazo.',
          icon: 'support',
        },
      ],
    },
    solutions: {
      eyebrow: 'Soluciones que desarrollamos',
      title: 'Soluciones construidas para operaciones reales.',
      items: [
        {
          title: 'Sistemas de Gestión Operativa',
          category: 'Operaciones de negocio',
          description: 'Software personalizado diseñado alrededor de la forma en que trabaja tu negocio. Puede incluir agendamiento de citas, paneles internos, seguimiento de solicitudes o herramientas de gestión de clientes.',
          variant: 'blue',
        },
        {
          title: 'Automatizaciones de Negocio',
          category: 'Automatización',
          description: 'Flujos automatizados que ayudan a los negocios a ahorrar tiempo y mantenerse organizados. Puede incluir flujos de WhatsApp, notificaciones, seguimientos y sistemas conectados.',
          variant: 'light',
        },
        {
          title: 'Sitios Web Profesionales',
          category: 'Presencia digital',
          description: 'Sitios web y landing pages diseñados para comunicar servicios con claridad y generar confianza.',
          variant: 'warm',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un camino claro desde la idea hasta el lanzamiento.',
      steps: [
        {
          title: 'Entendemos tu negocio',
          description: 'Aprendemos cómo operas y dónde se pueden mejorar las cosas.',
        },
        {
          title: 'Planeamos la solución correcta',
          description: 'Definimos la solución más sencilla que resuelve tu problema.',
        },
        {
          title: 'Construimos y probamos',
          description: 'Desarrollamos en pasos claros, manteniendo todo organizado y confiable.',
        },
        {
          title: 'Lanzamos y evolucionamos',
          description: 'Desplegamos, mantenemos y expandimos tu sistema con el tiempo conforme aparecen nuevas necesidades.',
        },
      ],
    },
    standards: {
      eyebrow: 'Por qué elegir Solwave',
      title: 'Soluciones confiables para operaciones reales.',
      items: [
        {
          title: 'Comunicación clara',
          description: 'Colaboración transparente, entrega organizada y facturación disponible cuando tu negocio la necesita.',
        },
        {
          title: 'Sistemas confiables',
          description: 'Software diseñado para mantenerse organizado, estable y fácil de mantener.',
        },
        {
          title: 'Soporte a largo plazo',
          description: 'Mejoras continuas, actualizaciones y soporte técnico conforme tu negocio evoluciona.',
        },
        {
          title: 'Soluciones prácticas',
          description: 'Nos enfocamos en sistemas que resuelven necesidades operativas reales sin complejidad innecesaria.',
        },
      ],
    },
    why: {
      eyebrow: 'Por qué Solwave',
      title: 'Ingeniería real.',
      titleAccent: 'Soluciones prácticas.',
      description: 'Solwave combina experiencia de ingeniería en entornos empresariales con un enfoque práctico centrado en necesidades reales de negocio.',
      points: [
        {
          title: 'Experiencia empresarial',
          description: 'Años de trabajo con sistemas complejos y operaciones reales.',
          icon: 'experience',
        },
        {
          title: 'Ejecución enfocada',
          description: 'Entregamos lo que importa sin complejidad innecesaria.',
          icon: 'focus',
        },
        {
          title: 'Trabajo confiable',
          description: 'Alcance claro, trabajo honesto y confiabilidad a largo plazo.',
          icon: 'trust',
        },
      ],
    },
    cta: {
      title: '¿Listo para mejorar las operaciones de tu negocio?',
      description: 'Cuéntanos qué necesita tu negocio y te ayudamos a encontrar la solución correcta.',
      contactLabel: 'Cotizar proyecto',
    },
    contact: {
      menuLabel: 'Elige un método de contacto',
      emailTitle: 'Envíanos un correo',
      emailDescription: 'Comparte los detalles del proyecto',
      whatsappText: 'Hola Solwave, me gustaría cotizar un sitio web, sistema o automatización para mi negocio. ¿Podemos platicar sobre lo que necesito?',
      whatsappTitle: 'WhatsApp',
      whatsappDescription: 'Inicia una conversación rápida',
    },
    footer: {
      navAriaLabel: 'Navegación del pie de página',
      description: 'Soluciones digitales confiables para negocios modernos.',
      navHeading: 'Navegación',
      servicesHeading: 'Servicios',
      resourcesHeading: 'Recursos',
      languageHeading: 'Idioma',
      switchLabel: 'English',
      copyright: 'Todos los derechos reservados.',
    },
    scrollToTopLabel: 'Volver arriba',
    notFound: {
      title: 'Página no encontrada | Solwave',
      description: 'La página que buscas no se pudo encontrar.',
      eyebrow: '404',
      heading: 'Página no encontrada',
      body: 'La página pudo haberse movido o el enlace puede ser incorrecto.',
      homeLabel: 'Volver al inicio',
      homeAriaLabel: 'Inicio de Solwave',
    },
  },
  en: {
    locale: 'en',
    meta: {
      title: 'Solwave | Build. Flow. Scale.',
      description: 'Websites, custom systems and automations for modern businesses. Get a quote and receive a clear proposal.',
    },
    navItems: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    header: {
      ariaLabel: 'Primary navigation',
      logoAriaLabel: 'Solwave home',
      mainMenuAriaLabel: 'Main menu',
      mobileMenuAriaLabel: 'Mobile menu',
      menuLabel: 'Menu',
      contactLabel: "Let's Talk",
    },
    hero: {
      eyebrow: 'DIGITAL SOLUTIONS FOR MODERN BUSINESSES',
      description: 'We design websites, systems and automations that help businesses organize their operations and grow.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'What we build for your business.',
      items: [
        {
          title: 'Business websites',
          description: 'Modern websites and landing pages designed to present your business clearly and generate new clients.',
          icon: 'browser',
        },
        {
          title: 'Custom software',
          description: 'Systems tailored to improve workflows, organize operations and support the way your business runs.',
          icon: 'operations',
        },
        {
          title: 'Automation & communication',
          description: 'Automations, WhatsApp bots and connected workflows that reduce manual work and improve response times.',
          icon: 'workflow',
        },
        {
          title: 'Technical support & deployment',
          description: 'Reliable deployment, maintenance and technical support for long-term stability.',
          icon: 'support',
        },
      ],
    },
    solutions: {
      eyebrow: 'Solutions we deliver',
      title: 'Solutions built for real operations.',
      items: [
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
      ],
    },
    process: {
      eyebrow: 'How we work',
      title: 'A clear delivery path from idea to launch.',
      steps: [
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
      ],
    },
    standards: {
      eyebrow: 'Why businesses choose Solwave',
      title: 'Reliable solutions built for real business operations.',
      items: [
        {
          title: 'Clear communication',
          description: 'Transparent collaboration, organized delivery and invoicing available for businesses that require it.',
        },
        {
          title: 'Reliable systems',
          description: 'Software designed to stay organized, maintainable and dependable.',
        },
        {
          title: 'Long-term support',
          description: 'Ongoing improvements, updates and technical support as your business evolves.',
        },
        {
          title: 'Practical solutions',
          description: 'We focus on systems that solve real operational needs without unnecessary complexity.',
        },
      ],
    },
    why: {
      eyebrow: 'Why Solwave',
      title: 'Real engineering.',
      titleAccent: 'Practical solutions.',
      description: 'Solwave combines enterprise-level engineering experience with a practical approach focused on real business needs.',
      points: [
        {
          title: 'Enterprise Experience',
          description: 'Built on years of working with complex systems and real operations.',
          icon: 'experience',
        },
        {
          title: 'Focused Execution',
          description: 'We deliver what matters without unnecessary complexity.',
          icon: 'focus',
        },
        {
          title: 'Built for Trust',
          description: 'Clear scope, honest work and long-term reliability.',
          icon: 'trust',
        },
      ],
    },
    cta: {
      title: 'Ready to improve your business operations?',
      description: 'Tell us what your business needs, and we will help you find the right solution.',
      contactLabel: 'Get a Quote',
    },
    contact: {
      menuLabel: 'Choose contact method',
      emailTitle: 'Email us',
      emailDescription: 'Send project details',
      whatsappText: 'Hi Solwave, I would like to get a quote for a website, custom system, or automation for my business. Can we talk about what I need?',
      whatsappTitle: 'WhatsApp',
      whatsappDescription: 'Start a quick chat',
    },
    footer: {
      navAriaLabel: 'Footer navigation',
      description: 'Reliable digital solutions built for modern business operations.',
      navHeading: 'Navigation',
      servicesHeading: 'Services',
      resourcesHeading: 'Resources',
      languageHeading: 'Language',
      switchLabel: 'Español',
      copyright: 'All rights reserved.',
    },
    scrollToTopLabel: 'Scroll to top',
    notFound: {
      title: 'Page not found | Solwave',
      description: 'The page you are looking for could not be found.',
      eyebrow: '404',
      heading: 'Page not found',
      body: 'The page may have moved, or the link may be incorrect.',
      homeLabel: 'Back to Home',
      homeAriaLabel: 'Solwave home',
    },
  },
};

export const localizedHomePaths: Record<Locale, string> = {
  es: '/es/',
  en: '/en/',
};

export const getContent = (locale: Locale) => siteContent[locale];

export const getAlternateLocale = (locale: Locale): Locale => (locale === 'es' ? 'en' : 'es');
