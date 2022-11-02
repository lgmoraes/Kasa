function User({ name, picture }) {
  const nameIndex = name.lastIndexOf(' ')
  const firstName = name.substring(0, nameIndex)
  const lastName = name.substring(nameIndex)

  return (
    <div className="user">
      <div className="user__name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img className="user__picture" src={picture} alt="hôte" />
    </div>
  )
}

export default User
