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
        title = "Fun Facts"
        info = "The Olmec carved huge stone heads weighing up to 50 tons, Each one has a different face, showing real rulers"
        
      />
       <LearningModule
        title = "Agriculutral Practices"
        info = "Used slash-and-burn farming to clear land Grew crops together (maize, beans, squash) Built raised fields and canals for water control Farmed based on seasons Maize considered sacred crop"
        
      />
       <LearningModule
        title = "Social Structure"
        info = "Elites: Rulers, priests, and nobles who held power and wealth Commoners: Farmers, artisans, and laborers who made up the majority of the population Slaves: Captured individuals used for labor and sacrifice"
        
      />
    </div>
  );
}
export default OlmecLearningMod;