import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/"
          end
        >
          Accueil
        </NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
