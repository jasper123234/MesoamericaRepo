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
        question1 = "Where were the Maya civilization located in modern day?"
        wAns1a = "Mexico"
        wAns1b = "Peru"
        rAns1 = "Guatemala"
        
        question2 = "What was the most important crop in Mayan agriculture?"
        wAns2a = "Beans"
        wAns2b = "Squash"
        rAns2 = "Corn"
        
        question3 = "Which farming method did the Maya use on hillsides to prevent erosion?"
        wAns3a = "Slash-and-burn"
        wAns3b = "Raised fields"
        rAns3 = "Terraces"
        
        onScore={handleScore}

      />
      
    </div>
  );
}
export default QuizMayan;