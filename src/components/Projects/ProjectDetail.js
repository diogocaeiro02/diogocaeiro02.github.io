import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../../data/projects.json";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <section className="project-detail">
      <div className="project-detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="project-detail-image"
        />
        <h2>{project.title}</h2>
        <p>{project.details}</p>
      </div>
    </section>
  );
}
