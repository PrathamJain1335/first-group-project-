import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="container">
      <div className="left-panel">
        <h2>Welcome to</h2>
        <div className="logo">🚀 Hello World</div>
        <p>
          Hello World is a platform that allows you to chat with an AI
          assistant, get help with coding, and explore various topics. Join us
        </p>
        <div className="footer-links">
          <a href="#">CREATOR HERE</a> | <a href="#">DESIGNER HERE</a>
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

