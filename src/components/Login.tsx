import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { http } from "../http";

const Login = () => {
  const [ user, setUserState ] = useState({
    email: "",
    password: ""
  })

  async function loginIntoAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      email,
      password,
    } = user;
    try {
      const response = await http.post("/auth/login", {
        email,
        password
      });
      fillStorage(response.data.access, response.data.refresh, email);
      window.location.reload();
    } catch(err: any) {
      console.log(err.code);
    }
  }

  function fillStorage(aToken: string, reToken: string, email: string) {
    localStorage.clear();
    localStorage.setItem("aToken", aToken);
    localStorage.setItem("reToken", reToken);
    localStorage.setItem("email", email)
  }

  return(
    <form 
      className="login"
      onSubmit={ loginIntoAccount }>
      <h1 className="login-title">
        Login to Proceed
      </h1>
      <input 
        type="text" 
        className="login-email"
        placeholder="Email Address" 
        onChange={ event => 
          setUserState({...user, email: event.target.value})}/>
      <input 
        type="password" 
        className="login-password" 
        placeholder="Password"
        onChange={ event => 
          setUserState({...user, password: event.target.value})}/>
      <div className="login-buttons">
        <button className="submit"> Submit </button>
        <Link to="/signup" className="to-signup">
          Don't have an account?<br/> Create one!
        </Link> 
      </div>
    </form>
  )
}

export default Login;

