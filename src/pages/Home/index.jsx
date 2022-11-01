import Gallery from '../../components/Gallery'
import accommodations from '../../api/logement.json'

function Home() {
  return (
    <div className="home">
      <div className="home__featuredPicture">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery cards={accommodations} />
    </div>
  )
}

export default Home
