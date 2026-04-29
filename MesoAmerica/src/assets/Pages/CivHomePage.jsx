import Header from "./components/Header.jsx"
import CivHome from "./components/CivHome.jsx"

function App(){
  return(
      <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Home"
      />
      <CivHome
        name = "Olmec Mod"
        icon = "dante.jpg"
        />
      <CivHome
        name = "Aztec Mod"
        icon = "dante.jpg"
        />
      <CivHome
        name = "Mayan Mod"
        icon = "dante.jpg"
        />
    </div>
  );
}
export default App;