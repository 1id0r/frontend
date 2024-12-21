import { useState } from 'react'

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header data-aos='zoom-in-down' className='app-header full'>
      <div className='nav-container'>
        <div data-aos='fade-right' onClick={() => scrollToSection('hero')} className='logo'>
          <img src='./img/profile-pic.jpeg' alt='Profile' className='profile-pic' />
          Lidor
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className='nav-link'>
            Home
          </a>
          <a onClick={() => scrollToSection('about')} className='nav-link'>
            About
          </a>
          <a onClick={() => scrollToSection('portfolio')} className='nav-link'>
            Portfolio
          </a>
          <a onClick={() => scrollToSection('contact')} className='nav-link'>
            Contact
          </a>
        </nav>

        <div className='right-section'>
          <div className='social-links'>
            <a href='https://github.com/1id0r' target='_blank' data-aos='fade-right' rel='noopener noreferrer'>
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/lidor-nissim-397009231/'
              target='_blank'
              data-aos='fade-right'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
