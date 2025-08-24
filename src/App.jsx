import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx"; // Import Signup page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add this route */}
      </Routes>
    </>
  );
}

export default App;