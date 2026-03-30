import BackButton from "./components/BackButton.jsx"
import Header from "./components/Header.jsx"
import Module from "./components/Module.jsx"

function App(){
  return(
    <div>
      <Header
        title = 'Olmec Civilization'/>
      <BackButton/>   
        <Module
          icon = "dante.jpg"
          x = "top-60"
          y = "left-15"/>
        <Module
          icon = "dante.jpg"
          x = "top-90"
          y = "right-15"/>  
        <Module
          icon = "dante.jpg"
          x = "top-120"
          y = "right-30"/> 
    </div>
  );
}
export default App;