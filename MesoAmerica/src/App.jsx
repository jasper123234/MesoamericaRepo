import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./assets/Pages/Home";
// import About from "./assets/Pages/About";
// import Profile from "./assets/Pages/CivilizationProfile";
import Mayan from "./assets/Pages/Mayan";
import Olmec from "./assets/Pages/Olmec";
import Aztec from "./assets/Pages/Aztec";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/Aztec">Aztec Profile</Link>
        <Link to="/Olmec">Olmec Profile</Link>
        <Link to="/Mayan">Mayan Profile</Link>
      </nav>

      <Routes>
        <Route path="/Aztec" element={<Aztec />} /> 
        <Route path="/Olmec" element={<Olmec />} /> 
        <Route path="/Mayan" element={<Mayan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
