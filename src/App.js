import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <img src="/profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Your Name</h1>
        <h2>Frontend Developer</h2>
        <p>I build modern, responsive websites and apps using React.</p>
        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default App;
