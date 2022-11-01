import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  )
}

export default Header
