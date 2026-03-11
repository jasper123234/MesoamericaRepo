function CivilizationProfile({ civilizationName,Bio,profileImg}) {
  return 
  <div>
  <h1>{civilizationName} Profile Page</h1>;
  <p>{Bio}</p>
  <img src={profileImg}/>
  </div>
}

export default CivilizationProfile;