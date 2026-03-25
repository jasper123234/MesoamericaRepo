import Header from "./components/Header.js"
import FriendsComp from "./components/FriendsComp.js"

function App(){
  return(
    <div>
      <Header
        title = "Friends"
      />
      <FriendsComp
        name = "EzraZealeTheCamp"
        pfp = "dante.jpg"
        />
      <FriendsComp
        name = "LipoHippo"
        pfp = "dante.jpg"
        />
      <FriendsComp
        name = "JispoCreensWolrd"
        pfp = "dante.jpg"
        />
    </div>
  );
}
export default App;