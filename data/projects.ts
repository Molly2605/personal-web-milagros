export interface Project {
  title: string
  role?: string
  impact?: string
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
    role: 'UX/UI Designer, Frontend Developer y Salesforce CRM Admin',
    impact:
      'Integración de diseño, desarrollo frontend y CRM para simular un proceso comercial real y mejorar la experiencia del usuario.',
    description:
      'Landing page y simulación de agencia de viajes con enfoque UX y Salesforce CRM',
    fullDescription:
      'Latitud Sur es una agencia de viajes orientada a experiencias turísticas no masivas, enfocadas en apoyar comunidades y grupos locales. El objetivo del proyecto fue diseñar y desarrollar una landing page funcional y accesible que mejorara la experiencia del usuario y, al mismo tiempo, simulara un entorno real de negocio.\n\nEl proyecto se realizó en el marco de una beca de Salesforce como experiencia práctica de aprendizaje. Participé como diseñadora UX/UI, desarrolladora frontend y administradora CRM Salesforce, integrando diseño, desarrollo y visión de producto.\n\nComo administradora Salesforce, configuré objetos personalizados, gestioné leads y oportunidades, y automaticé procesos básicos mediante flows para optimizar el pipeline de ventas y reducir tareas manuales. Además, diseñé y desarrollé la página web utilizando HTML, CSS y JavaScript, asegurando una experiencia clara, responsive y orientada a objetivos comerciales.',
    emoji: '🛍️',
    img: '/img/latitud-sur-salesforce-uxui-front.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Salesforce',
    ],
    features: [
      'Simulación de un entorno real de negocio',
      'Diseño responsive centrado en el usuario',
      'Optimización básica para SEO',
      'Configuración de objetos personalizados en Salesforce',
      'Automatización de procesos mediante flows',
      'Gestión de leads y oportunidades comerciales',
      'Optimización del pipeline de ventas',
      'Creación de bots personalizados para atención a clientes',
    ],
    liveUrl: 'https://molly2605.github.io/Latitud-Sur/',
    githubUrl: 'https://github.com/Molly2605/Latitud-Sur',
  },
  {
    title: 'KEYNOVA — Implementación Web',
    role: 'UX/UI Designer y Frontend Developer',
    impact:
      'Traducción de un deck de diseño en una landing comercial clara y funcional, orientada a facilitar la decisión de compra del usuario',
    description:
      'Landing page desarrollada para una startup de ventas de cerraduras biométricas',
    fullDescription:
      'KEYNOVA es una implementación web desarrollada a partir del deck de diseño, Brand Kit y UI Kit de la marca. El objetivo del proyecto fue crear una landing page con enfoque comercial, presentando de forma clara las cuatro cerraduras disponibles, sus características y diferencias, para ayudar a los usuarios a tomar una decisión de compra informada. La web fue desarrollada utilizando HTML, CSS y JavaScript, priorizando una apariencia moderna, jerarquía visual clara y transiciones elegantes que mejoran la percepción del producto. El diseño se trabajó con un enfoque responsive, asegurando una experiencia consistente en distintos dispositivos.',
    img: '/img/keynova-uxui-front.png',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Material UI',
    ],
    features: [
      'Desarrollo de landing comercial orientada a conversión',
      'Implementación del diseño a partir de Brand Kit y UI Kit',
      'Diseño responsive adaptable a distintos dispositivos',
      'Sistema de etiquetas y filtros para facilitar la navegación',
      'Mejora de la jerarquía visual y experiencia de usuario',
    ],
    liveUrl: 'https://molly2605.github.io/keynova-landing/',
    githubUrl: 'https://github.com/Molly2605/keynova-landing',
  },
  {
    title: 'Mi primer Portafolio!',
    role: 'UX/UI Designer y Frontend Developer',
    impact: 'Creación de un portfolio personal optimizado para performance, accesibilidad y SEO, utilizado como carta de presentación profesional.',
    description:
      'Portfolio personal optimizado para UX, performance y SEO, mostrando proyectos y habilidades.',
    fullDescription:
      'Mi primer portfolio es un sitio web personal desarrollado con Next.js y Framer Motion, creado con el objetivo de presentar proyectos, habilidades y experiencia de forma clara, visualmente atractiva y profesional. El proyecto incluye secciones de proyectos, sobre mí y contacto, con un enfoque en usabilidad, rendimiento y experiencia de usuario.Se trabajaron animaciones suaves y transiciones elegantes para reforzar la narrativa visual sin comprometer la performance. Durante el desarrollo se priorizó un diseño responsive, optimización de carga y buenas prácticas de SEO, además de funcionalidades prácticas como modo oscuro, formulario de contacto funcional y descarga de CV. El proyecto fue desarrollado de forma íntegra, abarcando diseño, desarrollo y optimización.',
    img: '/img/first-portfolio-front.png',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Desarrollo de portfolio personal como herramienta profesional',
      'Animaciones fluidas con Framer Motion',
      'Diseño responsive adaptable a distintos dispositivos',
      'Optimización de rendimiento y carga',
      'Implementación de buenas prácticas de SEO',
      'Modo oscuro para mejorar accesibilidad',
      'Formulario de contacto funcional',
      'Descarga de CV integrada',
      'Desarrollado 100% inteligencia artesanal',
    ],
    liveUrl: 'https://mililasschar-portfolio.netlify.app/',
    githubUrl: 'https://github.com/Molly2605/demo-portfolio',
  },
  {
    title: 'Deck diseño + Demo Figma - App mobile IA:maev',
    role: 'UX/UI Designer',
    impact: 'Diseño y prototipo funcional que permite a los usuarios planificar outfits fácilmente, validando flujos y experiencias mediante un prototipo interactivo en Figma.',
    description:
      'App de asistencia en moda con inteligencia artificial para organizar outfits y mejorar la experiencia del usuario.',
    fullDescription:
      'Proyecto UX/UI completo — Este proyecto consistió en diseñar una solución digital para ayudar a los usuarios a organizarse a la hora de salir, abordando todo el proceso de desarrollo UX/UI. Realicé investigación de marca y mercado, identificación de necesidades, motivaciones y deseos de los usuarios. Definí personas, competencias de marca, mapeo del usuario y su “camino feliz”. Diseñé interfaces funcionales y atractivas, optimizadas para mejorar la experiencia del usuario y facilitar la interacción con la app. Se creó un prototipo funcional en Figma para validar el flujo y la usabilidad.',
    img: '/img/ia-maev-uxui.png',
    technologies: [
      'Diseño UX/UI',
      'Figma',
      'Adobe Illustrator',
      'Google Drive',
    ],
    features: [
      'Visualizaciones interactivas',
      'UX Research',
      'UI Design',
      'Análisis de usuarios',
      'Prototipo funcional en Figma'
    ],
    liveUrl: 'https://drive.google.com/file/d/1Jm3jGLCyqAvXQFCw8gBcZ6OvKFWVcRdO/view?usp=sharing',
    githubUrl: 'https://www.figma.com/proto/Pqq85SCqXK72M3C13MnWVR/Asistente-de-moda-AI?node-id=2-2&t=UiKnLmzLyV09YUaC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'Basic e-commerce',
    role: 'UX/UI Designer y Frontend Developer',
    impact: 'Desarrollé un e-commerce funcional que mejora la navegación y facilita la experiencia de compra, asegurando eficiencia en la gestión de productos y pedidos.',
    description: 'E-commerce de productos para el hogar, optimizado para UX, navegación simple y experiencia de compra fluida.',
    fullDescription:
      'E-commerce básico desarrollado con React y Vite, integrando front-end y back-end para una experiencia de compra completa. Implementé funcionalidades como autenticación de usuarios, gestión de formularios, carrito de compras, filtros por categorías y animaciones para mejorar la interacción. El proyecto se centró en garantizar una experiencia intuitiva, diseño responsive y control de stock en tiempo real.',
    img: '/img/my-ecommerce-front.png',
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
      'Carrito de compras funcional',
      'Sistema de filtros por secciones y etiquetas',
      'Historial de pedidos de usuario',
      'Inicio de sesión y creación de usuario',
      'Detalle de productos con información clara',
      'Control de stock global en tiempo real',
    ],
    liveUrl: 'https://ecommerce-molly-ada.netlify.app/',
    githubUrl: 'https://github.com/Molly2605/e-commerce-ada',
  },
  {
    title: 'Latitud Sur Material Gráfico de Marca',
    role: 'UX/UI Designer y Brand Designer (mockups conceptuales)',
    impact: 'Generé un conjunto de materiales conceptuales que permiten visualizar la aplicación de la identidad visual de Latitud Sur, reforzando la percepción de la marca en contextos publicitarios simulados.',
    description:
      'Material gráfico y branding conceptual para Latitud Sur, incluyendo mockups de posters y merchandising.',
    fullDescription:
      'Este proyecto complementa la landing page de Latitud Sur mediante la creación de material gráfico conceptual y mockups de branding. Diseñé piezas visuales representando posters, merchandising como bolsas de tela y stickers, con el objetivo de ilustrar cómo se podría aplicar la identidad visual de la marca. Todos los elementos fueron presentados como mockups digitales para fines de evaluación y aprendizaje dentro de la beca de Salesforce, siguiendo buenas prácticas de diseño UX/UI y coherencia visual.',
    img: '/img/latitud-merch-uxui.png',
    technologies: [
      'adobe Illustrator',
      'A/B Testing',
    ],
    features: [
      'Mockups conceptuales de posters y merchandising',
      'Diseño coherente con la identidad visual de la marca',
      'Adaptación de diseños a distintos formatos digitales',
      'Presentación visual profesional para evaluación y aprendizaje',
    ],
    liveUrl: 'https://drive.google.com/drive/folders/11mTxu-lPNdLnVU9fHfeZ5Hu1MOCYdkTL?usp=sharing',
  },
]

