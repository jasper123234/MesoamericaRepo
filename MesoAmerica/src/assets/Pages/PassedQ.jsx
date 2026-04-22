import Passed from "./components/Passed.jsx"
import Header from "./components/Header.jsx"


function App(){
  return(
    <div>
      <Header
        title = "You Passed!"
      />
      <Passed
        a1="olmec"
        a2="hieroglyphics"
        a3="aztec"
      />
      
      
      
    </div>
  );
}
export default App;