import React from 'react';
import './Signup.css';

function Register() {
  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Welcome Back!</h2>
        <p>Provide your personal details to use all features</p>
        <button className="sign-in-btn">SIGN IN</button>
      </div>
      <div className="register-right">
        <h2>Register With</h2>
        <div className="social-icons">
          <span className="icon google">G</span>
          <span className="icon facebook">f</span>
          <span className="icon twitter">t</span>
          <span className="icon linkedin">in</span>
        </div>
        <div className="register-or">
          <span>OR</span>
        </div>
        <form className="register-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="sign-up-btn">SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
