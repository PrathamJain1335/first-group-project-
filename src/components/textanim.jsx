import React, { useState, useEffect } from "react";

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // Split by \n to handle line breaks in JSX
  const lines = displayedText.split("\n");

  return (
    <h1 style={{ fontSize: "5rem", fontWeight: "bold", whiteSpace: "pre-line" }}>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      <span style={{ borderRight: "2px solid black", marginLeft: "2px" }} />
    </h1>
  );
}

function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.leftSide}>
        <TypingText text={"Chatting made \n Easier ...."} />
      </div>
      <div style={styles.rightSide}>
        {/* Add other content here if needed */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "75vh",
    padding: "2rem",
    fontFamily: "'nunito', sans-serif",
  },
  leftSide: {
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rightSide: {
    flex: 1,
    // Add styles or content for the right side as you want
  },
};

export default HomePage;
