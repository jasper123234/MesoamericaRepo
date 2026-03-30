import Header from "./components/Header.jsx"
import CivHome from "./components/CivHome.jsx"

function App(){
  return(
    <div>
      <Header
        title = "Home"
      />
      <CivHome
        name = "Olmec"
        icon = "dante.jpg"
        />
      <CivHome
        name = "Aztec"
        icon = "dante.jpg"
        />
      <CivHome
        name = "Mayan"
        icon = "dante.jpg"
        />
    </div>
  );
}
export default App;