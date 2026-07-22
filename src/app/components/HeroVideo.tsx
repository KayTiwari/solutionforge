"use client";

import { useEffect, useRef } from "react";

const motionQuery = "(min-width: 1181px) and (prefers-reduced-motion: no-preference)";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const media = window.matchMedia(motionQuery);

    if (!video) return;

    const syncPlayback = () => {
      if (media.matches) {
        if (!video.src) {
          video.src = "/videos/blacksmith-forge-pexels.mp4";
          video.load();
        }

        void video.play().catch(() => {
          // The generated still remains visible if autoplay is unavailable.
        });
        return;
      }

      video.pause();
      video.removeAttribute("src");
      video.load();
    };

    syncPlayback();
    media.addEventListener("change", syncPlayback);

    return () => media.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/images/blacksmith-forge-hero-faceless.jpg"
      aria-hidden="true"
    />
  );
}
