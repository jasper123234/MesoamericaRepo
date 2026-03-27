import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./assets/Pages/Home";
// import About from "./assets/Pages/About";
// import Profile from "./assets/Pages/CivilizationProfile";
// import CivilizationProfile from "./assets/Pages/CivilizationProfile";
import Friends from "./Pages/Friends";
import LearningModule1 from "./Pages/LearningModule1";
import Login from "./Pages/Login";
import Olmec from "./Pages/Olmec";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
 <BrowserRouter>
  <nav>
    <Link to="/">Friends</Link> |{" "}
    <Link to="/learning">Learning</Link> |{" "}
    <Link to="/login">Login</Link> |{" "}
    <Link to="/olmec">Olmec</Link> |{" "}
    <Link to="/profile">Profile</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Friends />} />
    <Route path="/learning" element={<LearningModule1 />} />
    <Route path="/login" element={<Login />} />
    <Route path="/olmec" element={<Olmec />} />
    <Route path="/profile" element={<ProfilePage />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/CivilizationProfile">Civilization Profile</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/CivilizationProfile" element={<CivilizationProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
