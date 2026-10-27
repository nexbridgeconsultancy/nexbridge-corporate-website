"use client";

import { useEffect, useState } from "react";
import "./home-slideshow-v055.css";

const slides = [
  { label: "Singapore skyline", className: "nb-slide-singapore" },
  { label: "Modern office environment", className: "nb-slide-office" },
  { label: "Corporate architecture", className: "nb-slide-architecture" },
];

export default function HomeSlideshow() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="nb-home-slideshow" aria-hidden="true">
      {slides.map((slide, index) => (
        <div key={slide.className} className={`nb-home-slide ${slide.className}${index === active ? " is-active" : ""}`} />
      ))}
      <div className="nb-home-slide-overlay" />
    </div>
  );
}
