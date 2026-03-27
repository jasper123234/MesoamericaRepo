import QuizComp from "./components/QuizComp.jsx"
import Header from "./components/Header.jsx"


function App(){
  return(
    <div>
      <Header
        title = "Quiz #1"
      />
      <QuizComp
        question = "What was the name of the first civilization in Mesoamerica?"
        wAns1 = "Maya"
        wAns2 = "Aztec"
        rAns = "Olmec"
      />
      
      
    </div>
  );
}
export default App;