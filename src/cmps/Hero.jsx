export function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h2 className='greeting'>Hi, I'm Lidor</h2>
          <h1 className='title'>Full Stack Developer</h1>
          <p className='description'>I build modern web applications with a focus on user experience and clean code.</p>
          <div className='cta-buttons'>
            <a href='#work' className='cta-btn primary'>
              View My Work
            </a>
            <a href='#contact' className='cta-btn secondary'>
              Get In Touch
            </a>
          </div>
        </div>
        <div className='hero-image'>
          <img src='src/assets/img/home-right.png' alt='Developer illustration' />
        </div>
      </div>
    </section>
  )
}
