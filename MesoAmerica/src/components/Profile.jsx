
function Profile({name, pfp, rank}){
  return(
    <div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4">
        <h1 class = "text-2xl text-yellow-900 text-center">{name}</h1>
        <img
          src={pfp}
          alt="Profile Picture "
          width="150"
          height="150"
        />
      </div>
      <div class = "b border border-yellow-900 c p-3 mt-3  border-4" >
        <h1 class = "text-2xl text-yellow-900 text-center">Rank:</h1>
        <img
          src={rank}
          alt="Rank Picture"
          width="150"
          height="150"
        />
      </div>
    </div>
  )
}

export default Profile;