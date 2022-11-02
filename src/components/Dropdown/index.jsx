function Dropdown({ title, children, open }) {
  function toggleDropdown(e) {
    e.target.parentNode.classList.toggle('open')
  }

  return (
    <div className={`dropdown ${open && 'open'}`}>
      <h2 onClick={toggleDropdown}>{title}</h2>
      <div className="dropdown__content">{children}</div>
    </div>
  )
}

export default Dropdown
