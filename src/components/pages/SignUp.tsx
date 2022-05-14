import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { http } from "../../http";
import "../../styles/SignUp.css"

const SignUp = () => {
  const [ user, setUserState ] = useState({
    email: "",
    password: "",
    repass: ""
  });

  async function createNewAccount(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      email,
      password,
      repass
    } = user;
    if(password !== repass) throw new Error("Passwords do not match!")
    try {
      const response = await http.post("/auth/signup", {
        email,
        password
      });
      window.location.replace(`http://localhost:3000/`)
    } catch(err: any) {
      console.log(err.code);
    } 
  }

  return(
    <form 
      className="signup"
      onSubmit={ createNewAccount }>
      <div className="signup-content">
        <h1 className="signup-title">
          Create Free Account
        </h1>
        <input 
          type="text" 
          className="signup-email"
          placeholder="Email Address" 
          onChange={ event => 
            setUserState({...user, email: event.target.value})}/>
        <input 
          type="password" 
          className="signup-password" 
          placeholder="Password"
          onChange={ event => 
            setUserState({...user, password: event.target.value})}/>
        <input 
          type="password" 
          className="signup-password" 
          placeholder="Password Again"
          onChange={ event => 
            setUserState({...user, repass: event.target.value})}/>
        <div className="signup-buttons">
          <button className="submit"> Submit </button>
            <Link to="/"
            className="go-back"> 
            Go Back to <br/> Main Page</Link>
        </div>
      </div>
    </form> 
  )
}

export default SignUp;

