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
      title: 'Performance & SEO',
      description: 'Optimización de Performance, SEO Técnico, Core Web Vitals, Optimización de imágenes y assets',
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
    <section id="about" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0">
            <span className="gradient-text">Sobre Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Apasionada por crear experiencias digitales excepcionales
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              Soy una desarrolladora web y diseñadora UX/UI con una pasión por
              crear soluciones digitales que no solo se ven increíbles, sino
              que también funcionan perfectamente. Mi enfoque combina la
              estética del diseño con la funcionalidad del código.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              Con experiencia en desarrollo frontend moderno y diseño centrado
              en el usuario, me especializo en transformar ideas complejas en
              interfaces intuitivas y accesibles que los usuarios adoran.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Cuando no estoy codificando o diseñando, me encanta explorar
              nuevas tendencias en tecnología, participar en comunidades de
              desarrollo y siempre estar aprendiendo algo nuevo.
            </p>
          </motion.div>

          <motion.div
            className="relative order-1 md:order-2"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-accent-400 rounded-xl flex items-center justify-center">
                <img src="/img/my-profile.png" alt="my-profile" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 px-4 sm:px-0">
            Mis Habilidades
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

