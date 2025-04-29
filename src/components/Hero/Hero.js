import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="/assets/profile.jpg"
          alt="Diogo Caeiro"
          className="hero-photo"
        />
        <h1>
          Hello, I'm <span>Diogo Caeiro</span>
        </h1>
        <p>Blockchain Developer | Designer | Tech Enthusiast</p>
        <a href="#projects" className="hero-btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
