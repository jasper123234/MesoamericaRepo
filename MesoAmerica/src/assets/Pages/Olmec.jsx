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
          y = "left-15"/>
        <Module
          link = "/QuizOlmec"
          icon = {OlmecHead}
          x = "top-90"
          y = "right-15"/>  
        <Module
          link = "/DummyLink"
          icon = {OlmecHead}
          x = "top-120"
          y = "right-30"/> 
    </div>
  );
}
export default Olmec;