import Header from "./components/Header.jsx"
import Friends from "./components/Friends.jsx"

function App(){
  return(
    <div>
      <Header
        title = "Friends"
      />
      <Friends
        name = "EzraZealeTheCamp"
        pfp = "dante.jpg"
        />
      <Friends
        name = "LipoHippo"
        pfp = "dante.jpg"
        />
      <Friends
        name = "JispoCreensWolrd"
        pfp = "dante.jpg"
        />
    </div>
  );
}
export default App;