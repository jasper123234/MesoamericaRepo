import Failed from "./components/Failed.jsx"
import Header from "./components/Header.jsx"


function App(){
  return(
    <div>
      <Header
        title = "You Failed!"
      />
      <Failed
        wrongQ1="Mayans"
        a1="olmec"
        wrongQ2="Calendar"
        a2="hieroglyphics"
        wrongQ3="Yung Nudy"
        a3="aztec"
      />
      
      
      
    </div>
  );
}
export default App;