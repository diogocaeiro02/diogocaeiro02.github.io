import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Diogo Caeiro – All rights reserved</p>
          <div className="footer-icons">
            <a
              href="https://github.com/diogocaeiro02"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/diogo-gm-caeiro"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:diogo.11.caeiro@gmail.com?subject=Let's%20Connect&body=Hi%20Diogo%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>

      {showScroll && (
        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
