
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import AztecCal from "../AztecCal.jpg"
import Path from "../components/Path.jsx"

function Aztec(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Aztec Civilization'/>
        
        <Module
          link = "/AztecLearningMod"
          icon = {AztecCal}
          x = "top-70"
          y = "right-100"
          z = "z-10"/>
          
        <Module
          link = "/AztecLearningMod2"
          icon = {AztecCal}
          x = "top-130"
          y = "left-110"
          z = "z-10"/>  
        <Module
          link = "/QuizAztec"
          icon = {AztecCal}
          x = "top-190"
          y = "right-110"
          z = "z-10"/> 
        <Path/>
    </div>
  );
}
export default Aztec;