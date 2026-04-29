import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function OlmecLearningMod(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Olmec Learning Module"
      />
      <LearningModule
        title = "Location and Time Period"
        info = "Location: Lived in the southern part of modern day Mexico, along the gulf coast. Time Period: 1500 BCE - 1200 BCE"
        
      />

      <LearningModule
        title = "Olmec Heads"
        info = "The Olmec carved huge stone heads weighing up to 50 tons, Each one has a different face, showing real rulers. The heads were carved from single Basalt boulders, and the biggest head being 11.2 feet tall and weighing 50 tons. In Mesoamerican belief, the head was considered the seat of the soul, emotions, and personal identity. The heads were likely created to honor and commemorate important rulers or leaders within the Olmec civilization, serving as a symbol of their power and authority."
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