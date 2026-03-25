import Profile from "./components/Profile.js"
import Header from "./components/Header.js"


function App(){
  return(
    <div>
      <Header
        title = "Profile"
      />
      <Profile
        name = "dantesWOlrd"
        pfp = "dante.jpg"
        rank = "gold.jpg"
      />
    </div>
  );
}
export default App;