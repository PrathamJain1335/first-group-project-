import React from "react";
import "./Login.css";
import HelloWorldLogo from "../assets/HelloWorld.png"; // your main logo

export default function Login() {
  return (
    <div className="container">
      <div className="left-panel">
        <img src={HelloWorldLogo} alt="HelloWorld Logo" className="logo" />
        <h2>Welcome to HelloWorld</h2>
        <p>
<<<<<<< HEAD
          Chat with AI, get coding help, and explore topics with a smart assistant.
=======
          Hello World is a platform that allows you to chat with an AI
          assistant, get help with coding, and explore various topics. Join us
>>>>>>> 46f9016fba54b35351745246b0b4244b5136e3e6
        </p>

        <div className="icons">
          <i className="fas fa-comments"></i>
          <i className="fas fa-robot"></i>
          <i className="fas fa-code"></i>
        </div>
      </div>

      <div className="right-panel">
        <h2>Create your account</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>E-mail Address</label>
          <input type="email" placeholder="Enter your mail" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <div className="checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By Signing Up, I agree with <a href="#">Terms & Conditions</a>
            </label>
          </div>
          <button type="submit" className="btn-primary">Sign Up</button>
          <button type="button" className="btn-secondary">Sign In</button>
        </form>
      </div>
    </div>
  );
}
