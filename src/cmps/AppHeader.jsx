import { useState } from 'react'

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='app-header'>
      <div className='nav-container'>
        <div className='logo'>Lidor</div>

        {/* mobilenav */}
        <div className='mobile-nav'>
          <div className='social-links'>
            <a href='https://github.com/1id0r' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/lidor-nissim-397009231/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* webnav */}
        <nav className='nav-links'>
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

        <div className='social-links'>
          <a href='https://github.com/1id0r' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://www.linkedin.com/in/lidor-nissim-397009231/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </header>
  )
}
