import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import AztecCal from "../AztecCal.jpg"

function App(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Aztec Civilization'/>
      <BackButton/>   
        <Module
          link = "/AztecLearningMod"
          icon = {AztecCal}
          x = "top-50"
          y = "left-90"/>
        <Module
          link = "/AztecLearningMod2"
          icon = {AztecCal}
          x = "top-110"
          y = "right-90"/>  
        <Module
          link = "/QuizAztec"
          icon = {AztecCal}
          x = "top-170"
          y = "right-180"/> 
    </div>
  );
}
export default App;