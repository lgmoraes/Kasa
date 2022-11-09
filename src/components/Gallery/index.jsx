import Card from '../../components/Card'

function Gallery({ cards }) {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <Card
          key={`${card.id}-${card.title}`}
          id={card.id}
          title={card.title}
          cover={card.cover}
        />
      ))}
    </div>
  )
}

export default Gallery
