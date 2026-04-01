import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Friends from "./assets/Pages/Friends";
import LearningModule1 from "./assets/Pages/LearningModule1";
import Login from "./assets/Pages/Login";
import Olmec from "./assets/Pages/Olmec";
import ProfilePage from "./assets/Pages/ProfilePage";

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

