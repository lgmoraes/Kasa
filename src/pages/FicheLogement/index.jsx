import { useParams } from 'react-router-dom'
import Dropdown from '../../components/Dropdown'
import Carousel from '../../components/Carousel'
import User from '../../components/User'
import Stars from '../../components/Stars'
import datas from '../../api/logement.json'

function FicheLogement() {
  const { id } = useParams()
  const accommodation = datas.find((data) => data.id === id)
  const host = accommodation.host

  return (
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
          <User name={host.name} picture={host.picture} />
          <Stars rating={accommodation.rating} />
        </div>
      </div>
      <div className="ficheLogement__layoutBottom">
        <Dropdown open title={'Description'}>
          <p>{accommodation.description}</p>
        </Dropdown>
        <Dropdown open title={'Équipements'}>
          <p>
            Climatisation
            <br />
            Wi-Fi
            <br />
            Cuisine
            <br />
            Espace de travail
            <br />
            Fer à repasser
            <br />
            Sèche-cheveux
            <br />
            Cintres
          </p>
        </Dropdown>
      </div>
    </div>
  )
}

export default FicheLogement
