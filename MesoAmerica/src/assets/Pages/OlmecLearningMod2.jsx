import Header from "../components/Header.jsx"
import LearningModule from "../components/LearningModule.jsx"


function LearningModOlmec(){
  return(
    <div>
      <Header
        title = "Olmec Learning Module #2"
      />
      <LearningModule
          title = "Olmec Diet"
          info = "The Olmecs harvested crops and hunted. The crops including: Maize(corn), Beans, Squash, Chilli peppers, avocados, tomatoes. Animals in their diet include: Fish, shellfish, deer, rabbits, birds"
          img1 = "dante.jpg"
        />
        <LearningModule
          title = "Agricultural Practices"
          info = "The Olmec civilization used slash-and-burn to clear land and grew maize, beans, and squash together. They built raised fields and canals to manage flooding and improve irrigation, and they farmed based on seasonal cycles. Maize was their main food and was considered sacred."
          img1 = "dante.jpg"
        />
    </div>
  );
}
export default LearningModOlmec;