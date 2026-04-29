import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"
import { useState } from "react";


function QuizOlmec(){
  const [score, setScore] = useState(0);
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Olmec Quiz #1"
      />
      <QuizComp
        question1 = "Why are the Olmec civilization often called the “mother culture” of Mesoamerica?"
        wAns1a = "They were the last civilization in the region"
        wAns1b = "They only lived in one small village"
        rAns1 = "They influenced later Mesoamerican cultures"

        question2 = "What was the capital of the Olmec civilization?"
        wAns2a = "La Venta"
        wAns2b = "Tres Zapotes"
        rAns2 = "San Lorenzo"

        question3 = "Why are the Olmec civilization often called the “mother culture” of Mesoamerica?"
        wAns3a = "They were the last civilization in the region"
        wAns3b = "They only lived in one small village"
        rAns3 = "They influenced later Mesoamerican cultures"

        score={score}
        setScore={setScore}
      />
     
      {score !== 0 && <h2>Your score is: {score}/3</h2>}
      
    </div>
  );
}
export default QuizOlmec;