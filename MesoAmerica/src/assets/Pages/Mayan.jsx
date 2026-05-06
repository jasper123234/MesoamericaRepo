import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import Path from "../components/Path.jsx"
import Temple from "../Temple.jpg"


function Mayan(){
  return(
        
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Mayan Civilization'/>
       
        <Module
          link = "/MayanLearningMod"
          icon = {Temple}
          x = "top-70"
          y = "right-100"
          z = "z-10"/>
        <Module
          link = "/MayanLearningMod2"
          icon = {Temple}
          x = "top-130"
          y = "left-110"
          z = "z-10"/>  
        <Module
          link = "/QuizMayan"
          icon = {Temple}
          x = "top-190"
          y = "right-110"
          z = "z-10"/> 
        <Path/>  
          
    </div>
    
  );
}
export default Mayan;