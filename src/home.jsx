import React from "react";
import "./home.css";
import Waves from "./components/waves.jsx";
import Text from "./components/textanim.jsx";


function Navbar() {
    
  return (
    
    
    
    <>
    
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" height="40" /> {/* Place your logo image in public/ as logo.png */}
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/chat">Chat</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="logreg">
        <a href="/login">Login</a>
        <a href="/login">Register</a>
      </div>
    </nav>

    <Text />

    <div style={{ position: "relative", minHeight: "100vh" }}>
      
      <waves />
    </div>
    </>
    
  );
}

export default Navbar;



