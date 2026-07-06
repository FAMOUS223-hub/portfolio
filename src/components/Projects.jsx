import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online store with cart, checkout, and payment integration. Built with React and modern CSS.',
    tags: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/FAMOUS223-hub',
    live: '#',
  },
  {
    title: 'Brand Identity Suite',
    desc: 'Complete brand identity design system including logos, typography, color palettes, and brand guidelines.',
    tags: ['Figma', 'Photoshop', 'Illustrator'],
    github: '#',
    live: '#',
  },
  {
    title: 'Task Management App',
    desc: 'Kanban-style productivity app with drag-and-drop, real-time updates, and team collaboration features.',
    tags: ['React', 'JavaScript', 'CSS3'],
    github: 'https://github.com/FAMOUS223-hub',
    live: '#',
  },
  {
    title: 'Agency Portfolio',
    desc: 'A high-end portfolio website for a creative agency showcasing their work with stunning animations.',
    tags: ['React', 'Framer Motion', 'Vite'],
    github: 'https://github.com/FAMOUS223-hub',
    live: '#',
  },
  {
    title: 'Graphic Design Catalog',
    desc: 'A digital catalog showcasing graphic design work across branding, print, and digital media.',
    tags: ['Design', 'Figma', 'Branding'],
    github: '#',
    live: '#',
  },
  {
    title: 'CLI Utility Tool',
    desc: 'A command-line utility built with C++ for file management automation and data processing.',
    tags: ['C++', 'CLI', 'Automation'],
    github: 'https://github.com/FAMOUS223-hub',
    live: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Work
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Featured <span className="highlight">Projects</span>
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A selection of projects I've built and designed. More on my GitHub.
      </motion.p>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="projects__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
          >
            <div className="projects__card-top">
              <div className="projects__card-icon">
                <HiCode size={22} />
              </div>
              <div className="projects__card-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={18} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                  <HiExternalLink size={18} />
                </a>
              </div>
            </div>
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-desc">{project.desc}</p>
            <div className="projects__card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="projects__tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="projects__cta"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a href="https://github.com/FAMOUS223-hub" target="_blank" rel="noopener noreferrer" className="projects__cta-btn">
          <FaGithub size={18} />
          View All on GitHub
        </a>
      </motion.div>


    </section>
  )
}
