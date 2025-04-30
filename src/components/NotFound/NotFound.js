import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="notfound-section">
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/">← Back to Home</a>
    </section>
  );
}
