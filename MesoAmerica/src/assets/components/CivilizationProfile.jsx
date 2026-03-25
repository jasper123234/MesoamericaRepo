function CivilizationProfile({ civilizationName,Bio,profileImg}) {
  return 
  <div class="text-{green}-{600} bg-{brown}-{600} p-6 rounded-lg shadow-md text-center italic">
  <h1>{civilizationName} Profile Page</h1>;
  <p>{Bio}</p>
  <img src={profileImg}/>
  </div>
}

export default CivilizationProfile;