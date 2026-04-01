import QuizComp from "./components/QuizComp.jsx"
import Header from "./components/Header.jsx"


function Quiz(){
  return(
    <div>
      <Header
        title = "Olmec Quiz #1"
      />
      <QuizComp
        question = "Why are the Olmec civilization often called the “mother culture” of Mesoamerica?"
        wAns1 = "They were the last civilization in the region"
        wAns2 = "They only lived in one small village"
        rAns = "They influenced later Mesoamerican cultures"
      />
      <QuizComp
        question = "What farming method did the Olmec use to clear land for agriculture?"
        wAns1 = "Irrigation canals only"
        wAns2 = "Terrace farming"
        rAns = "Slash-and-burn farming"
      />
      
      
    </div>
  );
}
export default Quiz;