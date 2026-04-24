import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import AztecCal from "../AztecCal.jpg"

function App(){
  return(
    <div>
      <Header
        title = 'Aztec Civilization'/>
      <BackButton/>   
        <Module
          link = "/AztecLearningMod"
          icon = {AztecCal}
          x = "top-60"
          y = "left-15"/>
        <Module
          link = "/QuizAztec"
          icon = {AztecCal}
          x = "top-90"
          y = "right-15"/>  
        <Module
          link = "/DummyLink"
          icon = {AztecCal}
          x = "top-120"
          y = "right-30"/> 
    </div>
  );
}
export default App;