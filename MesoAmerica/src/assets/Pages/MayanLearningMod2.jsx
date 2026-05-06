import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import BackButton from "../components/BackButton.jsx"
import Mayafood from "../Mayafood.jpg"
import Mayafarm from "../Mayafarm.jpg"


function MayanLearningModule2(){
  return(
      <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Mayan"
            />
      <Header
        title = "Mayan Learning Module"
      />
      <LearningModule
        title = "Mayan Diet"
        info = "Their most important crop was corn, being used to make a variety of food and drinks including tortillas, flat cakes, and pies. Their diet was largely vegetarian, consisting of beans, sweet potatoes, tomatoes, squash, avocados, and papayas, although they would eat meat if available. "
        img1 = {Mayafood}
        
      />
      <LearningModule
       title = "Agricultural Practices"
        info = "The Maya civilization used smart farming methods to grow food in tough environments. They practiced slash-and-burn farming, built raised fields in wet areas, and used terraces on hillsides to prevent erosion. Their main crops were Maize, Beans, and Squash, which helped keep the soil healthy and provided a balanced diet."
        img1 = {Mayafarm}
      />
    </div>
  );
}
export default MayanLearningModule2;