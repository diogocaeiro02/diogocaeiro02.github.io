import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./TechStackSlider.css";

const techLogos = [
  {
    src: "./assets/techLogos/react.png",
    alt: "React",
    url: "https://reactjs.org",
  },
  {
    src: "/assets/techLogos/javascript.png",
    alt: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "/assets/techLogos/html.png",
    alt: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "/assets/techLogos/css.png",
    alt: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "/assets/techLogos/nodejs.png",
    alt: "Node.js",
    url: "https://nodejs.org",
  },
  {
    src: "/assets/techLogos/mongodb.png",
    alt: "MongoDB",
    url: "https://www.mongodb.com",
  },
  {
    src: "/assets/techLogos/git.png",
    alt: "Git",
    url: "https://git-scm.com",
  },
  {
    src: "/assets/techLogos/github.png",
    alt: "GitHub",
    url: "https://github.com",
  },
  {
    src: "/assets/techLogos/bootstrap.png",
    alt: "Bootstrap",
    url: "https://getbootstrap.com",
  },
  {
    src: "./assets/techLogos/python.png",
    alt: "Python",
    url: "https://www.python.org/",
  },
  {
    src: "./assets/techLogos/solidity.png",
    alt: "Solidity",
    url: " https://soliditylang.org/",
  },
  {
    src: "./assets/techLogos/hardhat.png",
    alt: "Hardhat",
    url: "https://hardhat.org/",
  },
  // Add more logos as needed
];

export default function TechStackSlider() {
  return (
    <section className="tech-slider-section">
      <h2 className="section-title">Tech Stack</h2>
      <p className="section-subtitle">Languages & tools I work with daily</p>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        slidesPerView={6}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={4000}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {techLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <div className="tech-logo-wrapper">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="tech-logo"
                  title={logo.alt}
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
