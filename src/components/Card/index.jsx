import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ id, title, cover }) {
  return (
    <Link to={`fiche-logement/${id}`} className="card" key={`${id}-${title}`}>
      <img src={cover} alt="logement" />
      <p>{title}</p>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default Card
