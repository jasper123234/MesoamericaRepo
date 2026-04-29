import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModule1(){
  return(
    <div>
      <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700"></div>
      <Header
        title = "Aztec Learning Module"
      />
      <LearningModule
        title = "Location and Time Period"
        info = "The Aztec Civilization lived in Central Mexico or Modern day Mexico City in 1200s-1521."
        img1 = "dante.jpg"
        
      />
      <LearningModule
        title = "Fun Facts"
        info = ""
        img1 = "dante.jpg"
      />

    </div>
  );
}
export default LearningModule1;