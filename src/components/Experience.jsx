import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiColorSwatch, HiAcademicCap } from 'react-icons/hi'
import './Experience.css'

const experiences = [
  {
    icon: <HiColorSwatch size={22} />,
    title: 'Senior Graphic Designer',
    org: 'Freelance & Brands',
    period: '2019 — Present',
    desc: 'Led brand identity projects for 20+ brands across various industries. Delivered logo design, typography, packaging, and digital assets.',
  },
  {
    icon: <HiBriefcase size={22} />,
    title: 'Frontend Web Developer',
    org: 'Freelance',
    period: '2021 — Present',
    desc: 'Built responsive websites and web applications using React, HTML, CSS, and JavaScript for clients and personal projects.',
  },
  {
    icon: <HiAcademicCap size={22} />,
    title: 'BSc Information Technology',
    org: 'University',
    period: '2025 — Present',
    desc: 'Pursuing a degree in Information Technology with coursework in programming, databases, networking, and web development.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        My <span className="highlight">Journey</span>
      </motion.h2>

      <div className="exp__timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.title}
            className="exp__item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="exp__dot">
              <div className="exp__dot-icon">{exp.icon}</div>
            </div>
            <div className="exp__content">
              <span className="exp__period">{exp.period}</span>
              <h3 className="exp__title">{exp.title}</h3>
              <span className="exp__org">{exp.org}</span>
              <p className="exp__desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  )
}
