'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

export default function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'SOBRE MÍ', href: '#about' },
    { name: 'PROYECTOS', href: '#projects' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACTO', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Icono de menú fijo arriba a la derecha */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
          className="text-gray-700 md:text-gray-200 focus:outline-none"
        >
          {isOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white/10 backdrop-blur-xl shadow-2xl z-40 flex flex-col p-6 pr-8"
          >
            {/* Contenido alineado a la izquierda y más abajo */}
            <div className="mt-24 flex flex-col items-start space-y-6">
              <motion.a
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#home')
                }}
                className="text-2xl font-bold gradient-text whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                MILAGROS LASSCHAR
              </motion.a>

              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-xl text-white font-medium hover:text-gray-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}