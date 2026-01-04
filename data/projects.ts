export interface Project {
  title: string
  description: string
  fullDescription: string
  emoji?: string
  img?: string
  technologies: string[]
  features?: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    title: 'Latitud Sur - Salesforce',
    description:
      'Landing page, simulacion agencia de viajes a destinos no tradicionales',
    fullDescription:
      'Latitud Sur es una agencia de viajes que ofrece experiencias turísticas no masivas, enfocadas en apoyar a comunidades y grupos locales. Esta Landing page fue desarrollada con HTML, CSS y JavaScript en el marco de una beca de Salesforce, como parte de una experiencia práctica de aprendizaje. Además del trabajo sobre CRM, diseñé y desarrollé la página web de la agencia con el objetivo de mejorar la experiencia del usuario y simular un entorno real de negocio, integrando diseño, desarrollo frontend y visión de producto.',
    emoji: '🛍️',
    img: '/img/latitud-sur.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Salesforce',
    ],
    features: [
      'Simulación de entorno real de negocio',
      'Optimizado para SEO',
      'Diseño responsivo',
    ],
    liveUrl: 'https://molly2605.github.io/Latitud-Sur/',
    githubUrl: 'https://github.com/Molly2605/Latitud-Sur',
  },
  {
    title: 'Implementación web KEYNOVA a partir del deck de diseño',
    description:
      'Landing page desarrollada para una startup de ventas de cerraduras biométricas',
    fullDescription:
      'Desarrollada con HTML, CSS y JavaScript. La web tiene un enfoque comercial, mostrando las 4 cerraduras disponibles y brindando a los usuarios información visual y funcional para facilitar la decisión de compra. Apariencia moderna con transiciones elegantges',
    img: '/img/keynova.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Material-UI',
    ],
    features: [
      'Diseño responsivo',
      'Desarrollo de landing a partir de Brand Kit e UI Kit',
      'Sistema de etiquetas y filtros',
    ],
    liveUrl: 'https://molly2605.github.io/keynova-landing/',
    githubUrl: 'https://github.com/Molly2605/keynova-landing',
  },
  {
    title: 'Mi primer Portafolio!',
    description:
      'Sitio web portafolio con diseño único y animaciones fluidas.',
    fullDescription:
      'Un portafolio personal desarrollado con Next.js y Framer Motion. Presenta proyectos de manera visualmente atractiva con animaciones suaves y transiciones elegantes. Incluye secciones de proyectos, sobre mí y contacto.',
    img: '/img/first-portfolio.png',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Animaciones fluidas',
      'Diseño responsive',
      'Optimización de rendimiento',
      'Optimizado para SEO',
      'Modo oscuro',
      'Formulario de contacto funcional',
      'Descarga de cv',
      'Desarrollado 100% inteligencia artesanal',
    ],
    liveUrl: 'https://mililasschar-portfolio.netlify.app/',
    githubUrl: 'https://github.com/Molly2605/demo-portfolio',
  },
  {
    title: 'Deck diseño + Demo Figma - App mobile IA:maev',
    description:
      'Una aplicación de asistencia en moda impulsada por inteligencia artificial.',
    fullDescription:
      'Proyecto UX/UI completo — Este proyecto consistió en diseñar una solución digital para la problemática de organizarse a la hora de salir, abordando todo el proceso de desarrollo UX/UI. A lo largo del proyecto, realicé: investigación de marca y mercado, identificación de necesidades, motivaciones y deseos de los usuarios. Definición de personas, competencias de marca, mapeo del usuario y su “camino feliz". Diseño de interfaces funcionales y atractivas, optimizadas para mejorar la experiencia del usuario.',
    img: '/img/ia-maev.png',
    technologies: [
      'Diseño UX/UI',
      'FIGMA',
      'Adobe Illustrator',
      'Google Drive',
    ],
    features: [
      'Visualizaciones interactivas',
      'UX Research',
      'UI Design',
      'Análisis de usuarios',
      'App prototipo funcional en FIGMA'
    ],
    liveUrl: 'https://drive.google.com/file/d/1Jm3jGLCyqAvXQFCw8gBcZ6OvKFWVcRdO/view?usp=sharing',
    githubUrl: 'https://www.figma.com/proto/Pqq85SCqXK72M3C13MnWVR/Asistente-de-moda-AI?node-id=2-2&t=UiKnLmzLyV09YUaC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'Basic e-commerce',
    description: 'Proyecto de e-commerce de productos para el hogar, desarrollado con foco en experiencia de usuario y navegación simple.',
    fullDescription:
      'E-commerce básico desarrollado con React + Vite. Integra tanto el front-end como la gestión de datos en el back-end. Implementé funcionalidades de autenticación, manejo de formularios y animaciones para mejorar la experiencia de usuario.',
    img: '/img/my-ecommerce.png',
    technologies: [
      'React',
      'Vite',
      'Chakra UI Emotion',
      'Framer Motion',
      'Firebase',
      'React Hook Form',
      'React Router DOM',
      'Netlify',
    ],
    features: [
      'Carrito de compras',
      'Sistema de filtros - secciones - etiquetas',
      'Hisotrial de pedidos',
      'Inicio de sesión',
      'Creacion de usuario',
      'Detalle de productos',
      'Control de stock global',
    ],
    liveUrl: 'https://ecommerce-molly-ada.netlify.app/',
    githubUrl: 'https://github.com/Molly2605/e-commerce-ada',
  },
  {
    title: 'Latitud Sur Material gráfico de marca',
    description:
      'Página de aterrizaje moderna para producto SaaS con alta conversión.',
    fullDescription:
      'Una landing page optimizada para conversión desarrollada con Next.js. Incluye secciones de hero, características, testimonios, precios y CTA estratégicamente ubicados. Diseñada siguiendo mejores prácticas de UX/UI para maximizar conversiones.',
    img: '/img/latitud-merch.png',
    technologies: [
      'adobe Illustrator',
      'A/B Testing',
    ],
    features: [
      'Aplicación consistente de la identidad visual de la marca',
      'Diseño de piezas gráficas para múltiples soportes',
      'Adaptación de diseños a distintos formatos y escalas',
      'Enfoque en comunicación clara y reconocimiento de marca',
    ],
    liveUrl: 'https://drive.google.com/drive/folders/11mTxu-lPNdLnVU9fHfeZ5Hu1MOCYdkTL?usp=sharing',
  },
]

