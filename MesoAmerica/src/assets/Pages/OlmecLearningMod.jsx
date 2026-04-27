import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function OlmecLearningMod(){
  return(
    <div>
      <Header
        title = "Olmec Learning Module"
      />
      <LearningModule
        title = "Location and Time Period"
        info = "Location: Lived in the southern part of modern day Mexico, along the gulf coast. Time Period: 1500 BCE - 1200 BCE"
        
      />

      <LearningModule
        title = "Olmec Heads"
        info = "The Olmec carved huge stone heads weighing up to 50 tons, Each one has a different face, showing real rulers"
        img1 = "dante.jpg"
      />

      <LearningModule
        title = "Important Cities"
        info = "San Lorenzo - First Major City, Known for huge stone heads. La Venta - Main city after San Lorenzo, first Pyramid in Mesoamerica. Tres Zapotes - One of the last major cities, lasting longer than most cities."
        img1 = "dante.jpg"
      />
    </div>
  );
}
export default OlmecLearningMod;