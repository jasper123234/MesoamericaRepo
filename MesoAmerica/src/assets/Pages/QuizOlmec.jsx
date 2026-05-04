import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton.jsx" 


function QuizOlmec(){
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
              link = "/Olmec"
            />
      <Header
        title = "Olmec Quiz #1"
      />
      <QuizComp
        question1 = "How much did the largest Olmec stone head weigh?"
        wAns1a = "25 tons"
        wAns1b = "75 tons"
        rAns1 = "50 tons"

        question2 = "Which Olmec city had the first pyramid in Mesoamerica?"
        wAns2a = "San Lorenzo"
        wAns2b = "Tres Zapotes"
        rAns2 = "La Venta"

        question3 = "What was the main crop of the Olmec civilization that was considered sacred?"
        wAns3a = "Beans"
        wAns3b = "Squash"
        rAns3 = "Maize"

        onScore={handleScore}
      />
     
      
    </div>
  );
}
export default QuizOlmec;