import Header from "./components/Header.js"
import Congrats from "./components/Congrats.js"


function App(){
  return(
    <div>
      <Header
        title = "Module Completed!"
      />
      <Congrats
        modname = "Aztec Civilization module"
      />
    </div>
  );
}
export default App;