import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OlmecHead from "../OlmecHead.jpg"
import Path from "../components/Path.jsx"

function Olmec(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Olmec Civilization'/>
     
       <Module
          link = "/OlmecLearningMod"
          icon = {OlmecHead}
          x = "top-50"
          y = "right-100"
          z = "z-10"/>
        <Module
          link = "/OlmecLearningMod2"
          icon = {OlmecHead}
          x = "top-110"
          y = "left-110" 
          z = "z-10"/>
        <Module
          link = "/QuizOlmec"
          icon = {OlmecHead}
          x = "top-170"
          y = "right-110"
          z = "z-10"/>
        <Path/>
    </div>
  );
}
export default Olmec;