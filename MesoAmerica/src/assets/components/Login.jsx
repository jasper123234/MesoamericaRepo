function login(){
  return(
    <form>
      <input type = "text" value = "" placeholder = "Username" id = "username" class = "text-2xl text-yellow-900 text-center b border border-yellow-900 c p-1 mt-5  border-4 justify-center align-items: center;"/>
      <break/>
      <input type = "text" value = "" placeholder = "Password" id = "password" class = "text-2xl text-yellow-900 text-center b border border-yellow-900 c p-1 mt-5  border-4 justify-center align-items: center;"/>
      <button type="submit" class = "text-2xl text-yellow-900 text-center b border border-yellow-900 c p-1 mt-5  border-4 justify-center align-items: center;">
        Submit
      </button>
    </form>
  


  )

}
export default login;