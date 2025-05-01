import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some of my recent work</p>

      <Swiper
        className="projects-swiper modern-swiper"
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="project-slide">
            <div className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                {project.subtitle && (
                  <p className="project-subtitle">{project.subtitle}</p>
                )}
                <div className="project-tech-icons">
                  {project.tech?.slice(0, 4).map((tech, i) => (
                    <img
                      key={i}
                      src={tech.logo}
                      alt={tech.name}
                      title={tech.name}
                    />
                  ))}
                </div>
                <div className="project-buttons">
                  {project.link && (
                    <a
                      href={project.link}
                      className="btn btn-glow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🌐 Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 Code
                    </a>
                  )}
                  <Link to={`/projects/${project.id}`} className="btn btn-more">
                    📄 Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
