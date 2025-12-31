'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'
import { projectsData } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <section id="projects" className="section-container bg-gray-50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0">
            <span className="gradient-text">Mis Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Explora algunos de mis trabajos más recientes. Cada proyecto
            representa mi pasión por el diseño y el desarrollo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedProject(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary-400 to-accent-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl">{project.emoji}</span>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-primary-100 text-primary-700 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 text-xs sm:text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <button className="text-sm sm:text-base text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Ver detalles →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal de Detalles del Proyecto */}
      <AnimatePresence>
        {selectedProject !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60]"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-2 sm:inset-4 md:inset-0 md:flex md:items-center md:justify-center z-[70] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-full md:max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] mx-auto relative">
                <div className="relative overflow-y-auto max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh]">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {selectedProject !== null && (
                    <div>
                      <div className="h-40 sm:h-48 md:h-64 bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                        <span className="text-5xl sm:text-6xl md:text-8xl">
                          {projectsData[selectedProject].emoji}
                        </span>
                      </div>
                      <div className="p-4 sm:p-6 md:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                          {projectsData[selectedProject].title}
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                          {projectsData[selectedProject].fullDescription}
                        </p>

                        <div className="mb-4 sm:mb-6">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                            Tecnologías Utilizadas
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {projectsData[selectedProject].technologies.map(
                              (tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 sm:px-4 py-1 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-sm sm:text-base font-medium"
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>

                        {projectsData[selectedProject].features && (
                          <div className="mb-4 sm:mb-6">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                              Características Principales
                            </h3>
                            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                              {projectsData[selectedProject].features?.map(
                                (feature, featureIndex) => (
                                  <li key={featureIndex}>{feature}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                          {projectsData[selectedProject].liveUrl && (
                            <a
                              href={projectsData[selectedProject].liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-lg transition-all"
                            >
                              <HiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>Ver Proyecto</span>
                            </a>
                          )}
                          {projectsData[selectedProject].githubUrl && (
                            <a
                              href={projectsData[selectedProject].githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center space-x-2 bg-gray-900 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all"
                            >
                              <HiCode className="w-4 h-4 sm:w-5 sm:h-5" />
                              <span>Ver Código</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

