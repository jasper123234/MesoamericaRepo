import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModule1(){
  return(
    <div>
      <Header
        title = "Aztec Learning Module"
      />
      <LearningModule
        title = "The Aztec Civilization"
        info = "The Aztecs were a Mesoamerican civilization known for their advanced understanding of astronomy and mathematics, as well as their impressive architectural achievements."
        img1 = "dante.jpg"
        
      />
    </div>
  );
}
export default LearningModule1;