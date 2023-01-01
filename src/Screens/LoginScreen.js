import React, { useState } from "react";
import NetflixLogoPic from "../logo/nf.png";
import "./LoginScreen.css";
import SignUp from "./SignUp";
function LoginScreen() {
  const [signIn, setsignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={NetflixLogoPic} alt="" />
        <button className="loginScreen__button" onClick={() => setsignIn(true)}>
          Sign In
        </button>
      </div>
      <div className="loginScreen__gradient"/>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere.Cancel anytime.</h2>
            <h3>
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Adress"></input>
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setsignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
