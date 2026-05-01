import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OlmecHead from "../OlmecHead.jpg"
import pathbetter from "../pathbetter.jpg"

function Olmec(){
  return(
        <div className="min-h-screen w-full bg-gradient-to-b from-green-200 via-green-400 to-green-700">
      <Header
        title = 'Olmec Civilization'/>
      <BackButton/> 
        <img 
          icon = {pathbetter}
          alt="Image outline"
          className="rounded-2x1"
        />
        <Module
          link = "/OlmecLearningMod"
          icon = {OlmecHead}
          x = "top-50"
          y = "left-90"/>
        <Module
          link = "/OlmecLearningMod2"
          icon = {OlmecHead}
          x = "top-110"
          y = "right-90"/>  
        <Module
          link = "/QuizOlmec"
          icon = {OlmecHead}
          x = "top-170"
          y = "right-180"/> 
    </div>
  );
}
export default Olmec;