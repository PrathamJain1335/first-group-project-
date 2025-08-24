import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/HelloWorld.png" alt="Logo" height="40" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="logreg">
        <Link to="/login">Login</Link>
        <Link to="/signup">Register</Link> {/* Changed to /signup to match Login.jsx form */}
      </div>
    </nav>
  );
}

export default Navbar;