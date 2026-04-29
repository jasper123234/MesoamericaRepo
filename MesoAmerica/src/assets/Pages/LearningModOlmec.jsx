import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModOlmec(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Olmec Learning Module #2"
      />
      <LearningModule
        title = "The Olmec Civilization"
        info = "The Olmec carved huge stone heads weighing up to 50 tons, Each one has a different face, showing real rulers"
        img1 = "dante.jpg"
        
      />
    </div>
  );
}
export default LearningModOlmec;