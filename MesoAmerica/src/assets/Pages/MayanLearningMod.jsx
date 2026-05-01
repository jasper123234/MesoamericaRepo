import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import MapMayan from "../MapMayan.jpg"
import Drink from "../Drink.jpg"


function MayanLearningModule(){
  return(
      <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Mayan Learning Module"
      />
      <LearningModule
        title = "The Mayan Civilization"
        info = "The Mayans were a Mesoamerican civilization, known for their advanced understanding of astronomy and mathematics, as well as their impressive architectural achievements."
        img1 = {MapMayan}
        
      />
      <LearningModule
        info = "The Mayans developed a complex calendar system, created intricate hieroglyphic writing, and built impressive cities with pyramids and temples. Their most important crop was corn, being used to make a variety of food and drinks including tortillas, flat cakes, and pies. Their diet was largely vegetarian, consisting of beans, sweet potatoes, tomatoes, squash, avocados, and papayas, although they would eat meat if available."
        img1 = {Drink}
      />
    </div>
  );
}
export default MayanLearningModule;