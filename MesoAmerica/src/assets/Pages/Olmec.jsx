import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"

function Olmec(){
  return(
    <div>
      <Header
        title = 'Olmec Civilization'/>
      <BackButton/>   
        <Module
          link = "./OlmecLearningModule.jsx"
          icon = "dante.jpg"
          x = "top-60"
          y = "left-15"/>
        <Module
         link = "https://2048cupcakes.net/"
          icon = "dante.jpg"
          x = "top-90"
          y = "right-15"/>  
        <Module
         link = "https://2048cupcakes.net/"
          icon = "dante.jpg"
          x = "top-120"
          y = "right-30"/> 
    </div>
  );
}
export default Olmec;