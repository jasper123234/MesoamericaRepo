import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import BackButton from "../components/BackButton.jsx";
import OlmecFood from "../OlmecFood.jpg"
import Heirerchy from "../Heirerchy.jpg"


function LearningModOlmec(){
  return(
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Olmec"
            />
      <Header
        title = "Olmec Learning Module #2"
      />
      <LearningModule
          title = "Olmec Diet"
          info = "The Olmecs harvested crops and hunted. The crops including: Maize(corn), Beans, Squash, Chilli peppers, avocados, tomatoes. Animals in their diet include: Fish, shellfish, deer, rabbits, birds"
          img1 = {OlmecFood} 
        />
      <LearningModule
          title = "Agricultural Practices"
          info = "The Olmec civilization used slash-and-burn to clear land and grew maize, beans, and squash together. They built raised fields and canals to manage flooding and improve irrigation, and they farmed based on seasonal cycles. Maize was their main food and was considered sacred."
          img1 = "dante.jpg"
      />
      <LearningModule
          title = "Social Structure"
          info = "In the Olmec civilization, society was divided into social classes. The elite, including rulers and priests, controlled the government and religion. The middle class included artisans and merchants who made goods and traded. The lower class was made up of farmers and laborers who grew food and built structures. Farmers worked the land, while artisans created pottery, tools, and carvings."
          img1 = {Heirerchy}
      />
      <LearningModule
          title = "Religion"
          info = "In the Olmec civilization, people believed in many gods, often connected to nature and animals. Important gods included the jaguar god, maize god, and rain and fertility gods. They made offerings like food and valuable items and held ceremonies for crops, seasons, and important life events. Some rituals included human sacrifice. Priests and shamans led these rituals and were believed to communicate with the gods. They built temples, altars, and pyramids as sacred places."
          img1 = "dante.jpg"
      />
      </div>
      
  );
}
export default LearningModOlmec;