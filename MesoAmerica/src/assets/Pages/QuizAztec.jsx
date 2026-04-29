import QuizComp from "../components/QuizComp.jsx"
import Header from "../components/Header.jsx"


function QuizAztec(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = "Aztec Quiz #1"
      />
      <QuizComp
        question = "What is the capital city in the Aztec Empire?"
        wAns1 = "Acapulco"
        wAns2 = "Zacatecas"
        rAns = "Tenochtitlan"
      />
      <QuizComp
        question = "What is the name of their sun God"
        wAns1 = "Tezcatlipoca"
        wAns2 = "Quetzalcoatl"
        rAns = "Huitzilopochtli"
      />
      
      
    </div>
  );
}
export default QuizAztec;