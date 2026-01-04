'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Molly2605', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/milagros-lasschar-web-designer/', label: 'LinkedIn' },
    { icon: FaBehance, href: 'https://www.behance.net/milalasschar', label: 'Behance' },
    //{ icon: FaDribbble, href: '#', label: 'Dribbble' },//
  ]

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 sm:opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 sm:opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 sm:opacity-70 animate-blob animation-delay-4000"></div>
      </div>

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
            <span className="text-gray-900">Desarrolladora Web</span>
            <br />
            <span className="text-gray-700">& Diseñadora UX/UI</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Creo experiencias digitales hermosas. Diseño y desarrollo con propósito, estética y usabilidad
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

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline">Conoce más sobre mí</span>
            <span className="sm:hidden">Conoce más</span>
            <HiArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

