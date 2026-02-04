'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'
import { projectsData } from '../data/projects'
import Image from 'next/image'

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
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects"
      className="section-container bg-white rounded-3xl shadow-sm">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Header AEO */}
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 sm:px-0">
            <span className="gradient-text">
              ¿Qué soluciones reales resolví con frontend y UX/UI?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Casos prácticos que muestran cómo resuelvo problemas reales con diseño, desarrollo y visión de negocio.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedProject(index)}
              whileHover={{ scale: 1.02 }}
              itemScope
              itemType="https://schema.org/CreativeWork">

              <div className="relative h-40 sm:h-48">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={`Proyecto ${project.title} - UX UI Frontend Salesforce`}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-400 to-accent-400">
                    <span className="text-5xl sm:text-6xl">{project.emoji}</span>
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-6">
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                  itemProp="name"
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2"
                  itemProp="description"
                >
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
            </motion.article>
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
              <div className="w-full md:max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] relative">
                <div className="relative overflow-y-auto max-h-[90vh]">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900"
                  >
                    <HiX className="w-6 h-6" />
                  </button>

                  <div>
                    <div className="relative h-48 md:h-64">
                      {projectsData[selectedProject].img ? (
                        <Image
                          src={projectsData[selectedProject].img}
                          alt={`Detalle proyecto ${projectsData[selectedProject].title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-accent-400">
                          <span className="text-6xl md:text-8xl">
                            {projectsData[selectedProject].emoji}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" itemProp="name">
                        {projectsData[selectedProject].title}
                      </h2>

                      {projectsData[selectedProject].role && (
                        <section className="mb-4">
                          <h3 className="text-lg font-bold">Mi rol</h3>
                          <p className="text-gray-600">
                            {projectsData[selectedProject].role}
                          </p>
                        </section>
                      )}

                      {projectsData[selectedProject].impact && (
                        <section className="mb-6">
                          <h3 className="text-lg font-bold">Impacto</h3>
                          <p className="text-gray-600">
                            {projectsData[selectedProject].impact}
                          </p>
                        </section>
                      )}


                      <p className="text-base sm:text-lg text-gray-600 mb-6" itemProp="description">
                        {projectsData[selectedProject].fullDescription}
                      </p>

                      <section className="mb-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-3">Tecnologías utilizadas</h3>
                        <div className="flex flex-wrap gap-2">
                          {projectsData[selectedProject].technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </section>

                      {projectsData[selectedProject].features && (
                        <section className="mb-6">
                          <h3 className="text-lg sm:text-xl font-bold mb-3">¿Qué se resolvió en este proyecto?</h3>
                          <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {projectsData[selectedProject].features?.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </section>
                      )}

                      <div className="flex flex-wrap gap-4">
                        {projectsData[selectedProject].liveUrl && (
                          <a
                            href={projectsData[selectedProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-semibold"
                          >
                            <HiExternalLink /> Ver proyecto
                          </a>
                        )}
                        {projectsData[selectedProject].githubUrl && (
                          <a
                            href={projectsData[selectedProject].githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold"
                          >
                            <HiCode /> Ver código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}