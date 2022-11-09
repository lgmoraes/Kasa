import { useEffect } from 'react'
import texts from '../../api/apropos.json'
import Dropdown from '../../components/Dropdown'

function APropos() {
  useEffect(() => {
    document.title = 'À propos'
  })

  return (
    <div className="apropos">
      <div className="apropos__featuredPicture"></div>

      {Object.keys(texts).map((title) => (
        <Dropdown title={title} key={`dropdown-${title}`}>
          {title}
          {texts[title]}
        </Dropdown>
      ))}
    </div>
  )
}

export default APropos
