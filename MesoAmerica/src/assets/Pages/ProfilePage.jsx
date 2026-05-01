import Profile from "../components/Profile.jsx"
import Header from "../components/Header.jsx"
import PFP from "../PFP.jpg"
import JR from "../JR.jpg"


function ProfilePage(){
  return(
    <div>
      <Header
        title = "Profile"
      />
      <Profile
        name = "dantesWOlrd"
        pfp = {PFP}
        rank = {JR}
      />
    </div>
  );
}
export default ProfilePage;