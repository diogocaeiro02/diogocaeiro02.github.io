import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section" data-aos="fade-up">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left" data-aos="fade-left">
          <h2>About Me</h2>
          <div className="about-actions">
            <a href="/assets/DiogoCaeiroCV.pdf" download className="btn">
              Download CV
            </a>
            <div className="social-links">
              <a
                href="https://github.com/diogocaeiro02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/diogo-gm-caeiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right" data-aos="fade-right">
          <p>
            I'm Aspiring to be a Blockchain Developer, with taste in Design, and
            Tech Enthusiast. I thrive on building innovative digital experiences
            that blend functionality and style. Constantly learning, constantly
            creating.
          </p>
        </div>
      </div>
    </section>
  );
}
