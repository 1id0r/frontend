export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Leedify',
      image: '../img/leedify.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Vite', 'SASS', 'NPM'],
      description:
        'A pixel-perfect Spotify clone featuring real-time user interactions, complete user management, and Spotify API integration. Users can manage playlists, share music in real-time, and enjoy a seamless streaming experience.',
      projectLink: 'https://leedify.onrender.com/',
      githubLink: 'https://github.com/LeeShavit/leedify-frontend',
    },
    {
      id: 2,
      title: 'Appsus',
      image: '../img/appsus.png',
      tags: ['React', 'CSS', 'JS'],
      description:
        'A productivity suite featuring a Gmail-inspired notes app and a digital library. Includes comprehensive CRUD operations, advanced filtering capabilities, and dynamic content management.',
      projectLink: 'https://1id0r.github.io/appsus-leedor/',
      githubLink: 'https://github.com/1id0r/appsus-leedor',
    },
    {
      id: 3,
      title: 'Meme Generator',
      image: '../img/memegen.png',
      tags: ['HTML 5', 'CSS', 'JS'],
      description:
        'An interactive meme generator built with pure JavaScript and Canvas API. Users can upload images, add customizable text, and export their creations with various styling options.',
      projectLink: 'https://github.com/1id0r/Meme-Generator',
      githubLink: 'https://github.com/1id0r/Meme-Generator',
    },
    {
      id: 4,
      title: 'Minesweeper',
      image: '../img/minesweeper.png',
      tags: ['HTML 5', 'CSS', 'JS'],
      description:
        'A classic Minesweeper implementation showcasing recursive algorithms for cell revealing. Features multiple difficulty levels and a clean, intuitive interface.',
      projectLink: 'https://1id0r.github.io/mineSweeper/',
      githubLink: 'https://github.com/1id0r/mineSweeper',
    },
  ]

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id='portfolio' className='portfolio'>
      <div className='portfolio-content'>
        <h2 className='section-title'>Lidor's Portfolio</h2>

        <div className='projects-carousel'>
          {projects.map((project) => (
            <div key={project.id} className='project-card' onClick={() => handleProjectClick(project.projectLink)}>
              <div className='project-image'>
                <img src={project.image} alt={project.title} />
                <div className='project-links'>
                  <button
                    className='github-link'
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.githubLink, '_blank', 'noopener,noreferrer')
                    }}
                  >
                    <i className='fab fa-github'></i>
                  </button>
                </div>
              </div>
              <div className='project-info'>
                <h3 className='project-title'>{project.title}</h3>
                <div className='project-tags'>
                  {project.tags.map((tag, index) => (
                    <span key={index} className='tag'>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className='project-description'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
