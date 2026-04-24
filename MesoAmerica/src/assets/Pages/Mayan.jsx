import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import Temple from "../Temple.jpg"


function App(){
  return(
    <div>
      <Header
        title = 'Mayan Civilization'/>
      <BackButton/>   
        <Module
           link = "/MayanLearningMod"
          icon = {Temple}
          x = "top-60"
          y = "left-15"/>
        <Module
          link = "/QuizMayan"
          icon = {Temple}
          x = "top-90"
          y = "right-15"/>  
        <Module
          link = "/DummyLink"
          icon = {Temple}
          x = "top-120"
          y = "right-90"/> 
    </div>
  );
}
export default App;