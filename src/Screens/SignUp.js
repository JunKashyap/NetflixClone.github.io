import React, { useRef, useState } from 'react'
import './SignUp.css'
import HomeScreen from './HomeScreen';
import { Navigate } from 'react-router-dom';
const vaildEmail = "admin@gmail.com";
const vaildPassword = "admin";


function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  function proceedtoSignIn(e){
    e.preventDefault();
    if(email === vaildEmail && password === vaildPassword){
      setFlag(true);
    }else{
      setFlag(false);
    }
  }
  return (
    <>
      {flag === true && <Navigate to="homePage"/>}
      {flag === false && (
        <div className="signupScreen">
          <form>
            <h1>Sign In</h1>
            <input
              placeholder="Email(admin@gmail.com)"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password(admin)"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={(e) => proceedtoSignIn(e)}>Sign In</button>
            <h4>
              <span className="signupScreen__gray">New to Netflix? </span>
              <span className="signupScreen__link">Sign Up now.</span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUp