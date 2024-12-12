export function Hero() {
  return (
    <section id='hero' className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h2 className='greeting'>Hi, I'm Lidor</h2>
          <h1 className='title'>Full Stack Developer</h1>
          <p className='description'>I build modern web applications with a focus on user experience and clean code.</p>
          <div className='cta-buttons'>
            <a href='#portfolio' className='cta-btn primary'>
              View My Work
            </a>
            <a href='src/assets/Lidor-nisim-cv.pdf' download='lidor-nisim-cv.pdf' className='cta-btn secondary'>
              Get CV
            </a>
          </div>
        </div>
        <div className='hero-image'>
          <img src='../public/img/home-img.png' alt='Developer illustration' />
        </div>
      </div>
    </section>
  )
}
