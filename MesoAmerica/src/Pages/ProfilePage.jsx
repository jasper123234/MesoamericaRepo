import Profile from "./components/Profile.jsx"
import Header from "./components/Header.jsx"


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