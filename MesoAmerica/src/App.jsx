import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mayan from "./assets/Pages/Mayan";
import Olmec from "./assets/Pages/Olmec";
import Aztec from "./assets/Pages/Aztec";
import ProfilePage from "./assets/Pages/ProfilePage";
import MayanLearningMod from "./assets/Pages/MayanLearningMod";
import OlmecLearningMod from "./assets/Pages/OlmecLearningMod";
import AztecLearningMod from "./assets/Pages/AztecLearningMod";
import QuizMayan from "./assets/Pages/QuizMayan";
import QuizAztec from "./assets/Pages/QuizAztec";
import QuizOlmec from "./assets/Pages/QuizOlmec";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Aztec">-Aztec Profile-</Link>
        <Link to="/ProfilePage">-Profile Page-</Link>
        <Link to="/Olmec">-Olmec Profile-</Link>
        <Link to="/Mayan">-Mayan Profile-</Link>
        <Link to="/MayanLearningMod">-Mayan Learning Module-</Link>
        <Link to="/AztecLearningMod">-Aztec Learning Module-</Link>
        <Link to="/QuizMayan">-Mayan Quiz-</Link>
        <Link to="/QuizAztec">-Aztec Quiz-</Link>
      </nav>

      <Routes>
        <Route path="/ProfilePage" element={<ProfilePage />} /> 
        <Route path="/Aztec" element={<Aztec />} /> 
        <Route path="/Olmec" element={<Olmec />} /> 
        <Route path="/Mayan" element={<Mayan />} />
        <Route path="/OlmecLearningMod" element={<OlmecLearningMod />} /> 
        <Route path="/AztecLearningMod" element={<AztecLearningMod />} /> 
        <Route path="/MayanLearningMod" element={<MayanLearningMod />} /> 
        <Route path="/QuizMayan" element={<QuizMayan/>} /> 
        <Route path="/QuizAztec" element={<QuizAztec/>} /> 
        <Route path="/QuizOlmec" element={<QuizOlmec/>} /> 
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

