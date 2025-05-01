import React from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projects.json";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="project-detail">
        <h2>Project not found</h2>
        <Link to="/" className="back-btn">
          ← Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="detail-header">
        <h1>{project.title}</h1>
        <p className="subtitle">{project.subtitle}</p>
        <img
          src={project.image}
          alt={project.title}
          className="main-project-image"
        />
      </div>

      <div className="detail-body">
        <p className="description">{project.description}</p>

        <h3>Key Features</h3>
        <ul className="features">
          {project.features.map((feature, idx) => (
            <li key={idx}> {feature}</li>
          ))}
        </ul>

        {project.tech && (
          <>
            <h3>Tech Stack</h3>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <div key={index} className="tech-badge">
                  <img src={tech.logo} alt={tech.name} className="tech-logo" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {Array.isArray(project.screenshots) &&
          project.screenshots.length > 0 && (
            <div className="screenshots-section">
              <h3>Screenshots</h3>
              <div className="screenshot-gallery">
                {project.screenshots.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          )}

        <div className="project-links">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🌐 View Live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              💻 GitHub Repo
            </a>
          )}
          <Link to="/" className="back-btn">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
