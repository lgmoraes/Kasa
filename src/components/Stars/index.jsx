function Stars({ rating, id = 'star' }) {
  rating = parseInt(rating)

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          className={`stars__star${i > rating ? ' stars__star--empty' : ''}`}
          key={`${id}-${i}`}
        ></div>
      ))}
    </div>
  )
}

export default Stars
