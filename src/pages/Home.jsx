import React from "react";
import "./Home.css";
import Waves from "../components/waves.jsx";
import Text from "../components/textanim.jsx";

function Home() {
  const styles = {
    mainSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
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

  return (
    <>
      <div style={styles.mainSection}>
        <div style={styles.leftSide}>
          <Text />
        </div>
        <div style={styles.rightSide}>
          <img src="src/assets/HelloWorld.png" alt="4bytes" style={styles.image} />
        </div>
      </div>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <Waves />
      </div>
    </>
  );
}

export default Home;