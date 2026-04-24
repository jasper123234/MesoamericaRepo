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
          x = "top-50"
          y = "left-90"/>
        <Module
          link = "/QuizOlmec"
          icon = {OlmecHead}
          x = "top-110"
          y = "right-90"/>  
        <Module
          link = "/DummyLink"
          icon = {OlmecHead}
          x = "top-170"
          y = "right-180"/> 
    </div>
  );
}
export default Olmec;