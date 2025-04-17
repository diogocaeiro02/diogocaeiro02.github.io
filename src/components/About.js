import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          Hello! I'm Diogo Caeiro, a passionate web developer with experience in building modern and responsive web applications. 
          My journey in tech began with a strong foundation in computer science, and I've since grown my skills in full-stack development, 
          front-end frameworks like React, and back-end technologies like Node.js and Express.
        </p>
        <p>
          I'm constantly learning and growing in the tech field, exploring new tools and frameworks to create better user experiences.
          In addition to my technical skills, I enjoy collaborating with teams and working on exciting projects that make an impact.
        </p>
        <p>
          When I'm not coding, you can find me traveling, trying out new cuisines, or enjoying outdoor activities. I'm always looking for 
          new opportunities to challenge myself and grow both personally and professionally.
        </p>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Redux, React Router</li>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>Git, GitHub, Version Control</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
