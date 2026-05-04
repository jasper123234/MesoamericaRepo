import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx"


function QuizMayan(){
  const [score, setScore] = useState(0);
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
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Mayan"
            />
      
      
      <Header
        title = "Mayan Civilization Quiz"
      />
      <QuizComp
        question1 = "What was the most important crop in Maya daily life?"
        wAns1a = "Wheat"
        wAns1b = "Rice"
        rAns1 = "Corn"
        
        question2 = "what is the capital of Mexico?"
        wAns2a = "Acapulco"
        wAns2b = "Tenochtitlan"
        rAns2 = "Mexico City"
        
        question3 = "filler question?"
        wAns3a = "filler answer 1"
        wAns3b = "filler answer 2"
        rAns3 = "filler answer 3"
        
        onScore={handleScore}

      />
      
    </div>
  );
}
export default QuizMayan;