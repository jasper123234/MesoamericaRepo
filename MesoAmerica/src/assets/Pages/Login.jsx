import LoginForm from "./components/Login.jsx";
import Header from "./components/Header.jsx";

function Login(){
  return(
    <div>
      <Header title="Login" />
      <LoginForm />
    </div>
  );
}

export default Login;