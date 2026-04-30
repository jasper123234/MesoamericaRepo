import React, { useState } from 'react';
function QuizComp({ question1, wAns1a, wAns1b, rAns1, question2, wAns2a, wAns2b, rAns2, question3, wAns3a, wAns3b, rAns3, score, setScore }) {
    
   const [answer1,setAnswer1] = useState("");
   const [answer2,setAnswer2] = useState("");
   const [answer3,setAnswer3] = useState("");

    function handleSubmit(event){
       event.preventDefault();


       let count = 0;
       if (answer1 === rAns1){
           count++;
       }
       if (answer2 === rAns2){
           count++;
       }
       if (answer3 === rAns3){
           count++;
       }
       
       setScore(count);

       
       

   }

       return (
      <form onSubmit={handleSubmit}>
      
      <h2>{question1}</h2>
    

          <label>
               <input type="radio" name="answer1" value={answer1} 
               onChange={(event)=>setAnswer1(wAns1a)} checked = {answer1 == wAns1a} /> {wAns1a}
           </label>

          <label>
               <input type="radio" name="answer1" value={answer1} 
               onChange={(event)=>setAnswer1(wAns1b)} checked = {answer1 == wAns1b} /> {wAns1b}
           </label>

           <label>
               <input type="radio" name="answer1" value="test" 
               onChange={(event)=>setAnswer1(rAns1)} checked = {answer1 == rAns1} /> {rAns1}
           </label>

           
           <h2>{question2}</h2>
           
           <label>
               <input type="radio" name="answer2" value="test"
               onChange={(event)=>setAnswer2(wAns2a)} checked = {answer2 == wAns2a} /> {wAns2a}
           </label>

          <label>
               <input type="radio" name="answer" value="test"
               onChange={(event)=>setAnswer2(wAns2b)} checked = {answer2 == wAns2b} /> {wAns2b}
           </label>

           <label>
               <input type="radio" name="answer2" value={answer2} 
               onChange={(event)=>setAnswer2(rAns2)} checked = {answer2 == rAns2} /> {rAns2}
           </label>


           <h2>{question3}</h2>
           
           <label>
               <input type="radio" name="answer3" value={answer3} 
               onChange={(event)=>setAnswer3(wAns3a)} checked = {answer3 == wAns3a} /> {wAns3a}
           </label>

          <label>
               <input type="radio" name="answer3" value={answer3} 
               onChange={(event)=>setAnswer3(wAns3b)} checked = {answer3 == wAns3b} /> {wAns3b}
           </label>

           <label>
               <input type="radio" name="answer3" value={answer3} 
               onChange={(event)=>setAnswer3(rAns3)} checked = {answer3 == rAns3} /> {rAns3}
           </label>
      
     <br></br> <input type="submit" value="Submit" />
    </form>
      
     
  );
  
}

  
  export default QuizComp;
  