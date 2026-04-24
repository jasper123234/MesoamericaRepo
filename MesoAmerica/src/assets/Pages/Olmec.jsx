import BackButton from "../components/BackButton.jsx"
import Header from "../components/Header.jsx"
import Module from "../components/Module.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OlmecHead from "../OlmecHead.jpg"

function Olmec(){
  return(
    <div>
      <Header
        title = 'Olmec Civilization'/>
      <BackButton/>   
        <Module
          link = "/OlmecLearningMod"
          icon = {OlmecHead}
          x = "top-60"
          y = "left-90"/>
        <Module
          link = "/QuizOlmec"
          icon = {OlmecHead}
          x = "top-120"
          y = "right-900"/>  
        <Module
          link = "/DummyLink"
          icon = {OlmecHead}
          x = "top-180"
          y = "right-180"/> 
    </div>
  );
}
export default Olmec;