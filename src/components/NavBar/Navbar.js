import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          Diogo<span className="glow">.</span>
        </div>

        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>

        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bg1"></span>
          <span className="bg2"></span>
          <span className="bg3"></span>
        </button>
      </div>
    </header>
  );
}
