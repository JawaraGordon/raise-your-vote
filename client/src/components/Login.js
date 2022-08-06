import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button, Wrapper } from "../styles";
import Raise_Your_Vote_Logo from '../img/Raise_Your_Vote_Logo.png';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
          
    <Wrapper>
      <div className="logo-small">
            <img src={Raise_Your_Vote_Logo} alt="Raise Your Vote logo" />
          </div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          
          <p>
            Get a free account &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button> 
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  
  );
}

export default Login;
