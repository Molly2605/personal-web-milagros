'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FAQ() {
    const faqData = [
        {
            question: '¿Qué tecnologías utilizas en tus proyectos?',
            answer:
                'Trabajo principalmente con React, Next.js, Tailwind CSS, Framer Motion, Chakra UI y herramientas de diseño como Figma y Adobe Illustrator. También tengo experiencia como Salesforce CRM Admin y manejo de Firebase para funcionalidades específicas de backend.',
        },
        {
            question: '¿Qué tipo de proyectos desarrollas?',
            answer:
                'Desarrollo interfaces web y experiencias digitales centradas en el usuario, incluyendo landing pages, portafolios interactivos, apps conceptuales y e-commerce, siempre con foco en usabilidad, accesibilidad y diseño responsive.',
        },
        {
            question: '¿Cuál es tu rol en un proyecto típico?',
            answer:
                'Mi rol principal es **Frontend Developer y UX/UI Designer**. Diseño y desarrollo interfaces atractivas y funcionales. En algunos proyectos integro Salesforce CRM o Firebase para funcionalidades puntuales, manteniendo siempre el enfoque en la experiencia de usuario.',
        },
        {
            question: '¿Por qué elegirte como desarrolladora UX/UI?',
            answer:
                'Combino diseño con desarrollo, asegurando que cada interfaz sea visualmente atractiva y funcione perfectamente. Tengo un enfoque centrado en el usuario, optimización de performance, accesibilidad y resultados medibles para negocios y clientes.',
        },
        {
            question: '¿Tienes experiencia con diseño responsive?',
            answer:
                'Sí, todos mis proyectos son **100% responsive**, adaptándose a distintos dispositivos y tamaños de pantalla, garantizando una experiencia de usuario consistente y fluida.',
        },
        {
            question: '¿Qué experiencia tienes con Salesforce CRM?',
            answer:
                'Como Salesforce CRM Admin, he configurado pipelines de ventas, automatizado procesos básicos mediante flows y gestionado leads y oportunidades en proyectos reales, integrando diseño y desarrollo frontend con el sistema CRM. Además, fui seleccionada para una beca de Salesforce, entre más de 600 postulantes, para aprender directamente de profesionales en sus oficinas en Argentina y aplicar buenas prácticas en entornos reales de negocio.',
        },
        {
            question: '¿Trabajas con animaciones y microinteracciones?',
            answer:
                'Sí, utilizo **Framer Motion** y CSS para crear animaciones fluidas, transiciones suaves y microinteracciones que mejoran la experiencia del usuario y hacen que la interfaz sea más intuitiva y atractiva.',
        },
        {
            question: '¿Cómo manejas la accesibilidad en tus proyectos?',
            answer:
                'Aplico buenas prácticas de accesibilidad, incluyendo contraste adecuado, uso correcto de etiquetas HTML, navegación con teclado y lectura por screen readers, garantizando que todos los usuarios puedan interactuar con las interfaces.',
        },
        {
            question: '¿Tienes experiencia en proyectos de e-commerce?',
            answer:
                'Sí, he desarrollado e-commerce funcionales con React y Firebase, incluyendo navegación de productos, filtros, carrito de compras, gestión de stock y formularios de usuario, siempre con un enfoque en la experiencia frontend.',
        },
        {
            question: '¿Cómo integras UX y frontend en tus proyectos?',
            answer:
                'Desde la investigación y definición de usuarios hasta el diseño de interfaces y desarrollo frontend, integro UX y tecnología para crear experiencias digitales coherentes, usables y atractivas que cumplen objetivos comerciales y de negocio. Mi parte favorita, justamente es la investigacion!.',
        },
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index)

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
        <section id="faq" className="section-container py-16">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
                    <span className="gradient-text">Preguntas frecuentes</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 sm:mb-8 rounded" />

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-primary-200 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-5 py-4 bg-primary-50 hover:bg-primary-100 transition-colors flex justify-between items-center text-primary-800 font-medium text-lg"
                            >
                                <span>{item.question}</span>
                                <span className="text-2xl font-bold">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="px-5 py-4 bg-accent-50 text-primary-900 border-t border-primary-200">
                                    {item.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}