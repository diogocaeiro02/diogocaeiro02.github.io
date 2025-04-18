import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Diogo Caeiro</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
