"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      video.classList.add("ready");
    };

    video.addEventListener("canplay", handleLoaded);
    return () => video.removeEventListener("canplay", handleLoaded);
  }, []);

  return (
    <section id="hero" className="hero" aria-label="Hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero-fallback.jpg"
      >
        <source src="/media/hero-video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <div className="hero-title">
          <span className="hero-title-line">
            <span className="line left" aria-hidden="true"></span>
            <span className="hero-title-text">Our Food</span>
            <span className="line right" aria-hidden="true"></span>
          </span>
          <div className="hero-title-main">
            <div className="title-top">Is the best thing</div>
            <div className="title-bottom">the world can offer</div>
          </div>
          <div className="reserve-button">
            <a href="#reserve" className="hero-reserve-button">
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
