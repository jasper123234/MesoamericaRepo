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
          x = "top-30"
          y = "left-90"/>
        <Module
          link = "/QuizMayan"
          icon = {Temple}
          x = "top-90"
          y = "right-90"/>  
        <Module
          link = "/DummyLink"
          icon = {Temple}
          x = "top-150"
          y = "right-180"/> 
    </div>
  );
}
export default App;