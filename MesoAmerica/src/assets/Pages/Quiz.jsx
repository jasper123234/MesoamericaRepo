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
      <QuizComp
        question = "What did the Olmec civilization create that was used for writing and record keeping?"
        wAns1 = "Writing system"
        wAns2 = "Calendar"
        rAns = "Hieroglyphics"
      />
      
      
    </div>
  );
}
export default App;