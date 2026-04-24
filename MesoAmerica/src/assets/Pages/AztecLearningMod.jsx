import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModule1(){
  return(
    <div>
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