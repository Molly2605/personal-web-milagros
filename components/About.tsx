'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaUsers,
  FaLightbulb,
} from 'react-icons/fa'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      icon: FaCode,
      title: 'Desarrollo Frontend',
      description: 'React, Next.js, Vue.js, Vite.js, TypeScript, JavaScript, HTML5, CSS3',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPalette,
      title: 'Diseño UI/UX',
      description: 'Figma, Design Systems,User Interface Design, Adobe Illustrator - Photoshop, Canva',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaMobile,
      title: 'Responsive & Accesibilidad',
      description: 'Mobile-first Design, Responsive Layouts, Progressive Web Apps (PWA), Accesibilidad Web (WCAG, buenas prácticas)',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaUsers,
      title: 'Experiencia de Usuario & Research',
      description: 'User Research, User Testing, Personas, User Journey Maps, Arquitectura de Información',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaRocket,
      title: 'Performance, SEO Técnico & AEO',
      description: 'Optimización de performance y SEO técnico con enfoque en AEO (Answer Engine Optimization), aplicando buenas prácticas de UX/UI y Frontend.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FaLightbulb,
      title: 'Herramientas & CRM',
      description: 'Salesforce CRM, Gestión de datos y usuarios, Integración con procesos de negocio, Mejores prácticas y automatización básica',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-container  ">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0">
              <span className="gradient-text">Sobre Mí</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Perfil híbrido que conecta diseño, desarrollo y procesos comerciales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                ¿Qué problema ayuda a resolver una diseñadora/frontend como yo?
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Ayudo a empresas y equipos a convertir ideas y necesidades de negocio en experiencias digitales claras, funcionales y usables. Diseño y desarrollo soluciones que no solo se ven bien, sino que funcionan correctamente para el usuario y el negocio.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Mi enfoque combina diseño UX/UI centrado en el usuario con desarrollo frontend moderno, logrando interfaces accesibles, intuitivas y fáciles de mantener. Trabajo desde la comprensión del problema hasta la implementación visual y técnica.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Me especializo en transformar ideas complejas en productos digitales simples, priorizando usabilidad, accesibilidad y coherencia visual para que los usuarios interactúen sin fricción.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Además, como Administradora CRM en Salesforce, configuro pipelines de ventas y automatizo procesos básicos que optimizan la gestión comercial, reducen errores humanos y ahorran tiempo operativo.
              </p>
            </motion.div>

            <motion.div
              className="relative order-1 md:order-2 flex justify-center"
              variants={itemVariants}
            >
              <div className="p-6 sm:p-8">
                <img
                  src="/img/my-profile.png"
                  alt="mi-foto-personal"
                  className="w-70 h-70 sm:w-100 sm:h-100 rounded-full object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
<br></br>
<br></br>
<br></br>
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-200 px-4 sm:px-0">
            Herramientas y conocimientos que utilizo para diseñar, desarrollar y optimizar experiencias digitales.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg card-hover border border-gray-100"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 sm:mb-4`}
                >
                  <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

