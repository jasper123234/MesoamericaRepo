import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mayan from "./assets/Pages/Mayan";
import Olmec from "./assets/Pages/Olmec";
import Aztec from "./assets/Pages/Aztec";
import ProfilePage from "./assets/Pages/ProfilePage";
import MayanLearningMod from "./assets/Pages/MayanLearningMod";
import MayanLearningMod2 from "./assets/Pages/MayanLearningMod2";
import OlmecLearningMod from "./assets/Pages/OlmecLearningMod";
import OlmecLearningMod2 from "./assets/Pages/OlmecLearningMod2";
import AztecLearningMod from "./assets/Pages/AztecLearningMod";
import AztecLearningMod2 from "./assets/Pages/AztecLearningMod2";
import QuizMayan from "./assets/Pages/QuizMayan";
import QuizAztec from "./assets/Pages/QuizAztec";
import QuizOlmec from "./assets/Pages/QuizOlmec";
import FailedQ from "./assets/Pages/FailedQ";
import PassedQ from "./assets/Pages/PassedQ";

function App() {
  return (
    <BrowserRouter  basename="/MesoamericaRepo/">
      <nav className="bg-gradient-to-b from-green-200/95 via-orange-300/95 to-yellow-500/95
                      border-4 border-yellow-900
                      shadow-2xl
                      p-6 mb-5 relative text-4xl text-yellow-950 text-center font-bold uppercase tracking-wider mb-6">
        <Link to="/ProfilePage">-Profile Page-</Link>
        <Link to="/Aztec">-Aztec Profile-</Link>
        <Link to="/Olmec">-Olmec Profile-</Link>
        <Link to="/Mayan">-Mayan Profile-</Link>
      </nav>

      <Routes>
        <Route path="/ProfilePage" element={<ProfilePage />} /> 
        <Route path="/Aztec" element={<Aztec />} /> 
        <Route path="/Olmec" element={<Olmec />} /> 
        <Route path="/Mayan" element={<Mayan />} />
        <Route path="/OlmecLearningMod" element={<OlmecLearningMod />} /> 
        <Route path="/OlmecLearningMod2" element={<OlmecLearningMod2 />} /> 
        <Route path="/AztecLearningMod" element={<AztecLearningMod />} /> 
        <Route path="/AztecLearningMod2" element={<AztecLearningMod2 />} /> 
        <Route path="/MayanLearningMod" element={<MayanLearningMod />} /> 
        <Route path="/MayanLearningMod2" element={<MayanLearningMod2 />} /> 
        <Route path="/QuizMayan" element={<QuizMayan/>} /> 
        <Route path="/QuizAztec" element={<QuizAztec/>} /> 
        <Route path="/QuizOlmec" element={<QuizOlmec/>} /> 
        <Route path="/FailedQ" element={<FailedQ/>} /> 
        <Route path="/PassedQ" element={<PassedQ/>} /> 
        
        
      </Routes>
    </BrowserRouter>
 

  );
}

export default App;

