import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import aztecOpression from "../aztecOpression.jpg"
import Fish from "../Fish.jpg"
import Huitzilopochtli from "../Huitzilopochtli.jpg"
import BackButton from "../components/BackButton.jsx"


function LearningModule1(){
  return(
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <BackButton 
              link = "/Aztec"
            />
      <Header
        title = "Aztec Learning Module"
      />
      <LearningModule
        title = "Agriculutral Practices"
        info = "The Aztecs developed advanced farming techniques like irrigation, terracing, and especially chinampas (floating garden fields), which allowed them to grow large amounts of food. Their main crops included maize, beans, squash, and chili peppers, which formed the foundation of their diet. The Aztec diet was mostly plant-based, with limited domesticated animals, but they also ate fish, insects, and wild game for protein. Markets played a big role in food distribution, Tlatelolco’s market could attract tens of thousands of people daily to buy and sell food."
        img1 = {Fish}
       
        
      />
      <LearningModule
        title = "Social Structure"
        info = "The Aztec civilization had a strict social hierarchy. At the top was the emperor, called the Huey Tlatoani, followed by nobles (pipiltin), then commoners (macehualtin), and at the bottom were serfs and enslaved people. Each group had specific roles, with nobles holding power and commoners doing most of the work."
        img1 = {aztecOpression}
    />
         <LearningModule
        title = "Religions and Beliefs"
        info = "Polytheistic - Huitzilopochtli and Quetzalcoatl, in which they sacrificed around 40 people a year to keep the sun alive."
        img1 = {Huitzilopochtli}
        
    />

    </div>
  );
}
export default LearningModule1;