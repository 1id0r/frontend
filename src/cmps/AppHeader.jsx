import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'

export function AppHeader() {
  const navigate = useNavigate()

  return (
    <header className='app-header main-container full'>
      <nav className=''>
        <NavLink to='/' className='/logo'>
          Home
        </NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </header>
  )
}
