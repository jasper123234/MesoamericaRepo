import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModule1(){
  return(
    <div>
      <Header
        title = "Learning Module 1"
      />
      <LearningModule
        title = "The Olmec Civilization"
        info = "The Olmec were the first major civilization in Mesoamerica, known for their colossal stone heads and advanced understanding of astronomy and mathematics."
        img1 = "dante.jpg"
        
      />
    </div>
  );
}
export default LearningModule1;