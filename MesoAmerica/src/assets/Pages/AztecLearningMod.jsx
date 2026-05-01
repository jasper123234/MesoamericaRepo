import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"
import Boatshi from "../Boatshi.jpg"
import MapAztec from "../MapAztec.jpg"


function LearningModule1(){
  return(
    <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      
      <Header
        title = "Aztec Learning Module"
      />
      <LearningModule
        title = "Location and Time Period"
        info = "The Aztec Civilization lived in Central Mexico or Modern day Mexico City in 1200s-1521."
        img1 = {MapAztec}
        
      />
      <LearningModule
        title = "Fun Facts"
        info = "Tenochtitlan was the capital city which was on a lake and had canals like venice. In the image above, you can see Chinampas which were extremely productive floating gardens. These gardens allowed farmers to grow up to six crops per year, helping feed large populations like Tenochtitlán."
img1 = {Boatshi}
         />

    </div>
  );
}
export default LearningModule1;