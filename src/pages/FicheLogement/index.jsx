import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import Carousel from '../../components/Carousel'
import User from '../../components/User'
import Stars from '../../components/Stars'
import datas from '../../api/logement.json'

function FicheLogement() {
  const { id } = useParams()
  const accommodation = datas.find((data) => data.id === id)

  useEffect(() => {
    document.title = `Logement - ${accommodation.title}`
  })

  return accommodation === undefined ? (
    <Navigate to="*" />
  ) : (
    <div className="ficheLogement">
      <Carousel pictures={accommodation.pictures} />
      <div className="ficheLogement__layoutTop">
        <div className="ficheLogement__layoutTop-1">
          <h1 className="ficheLogement__title">{accommodation.title}</h1>
          <div className="ficheLogement__location">
            {accommodation.location}
          </div>
          <div className="ficheLogement__tags">
            {accommodation.tags.map((tag) => (
              <div className="ficheLogement__tag" key={`tag-${tag}`}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="ficheLogement__layoutTop-2">
          <User
            name={accommodation.host.name}
            picture={accommodation.host.picture}
          />
          <Stars rating={accommodation.rating} />
        </div>
      </div>
      <div className="ficheLogement__layoutBottom">
        <Dropdown title={'Description'}>
          <p>{accommodation.description}</p>
        </Dropdown>
        <Dropdown title={'Équipements'}>
          <p>
            {accommodation.equipments.map((eq, index) => (
              <span key={`equipement-${index}`}>
                {eq}
                <br />
              </span>
            ))}
          </p>
        </Dropdown>
      </div>
    </div>
  )
}

export default FicheLogement
