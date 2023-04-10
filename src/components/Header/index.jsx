import { NavLink } from 'react-router-dom'
import { BASENAME } from '../..'

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to={BASENAME + '/'}
          end
        >
          Accueil
        </NavLink>
        <NavLink to={BASENAME + '/a-propos'}>A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
