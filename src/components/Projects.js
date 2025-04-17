import React from "react";
import "./Projects.css";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx}>{tech} </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
