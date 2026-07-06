import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaFigma,
} from 'react-icons/fa'
import { SiCplusplus, SiTailwindcss, SiGit, SiVite } from 'react-icons/si'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95, icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS3', level: 92, icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', level: 88, icon: <FaJsSquare />, color: '#f7df1e' },
      { name: 'React', level: 85, icon: <FaReact />, color: '#61dafb' },
      { name: 'Tailwind CSS', level: 82, icon: <SiTailwindcss />, color: '#06b6d4' },
    ],
  },
  {
    title: 'Languages & Tools',
    skills: [
      { name: 'C++', level: 75, icon: <SiCplusplus />, color: '#00599c' },
      { name: 'Java', level: 72, icon: <FaJava />, color: '#007396' },
      { name: 'Git', level: 80, icon: <SiGit />, color: '#f05032' },
      { name: 'Vite', level: 78, icon: <SiVite />, color: '#646cff' },
      { name: 'Figma', level: 90, icon: <FaFigma />, color: '#f24e1e' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Technologies I <span className="highlight">Work With</span>
      </motion.h2>

      <div className="skills__grid">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            className="skills__category"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + catIdx * 0.2, duration: 0.6 }}
          >
            <h3 className="skills__category-title">{cat.title}</h3>
            <div className="skills__list">
              {cat.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  className="skills__item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + catIdx * 0.2 + skillIdx * 0.08, duration: 0.5 }}
                >
                  <div className="skills__item-header">
                    <span className="skills__item-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skills__item-name">{skill.name}</span>
                    <span className="skills__item-level">{skill.level}%</span>
                  </div>
                  <div className="skills__bar">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + catIdx * 0.2 + skillIdx * 0.08, duration: 1, ease: 'easeOut' }}
                      style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  )
}
