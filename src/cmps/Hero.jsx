import ParticleBackground from './ParticalsBackground'

export function Hero() {
  return (
    <section id='hero' className='hero'>
      <ParticleBackground />

      <div className='hero-content'>
        <div className='hero-text'>
          <h2 className='greeting' data-aos='fade-right'>
            Hi, I'm Lidor
          </h2>
          <h1 className='title' data-aos-delay='300' data-aos='fade-down'>
            Full Stack Developer
          </h1>
          <p className='description' data-aos='fade-right'>
            I build modern web applications with a focus on user experience and clean code.
          </p>
          <div className='cta-buttons'>
            <a href='#portfolio' data-aos='zoom-in' className='cta-btn primary'>
              View My Work
            </a>
            <a
              href='../Lidor-nisim-cv.pdf'
              data-aos='zoom-in'
              download='lidor-nisim-cv.pdf'
              className='cta-btn secondary'
            >
              Get CV
            </a>
          </div>
        </div>
        <div className='hero-image'>
          <img src='../img/home-img.png' data-aos='flip-right' alt='Developer illustration' />
        </div>
      </div>
    </section>
  )
}
