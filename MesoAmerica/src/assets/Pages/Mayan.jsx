import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import Path from "../components/Path.jsx"
import Temple from "../Temple.jpg"
import pathbetter from "../pathbetter.jpg"


function Mayan(){
  return(
        
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Mayan Civilization'/>
      <BackButton/>   
        <Module
          link = "/MayanLearningMod"
          icon = {Temple}
          x = "top-50"
          y = "left-90"
          z = "z-10"/>
        <Module
          link = "/MayanLearningMod2"
          icon = {Temple}
          x = "top-110"
          y = "right-90"
          z = "z-10"/>  
        <Module
          link = "/QuizMayan"
          icon = {Temple}
          x = "top-170"
          y = "right-180"
          z = "z-10"/> 
        <Path/>  
          
    </div>
    
  );
}
export default Mayan;