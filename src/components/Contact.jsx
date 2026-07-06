import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaWhatsapp, FaGithub } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  {
    icon: <HiMail size={20} />,
    label: 'Email',
    value: 'nganbewuborijaamos@gmail.com',
    href: 'mailto:nganbewuborijaamos@gmail.com',
  },
  {
    icon: <HiPhone size={20} />,
    label: 'Phone',
    value: '+233 59 810 9267',
    href: 'tel:+233598109267',
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '+233 59 810 9267',
    href: 'https://wa.me/233598109267',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'FAMOUS223-hub',
    href: 'https://github.com/FAMOUS223-hub',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:nganbewuborijaamos@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}\n\nFrom: ${form.name} (${form.email})`
    window.open(mailto)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.span>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Let's <span className="highlight">Work Together</span>
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a project in mind or just want to chat? Drop me a message.
      </motion.p>

      <div className="contact__grid">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__info-item"
            >
              <div className="contact__info-icon">{item.icon}</div>
              <div>
                <span className="contact__info-label">{item.label}</span>
                <span className="contact__info-value">{item.value}</span>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="contact__form-row">
            <input
              type="text"
              placeholder="Your Name"
              className="contact__input"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact__input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="contact__textarea"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <button type="submit" className="contact__submit">
            {sent ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </motion.form>
      </div>


    </section>
  )
}
