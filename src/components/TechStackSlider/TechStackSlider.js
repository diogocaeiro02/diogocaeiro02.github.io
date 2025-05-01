import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import techLogos from "../../data/techStack.json";

import "swiper/css";
import "swiper/css/free-mode";
import "./TechStackSlider.css";

export default function TechStackSlider() {
  return (
    <section className="tech-slider-section" data-aos="fade-up">
      {/* <h2 className="section-title">Tech Stack</h2>
      <p className="section-subtitle">Languages & tools I work with daily</p> */}

      <Swiper
        className="tech-swiper"
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={70}
        freeMode={true}
        loop={true}
        speed={2000}
        grabCursor={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {[...techLogos, ...techLogos].map((logo, index) => (
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
