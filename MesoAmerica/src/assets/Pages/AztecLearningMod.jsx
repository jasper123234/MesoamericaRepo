import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function AztecLearningModule(){
  return(
    <div>
      <Header
        title = "Aztec Learning Module"
      />
      <LearningModule
        title = "The Aztec Civilization"
        info = "The Aztecs were a Mesoamerican culture that dominated Mexico in the 15th and 16th centuries, known for their advanced engineering, art, and religion."
        img1 = "aztec.jpg"
        
      />
    </div>
  );
}
export default AztecLearningModule;