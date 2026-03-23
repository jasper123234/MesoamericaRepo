function Option({text}){
  return(
    <label>
    <input type="radio" name="myRadio" value="option1" />
         {text}
       </label>
  );
}
export default Option;