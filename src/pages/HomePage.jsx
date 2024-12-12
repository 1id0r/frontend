import { Contact } from '../cmps/Contact'
import { About } from '../cmps/About'
import { Hero } from '../cmps/Hero'

import { Portfolio } from '../cmps/Portfolio'

export function HomePage() {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}
