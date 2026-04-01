function QuizComp({ question, wAns1, wAns2, rAns}){
    return(
       <form>
      <h2>{question}</h2>
      <input type="radio" name="answer" value={wAns1} /> {wAns1} <br />
      <input type="radio" name="answer" value={wAns2} /> {wAns2} <br />
      <input type="radio" name="answer" value={rAns} /> {rAns} <br/>
      <button type="submit">Submit</button>
    </form>
  );
  
 
  }
  
  export default QuizComp;
  