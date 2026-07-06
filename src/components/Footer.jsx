import { FaGithub, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">AMOS<span className="footer__logo-dot">.</span></span>
            <p className="footer__tagline">
              Frontend Developer &amp; Graphic Designer
            </p>
          </div>

          <div className="footer__socials">
            <a href="https://github.com/FAMOUS223-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://wa.me/233598109267" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="tel:+233598109267" aria-label="Phone">
              <FaPhone />
            </a>
            <a href="mailto:nganbewuborijaamos@gmail.com" aria-label="Email">
              <HiMail />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} Amos Wuborija Nganbe. All rights reserved.</p>
          <p>Designed &amp; Built with React &amp; Framer Motion</p>
        </div>
      </div>


    </footer>
  )
}
