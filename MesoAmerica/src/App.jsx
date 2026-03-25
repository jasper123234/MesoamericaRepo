import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/CivilizationProfile";
import CivilizationProfile from "./Pages/CivilizationProfile";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/CivilizationProfile">Civilization Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/CivilizationProfile" element={<CivilizationProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
