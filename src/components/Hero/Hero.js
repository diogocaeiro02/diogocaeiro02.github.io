import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="photo-wrapper">
          <img
            src="/assets/profile.jpg"
            alt="Diogo Caeiro"
            className="hero-photo"
          />
          <span className="ripple ripple-1"></span>
          <span className="ripple ripple-2"></span>
          <span className="ripple ripple-3"></span>
        </div>
        <h1>
          Hello, I'm <span>Diogo Caeiro</span>
        </h1>
        <p>Aspire Blockchain Developer | Tech Enthusiast</p>
        <a href="#projects" className="hero-btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
