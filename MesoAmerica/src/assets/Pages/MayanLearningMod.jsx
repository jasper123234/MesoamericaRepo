import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import MapMayan from "../MapMayan.jpg"
import Drink from "../Drink.jpg"
import BackButton from "../components/BackButton.jsx"


function MayanLearningModule(){
  return(
      <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Mayan"
            />
      <Header
        title = "Mayan Learning Module"
      />
      <LearningModule
        title = "Location and Time Period"
        info = "Located in the Tropical Lowlands of Central America, or Modern day Guatemala. Time Period: 2000 BCE - 1600 CE."
        img1 = {MapMayan}
        
      />
      <LearningModule
        title = "Fun Facts"
        info = "The Mayan lived in 3 seperate subregions with their own distinct environments and culutures containing The Northern and Southern Lowlands, and modern day Western Honduras. The also drank a lot of hot chocolat, as chocolate was very common in religous rituals as well as standard drinking of the hot chocolate."
        img1 = {Drink}
      />
    </div>
  );
}
export default MayanLearningModule;