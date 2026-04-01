import QuizComp from "./components/QuizComp.jsx"
import Header from "./components/Header.jsx"


function Quiz(){
  return(
    <div>
      <Header
        title = "Mayan Quiz #1"
      />
      <QuizComp
        question = "What was the most important crop in Maya daily life?"
        wAns1 = "Wheat"
        wAns2 = "Rice"
        rAns = "Corn"
      />
      <QuizComp
        question = "How did the Maya most commonly consume chocolate?"
        wAns1 = "As solid candy bars"
        wAns2 = "Mixed with cold milk"
        rAns = "Ground into a drink with water and spices"
      />
      
      
    </div>
  );
}
export default Quiz;