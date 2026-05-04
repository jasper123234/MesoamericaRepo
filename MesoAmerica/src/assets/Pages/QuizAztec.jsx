import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx"


function QuizAztec(){
     const [score,setScore] = useState(0);
  const navigate = useNavigate();


  const handleScore = (finalScore) => {
    setScore(finalScore);
    if (finalScore === 3) {
      navigate('/PassedQ');
    } else {
      navigate('/FailedQ');
    }

  };
  return(
        <div className = "min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Aztec"
            />
      <Header
        title = "Aztec Quiz #1"
      />

       
      <QuizComp
        question1 = "What were chinampas used for by the Aztecs?"
        wAns1a = "Religious temples"
        wAns1b = "Military fortifications"
        rAns1 = "Floating garden fields for farming"

        question2 = "What was the name of the Aztec emperor title?"
        wAns2a = "Tlatoani"
        wAns2b = "Pipiltin"
        rAns2 = "Huey Tlatoani"

        question3 = "How many people did the Aztecs sacrifice annually to keep the sun alive?"
        wAns3a = "About 100 people"
        wAns3b = "About 10 people"
        rAns3 = "About 40 people"

        onScore={handleScore}  

      />

    </div>
  );
}
export default QuizAztec;