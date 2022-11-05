import { useState } from 'react'
import React from 'react'

function Carousel({ pictures }) {
  const [pictureIndex, setPictureIndex] = useState(1)
  const marginLeft = (pictureIndex - 1) * -100 + '%'

  function next() {
    let newIndex = pictureIndex + 1
    setPictureIndex(newIndex > pictures.length ? 1 : newIndex)
  }

  function previous() {
    let newIndex = pictureIndex - 1
    setPictureIndex(newIndex < 1 ? pictures.length : newIndex)
  }

  return (
    <div className="carousel">
      {pictures.length > 1 ? (
        <React.Fragment>
          <div
            className="carousel__pictures"
            style={{ marginLeft: marginLeft }}
          >
            {pictures.map((url, index) => (
              <img src={url} alt="logement" key={`picture-${index}`} />
            ))}
          </div>
          <div className="carousel__arrowLeft" onClick={previous}></div>
          <div className="carousel__arrowRight" onClick={next}></div>
          <p className="carousel__paging">
            {pictureIndex}/{pictures.length}
          </p>
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Carousel
