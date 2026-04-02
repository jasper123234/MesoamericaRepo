import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function MayanLearningModule(){
  return(
    <div>
      <Header
        title = "Mayan Learning Module"
      />
      <LearningModule
        title = "The Mayan Civilization"
        info = "The Mayans were a Mesoamerican civilization, known for their advanced understanding of astronomy and mathematics, as well as their impressive architectural achievements."
        img1 = "dante.jpg"
        
      />
    </div>
  );
}
export default MayanLearningModule;