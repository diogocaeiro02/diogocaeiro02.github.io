import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Hello, I'm <span className="highlight">Diogo Caeiro</span>
        </h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "Blockchain Developer",
            "Tech Enthusiast",
            "Problem Solver",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
      </div>
    </section>
  );
}
