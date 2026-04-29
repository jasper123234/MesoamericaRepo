import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"
import { useState } from "react"


function QuizAztec(){
     const [score,setScore] = useState(0);

  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Aztec Quiz #1"
      />

       
      <QuizComp
        question1 = "What is the capital city in the Aztec Empire?"
        wAns1a = "Acapulco"
        wAns1b = "Zacatecas"
        rAns1 = "Tenochtitlan"
       
        question2 = "What is the name of their sun God"
        wAns2a = "Tezcatlipoca"
        wAns2b = "Quetzalcoatl"
        rAns2 = "Huitzilopochtli"
  
        question3 = "What is the name of their moon God"
        wAns3a = "moon goddess"
        wAns3b = "god of moon"
        rAns3 = "moongod"

        score={score}
        setScore={setScore}
      

      />

      {score !== 0 && <h2>Your score is: {score}/3</h2>}
      
    </div>
  );
}
export default QuizAztec;