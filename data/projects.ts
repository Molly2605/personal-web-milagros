export interface Project {
  title: string
  description: string
  fullDescription: string
  emoji: string
  technologies: string[]
  features?: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    title: 'E-commerce Moderno',
    description:
      'Plataforma de comercio electrónico con diseño moderno y funcionalidades avanzadas.',
    fullDescription:
      'Una plataforma completa de e-commerce desarrollada con Next.js y TypeScript. Incluye sistema de autenticación, carrito de compras, pasarela de pagos integrada y panel de administración. El diseño está optimizado para conversión y experiencia de usuario excepcional.',
    emoji: '🛍️',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'MongoDB',
      'NextAuth',
    ],
    features: [
      'Sistema de autenticación seguro',
      'Carrito de compras persistente',
      'Integración con pasarela de pagos',
      'Panel de administración completo',
      'Optimizado para SEO',
      'Diseño responsive',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'App de Gestión de Tareas',
    description:
      'Aplicación web para gestión de tareas con interfaz intuitiva y colaborativa.',
    fullDescription:
      'Una aplicación de productividad desarrollada con React y Firebase. Permite a los usuarios crear, organizar y colaborar en tareas. Incluye funcionalidades como etiquetas, filtros, búsqueda avanzada y notificaciones en tiempo real.',
    emoji: '✅',
    technologies: [
      'React',
      'Firebase',
      'Material-UI',
      'Redux',
      'Framer Motion',
    ],
    features: [
      'Gestión de tareas en tiempo real',
      'Colaboración en equipo',
      'Sistema de etiquetas y filtros',
      'Búsqueda avanzada',
      'Notificaciones push',
      'Sincronización multiplataforma',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portafolio Creativo',
    description:
      'Sitio web portafolio con diseño único y animaciones fluidas.',
    fullDescription:
      'Un portafolio personal desarrollado con Next.js y Framer Motion. Presenta proyectos de manera visualmente atractiva con animaciones suaves y transiciones elegantes. Incluye secciones de proyectos, testimonios y contacto.',
    emoji: '🎨',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Animaciones fluidas',
      'Diseño responsive',
      'Optimización de rendimiento',
      'SEO optimizado',
      'Modo oscuro',
      'Formulario de contacto funcional',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Panel de control con visualización de datos en tiempo real.',
    fullDescription:
      'Un dashboard completo para análisis de datos desarrollado con React y Chart.js. Proporciona visualizaciones interactivas, gráficos en tiempo real y exportación de reportes. Diseñado para ser intuitivo y fácil de usar.',
    emoji: '📊',
    technologies: [
      'React',
      'Chart.js',
      'D3.js',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
    features: [
      'Visualizaciones interactivas',
      'Datos en tiempo real',
      'Exportación de reportes',
      'Filtros avanzados',
      'Comparación de períodos',
      'Alertas personalizables',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Red Social Minimalista',
    description:
      'Plataforma social con enfoque en contenido visual y comunidad.',
    fullDescription:
      'Una red social moderna desarrollada con Next.js y Prisma. Permite a los usuarios compartir contenido, seguir a otros usuarios, comentar y dar likes. Incluye feed personalizado, mensajería directa y sistema de notificaciones.',
    emoji: '👥',
    technologies: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'Cloudinary',
      'Socket.io',
    ],
    features: [
      'Feed personalizado',
      'Sistema de seguimiento',
      'Mensajería en tiempo real',
      'Subida de imágenes',
      'Notificaciones push',
      'Búsqueda de usuarios',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Landing Page SaaS',
    description:
      'Página de aterrizaje moderna para producto SaaS con alta conversión.',
    fullDescription:
      'Una landing page optimizada para conversión desarrollada con Next.js. Incluye secciones de hero, características, testimonios, precios y CTA estratégicamente ubicados. Diseñada siguiendo mejores prácticas de UX/UI para maximizar conversiones.',
    emoji: '🚀',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'A/B Testing',
    ],
    features: [
      'Optimizado para conversión',
      'Animaciones suaves',
      'Formularios optimizados',
      'Testimonios interactivos',
      'SEO avanzado',
      'Analytics integrado',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
]

