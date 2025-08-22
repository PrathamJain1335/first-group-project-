import React from "react";
import "./Home.css";
import Waves from "./components/waves.jsx";
import Text from "./components/textanim.jsx";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Logo" height="40" />
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

      {/* Main section with Text on left and Image on right */}
      <div style={styles.mainSection}>
        <div style={styles.leftSide}>
          <Text />
        </div>
        <div style={styles.rightSide}>
          <img src="/HelloWorld.png" alt="4bytes" style={styles.image} />
        </div>
      </div>

      {/* Waves background */}
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Waves />
      </div>
    </>
  );
}

const styles = {
  mainSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: "2rem",
    height: "calc(70vh - 0px)", /* Adjust if navbar height differs */
  },
  leftSide: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightSide: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "80vh",
    objectFit: "contain",
  },
};

export default Navbar;




