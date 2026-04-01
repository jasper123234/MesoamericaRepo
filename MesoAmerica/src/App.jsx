import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Mayan from "./assets/Pages/Mayan";
import Olmec from "./assets/Pages/Olmec";
import Aztec from "./assets/Pages/Aztec";
import ProfilePage from "./assets/Pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Aztec">Aztec Profile</Link>
        <Link to="/ProfilePage">Profile Page</Link>
        <Link to="/Olmec">Olmec Profile</Link>
        <Link to="/Mayan">Mayan Profile</Link>
      </nav>

      <Routes>
        <Route path="/Aztec" element={<Aztec />} /> 
        <Route path="/ProfilePage" element={<ProfilePage />} /> 
        <Route path="/Olmec" element={<Olmec />} /> 
        <Route path="/Mayan" element={<Mayan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

