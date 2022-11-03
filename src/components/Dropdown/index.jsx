import { useState } from 'react'

function Dropdown({ title, children, open }) {
  const [isOpen, toggleOpen] = useState(open ? true : false)

  function toggleDropdown() {
    toggleOpen(!isOpen)
  }

  return (
    <div className={`dropdown ${isOpen && 'open'}`}>
      <h2 onClick={toggleDropdown}>{title}</h2>
      <div className="dropdown__content">{children}</div>
    </div>
  )
}

export default Dropdown
