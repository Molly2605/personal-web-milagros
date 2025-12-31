'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaBehance, href: '#', label: 'Behance' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 gradient-text">
              Portfolio
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Desarrolladora web y diseñadora UX/UI apasionada por crear
              experiencias digitales excepcionales.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm sm:text-base hover:text-primary-400 transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm sm:text-base hover:text-primary-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm sm:text-base hover:text-primary-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Redes Sociales</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            © {currentYear} Portfolio. Todos los derechos reservados. Hecho con
            ❤️ usando Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

