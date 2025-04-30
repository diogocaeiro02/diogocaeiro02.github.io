import React from "react";
import experienceData from "../../data/experience.json";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content" data-aos="flip-up">
              <span className="timeline-date">{job.date}</span>
              <h3>
                {job.title} – {job.company}
              </h3>
              <p className="location">{job.location}</p>
              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>• {task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
