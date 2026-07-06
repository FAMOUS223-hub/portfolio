import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiColorSwatch, HiDatabase } from 'react-icons/hi'
import './About.css'

const stats = [
  { value: '6+', label: 'Years Design Exp' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '20+', label: 'Happy Brands' },
  { value: '4', label: 'Tech Stacks' },
]

const cards = [
  {
    icon: <HiCode size={28} />,
    title: 'Frontend Dev',
    desc: 'Building responsive, performant web apps with React, HTML, CSS, and JavaScript.',
  },
  {
    icon: <HiColorSwatch size={28} />,
    title: 'Graphic Design',
    desc: '6+ years of senior-level design experience working with numerous brands.',
  },
  {
    icon: <HiDatabase size={28} />,
    title: 'BSc Information Technology',
    desc: 'Studying IT with a focus on programming, databases, networking, and software development.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <span className="highlight">IT Professional</span> &amp; Designer
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a frontend web developer and senior graphic designer with 6 years of experience 
        working with brands worldwide. Currently pursuing a BSc in Information Technology, 
        I blend design thinking with clean code to create impactful digital experiences.
      </motion.p>

      <motion.div
        className="about__stats"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="about__stat">
            <span className="about__stat-value">{stat.value}</span>
            <span className="about__stat-label">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="about__cards"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="about__card"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
          >
            <div className="about__card-icon">{card.icon}</div>
            <h3 className="about__card-title">{card.title}</h3>
            <p className="about__card-desc">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
