export function AppHeader() {
  return (
    <header className='app-header'>
      <div className='nav-container'>
        <div className='logo'>Lidor</div>

        <nav className='nav-links'>
          <a href='/' className='nav-link'>
            Home
          </a>
          <a href='/about' className='nav-link'>
            About
          </a>
          <a href='/portfolio' className='nav-link'>
            Portfolio
          </a>
          <a href='/contact' className='nav-link'>
            Contact
          </a>
        </nav>

        <div className='social-links'>
          <a href='https://github.com/yourusername' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github'></i>
          </a>
          <a href='https://linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </header>
  )
}
