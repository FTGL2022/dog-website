import React from 'react'
import {useState} from "react";
import "./SignUp.css";
import person from "./SingUpIMG/person.png"
import email from "./SingUpIMG/email.png"
import password from "./SingUpIMG/password.png"

const SignUp = () => {

const [action, setAction] = useState("Sign Up");

  return (
    <div className="containerSignUp">
      <div className="headerSignUp">
        <div className="textSignUp">{action}</div>
        <div className="underlineSignUp"></div>
      </div>
      <div className="inputsSignUp">
        <div className="inputSignUp">
          <img className='imgInputSignUp' src={person} alt="" />
          <input className='inputTypeSignUp' type="text" placeholder="Name" />
        </div>

        <div className="inputSignUp">
          <img className='imgInputSignUp' src={email} alt="" />
          <input className='inputTypeSignUp' type="email" placeholder="Email" />
        </div>

        <div className="inputSignUp">
          <img className='imgInputSignUp' src={password} alt="" />
          <input className='inputTypeSignUp' type="password" placeholder="Password" />
        </div>
      </div>
      <div className='forgot-passwordSignUp'>Lost Password? <span>Click Here!</span>  </div>  
      <div className='submit-containerSignUp'>
        <div className='submitSignUp'>Sign Up</div>
        <div className='submitSignUp'>Login</div>
      </div>
    </div>
  );
};

export default SignUp;
