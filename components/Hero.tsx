'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Molly2605', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/milagros-lasschar-web-designer/', label: 'LinkedIn' },
    { icon: FaBehance, href: 'https://www.behance.net/milalasschar', label: 'Behance' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden  "
    >

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text">Hola, soy Molly!</span>
            <br />
            <span className="text-gray-300">Desarrolladora Web</span>
            <br />
            <span className="text-gray-400">& Diseñadora UX/UI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Diseño y desarrollo interfaces centradas en el usuario que combinan estética, funcionalidad y objetivos de negocio.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Botón de descarga de CV */}
          {/* Botones de descarga de CV */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* CV ATS */}
            <a
              href="/cv/milagros-lasschar-cv-front-end-ux-ui-ats.pdf"
              download="milagros-lasschar-cv-front-end-ux-ui-ats.pdf"
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-accent-600 
               text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg 
               hover:shadow-xl transition-all text-sm sm:text-base"
            >
              Descargar CV ATS
            </a>

            {/* CV Visual */}
            <a
              href="/cv/milagros-lasschar-cv.pdf"
              download="milagros-lasschar-cv.pdf"
              className="inline-flex items-center justify-center bg-white text-primary-600 
               px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold border-2 border-primary-600 
               hover:bg-primary-50 transition-all text-sm sm:text-base"
            >
              Descargar CV visual
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}