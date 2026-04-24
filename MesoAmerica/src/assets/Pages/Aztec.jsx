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
          y = "left-90"/>
        <Module
          link = "/QuizAztec"
          icon = {AztecCal}
          x = "top-120"
          y = "right-90"/>  
        <Module
          link = "/DummyLink"
          icon = {AztecCal}
          x = "top-180"
          y = "right-180"/> 
    </div>
  );
}
export default App;